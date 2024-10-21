import React from "react";

function Home(props){
    const {name} = props;
    return(
        <>
        <h1>Hello,<span className="span"> {name} !</span> Welcome to React!. </h1>
        </>
    );
}

export default Home;