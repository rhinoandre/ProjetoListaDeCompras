NewItemController.$inject = ['ShoppingListCheckOffService', '$rootScope'];
export default function NewItemController(ShoppingListCheckOffService, $rootScope) {
  var newItem = this;

  refreshInputFields();

  newItem.addButton = function () {
    ShoppingListCheckOffService.addToBuyList(newItem.newItemName, newItem.newItemQuantity);
    clearNewItemView();
  };

  $rootScope.$on('refreshInputFields', function () {
    refreshInputFields();
  });

  function clearNewItemView() {
    newItem.newItemName = "";
    newItem.newItemQuantity = "";
  };

  function refreshInputFields() {
    newItem.newItemName = ShoppingListCheckOffService.getNewItemContent().itemName;
    newItem.newItemQuantity = ShoppingListCheckOffService.getNewItemContent().itemQuantity;
  };

};