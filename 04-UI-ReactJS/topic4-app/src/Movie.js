import React from "react";
import "./Movie.css";



class Movie extends React.Component{

    render(){
        return (
            <div className="MovieItem">
                <h3>{this.props.name}</h3>
                <button onClick={this.props.edit} id={this.props.Key}>Edit</button>
                <button onClick={this.props.remove} id={this.props.Key}>Remove</button>
            </div>
        )
    }
}

export default Movie;