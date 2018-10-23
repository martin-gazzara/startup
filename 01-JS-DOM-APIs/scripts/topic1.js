function getInfo(config){
    const xhr = new XMLHttpRequest();
    
    xhr.open(config.mode,config.url,true);
    xhr.send();
    
    return new Promise((resolve,rejected) => 
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                resolve(this.getResponseHeader("type"));
            }else if (this.status == 404){
                rejected("An error occurred");
            }
        }
    );
}


var config = new Object();

config.mode = "get";
config.url = "http://api.icndb.com/jokes/random";

getInfo(config).then(resolve => console.log(resolve))
                .catch( error => {
                    
                    let sector = document.getElementById("section-container");
                
                    sector.style.backgroundColor = "#df0000";

                    sector.innerHTML = "<p>" + error +"</p>";

                });
