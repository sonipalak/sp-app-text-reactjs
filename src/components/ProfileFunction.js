import React from "react";

export default function ProfileFunction() {
    // function clickEvent(){
    //     alert("Click TExt")
    // }
    const clickEvent=()=> {
        alert("Const Click")
    }
    return (
        <div>
            <h3>Click Event</h3>
            <button onClick={clickEvent}>Click Event</button>
        </div>
    )
}