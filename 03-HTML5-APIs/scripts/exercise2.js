let dropzone = document.getElementById("dropzone");
let clearButton = document.getElementById("clear-button");

clearButton.onclick = function(){
    dropzone.value = "";
}

dropzone.ondrop = function(e){
    e.preventDefault(); 
  
    let reader = new FileReader(),
         text;

    reader.readAsText(e.dataTransfer.files[0]);

    reader.onload = function (e){
        text = e.target.result;
        dropzone.style.color = "#000";
        dropzone.value = text;
    }
};


