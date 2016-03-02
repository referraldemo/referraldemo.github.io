referralApp.controller('ProfileCtrl',['Auth','$scope',function(Auth,$scope){
       $scope.user = Auth.user;
}]);