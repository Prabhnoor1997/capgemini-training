
class Stocks {
    constructor() {
        this.stockNames = [];
        this.numOfShares = [];
        this.sharePrice = [];
        this.noOfStocks=0;
    }

    addToStocks(name, shares, price) {
        this.stockNames.push(name);
        this.numOfShares.push(shares);
        this.sharePrice.push(price);
        this.noOfShares++;
    }
    printStocks() {
        console.log(this.stockNames, this.numOfShares, this.sharePrice);
    }
   
}

class Portfolio{
    constructor(){
        this.shareHolder=[];
    }

    addStock(index,stock){
        this.shareHolder[index]=stock;
    }
    calculateEachStockValue(index) {
        var total = 0;
        for (var i = 0; i < this.shareHolder[index].noOfStokcs; i++) {
            console.log("The total worth of " + this.shareHolder[index].stockNames[i] + " is " + this.shareHolder[index].numOfShares[i] * this.shareHolder[index].sharePrice[i]);
        }

    }
    calculateNetWorth(index) {
        var sum = 0;
        for (var i = 0; i < this.shareHolder[index].noOfStokcs; i++) {
            sum = sum + this.shareHolder[index].numOfShares[i] * this.shareHolder[index].sharePrice[i];
        }
        return sum;
    }


}

function main() {
    let reader = require('readline-sync');
    var numOfStocks = reader.question("Enter the no. of stocks ");
    var stockObj = new Stocks();

    for (var i = 0; i < numOfStocks; i++) {
        stockObj.addToStocks(reader.question("Enter the stock name "), reader.question("Enter the number share "), reader.question("Enter the share rate "));
    }

    stockObj.printStocks();
    
    var portfolioObj= new Portfolio();
    portfolioObj.addStock(0,stockObj);
    portfolioObj.calculateEachStockValue(0);

}

main();