const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

const reader = new Reader();

async function main(){
    let data = await reader.Read("./user.csv");

   let dataProcessor = Processor.Process(data);
   let users = new Table(dataProcessor);
   console.log(users.rows);

}

main();