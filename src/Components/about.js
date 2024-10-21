import React from "react";

class About extends React.Component{
    render(){
        const {age} = this.props;
        return(
            <>
            <h1>You are <span className="span">{age}</span> years old.. </h1>
            </>
        );
    }
}

export default About;