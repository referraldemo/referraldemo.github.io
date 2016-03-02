referralApp.factory('settingsFactory',['$http','__url',function($http,__url){
    
    var settingsFactory = {};
    var cache = {"data":{"logo":"https:\/\/st.referralrecruit.com\/ReferralImages\/Logos\/691203.gif?1439816793","program":"Mycompany Referral / IJP Program"}};
    
    settingsFactory.getSettings = function(__callback){
        return cache ? __callback(cache) : $http.get(__url+'/settings').success(__callback);
    };
    
    return settingsFactory;
        
}]);

referralApp.controller('SettingsCtrl',function(){
    
});