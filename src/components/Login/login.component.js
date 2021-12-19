import React, { Component } from "react";
// import InputField from "../UI/InputField";
import AuthService from "../../services/auth.service";
import {FormControl, FormLabel, Form} from 'react-bootstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    
        this.state = {
              email: "",
              password: "",
          };

        this.errors = {};
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    login() {
        if (!this.handleValidation()) {
            // alert("Form not valid");
            return false;
        } 
  
        var data = {
          email: this.state.email,
          password: this.state.password
        };
    
        AuthService.login(data)
          .then(response => {
            this.setState({
            //   id: response.data.id,
            //   title: response.data.title,
            //   description: response.data.description,
            //   published: response.data.published,
    
            //   submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    handleValidation() {
        let email = this.state.email;
        let password = this.state.password;

        this.errors["email"] = false;
        this.errors["password"] = false;

        let formIsValid = true;
    
        //email
        if (!email) {
          formIsValid = false;
          this.errors["email"] = "Cannot be empty";
        }
    
        if (email && typeof email !== "undefined") {
          let lastAtPos = email.lastIndexOf("@");
          let lastDotPos = email.lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              email.indexOf("@@") === -1 &&
              lastDotPos > 2 &&
              email.length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            this.errors["email"] = "Email is not valid";
          }
        }
    
        //password
        if (!password) {
            formIsValid = false;
            this.errors["password"] = "Cannot be empty";
        }

        this.setState({ errors: this.errors });
        return formIsValid;
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <Form.Group>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.onChangeEmail} 
                        isInvalid={!!this.errors.email} 
                        feedback="Error"
                      />
                      {this.errors.email && (
                        <Form.Control.Feedback type="invalid">
                          {this.errors.email}
                        </Form.Control.Feedback>
                      )}
                </Form.Group>
                
                <Form.Group>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.onChangePassword} 
                        isInvalid={!!this.errors.password} 
                        feedback="Error"
                      />
                      {this.errors.password && (
                        <Form.Control.Feedback type="invalid">
                          {this.errors.password}
                        </Form.Control.Feedback>
                      )}
                </Form.Group>                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>  
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#cadas">password?</a>
                </p>
            </div>
        );
    }
}