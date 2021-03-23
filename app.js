const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

const reader = new Reader();

async function main(){
    let data = await reader.Read("./user.csv");

   let dataProcessor = Processor.Process(data);
   let users = new Table(dataProcessor);
   
   users.rows.push(["Carlos", "Formação HTML", "PHP", "32"]);

   const html = await HtmlParser.Parse(users);
   console.log(html);


}

main();