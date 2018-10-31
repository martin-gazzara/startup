import Movie from "./classes/movie.js"
import Logger from "./classes/logger.js"
import Actor from "./classes/actor.js"

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