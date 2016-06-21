/**
 * Created by sravan on 20/06/16.
 */
var app=angular.module('services',[]);

app.factory("httpService",['$http','$q',function($http,$q) {
    var factoryObj = {};

    factoryObj.getConfigData = function () {
        var def = $q.defer();

        var url = "/config/default";
        $http.get(url).success(function (data) {
            data = data.content;
            def.resolve(data);
        }).error(function (data) {
            def.reject("failed get data");
        });
        return def.promise;
    };

    factoryObj.getAlbumData = function (url) {
        var def = $q.defer();
        $http.get(url).success(function (data) {
            data = data;
            def.resolve(data);
        }).error(function (data) {
            def.reject("failed get data");
        });
        return def.promise;
    };

    return factoryObj
}]);