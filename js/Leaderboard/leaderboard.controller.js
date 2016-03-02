referralApp.controller('LeaderboardCtrl',['$scope','leaderboardFactory', function($scope,leaderboardFactory){
  
    leaderboardFactory.getLeaderboard(function(res){
        $scope.data = res;
    });
        
}]);


referralApp.factory('leaderboardFactory',['$http','__url',function($http,__url){
   
    var leaderboardFactory = {};
    leaderboardFactory.cache = false;
    
    leaderboardFactory.getLeaderboard = function(__callback){
        if(leaderboardFactory.cache) return __callback(leaderboardFactory.cache);
        
        res = {"data":[{"rank":1,"Name":"Sudhanshoo","email":"sudhanshoo.mishra@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"1,719"},{"rank":2,"Name":"ankit c","email":"ankit.c@99acres.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"1,700"},{"rank":3,"Name":"mohd rihan ansari","email":"mohd.ansari@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"1,511"},{"rank":4,"Name":"heena k","email":"heena.k@99acres.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"1,300"},{"rank":5,"Name":"Pranita","email":"pranita.mathur@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"1,235"},{"rank":6,"Name":"Tushar Singhal","email":"tushar.singhal@jeevansathi.com","currentBadge":{"badge":"Populist","badgeClass":"intermediate"},"totalPoints":"1,145"},{"rank":7,"Name":"Debrup Bhattacharya","email":"debrup.bhattacharya@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"1,055"},{"rank":8,"Name":"Ankit Bansal","email":"ankit.b@shiksha.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"1,000"},{"rank":9,"Name":"Harish Sharma","email":"harish.sharma@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"900"},{"rank":10,"Name":"Malkeet Singh","email":"malkeet.singh@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"865"},{"rank":11,"Name":"pooja joshi","email":"pooja.joshi@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"810"},{"rank":12,"Name":"abhisha bankawat","email":"abhisha.bankawat@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"765"},{"rank":13,"Name":"anirudh sharma","email":"anirudh.sharma@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"765"},{"rank":14,"Name":"avantika a","email":"avantika.a@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"730"},{"rank":15,"Name":"Rohan Deshpande","email":"rohan.deshpande@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"720"},{"rank":16,"Name":"Mudit Pandey","email":"mudit.pandey@shiksha.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"700"},{"rank":17,"Name":"kanika tanwar","email":"kanika.tanwar@jeevansathi.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"700"},{"rank":18,"Name":"V.Kalyan Kumar","email":"v.kalyan@99acres.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"690"},{"rank":19,"Name":"Pratibha","email":"pratibha.kumari@jeevansathi.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"651"},{"rank":20,"Name":"Asif","email":"asif.patel@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"615"},{"rank":21,"Name":"Farmina S Bengoly","email":"farmina.bengoly@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"600"},{"rank":22,"Name":"RAVURI SAI VENKATA VISWANATH","email":"s.ravuri@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"600"},{"rank":23,"Name":"Divya","email":"divya.chaturvedi@naukri.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"600"},{"rank":24,"Name":"manoj choudhary","email":"manoj.choudhary@99acres.com","currentBadge":{"badge":"Connector","badgeClass":""},"totalPoints":"600"},{"rank":25,"Name":"abhimanyu","email":"abhimanyu.sharma@99acres.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"505"},{"rank":26,"Name":"Deepak Sharma","email":"deepak.sharma@shiksha.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"500"},{"rank":27,"Name":"SUBRATA PAL","email":"subrata.pal@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"455"},{"rank":28,"Name":"Kushagra Bhatnagar","email":"kushagra.bhatnagar@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"450"},{"rank":29,"Name":"Parul Pathak","email":"parul.pathak@naukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"401"},{"rank":30,"Name":"merwyn thomas","email":"merwyn.thomas@firstnaukri.com","currentBadge":{"badge":"Novice","badgeClass":""},"totalPoints":"400"}],"pagination":[{"html":"<section class=\"jobListFooter\"> <div class=\"pagination\"> <input type=\"hidden\" id=\"currentPage\" value=\"1\" \/>      <span>1<\/span>    <a href=\"javascript:void(0)\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,2,1);\">2<\/a>    <a href=\"javascript:void(0)\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,3,1);\">3<\/a>    <a href=\"javascript:void(0)\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,4,1);\">4<\/a>    <a href=\"javascript:void(0)\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,5,1);\">5<\/a>    ...    <a href=\"javascript:void(0)\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,8,1);\" >8<\/a>    <a href=\"javascript:void(0)\" title=\"next\" onclick=\"ldrBrdPageEvts.getNxtPage(ldrUrl,2,1);\">next &gt;&gt;<\/a>  <\/div> <\/section>"}]};
        // hacks
        __callback(res.data);
        // hacks
        /*
        $http.get(__url.replace('/referral/ng-api','')+'/leaderboard/ajax').success(function(res){
            __callback(res.data);
        });
        */
    }
        
        
    return leaderboardFactory;
}]);