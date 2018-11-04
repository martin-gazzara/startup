import React from 'react';
import Movie from './Movie';
import "./MovieList.css";

class MovieList extends React.Component{

    constructor(){
        super();
        this.state = {
            newInput:"",
            movieList: []
        }

        this.HandleInput = this.HandleInput.bind(this);
        this.AddMovie = this.AddMovie.bind(this);
    }

    HandleInput(e){
        this.setState({newInput:e.target.value})
        console.log(this.state.newInput);
    }

    AddMovie(){
        let movie = this.state.newInput;
        if (movie !== ""){
            let newMovieList = this.state.movieList;
            newMovieList.push(movie);
            this.setState({
                newInput:"",
                movieList:newMovieList
            });
        }
    }

    render(){
        return (
            <div className="MovieList">
                <h3>Insert you favourite movie:</h3>
                <input type="text" onChange={this.HandleInput} value={this.state.newInput} placeholder="Insert movie"/>
                <button onClick={this.AddMovie}>Add</button>
                {this.state.movieList.map( movie => <Movie name={movie}/>)}
            </div>
        )
    }
}

export default MovieList;