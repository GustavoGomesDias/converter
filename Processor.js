class Processor {
    static Process(data){
        // Me retorna um array separado por "enter"
        let a = data.split("\r\n");
        var rows = [];

        // Array de arrays que contém o conteúdo de cada linha separado por "," 
        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        console.log(rows);
    }
}

module.exports = Processor;

// \r também é usado para quebrar linhas no linux