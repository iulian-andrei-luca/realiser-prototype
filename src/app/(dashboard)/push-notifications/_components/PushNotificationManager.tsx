"use client";

import {
  sendNotificationAction,
  subscribeUserAction,
  unsubscribeUserAction,
} from "@/actions/pwa";
import { urlBase64ToUint8Array } from "@/utils/pwa";
import { useEffect, useState } from "react";

export const PushNotificationManager: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUserAction(serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUserAction();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotificationAction(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return (
      <div className="max-w-md mx-auto mt-10 rounded-xl border border-gray-200/20 bg-background/60 p-4 text-sm text-gray-500 shadow-sm">
        Push notifications are not supported in this browser.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="rounded-2xl border border-gray-200/20 bg-background/60 p-6 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight">
            Push Notifications
          </h3>
          {subscription ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
              ● Subscribed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
              ● Not subscribed
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Receive updates even when you are not on this page.
        </p>

        {subscription ? (
          <div className="mt-6 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Enter notification message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200/20 bg-background px-3 py-2 text-sm outline-none ring-0 transition focus:border-gray-300/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
              <button
                onClick={sendTestNotification}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 active:scale-[0.99]"
              >
                Send test
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                You are subscribed to push notifications.
              </p>
              <button
                onClick={unsubscribeFromPush}
                className="inline-flex items-center justify-center rounded-lg border border-red-600/40 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600/20 active:scale-[0.99]"
              >
                Unsubscribe
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              You are not subscribed to push notifications.
            </p>
            <button
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 active:scale-[0.99] sm:w-auto"
              onClick={subscribeToPush}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
