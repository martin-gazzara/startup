import React from 'react';
import Movie from './Movie';
import "./MovieList.css";
import { createStore } from "redux"

function add(name){
    return{
        type:"ADD_MOVIE",
        movie:name
    }
}

function edit(index,newInput){
    return{
        type:"EDIT_MOVIE",
        index:index,
        name:newInput
    }
}

function remove(index){
    return{
        type:"REMOVE_MOVIE",
        index:index
    }
}

const reducer = (prevState,action) => {
    switch (action.type){
        case "ADD_MOVIE":
            return {movieList:prevState.movieList.concat(action.movie)};
        case "EDIT_MOVIE":
            const newList = prevState.movieList;
            newList[action.index] = action.name;
            return {movieList:newList};
        case "REMOVE_MOVIE":
            return {movieList:prevState.movieList.filter( movie => movie !== prevState.movieList[action.index])};
        default:
            return prevState;
    }
}

const store = createStore(reducer,{editMode:false,movieList: []});

class MovieList extends React.Component{

    constructor(){
        super();
        this.state = {
            movieList: []
        }

        store.subscribe( () => this.setState({movieList:store.getState().movieList}))
    }

  
    addToMovieList(){
        const input = document.getElementById("input");
        const newMovie = input.value;
        if (newMovie !== ""){
            store.dispatch(add(newMovie));
            input.value = "";
        }
    }

    removeMovie(e){
        const index = e.target.id;
        store.dispatch(remove(index));
    }

    changeMovieData(e){
        const index = e.target.id;
        const newInput = prompt("Insert the new name and press OK to change it, o press cancel.");
        if (newInput != null){
            store.dispatch(edit(index,newInput));
        }
    }

    render(){
        return (
            <div className="MovieList">
                <h3>Insert you favourite movie:</h3>
                <input id="input" type="text" placeholder="Insert movie"/>
                <button onClick={this.addToMovieList}>Add</button>
                {this.state.movieList.map( (movie,i) => <Movie  edit={this.changeMovieData} remove={this.removeMovie} name={movie} Key={i}/>)}
                
            </div>
        )
    }
}

export default MovieList;
