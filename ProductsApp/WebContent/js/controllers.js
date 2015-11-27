var productcatControllers = angular.module('productcatControllers', []);

productcatControllers.controller('productListCtrl', ['$scope', '$http',
  function ($scope, $http) {
  	
    $http.get('products/products.json').success(function(data) {
      $scope.products = data;
    });

    $scope.orderProp = 'age';
  }]);

productcatControllers.controller('productDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
  }]);