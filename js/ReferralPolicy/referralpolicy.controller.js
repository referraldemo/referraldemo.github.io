referralApp.factory('rewardsFactory',['$http','__url',function($http,__url){
    var rewardsFactory = {};
    
    rewardsFactory.getRewards = function(){
        // hacks
        return {"status":true,"html":"Referral Rewards are as per Company Policy"};
        // hacks
        
//        return $http.get(__url+'/rewards');
    };
    
    return rewardsFactory;
}]);

referralApp.controller('PolicyCtrl',['$scope','rewardsFactory',function($scope,rewardsFactory){
  
    rewardsFactory.getRewards().success(function(res){
        $scope.policy = res.html;
    });
   
}]);

referralApp.controller('RefPolicyCtrl',function(){
    
});

