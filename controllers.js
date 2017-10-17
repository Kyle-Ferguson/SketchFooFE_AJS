
var uploadApp = angular.module('uploadApp', ['ngRoute']);

uploadApp.config(function($routeProvider){

	$routeProvider
	.when("/", {
		templateUrl: "list.html"
	})
	.when("/loading", {
		templateUrl: "loading.php",
		controller: "loadCtrl"
	})
	.when("/result", {
		templateUrl: "result.html",
		controller: "resultCtrl"
	})
	.when("/AtoB", {
		templateUrl: "AtoB.html"
	})
	.when("/BtoA", {
		templateUrl: "BtoA.html"
	});

});


uploadApp.controller('loadCtrl', function($scope, $timeout){


	$timeout(function(){
		showPage();
	}, 3000);

	function showPage(){
		document.getElementById("loader").style.display = "none";
		document.getElementById("myDiv").style.display = "block";
	}

});

uploadApp.controller('AtoBCtrl', function($scope){
   

});

uploadApp.controller('resultCtrl', function($scope){
   

	window.fbAsyncInit = function() {
	  FB.init({
	    appId            : '121324228587428',
	    autoLogAppEvents : true,
	    xfbml            : true,
	    version          : 'v2.10'
	  });
	  FB.AppEvents.logPageView();
	};

	(function(d, s, id){
	   var js, fjs = d.getElementsByTagName(s)[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement(s); js.id = id;
	   js.src = "//connect.facebook.net/en_US/sdk.js";
	   fjs.parentNode.insertBefore(js, fjs);
	 }(document, 'script', 'facebook-jssdk'));

	$scope.share = function(){
		var img = document.getElementById('result').src;
		FB.ui({
		method: 'share',
		href: 'https://s3.amazonaws.com/aws-website-sketchfoo-ecw9b/index.html#!/',
		}, function(response){});
	}

});


