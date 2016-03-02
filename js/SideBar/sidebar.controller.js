referralApp.controller('SideBarCtrl', function ($scope, $mdSidenav, $mdToast, Auth) {

    $scope.height = window.innerHeight;
    $scope.Auth = Auth;

    $scope.close = function () {
        $mdSidenav('left').close();
    };

    $scope.menuoptions = [
        {'icon': 'card_travel', 'title': 'Referral Jobs', 'href': 'index.html'},
        {'icon': 'track_changes', 'title': 'Track my Referrals', 'href': 'track-referrals.html'},
        {'icon': 'equalizer', 'title': 'Leaderboard', 'divider': 1, 'href': 'leaderboard.html'},
        {'icon': 'face', 'title': 'My Profile', 'href': 'profile.html'},
//        {'icon':'notifications_none','title':'Notifications'},
        {'icon': 'settings', 'title': 'Settings', 'divider': 1, 'href': 'settings.html'},
        {'icon': 'donut_small', 'title': 'Know about Points', 'href': 'points.html'},
        {'icon': 'description', 'title': 'Rewards Policy', 'href': 'policy.html'},
        {'icon': 'exit_to_app', 'title': 'Logout', 'href':'logout.html'}
    ];

    $scope.toggleSideNavbar = function () {
        $mdSidenav('left').toggle();
    }

    $scope.showNotifications = function () {
        $mdToast.show(
            $mdToast.simple()
            .textContent('No Notificaitons Yet!')
            .action('OK')
            .hideDelay(3000)
        );
    };


});