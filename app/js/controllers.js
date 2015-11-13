'use strict';

/* Controllers */

var pdfApp = angular.module('pdfApp', []);

pdfApp.controller('DocumentListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('documents/documents.json').success(function(data) {
    $scope.documents = data;
  });

  $scope.orderProp = 'age';
}]);
