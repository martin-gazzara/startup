export default class EventEmitter{

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