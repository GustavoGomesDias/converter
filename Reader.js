const fs = require("fs");
const util = require('util');

class Reader {
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){
        try {
            return await this.reader(filepath, "utf8");
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = Reader;

/* 
util => lib com várias coias últeis 😉

let newFunction = util.promisify(FunctionOld) => tranformar a FuncOld e uma nova função com promise
*/