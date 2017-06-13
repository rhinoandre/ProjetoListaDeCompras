angular.module('ShoppingList')
.controller('AlreadyBoughtController', AlreadyBoughtController);

////////////////////////////////////////////////////////////////////////////
// AlreadyBought Controller  //
////////////////////////////////////////////////////////////////////////////
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtList();

    boughtList.returnToBuyListButton = function (itemIndex) {
      ShoppingListCheckOffService.returnSelectedItemToBuyList(itemIndex);
    };

  }