/*

function tellMeAJoke(){
  
    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then(data => data.value.joke)
        .then(joke => {
           
            let place = document.getElementById("jokes");
            let para = document.createElement("p");
            let new_joke = document.createTextNode(joke);
            
            para.appendChild(new_joke); 
            place.insertBefore(para,place.childNodes[0]);
    });
  
}

*/

function getInfo(config){
    const xhr = new XMLHttpRequest();
    
    xhr.open(config.mode,config.url,true);
    xhr.send();
    
    return new Promise((resolve,rejected) => 
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                resolve(this.responseText);
            }else if(this.status == 404){
                rejected("error");
            }
        }
    );
}


var config = new Object();

config.mode = "get";
config.url = "http://api.icndb.com/jokes/random";

getInfo(config).then(resolve => console.log(resolve))
                .catch(error => console.log(error));


