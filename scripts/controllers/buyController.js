angular.module('ShoppingList')
  .controller('ToBuyController', ToBuyController);

////////////////////////////////////////////////////////////////////////////
// Buy Controller  //
////////////////////////////////////////////////////////////////////////////
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyList();

  buyList.boughtButton = function (itemIndex) {
    ShoppingListCheckOffService.changeItemFromBuyListToBoughtList(itemIndex);
  };

  buyList.deleteButton = function (itemIndex) {
    ShoppingListCheckOffService.deleteItemFromBuyList(itemIndex);
  };

  buyList.editButton = function (itemIndex) {
    ShoppingListCheckOffService.returnSelectedItemToNewItemInput(itemIndex);
  };

}