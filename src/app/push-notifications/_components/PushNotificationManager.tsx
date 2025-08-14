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
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div>
      <h3>Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendTestNotification}>Send Test</button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button
            className="bg-red-100 text-gray-900 cursor-pointer p-4 rounded-md"
            onClick={subscribeToPush}
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
};
