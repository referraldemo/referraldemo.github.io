referralApp.controller('LoginCtrl', function () {

});

referralApp.controller('LogoutCtrl', function (Auth) {
    Auth.logout();
});

referralApp.controller('LoginLBCtrl', ['$scope', 'settingsFactory', 'Auth', '$mdDialog', '$mdToast',
    function ($scope, settingsFactory, Auth, $mdDialog, $mdToast) {

        settingsFactory.getSettings(function (res) {
            $scope.settings = res.data;
        });

        $scope.login = function (user) {

            if (!navigator.onLine) {

                $mdToast.show(
                    $mdToast.simple()
                    .textContent('No Internet Connected')
                    .hideDelay(3000)
                );

            } else {
                Auth.login(user, function (res) {
                    if (res.login) {
                        $mdDialog.cancel();
                    }
                    else {
                        if (res.errors.login)
                            $scope.registerErr = res.errors.login;
                        if (res.errors.page)
                            $scope.registerErr = res.errors.page;
                    }
                });
            }

        };

    }]);

referralApp.controller('RegisterLBCtrl', ['$scope', 'settingsFactory', function ($scope, settingsFactory) {

        settingsFactory.getSettings(function (res) {
            $scope.settings = res.data;
        });

    }]);