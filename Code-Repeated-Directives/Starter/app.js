var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
        
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Audry Doe',
            address: '545 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '22222'
        },
        {
            name: 'Stan Doe',
            address: '565 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
       compile: function(elem, attrs) {
           console.log('compiling...');
           console.log(elem);
           
           return {
               
               pre: function(scope, element, attrs) {
                   
                   console.log('Pre-linking...');
                   console.log(elements);
               },
               
               post: function(scope, element, attrs) {
                   
                   onsole.log('Post-linking...');
                   console.log(elements);
                   
               }
           }
       }
   }
});
