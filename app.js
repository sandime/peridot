/**
 * Created by SHERRI on 3/24/15.
 */
//new
(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function($http){
      var store = this;
      store.products = [];
    }]);

    app.controller('ReviewController', function() {
      this.review = {};

      this.addReview = function(product) {
        product.reviews.push(this.review);

        this.review = {};
      };
    });
  })();