import { InstallPrompt } from "./_components/InstallPrompt";
import { PushNotificationManager } from "./_components/PushNotificationManager";

const PwaPage: React.FC = () => {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
};

export default PwaPage;
