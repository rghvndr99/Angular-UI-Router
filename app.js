var module=angular.module('routerApp',['ui.router']);

//setting routing

module.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home',{
        url:'/home',
        templateUrl:'home.html'
        })
         .state('home.list',{
            url:'/list',
            templateUrl:'homelist.html',
            controller:function($scope){
                $scope.list=['raghav','kumar','prashad']
            }
          })
         .state('home.paragraph',{
            url:'/paragraph',
            template:'<p>Paraghaph text is displayed</p>'        
          })
       .state('about',{
        url:'/aboutus',
        views:{
            '':{
                templateUrl:'about.html'
            },
            'columnOne@about':{
                template:'<p> Detail of column1 goues here'
            },
            'columnTwo@about':{
                templateUrl:'tabledata.html',
                controller:'tabledataCtrl'
            }
        }
       })
});

module.controller('tabledataCtrl',['$scope',function($scope){
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
}]);