referralApp.factory('Auth', ['$http', '__url', '$location', '$mdToast', function ($http, __url, $location, $mdToast) {

        var Auth = {};

        Auth.user = false;
        Auth.status = false;

        Auth.isLoggedIn = function () {
            return Auth.status;
        };

        Auth.logout = function () {
            Auth.user = false;
            Auth.status = false;
            document.cookie = "referral_session_2=;path=/";
            $location.path('/index.html');
        };


        Auth.checkLogin = function (__callback) {
            if (Auth.isLoggedIn())
                return __callback();
//            if (!navigator.onLine) {
//                $mdToast.show(
//                    $mdToast.simple()
//                    .textContent('No Internet Connected')
//                    .hideDelay(3000)
//                );
 //               return __callback();
            }
            
            /* 
            $http.get(__url + '/user').success(function (res) {
                Auth.status = res instanceof Object;
                Auth.user = res;
                __callback();
            });
            */
           
           // hacks
           Auth.user = {"name":"test","badge":{},"badgeInfo":{"name":"Novice","type":""},"empStatsSummary":{},"shares":"0","views":"0","points":"1800","profilePhoto":"http:\/\/ps02.infoedge.com\/PhotoService\/web\/naukriReferralRecruiter.php?id=s2","hasPhoto":false,"uploadForm":{"appId":199,"formKey":"F552f6f68ca598","extensions":["png","jpg","jpeg","gif"],"fileKey":"Uf319f237eaec734ecf2c37c6fe43046","targets":{"saveFileUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveFile.php","saveCloudUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveUrlFile.php","deleteUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/deleteFile.php"},"formDetails":{"F552f6f68ca598":{"formKey":"F552f6f68ca598","extensions":["png","jpg","jpeg","gif"],"max_file_size":"2097152","max_num_files":"1","fileKey":"Uf319f237eaec734ecf2c37c6fe43046","fileKeys":["Uf319f237eaec734ecf2c37c6fe43046"],"upload_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveFile.php","file_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveUrlFile.php","delete_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/deleteFile.php"}},"max_file_size":"2097152"},"pointsEnabled":1,"photoPoints":"200","totalApplies":{"Declined":"1","In_Process":"1","No_Status":"1","Offered":"161","OnHold":"1","total":165},"candidates":{"candidateData":[{"companyId":"168613","mobNo":null,"id":"43542","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":"Blah","CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43540","dupId":"43536","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":"Blah","CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43538","dupId":"43536","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43536","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":null,"CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":"9479856742","id":"43532","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":"{\"id\":\"2\",\"clientId\":\"168613\",\"label\":\"License Number\",\"fieldName\":\"licenseNumber\",\"value\":null,\"fie","CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null}],"jobs":["060913000004","271015000007"],"refData":{"269":{"name":"nukri123 HR Team","email":"nukri123@referralrecruit.com"}}},"email":"test2@spam4.me","personal":"mayank2103@gmail.com"};
           Auth.status = true;
           __callback();
           
           // hacks
           
        };

        Auth.login = function (user, __callback) {
            
            // hacks
            Auth.user = {"name":"test","badge":{},"badgeInfo":{"name":"Novice","type":""},"empStatsSummary":{},"shares":"0","views":"0","points":"1800","profilePhoto":"http:\/\/ps02.infoedge.com\/PhotoService\/web\/naukriReferralRecruiter.php?id=s2","hasPhoto":false,"uploadForm":{"appId":199,"formKey":"F552f6f68ca598","extensions":["png","jpg","jpeg","gif"],"fileKey":"Uf319f237eaec734ecf2c37c6fe43046","targets":{"saveFileUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveFile.php","saveCloudUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveUrlFile.php","deleteUrl":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/deleteFile.php"},"formDetails":{"F552f6f68ca598":{"formKey":"F552f6f68ca598","extensions":["png","jpg","jpeg","gif"],"max_file_size":"2097152","max_num_files":"1","fileKey":"Uf319f237eaec734ecf2c37c6fe43046","fileKeys":["Uf319f237eaec734ecf2c37c6fe43046"],"upload_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveFile.php","file_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/saveUrlFile.php","delete_url":"http:\/\/ps02.infoedge.com\/ncFileUploadService\/web\/frontend\/deleteFile.php"}},"max_file_size":"2097152"},"pointsEnabled":1,"photoPoints":"200","totalApplies":{"Declined":"1","In_Process":"1","No_Status":"1","Offered":"161","OnHold":"1","total":165},"candidates":{"candidateData":[{"companyId":"168613","mobNo":null,"id":"43542","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":"Blah","CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43540","dupId":"43536","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":"Blah","CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43538","dupId":"43536","phoneNo":null,"CUSTOM-EMPCODE":"1234","CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":null,"id":"43536","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":null,"CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null},{"companyId":"168613","mobNo":"9479856742","id":"43532","dupId":"0","phoneNo":null,"CUSTOM-EMPCODE":"{\"id\":\"2\",\"clientId\":\"168613\",\"label\":\"License Number\",\"fieldName\":\"licenseNumber\",\"value\":null,\"fie","CUSTOM-DEPTNAME":null,"CUSTOM-GENDER":null,"CUSTOM-REFERRALSRATE":null,"CUSTOM-KNOWREFEREE":null,"CUSTOM-RELATIONSHIPWITHEMP":null,"CUSTOM-REGION":null,"CUSTOM-CURRENTROLE":null}],"jobs":["060913000004","271015000007"],"refData":{"269":{"name":"nukri123 HR Team","email":"nukri123@referralrecruit.com"}}},"email":"test2@spam4.me","personal":"mayank2103@gmail.com"};
            Auth.status = true;
            __callback({
                    "errors":[],
                    "login":true,
                    "url":"",
                    "encrypt":"some-encrypted-kachra-not-in-use",
                    "token":"some-login-token"
                });
            //hacks
            
            /*
            $http({
                url: __url + '/login?_AJAX=1',
                method: 'POST',
                data: user,
                withCredentials: true
            }).then(function (res) {
                document.cookie = "referral_session_2=" + res.data._token;
                __callback(res.data);
                $location.path('/index.html');
            });
            */
        };

        return Auth;
    }]);
