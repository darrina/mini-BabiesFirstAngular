angular.module('appModule', []);

var globalState = {};
angular.module('appModule')
    .controller('nameController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.data = { fullname: 'enter name' };
    }])
    .controller('friendController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
    }]);
