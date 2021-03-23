const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWiter");

const reader = new Reader();

const writer =  new Writer();

async function main(){
    let data = await reader.Read("./user.csv");

   let dataProcessor = Processor.Process(data);
   let users = new Table(dataProcessor);

   const html = await HtmlParser.Parse(users);
   
    writer.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html);

}

main();