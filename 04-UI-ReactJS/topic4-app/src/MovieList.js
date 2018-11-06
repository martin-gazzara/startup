import React from 'react';
import Movie from './Movie';
import "./MovieList.css";

class MovieList extends React.Component{

    constructor(){
        super();
        this.state = {
            newInput:"",
            movieList: [],
            editMode:false,
            itemToEdit:undefined
        }

        this.HandleInput = this.HandleInput.bind(this);
        this.AddMovie = this.AddMovie.bind(this);
        this.EditMovie = this.EditMovie.bind(this);
        this.ApplyChanges = this.ApplyChanges.bind(this);
        this.DeleteMovie = this.DeleteMovie.bind(this);
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

    EditMovie(e){
        let index = e.target.value;
        this.setState({newInput:this.state.movieList[index],editMode:true,itemToEdit:index});
    }

    ApplyChanges(){
        let newValue = this.state.newInput;
        let newMovieList = this.state.movieList;

        newMovieList[this.state.itemToEdit] = newValue;

        this.setState({
            newInput:"",
            movieList:newMovieList,
            editMode:false,
            itemToEdit:undefined
        })
    }

    DeleteMovie(e){
        let movie = this.state.movieList[e.target.value];
        let newMovieList = this.state.movieList.filter( mov => mov != movie);
        this.setState({
            movieList:newMovieList
        })
    }

    render(){
        return (
            <div className="MovieList">
                <h3>Insert you favourite movie:</h3>
                <input type="text" onChange={this.HandleInput} value={this.state.newInput} placeholder="Insert movie"/>
                <button onClick={this.state.editMode ? this.ApplyChanges : this.AddMovie}>{this.state.editMode ? "Edit" : "Add"}</button>
                {this.state.movieList.map( (movie,i) => <Movie 
                    Delete={this.DeleteMovie}
                    EditMode={this.state.editMode} 
                    EditName={this.EditMovie} 
                    Key={i} name={movie}/>)}
            </div>
        )
    }
}

//

export default MovieList;