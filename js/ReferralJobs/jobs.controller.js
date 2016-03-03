referralApp.controller('RefJobCtrl', function () {

});

referralApp.factory('jobsFactory', ['$http', '__url', function ($http, __url) {
        var jobsFactory = {};

        jobsFactory.getReferralJobs = function (__callback) {
            // hacks
            __callback({
                "180116000001": {
                    "title": "Area Marketing Manager",
                    "rewards": "900/-",
                    "loc": "Ahmedabad, Delhi/NCR(National Capital Region) ",
                    "salary": "Rupees 90,000 - 3,00,000",
                    "exp": "1-6",
                    "desc": "Work on evolution of requirements along with business and product <br>Work and get exposure on varied technologies including PHP,Java, MySQL, NOSQL, Mongo, MemCached, Lucene, Symfony, Nginx, Sphinx,MVC Frameworks and other upcoming internet technologies<br>Responsible for coding, documenting and maintaining web applications in a fast paced project environment<br>Responsible for high end product development<br>Continuously upgrading and building new technology skills and methodologies<br>Innovate, research, propose and discuss your design with your peers."
                },
                "190116000001": {
                    "title": "Assistant Accountant",
                    "rewards": "",
                    "loc": "Ahmedabad, Delhi/NCR(National Capital Region)",
                    "salary": "Rupees 90,000 - 3,00,000",
                    "exp": "2 - 4",
                    "desc": "1)	Selling online fresher hiring recruitment solutions (End to End Hiring Solutions) by assessing their business requirements.<br>2)	To identify, develop, support service and grow business in listed account in the region<br>3)	Make a strong and positive impression on existing and prospective clients, foster positive relationships at all levels, particularly senior management levels.<br>4)	Account mining & network with multiple stakeholders with prospect organization, build trust with key stakeholders<br>5)	Drive revenue by prospecting and building pipeline while building strong personal relationships with potential clients in the key account category<br>6)	Understand our clients business challenges and appropriately align our solutions to help achieve their goals. <br>7)	Meet with clients and potential prospects in the region on a regular basis to build and nurture the relationship as well as look out for future opportunities.<br>8)	Accountable for direct sales targets, consistent pipeline growth, renewals, upgrades & sales quota management<br>9)	To maintain and grow revenue in listed accounts (Farming Accounts) in the region.<br>10)	Ensure penetration of new products and renewal/upgrade in each account set <br>11)	Maintain and update enterprise account dockets and undertake regular CRM initiatives to keep the listed accounts warmed<br>12)	Liaising with the assigned Accounts, Account Mapping, and Strategic planning on each account towards revenue & transaction growth. <br>13)	Negotiation, freezing on commercials and closing of deals with necessary documentations.<br>14)	Client Servicing & ensure usage of inventories subscribed.<br>15)	Develop and execute on a strategic plan for the territory and create reliable forecasts<br>16)	Work to develop and circulate the set of best practices that will be the foundation of this growing team<br>17)	Listen to the needs of the market and share with Product and Marketing team."
                }
            });
            // hacks
            /*
             $http.get(__url+'/jobs').success(function(res){
             __callback(res.data);
             });
             */
        };

        return jobsFactory;

    }]);

referralApp.controller('JobsCtrl', ['$scope', 'jobsFactory', '$mdDialog', function ($scope, jobsFactory, $mdDialog) {
        jobsFactory.getReferralJobs(function (res) {
            $scope.jobs = res;
        });


        $scope.showJobDesc = function (jobId,ev) {
                
                jobsFactory.selectedJob = jobId;
            
                $mdDialog.show({
                    controller: function ($scope, $mdDialog) {
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                },
                templateUrl: '/js/ReferralJobs/jobdesc.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true
            });
        };
    }]);

referralApp.controller('DemoCtrl', function ($scope, $mdBottomSheet) {
    this.isOpen = false;
    this.selectedMode = 'md-fling';
    this.selectedDirection = 'up';

    $scope.showListBottomSheet = function ($event) {
        $mdBottomSheet.show({
            templateUrl: 'js/BottomSheet/bottomsheet.html',
            //   controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        });
    };
});

referralApp.controller('DropCVCtrl', function ($scope, $mdDialog) {
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
            },
            templateUrl: '/js/ReferralJobs/dropcv.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        });
    };
});

referralApp.controller('JobDescCtrl',['$scope', 'jobsFactory', function ($scope, jobsFactory) {
    jobsFactory.getReferralJobs(function (res) {
        $scope.jobs = res;
    });
    $scope.jobId = jobsFactory.selectedJob;
}]);

referralApp.controller('DropCVMeCtrl', function ($scope) {
    $scope.states = [
        'General Drop CV',
        'Tech Department',
        'Sales Department',
        'Finance Department',
        'HR Department'
    ];
});



