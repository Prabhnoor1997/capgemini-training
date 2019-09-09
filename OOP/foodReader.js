/******************************************************************************
 * Execution    :   default node            terminal> node foodReader.js
 * 
 * Purpose      :   To read JSON file from food.json
 *            
 * 
 * @description
 * git push 
 * @file        :   foodReader.js
 * @overview    :   To read from food.json file and store the inventory object
 * @author      :   Prabhnoor Singh prabhnoor.parry@gmail.com
 * @version     :   1.1
 * @since       :   04-09-2019
*******************************************************************************/

class goods{
    constructor(name,weight,priceperkg){
        this.priceperkg=priceperkg;
        this.name=name;
        this.weight=weight;
    }
}



const fs = require('fs');
let rawdata = fs.readFileSync('./JSON/food.json');
var obj=new goods("cheese",62,100);
let inventory = JSON.parse(rawdata);
inventory.food.push(obj);

for(var i=0;i<inventory.length;i++){
    console.log("We have "+inventory.food[i].weight+"kg of "+ inventory.food[i].name +" selling at "+inventory.food[i].priceperkg+" Rupees per kg")
}
inventory.food[1].priceperkg=90;
var s=JSON.stringify(inventory);
console.log(s);
for(var i=0;i<inventory.food.length;i++){
    console.log("We have "+inventory.food[i].weight+"kg of "+ inventory.food[i].name +" selling at "+inventory.food[i].priceperkg+" Rupees per kg")
}

