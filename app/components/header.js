var React = require("react");
var Link = require('react-router').Link;

var Header = React.createClass({
  handlerlogout : function(){
    localStorage.removeItem("user");
    window.location.href = "/app/#/signup";
  },
  render : function() {
    return (
      <div className="navbar navbar-fixed-top navbar-inverse" >
        <div className="container">
          <Link to="/" id="logo" >Book Charity</Link>
          <nav>
            <ul className="nav navbar-nav navbar-right"> 
              <li><Link to="/signup">Home</Link></li> 
              <li><Link to="/index">Buy</Link></li>
              <li><Link to="/sell">Sell</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                Account <b className="caret"></b>
                </Link>
              <ul className="dropdown-menu">
                <li><Link to="/cart" className="glyphicon glyphicon-shopping-cart">Cart</Link></li>
                <li><Link to="/inbox" className="glyphicon glyphicon-user">Profile</Link></li>
                <li className="divider"></li>
                  <li onClick={this.handlerlogout}>
                  <Link to className="glyphicon glyphicon-remove">Logout </Link>
                  </li>
               </ul>
               </li>
             </ul>
            </nav>
          </div>
        </div>
      );
    }
  });

 module.exports = Header; 