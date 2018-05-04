var CryptoJS=require ("crypto-js");



var React = require("react");
var Link = require('react-router').Link;

var Signup = React.createClass({
  getInitialState : function(){
    return {
	  email: '',
	  password: ''
	};
  }, 

  handleChange : function(user,event){
    var newState={};
	newState[user]=event.target.value;
	this.setState(newState);
  },

  handleSubmit : function(e){
    e.preventDefault();
	var name = this.state.name.trim();
	var email = this.state.email.trim();
	var password = this.state.password.trim();
	  if(!name || !email || !password) {
	    alert("Please input name, email or password")
		return;
	  }
		
	var them = this;
	var joo=CryptoJS.SHA256(password);
    var ciphertext = joo.toString(CryptoJS.enc.Hex)
      $.ajax({
	  	url: "http://localhost:3000/users",
		type: 'POST',
		dataType: 'json',
	    data:{
		  email: email,
		  password: ciphertext,
		  name: name
    	},
    	 
        success: function(data) {
       	  alert("Register successful")
	    }.bind(this),
		      
        error: function(xhr, status, err) {
	      console.error(them.props.url, status, err.toString());
     	}.bind(this)
	  });
		   
	  this.state.email='';
	  this.state.password='';
	  this.state.name='';
	  return;
    },

  render : function() {
    return (
      <form className="form-horizontal frame">
        <div className="form-group">
	      <label className="col-sm-2 control-label userfont">Name:</label>
		  <div className="col-sm-6">
		    <input type="name" className="form-control" id="inputName3" name="name" placeholder="'Weitong Xia'" value={this.state.name}
            onChange={this.handleChange.bind(this,'name')} style={{width:300}}/>
		  </div>
	    </div>
		
		<div className="form-group">
		  <label className="col-sm-2 control-label userfont">E-mail:</label>
		  <div className="col-sm-6">
		    <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="'example@qq.com'" value={this.state.email}
            onChange={this.handleChange.bind(this,'email')} style={{width:300}}/>
		  </div>
		</div>
		 
		<div className="form-group">
		  <label className="col-sm-2 control-label userfont">Password:</label>
		  <div className="col-sm-6">
		    <input type="password" className="form-control" id="inputPassword3" name="password" placeholder="'123456 is not good'" value ={this.state.password}
            onChange={this.handleChange.bind(this,'password')} style={{width:300}}/>
		  </div>
		</div>
		  
		<div className="form-group">
		  <div className="col-sm-offset-2 col-sm-6">
		    <button type="submit" className="btn btn-default btnfont" onClick={this.handleSubmit} value="Signup" >Sign up</button>
		  </div>

<span>Has an Account? Please </span>
        <Link to="/login">
          <button className="btn btn-default btnfont">
          Log in
          </button>
        </Link>
        
		</div>
	  </form>
    );
  }
});

exports.Signup = Signup;