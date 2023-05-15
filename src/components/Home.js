import React from "react";

export default function Home(p) {
    const red = () => {
        alert("Red Function Called")
    }
    return <div>
        <h1 onClick={red}>{p.text}</h1>
    </div>
}