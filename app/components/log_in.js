var ReactDOM = require('react-dom')
var React = require('react')
var _ = require('lodash'); 
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var request = require('superagent') ; 
var CryptoJS=require ("crypto-js");



var Login = React.createClass({
  getInitialState: function(){
      return{
             email: '',
             password: ''
      };
    },

  handleChange:function(userdata, event){
    var newState={};
    newState[userdata]=event.target.value;
    this.setState(newState);

  },
  handleSubmit:function(e){
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if(!email || !password) {
      alert("please input email or password")
      return;
    }

  var self = this;
  var joo=CryptoJS.SHA256(password);
  var ciphertext = joo.toString(CryptoJS.enc.Hex)

    $.ajax({
    url: "http://localhost:3000/users",
    type: 'GET',
    dataType: 'json',
    success: function(data) {
       var result =  _.find(data, { 'email': email, 'password': ciphertext });
      if(result) {
        alert('Logged In');
        localStorage.setItem('user',email);
        window.location.href = "/app/#/index";
      }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(self.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (    
        <form className="form-horizontal frame">
          <div className="form-group">
            <label className="col-sm-2 control-label userfont">E-mail:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3"  value={this.state.email} onChange={this.handleChange.bind(this,'email')} style={{width:300}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label userfont">Password:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} style={{width:300}}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
             <button type="submit" className="btn btn-default btnfont" onClick={this.handleSubmit} value="Login">Log in</button>
            </div>

          </div>
        </form>
        )
        }
      });

exports.Login = Login ;