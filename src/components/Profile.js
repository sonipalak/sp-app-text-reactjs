import React from "react";

// export default function Profile(props) {
//     return(
//         <div>
//             <h1>{props.text.name}</h1>
//             <h1>{props.data}</h1>
//         </div>
//     )
// }

// export default class Profile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.data}</h1>
//                 <h2>{this.props.text.name}</h2>
//             </div>
//         )
//     }
// }

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Palak State', 
            email: 'palak@gmail.com',
            count:0, 
            show:true,
            data: null
        }
        console.warn("constructor")
    }
    updateState(){
        this.setState({
            name: 'Swara Profile',
            count: this.state.count+5,
            
        })
    }
    clickEvent(){
        alert("Click Event Called")
    }
    componentDidMount(){
        console.warn("componentDidMount")
    }
    render(){
        console.warn("render")
        return(
            <div>
                <h1>Profile: {this.state.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <h3>Email: <a href={this.state.email}>{this.state.email}</a></h3>
                <button onClick={() => this.updateState()}>Update Name</button>
                <h1>Show Hide</h1>
                {
                    this.state.show ?
                    <h4>Hide and Show Test</h4>
                    :null
                }
                <button onClick={() => this.setState({show:!this.state.show})}>Toggle Button</button>
                <h1>Click Event</h1>
                <button onClick={()=>this.clickEvent()}>Click Event</button>
                <button onClick={this.clickEvent.bind(this)}>Click Event with bind</button>
            </div>
        )
    }
}