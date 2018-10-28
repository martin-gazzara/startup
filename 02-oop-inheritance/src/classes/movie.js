import EventEmitter from "./eventEmitter.js"

export default class Movie extends EventEmitter {

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