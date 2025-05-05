import { useEffect } from "react";
import { useNotification } from "@/hooks/useNotification";

export default function NotificationBanner() {
  const { notifications, hideNotification } = useNotification();
  const currentNotification = notifications[0] || null;

  useEffect(() => {
    // Auto-hide notification after 5 seconds
    if (currentNotification) {
      const timer = setTimeout(() => {
        if (currentNotification.id) {
          hideNotification(currentNotification.id);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentNotification, hideNotification]);

  const getBgColorClass = (type: string) => {
    switch (type) {
      case "success":
        return "bg-ubuntu-orange";
      case "error":
        return "bg-destructive";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-ubuntu-orange";
    }
  };

  if (!currentNotification) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div 
        className={`notification-banner ${currentNotification ? 'show' : ''} ${getBgColorClass(currentNotification.type)} text-white p-4 shadow-md`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <p>{currentNotification.message}</p>
          <button 
            className="text-white hover:underline" 
            onClick={() => currentNotification.id && hideNotification(currentNotification.id)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
