import { 
  createContext, 
  useState, 
  useContext, 
  ReactNode, 
  useCallback, 
  useEffect 
} from 'react';

// Define types for notifications
export type NotificationVariant = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  message: string;
  type: NotificationVariant;
  duration?: number; // Duration in milliseconds
}

interface NotificationsContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => string;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};

interface NotificationsProviderProps {
  children: ReactNode;
  defaultDuration?: number; // Default duration for notifications in milliseconds
}

export const NotificationsProvider = ({ 
  children, 
  defaultDuration = 5000 
}: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Add a new notification and return its ID
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newNotification = {
      ...notification,
      id,
      duration: notification.duration || defaultDuration
    };
    
    setNotifications(prev => [...prev, newNotification]);
    return id;
  }, [defaultDuration]);

  // Remove a notification by ID
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Clear all notifications
  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Auto-remove notifications after their duration
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    notifications.forEach(notification => {
      if (notification.duration) {
        const timeout = setTimeout(() => {
          removeNotification(notification.id);
        }, notification.duration);
        
        timeouts.push(timeout);
      }
    });
    
    // Clean up timeouts on unmount or when notifications change
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [notifications, removeNotification]);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

// Utility functions for common notification types
export const useNotificationActions = () => {
  const { addNotification } = useNotifications();
  
  return {
    notifySuccess: (message: string, duration?: number) => 
      addNotification({ message, type: 'success', duration }),
    
    notifyError: (message: string, duration?: number) => 
      addNotification({ message, type: 'error', duration }),
    
    notifyInfo: (message: string, duration?: number) => 
      addNotification({ message, type: 'info', duration }),
    
    notifyWarning: (message: string, duration?: number) => 
      addNotification({ message, type: 'warning', duration })
  };
};

export default NotificationsContext;
