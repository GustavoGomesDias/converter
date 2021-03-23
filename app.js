const Reader = require("./Reader");
const Processor = require("./Processor");

const reader = new Reader();



async function main(){
    let data = await reader.Read("./user.csv");

   var dataProcessor = Processor.Process(data);

}

main();