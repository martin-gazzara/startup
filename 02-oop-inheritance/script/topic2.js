class Movie {

    constructor(title, year, duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play(){
        console.log("Playing "+ this.title + ".");
    }

    pause(){
        console.log(this.title + " has been paused.");
    }

    resume(){
        console.log("You have resumed "+ this.title + ".");
    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class EventEmitter{

    constructor(){
        this.events = {};
    }

    on(eventName,callback){
        if (!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName){
        if (this.events[eventName]){
            this.events[eventName].forEach( fn => {
               fn.apply(); 
            });
        }
    }
    
    off(eventName,callback){
        if (this.events[eventName]){
            this.events[eventName].pop(callback);
        }
    }
    
}

let troy = new Movie("Troy", 2004, 160);

troy.play();

troy.pause();

troy.resume();