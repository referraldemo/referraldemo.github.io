'use strict';
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/index.html',
    
    '/bower_components/angular-material/angular-material.min.css',
    
    './bower_components/angular/angular.min.js',
    './bower_components/angular-route/angular-route.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-aria/angular-aria.min.js',
    './bower_components/angular-material/angular-material.min.js',
    './bower_components/angular-messages/angular-messages.js',
    
    'img/fb.svg',
    'img/ln.svg',
    'img/menu.svg',
    'img/tw.svg',
    'img/up.svg',
    'img/launcher.png',
    'img/referral.png',
    
    './js/app.js',
    './js/SideBar/sidebar.controller.js',
    './js/SideBar/sidebar.html',
    './js/ReferralPolicy/referralpolicy.controller.js',
    './js/ReferralPolicy/referralpolicy.html',
    './js/Points/points.controller.js',
    './js/Points/points.html',
    './js/ReferralJobs/jobs.controller.js',
    './js/ReferralJobs/jobs.html',
    './js/User/user.controller.js',
    './js/TrackReferrals/track.controller.js',
    './js/TrackReferrals/track.html',
    './js/Login/login.controller.js',
    './js/Login/login.html',
    './js/Settings/settings.controller.js',
    './js/Settings/settings.html',
    './js/Leaderboard/leaderboard.controller.js',
    './js/Leaderboard/leaderboard.html',
    './js/Profile/profile.controller.js',
    './js/Profile/profile.html',
  
    'https://fonts.googleapis.com/css?family=Roboto:100,300',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', function (event) {
    self.skipWaiting();
});
self.addEventListener('activate', function (event) {
});
self.addEventListener('push', function (event) {
    var title = 'Employee Referrals';
    event.waitUntil(
            self.registration.showNotification(title, {
                body: 'You have a Notification',
                icon: 'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t39.2081-0/p128x128/11404834_725860324187030_516755928_n.png',
                tag: 'my-tag'
            })
            );
});
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = '/index.html';
    event.waitUntil(
            clients.matchAll({
                type: 'window'
            })
            .then(function (windowClients) {
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    if (client.url === url && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
            );
});
self.addEventListener('install', function (event) {
    event.waitUntil(
            caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
            );
});
self.addEventListener('fetch', function (event) {
    if( event.request.url.match(/referraldemo.github.io/) == null ) return;
    event.respondWith(
            caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
            );
});
