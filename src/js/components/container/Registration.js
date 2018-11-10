
import React, { Component } from "react";
import ReactDOM from "react-dom";

// class Registration extends Component {
//     constructor() {
//         super();   
//     }
//     render() {
//         return (
//             <div className="form-group">
//             <label for="email">Email address:</label>
//             <input type="text" className="email" id="email"></input>
//             </div>
//                 );
//         }
//     }
//     const wrapper = document.getElementById("create-article-form");
// ReactDOM.render(<Registration />,wrapper);

// export default Registration;

const Registration = ()=> { 

return (
    <div className="form-group"> 
    <input type="text" className="form-control" id="email"></input> 
    <label>Password:</label>
    <input type="password" className="form-control" id="pwd"></input>
    </div>
          
)

}
ReactDOM.render(<Registration/>,document.getElementById("create-article-form"))
export default Registration;