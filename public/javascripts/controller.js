var app=angular.module('controller',[]);

app.controller('albumCtrl',['$scope','httpService','ModalService',function($scope,httpService,ModalService) {

    $scope.searchName = "";
    $scope.lists = [];
    $scope.listAlbums = false;
    $scope.getAlbums = function() {
        $scope.listAlbums = true;
        var url = "api/albumlist?name="+$scope.searchName;
        httpService.getAlbumData(url).then(function (data) {
            var d = angular.fromJson(data)

            $scope.lists = d.results;
        });
    }
    $scope.showModal = false;
    $scope.collections = [];

    $scope.getCollections = function(id) {

        var url = "api/trackList?id="+id;
        httpService.getAlbumData(url).then(function (data) {

            $scope.collections = data.results;

        });
    }

    $scope.show = function(id) {
        console.log("first");
        var url = "api/trackList?id="+id;
        httpService.getAlbumData(url).then(function (data) {

            $scope.collections = data.results;
            console.log($scope.collections);

            ModalService.showModal({
                templateUrl: 'modal.html',
                controller: 'ModalController',
            }).then(function(modal) {
                console.log("third");

                $scope.collections = data.results;
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        });

    };


}]);




app.controller('ModalController', function($scope, close) {

    $scope.close = function (result) {
        close(result, 10000); // close, but give 500ms for bootstrap to animate
    };
});