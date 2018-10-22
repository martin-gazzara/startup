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



