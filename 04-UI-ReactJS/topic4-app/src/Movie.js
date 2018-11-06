import React from "react";
import "./Movie.css";


class Movie extends React.Component{

    
    render(){
        return (
            <div className="MovieItem">
                <h3>{this.props.name}</h3>
                {this.props.EditMode ? <span></span> : <button onClick={this.props.EditName} value={this.props.Key}>Edit</button>}
                {this.props.EditMode ? <span></span> : <button onClick={this.props.Delete} value={this.props.Key}>Remove</button>}
            </div>
        )
    }
}

export default Movie;