const fs = require('fs');
let rawdata = fs.readFileSync('./JSON/inventory.json');
let utility=require('./utility/utility');

let inventory = JSON.parse(rawdata);

var inventoryObj = new utility.Inventory(inventory);
console.log("Total Price of the entire Inventory is -- Rs." + inventoryObj.valueForEntireInventory());

inventArray = [];
for (var i = 0; i < inventoryObj.totalInventoryObj.length; i++) {
    inventArray.push(new utility.InventoryCombined(inventoryObj.totalInventoryObj[i].name, inventoryObj.valueOfParticularInventory(i)));
}
console.log(inventArray);
var inventArrayjson = JSON.stringify(inventArray, null, 2);
fs.writeFileSync('./JSON/outputjson.json', inventArrayjson);