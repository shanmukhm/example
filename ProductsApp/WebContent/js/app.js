var productcatApp = angular.module('productApp', [
  'ngRoute',
  'productcatControllers'
]);

productcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'html/product-list.html',
        controller: 'productListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'html/product-detail.html',
        controller: 'productDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);