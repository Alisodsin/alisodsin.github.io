// sw.js

// Install event: Caching essential files
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    // You could add files to cache here if needed
});

// Activate event: Cleanup old caches if necessary
self.addEventListener('activate', event => {
    console.log('Service Worker activated!');
    // Logic to clean up old caches can go here
});

// Listen for Push or Notification events (if using push notifications)
self.addEventListener('notificationclick', event => {
    event.notification.close(); // Close notification on click

    // Optionally handle the notification click
    event.waitUntil(
        clients.openWindow('https://alisodsin.github.io/') // Adjust URL as needed
    );
});

// Fetch event: Caching network requests (optional, for offline support)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Return cached response or fetch from network
            return response || fetch(event.request);
        })
    );
});