import React from "react";

export default class User extends React.Component() {
    componentWillUnmounr(){
        alert("User Deleted")
      }
    render(){
        return (
            <div>
                <h1>User</h1>
                <ul>
                    <li>Name: Palak Soni</li>
                    <li>Email: palak@ids.com</li>
                    <li>Phone: (+91) 1214557780</li>
                </ul>
            </div>
        )    
    }
}