angular.module('appModule')
    .controller('nameController', 
    function ($rootScope, $scope, friendService) {
        $rootScope.data = { fullname: friendService.foo };
        friendService.customData = "Hello";
    })
    .controller('friendController', 
    ['$rootScope', '$scope', 'friendService', 'tickerService',
    function ($rootScope, $scope, friendService, tickerService) {
        $scope.friends = ['Jordyn', 'Ryan', 'Chelsey', friendService.foo];
        console.log(friendService.customData);
        
        $scope.data = {};
        $scope.getTickers = function() { 
            tickerService.getTickers()
                .success(function(data) {
                    $scope.data.tickers = data; 
                }).catch(function(error) {
                    $scope.data.tickers = [{ name: 'error', value: error.message }];
                });
        }
    }]);
