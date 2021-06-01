function openPushNotification(event) {
    console.log("[Service Worker] Notification click Received.", event.notification.data);
    
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data));
  }
  
  self.addEventListener("notificationclick", openPushNotification);