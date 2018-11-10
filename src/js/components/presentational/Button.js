import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import ReactDOM from "react-dom";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
class GetDB extends React.Component{

constructor(){
    super();
   this.state ={
       dataBaseName  : [],
       datas : []
   }
}

componentDidMount(){
    axios.get('http://localhost:8080/getDB')
     .then(response => {  
         
const datas1= response.data.content;
console.log(' TEst '+datas1);

        const episodes = response.data;
   //      console.log(episodes);
         this.setState((prevState) => ({
            dataBaseName: episodes}));
     })
}

render() {
    return( <div className="form-group">
      <h4>DB Name :</h4> 
<ul>
        { this.state.dataBaseName.map((person,i)=> <li key={i}>{person}</li>)}
      </ul>

    </div> ); 
}
}
// ReactDOM.render(<GetDB/>,document.getElementById('create-article-form'));
export default GetDB;