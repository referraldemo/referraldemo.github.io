var referralApp = angular.module('referralApp', ['ngMaterial', 'ngRoute', 'ngMessages']);

referralApp.filter('unsafe', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    };
});

/** Writing Authentication for Referral App **/
referralApp.run(['$rootScope', 'Auth', '$mdDialog', '$location', function ($rootScope, Auth, $mdDialog, $location) {
        $rootScope.$on('$routeChangeStart', function () {
            //    Auth.checkLogin(function () {
            if (!Auth.isLoggedIn()) {
                $mdDialog.show({
                    controller: 'LoginCtrl',
                    templateUrl: '/js/Login/login.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: false,
                    fullscreen: true,
                    escapeToClose: false,
                    openFrom: 'bottom'
                });

            }
        });

        //});
    }]);


// converting json data requests into http form/encoded
referralApp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        var param = function (obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];
    }]);

// setting side bar height, hack required
referralApp.controller('RootCtrl', function ($scope, $http, __url) {
    $scope.height = window.innerHeight;

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then(function (reg) {
            reg.pushManager.subscribe({
                userVisibleOnly: true
            }).then(function (sub) {
			console.log( sub.endpointSections[endpointSections.length - 1] );
//                var endpointSections = sub.endpoint.split('/');
//                $http.post(__url + '/register/notification',
//                        {subscriptionId: endpointSections[endpointSections.length - 1]});
            });
        }).catch(function (err) {
        });
    }

});

