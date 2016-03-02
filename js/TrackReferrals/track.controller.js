referralApp.factory('trackReferralFactory', ['$http', '__url', function ($http, __url) {
        var trackReferralFactory = {};

        trackReferralFactory.getReferrals = function (__callback) {
            
            // hacks
            __callback({
	"candidates": {
		"060913000004": [{
			"appliedBy": "archit.rastogi@naukri.com",
			"appliedByName": "Archit Rastogi",
			"source": "up",
			"appliedDate": "28-Dec-2015",
			"status": "Declined",
			"activityDate": "28-Dec-2015"
		}, {
			"appliedBy": "vivek106@yopmail.com",
			"appliedByName": "Vivek Jain",
			"source": "tw",
			"appliedDate": "30-Dec-2015",
			"status": "No_Status",
			"activityDate": "30-Dec-2015"
		}, {
			"appliedBy": "tn109@yopmail.com",
			"appliedByName": "Tanya",
			"source": "up",
			"appliedDate": "02-Jan-2015",
			"status": "In_Process",
			"activityDate": "05-Jan-2016"
		}],
		"271015000007": [{
			"appliedBy": "blah@spam4.me",
			"appliedByName": "blah",
			"source": "up",
			"appliedDate": "29-Oct-2015",
			"status": "Offered",
			"activityDate": "29-Oct-2015"
		},{
			"appliedBy": "mayank1@mail.com",
			"appliedByName": "mayank",
			"source": "fb",
			"appliedDate": "16-Aug-2015",
			"status": "Offered",
			"activityDate": "25-Sep-2015"
		}]
	},
	"jobs": {
		"060913000004": {
			"CODE": "doc",
			"POST": "Assistant Accountant",
			"MINSAL": "80000",
			"MAXSAL": "175000",
			"JOBDESC": "Senior 3D Animator",
			"CURRENCY_SAL": "Rupees",
			"COMNAME": "n@ukri123",
			"TEMPLATE": "",
			"CAT": "h",
			"MINEXP": "2",
			"MAXEXP": "3",
			"CITY": "Agra",
			"CONTNAME": "Yashikaccccc",
			"CONTCITY": "",
			"farea": "24",
			"indtype": "30",
			"ROLE": "24.03",
			"UGCOURSE": "18,17",
			"PGCOURSE": "19,20",
			"PPGCOURSE": "5R7O",
			"CONTTEL": "",
			"EMAIL": "",
			"ADDATE": "2013-09-06 11:32:14.0",
			"FILE": "060913000004",
			"useasfilter": "u",
			"cityfield": "Uttar Pradesh - Agra",
			"PREFLOC": "",
			"PREFLOC_SEL": "",
			"KEYWORDS": "Senior 3D Animator, Quality Assurance \/ Testing, your",
			"REFNO": "",
			"TAG": "<A HREF = 'http:\/\/eapps.naukri.com\/eapps-pro\/epro_import.php?vjobid=060913000004&stat=y&vsource='><IMG SRC = http:\/\/www.naukri.com\/hotjobs\/apply.gif BORDER = 0> <\/A>",
			"company_id": "168613",
			"OVERSEAS": "n",
			"BANURL": "and",
			"SUBFUN": "24.02",
			"BULK": "n",
			"CONTDESIG": "",
			"UGSPEC": "109,114",
			"PGSPEC": "130,139",
			"PPGSPEC": "",
			"jpFlags": "1",
			"HIRING_FOR": "",
			"jpData": "",
			"SHOW_SAL": "n",
			"SALARY": "",
			"BANNER": "",
			"deleted": "Y"
		},
		"271015000007": {
			"CODE": "doc",
			"POST": "Accounts & Administration Executive",
			"MINSAL": "100000",
			"MAXSAL": "350000",
			"JOBDESC": "Accounts &amp; Administration Executive",
			"CURRENCY_SAL": "Rupees",
			"COMNAME": "N@ukri123",
			"TEMPLATE": "",
			"CAT": "h",
			"MINEXP": "2",
			"MAXEXP": "3",
			"CITY": "Ahmedabad",
			"CONTNAME": "",
			"CONTCITY": "",
			"farea": "1",
			"indtype": "2",
			"ROLE": "1.01",
			"UGCOURSE": "18",
			"PGCOURSE": "19",
			"PPGCOURSE": "999O",
			"CONTTEL": "",
			"EMAIL": "",
			"ADDATE": "2015-10-27 12:08:25.0",
			"FILE": "271015000007",
			"useasfilter": "u",
			"cityfield": "Gujarat - Ahmedabad",
			"PREFLOC": "",
			"PREFLOC_SEL": "",
			"KEYWORDS": "Adobe Photoshop",
			"REFNO": "",
			"TAG": "SM",
			"company_id": "168613",
			"OVERSEAS": "n",
			"BANURL": "and",
			"SUBFUN": "1",
			"BULK": "n",
			"CONTDESIG": "",
			"UGSPEC": "114",
			"PGSPEC": "130",
			"PPGSPEC": "",
			"jpFlags": "1",
			"HIRING_FOR": "",
			"jpData": "",
			"SHOW_SAL": "n",
			"SALARY": "",
			"BANNER": "http:\/\/www.naukri.com\/hotjobs\/images\/max1.gif",
			"deleted": "Y"
		}
	},
	"names": {
		"Declined": "Declined",
		"In_Process": "In Process",
		"Joined": "Joined",
		"No_Status": "Applied",
		"Offered": "Offered",
		"Rejected": "Rejected",
		"Shortlisted": "Shortlisted",
		"Duplicate": "Duplicate",
		"OnHold": "On Hold",
		"Future_Prospect": "Future Prospect"
	}
});
            // hacks
            
            /*
            $http.get(__url + '/track').success(function (res) {
                __callback(res.data);
            });
            */
        };

        return trackReferralFactory;
    }]);

referralApp.controller('TrackRefCtrl', function () {
});

referralApp.controller('TracksCtrl', ['trackReferralFactory', '$scope', function (trackReferralFactory, $scope) {
        trackReferralFactory.getReferrals(function (res) {
            $scope.data = res;
        });
    }]);