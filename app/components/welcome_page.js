var React = require("react");
var Link = require('react-router').Link;

var Welcome = React.createClass({
  render: function(){
  	return (
      <div className="center jumbotron">
        <h1 className="welcome">Welcome to Book Charity</h1> 
        <Link to="/signup">
          <button className="btn btn-lg btn-default btnfont">
            Sign up now!!!
          </button>
        </Link>
      </div>
    )
  }
});

exports.Welcome = Welcome;



