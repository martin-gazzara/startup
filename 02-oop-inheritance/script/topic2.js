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

class Movie extends EventEmitter {

    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play(){
        super.emit("playing");
    }

    pause(){
        super.emit("paused");
    }

    resume(){
        super.emit("resumed");
    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

/* Movies */

let troy = new Movie("Troy", 2004, 160);
let LordRing = new Movie("The Lord of the Ring: The Fellowship of the Ring", 2001, 178);

/* Events */
troy.on("playing", () => console.log("Playing movie"));
troy.on("paused", () => console.log("The movie has been paused"));
troy.on("resumed", () => console.log("You have resumed the movie"));

LordRing.on("playing", () => console.log("Playing movie"));
LordRing.on("paused", () => console.log("The movie has been paused"));
LordRing.on("resumed", () => console.log("You have resumed the movie"));

/* Movies functions */

troy.play();
troy.pause();
troy.resume();
