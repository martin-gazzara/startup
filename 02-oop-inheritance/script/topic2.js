/* Classes */

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

//------------------------------------------------------

class Movie extends EventEmitter {

    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
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

    addCast(...actors){
        
        for (let i=0; i<actors.length; i++){
            if (actors[i].length>1){
                for(let j=0; j<actors[i].length; j++){
                    this.cast.push(actors[i][j]);
                }
            }else{
                this.cast.push(actors[i]);
            }
        }
    }
}

//------------------------------------------------------

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//------------------------------------------------------

class Logger{

    constructor(){}

    log(info){
        console.log(`The '${info}' has been emited`);
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

/* Adding cast */

const orlando = new Actor("Orlando Bloom",41);
const brad = new Actor("Brad Pitt",54);
const diane = new Actor("Diane Kruger",42);
const actors = [
    new Actor("Eric Bana",50),
    new Actor("Sean Bean",59),
    new Actor("Brian Cox",72)
];  

troy.addCast(orlando,diane,actors);

/* Using the logger */

var logger = new Logger();

troy.on("playing", () => logger.log("play"));

troy.play();

/* Mixin */

const m = {
    share: function(name){
        console.log(`${name} share ${this.title}`);
    },
    like: function(name){
        console.log(`${name} likes ${this.title}`)
    }
}

Object.assign(troy,m);

troy.share("Martin Gazzara");
troy.like("Pepe Gomez");