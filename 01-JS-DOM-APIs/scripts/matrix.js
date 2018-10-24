let matrix =[[2,6,5]
            ,[1,5,2]
            ,[0,-7,4]
            ,[-3,9,8]];

document.getElementById("button").addEventListener("click",generate);


function generate(){
    document.getElementById("matrix").innerHTML = "";
    let table = document.createElement("table");
    table.className = "table";
    for (let i = 0; i<matrix.length; i++){
        let row = document.createElement("tr");
        for(let j = 0; j<matrix[i].length; j++){
            
            let data = document.createElement("td");
            data.appendChild(document.createTextNode(matrix[i][j]));
            row.appendChild(data);
        }
        table.appendChild(row);
    }
    document.getElementById("matrix").appendChild(table);
}