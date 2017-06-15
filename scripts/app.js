import ShoppingListCheckOffService from './services/shoppingListCheckOffService'
import AlreadyBoughtController from './controllers/boughtController'
import ToBuyController from './controllers/buyController'
import NewItemController from './controllers/newItemController'

angular.module('ShoppingList', [])
    .controller('ToBuyController', ToBuyController)
    .controller('NewItemController', NewItemController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
