(function () {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {

    $scope.checkLunch = function () {
      var userInput = $scope.userInput;
      var amountDishes = countDishes(userInput);

      if (amountDishes == 0) {
        $scope.response = "Please enter data first!";
        $scope.font = "#b30000";
        $scope.bordercolor = "#b30000";
      } else if (amountDishes > 0 && amountDishes <= 3) {
        $scope.response = "Enjoy!";
        $scope.font = "#009933";
        $scope.bordercolor = "#009933";
      } else {
        $scope.response = "Too much!";
        $scope.font = "#009933";
        $scope.bordercolor = "#009933";
      }
    };

  };

  //This function count all dishes which occure in the given string.
  //It return the amount of found dishes.
  function countDishes(string) {
    //Handling case if user clicks immediatly button.
    if (string == undefined) {
      return 0;
    }

    //Processing string for counting.
    var dishes = string.split(",");
    for (var i = 0; i < dishes.length; i++) {
      dishes[i] = dishes[i].trim();
    }

    //Counting all dishes. Empty strings won't be considered.
    var counter = 0;
    for (let dish of dishes) {
      if (dish != "")
        counter++;
    }

    return counter;
  };

})();
