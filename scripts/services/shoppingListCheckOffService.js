ShoppingListCheckOffService.$inject = ['$rootScope'];

export default function ShoppingListCheckOffService($rootScope) {

  var service = this;

  /*var buyListItems =
    [{ itemName: "bolacha maizena", itemQuantity: "10 pacotes" },
    { itemName: "presunto", itemQuantity: "300 gramas" },
    { itemName: "cafe", itemQuantity: "2 pacotes" },
    { itemName: "sorvete", itemQuantity: "1 pote" },
    { itemName: "pizza congelada", itemQuantity: "3 caixas" }];*/

  var buyListItems = [];
  var boughtListItems = [];
  var newItemContent = { itemName: "", itemQuantity: "" };

  service.getBuyList = function () {
    var databaseKeyRef = firebase.database().ref().child("buyListItems");
    databaseKeyRef.once('value', function() {
      snapshot.forEach(function (childSnapshot) {
        buyListItems.push(childSnapshot.val());
      })
    });
      return buyListItems;
  };

  service.getBoughtList = function () {
    return boughtListItems;
  };

  service.getNewItemContent = function () {
    return newItemContent;
  }

  service.changeItemFromBuyListToBoughtList = function (itemIndex) {
    var removedItem = buyListItems.splice(itemIndex, 1);
    boughtListItems.push(removedItem[0]);
  };

  service.deleteItemFromBuyList = function (itemIndex) {
    buyListItems.splice(itemIndex, 1);
  }

  service.addToBuyList = function (newItemName, newItemQuantity) {
    var newItem =
      {
        itemName: newItemName,
        itemQuantity: newItemQuantity
      };
    buyListItems.push(newItem);
  }

  service.returnSelectedItemToNewItemInput = function (itemIndex) {
    var editItem = buyListItems.splice(itemIndex, 1)[0];
    newItemContent = { itemName: editItem.itemName, itemQuantity: editItem.itemQuantity };
    $rootScope.$broadcast('refreshInputFields');
  }

  service.returnSelectedItemToBuyList = function (itemIndex) {
    var returnedItem = boughtListItems.splice(itemIndex, 1);
    buyListItems.push(returnedItem[0]);
  }

}