referralApp.controller('RefJobCtrl',function(){
    
});

referralApp.factory('jobsFactory',['$http','__url',function($http,__url){
    var jobsFactory = {};
    
    jobsFactory.getReferralJobs = function(__callback){
        // hacks
        __callback({
            "180116000001": {
                "title":"Area Marketing Manager",
                "rewards":"900/-",
                "loc":"Ahmedabad, Delhi/NCR(National Capital Region) ",
                "salary":"Rupees 90,000 - 3,00,000",
                "exp":"1-6"
            },
            "190116000001":{
                "title":"Assistant Accountant",
                "rewards":"",
                "loc":"Ahmedabad, Delhi/NCR(National Capital Region)",
                "salary":"Rupees 90,000 - 3,00,000",
                "exp":"2 - 4"
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

referralApp.controller('JobsCtrl',['$scope','jobsFactory',function($scope,jobsFactory){
    jobsFactory.getReferralJobs(function(res){
        $scope.jobs = res;
    });
}]);

referralApp.controller('DemoCtrl',function($scope,$mdBottomSheet){
    this.isOpen = false;
    this.selectedMode = 'md-fling';
    this.selectedDirection = 'up';

    $scope.showListBottomSheet = function($event){
        $mdBottomSheet.show({
            templateUrl: 'js/BottomSheet/bottomsheet.html',
         //   controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        });
    };
});

referralApp.controller('DropCVCtrl',function($scope){
    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: function($scope, $mdDialog){
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
            },
            templateUrl: 'dropcv.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        });
    };
});

