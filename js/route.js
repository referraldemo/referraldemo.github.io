referralApp.constant('__url', 'https://192.168.123.47:3200/referral/ng-api');

referralApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
            .when('/policy.html', {
                templateUrl: '/js/ReferralPolicy/referralpolicy.html',
                controller: 'RefPolicyCtrl'

            }).when('/points.html', {
        templateUrl: '/js/Points/points.html',
        controller: 'PointsCtrl'

    }).when('/index.html', {
        templateUrl: '/js/ReferralJobs/jobs.html',
        controller: 'RefJobCtrl'

    }).when('/error.html', {
        templateUrl: '/js/Error/error.html'

    }).when('/track-referrals.html', {
        templateUrl: '/js/TrackReferrals/track.html',
        controller: 'TrackRefCtrl'

    }).when('/leaderboard.html', {
        templateUrl: '/js/Leaderboard/leaderboard.html',
        controller: 'LeaderboardCtrl'

    }).when('/profile.html', {
        templateUrl: '/js/Profile/profile.html',
        controller: 'ProfileCtrl'

    }).when('/settings.html', {
        templateUrl: '/js/Settings/settings.html',
        controller: 'SettingsCtrl'

    }).otherwise({
        redirectTo: '/index.html'
    });

}]);

