import React, { createContext, useState, useCallback, ReactNode } from "react";

export type NotificationType = "success" | "error" | "info" | "warning";

export interface Notification {
  message: string;
  type: NotificationType;
  id?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  showNotification: (notification: Notification) => void;
  hideNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  showNotification: () => {},
  hideNotification: () => {},
  clearNotifications: () => {},
});

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback((notification: Notification) => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications((prev) => [
      ...prev, 
      { ...notification, id }
    ]);
  }, []);

  const hideNotification = useCallback((id: string) => {
    setNotifications((prev) => 
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showNotification,
        hideNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
