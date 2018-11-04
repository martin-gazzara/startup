import React from "react";
import "./Movie.css";


class Movie extends React.Component{

    
    render(){
        return (
            <div className="MovieItem">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Movie;