import React from "react";
import Form  from "./Form";

let userIsRegistered = true


function App(){

    // console.log(currentTime)
    return(
        <div className="container">
            
           <Form isRegistered = {userIsRegistered} />
            {/* //userIsRegistered === false ?  <Register/> : <Login/> */}
            

        </div>
   )
}

export default App

// const currentTime = new Date().getHours();

// <div className="container">{

        //     currentTime < 17 ? <h1>Hello</h1> : <h1>Why are you stil working</h1>

        // }</div>