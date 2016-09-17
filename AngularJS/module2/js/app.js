(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  //First controller
  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buyCtrl = this;
    buyCtrl.buyList = ShoppingListCheckOffService.buyList;

    buyCtrl.buyItem = function(itemPos) {
      ShoppingListCheckOffService.buyItem(itemPos);
    };
  };

  //Second controller
  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtList = ShoppingListCheckOffService.boughtList;
  };

  //Service that handles the buy process of an item.
  function ShoppingListCheckOffService() {
    var service = this;

    //Initial "ToBuy" list.
    service.buyList = [
      {name: "milk",
      quantity: 10},
      {name: "cookies",
      quantity: 50},
      {name: "chips",
      quantity: 15},
      {name: "drinks",
      quantity: 25},
      {name: "wine",
      quantity: 5}
    ];
    //Initital empty "AlreadyBought" list.
    service.boughtList = [];

    //Function that will delete the given item from "ToBuy" list and add
    //it to "AlreadyBought" list.
    service.buyItem = function(itemPos) {
      var item = service.buyList[itemPos];
      service.buyList.splice(itemPos, 1);
      service.boughtList.push(item);
    }
  };

})();
