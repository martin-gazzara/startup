function search(){
    let value = document.getElementById("keyword").value;
    let url = "https://api.github.com/search/repositories?q=" + value;

    document.getElementById("results").innerHTML = "";

    fetch(url).then( response => response.json())
                .then(data => {
                    for(let i=0; i<10; i++){
                        let results = data.items;
                        let div = document.createElement("div");
                        /*Tittle of repository*/
                        let hd = document.createElement("h3");
                        let name = document.createTextNode(data.items[i].name);
                        hd.appendChild(name);
                        div.appendChild(hd);
                        /*Repository owner*/
                        let para = document.createElement("p");
                        para.appendChild(document.createTextNode("by " + data.items[i].owner.login));
                        div.appendChild(para);
                        /*Description*/
                        para = document.createElement("p");
                        para.appendChild(document.createTextNode(data.items[i].description));
                        div.appendChild(para);

                        /*Link to repository*/

                        let link = document.createElement("a");
                        link.appendChild(document.createTextNode("View repository"));
                        link.href = data.items[i].html_url;
                        div.appendChild(link);

                        /*Giving a class to <div>*/
                        div.className = "result";
                        
                        /*Inserting the div into DOM*/
                        document.getElementById("results").appendChild(div);
                    }
                    

                    
                    
                }
                );
    
}

document.getElementById("search-button").addEventListener("click",search);