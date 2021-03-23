 class Table {
    constructor(arr){
        this.header = arr[0];
        
        // shift => remove sempre o primeiro elemento de um array
        arr.shift();
        
        this.rows = arr;
    }

    // método do tipo gét, que só precisa ser chamado. Como se fosse um atributo
    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }

 }

 module.exports = Table;