angular.module('appModule')
    .service('friendService', function() {
        this.internalObject = "Top Secret";
        this.foo = "bar";
    })
    .factory('friendFacService', [function() {
        var internalObject = "Top Secret";
        
        return { foo: "bar",
            getSafeObject: function() {
                return internalObject.toLowerCase();
            } };
    }])
    .service('tickerService', function($http) {
        this.getTickers = function() {
            return $http.get('/api/stocks');
        }
    });
