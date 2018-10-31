var myStorage = window.localStorage;

let openRequest,
    db,
    tx,
    store,
    index;

// Puts the buttons to the listening of the clicks 
document.getElementById("save-button").addEventListener("click",saveData);
document.getElementById("clear-button").addEventListener("click",eraseData);

// Function to save the data from textarea
function saveData(){
    
    // Getting the value of text area
    let data = document.getElementById("textarea");

    // Saving the data into local storage
    myStorage.setItem("Message",data.value);
    
    // Saving the data into the client's DB
    openRequest =  window.indexedDB.open("MessagesDB",1);

        // Creates the DB or updates it    
        openRequest.onupgradeneeded = function (event){
            db = openRequest.result;
            store = db.createObjectStore("Data",{autoIncrement:true});
            index = store.createIndex("Content","Content",{unique:false});

        };

        // In case success, returns the DB
        openRequest.onsuccess = function (event){
            db = openRequest.result;
            tx = db.transaction("Data","readwrite");
            store = tx.objectStore("Data");
            index = store.index("Content");

            db.onerror = function (event){
                console.log("Error: "+ event.target.errorCode);
            };

            store.put({
                Content: data.value
            });

            // This function shows all the content saved in the DB
            let m1 = store.getAll();

            m1.onsuccess = function (event){
                console.log(this.result);
            }

            // Closes the DB
            tx.oncomplete = function (){
                db.close();
                alert("The text has been saved into DB")
            }
        };

        // In case of a error
        openRequest.onerror = function (event){
            console.log("An error occurred: " + event.target.errorCode);
        }
}

// Function to erase the data saved
function eraseData(){

    // Erasing the data into local storage
    myStorage.clear();

    // Erasing the data into client's DB

    // Request to open the DB
    openRequest =  window.indexedDB.open("MessagesDB",1);


    //In case of an error
    openRequest.onerror = function (event){
        console.log("An error ocurred trying to open the DB: "+ event.target.errorCode);
    }

    //In case of success
    openRequest.onsuccess = function (event){

        db = openRequest.result;

        tx = db.transaction("Data","readwrite");

        store = tx.objectStore("Data");

        let clearRequest = store.clear();

        clearRequest.onsuccess = function(){
            alert("The DB is cleared");
        }

        clearRequest.onerror = function(){
            alert("An error occurred. The DB couldn't be cleared");
        }

    }

}

