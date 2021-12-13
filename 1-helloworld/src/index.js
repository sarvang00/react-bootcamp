import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

function App() {
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Hello World, Again!?</h1>
            <button className="button">Boobytrap</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
