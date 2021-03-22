const Reader = require("./Reader");

const reader = new Reader();



async function main(){
    let data = await reader.Read("./user.csv");

    console.log(data);

}

main();