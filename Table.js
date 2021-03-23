 class Table {
    constructor(arr){
        this.header = arr[0];
        
        // shift => remove sempre o primeiro elemento de um array
        arr.shift();
        
        this.rows = arr;
    }

 }

 module.exports = Table;