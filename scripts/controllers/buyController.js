ToBuyController.$inject = ['ShoppingListCheckOffService'];
export default function ToBuyController(ShoppingListCheckOffService) {

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

};