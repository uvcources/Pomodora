import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import GetDB from "../presentational/Button";
import insertData from '../presentational/RestAPI/insertData';
class FormContainer extends Component {
  constructor() {
    super();    
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange} 
          style="form-control"
        />
          <button type="submit" onClick={insertData} className="btn-btn-primary">Submit</button>
          <GetDB/>
      </form>
    );
  } 

// componentDidMount()
// {
//   <GetDB/>
// }


}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
export default FormContainer;