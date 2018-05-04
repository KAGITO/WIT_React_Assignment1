var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')

var Header = require('./components/header');
var Footer = require('./components/footer');
var BookCatalogueApp = require('./components/book');
var BookDetail = require('./components/book_details.js' ).BookDetail ;
var Signup = require('./components/sign_up').Signup;
var Cart = require('./components/cart').Cart;
var Welcome = require('./components/welcome_page').Welcome;
var SellInfo = require('./components/sell_page').SellInfo;
var DonateInfo = require('./components/donate_page').DonateInfo;
var Login = require('./components/log_in').Login;




var Index = React.createClass({  
  render: function() {
    return (
      <div>
        <h1 className="indexname">Buy a Second Hand book</h1>
        <BookCatalogueApp />
      </div>
    );
  } 
});

var Sell = React.createClass({  
  render: function() {
    return (
      <div>
      <h1 className="indexname">Sell a Second hand book</h1>
        <SellInfo />
      </div>
    );
  } 
}) ;

var Donate = React.createClass({  
  render: function() {
    return (
      <div>
      <h1 className="indexname">Donate a Second Hand book</h1>
   <DonateInfo />
      </div>
    );
  } 
}) ;

var App = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <div className="container">
        {this.props.children}
         </div>
        <Footer />
      </div>
    )
  }
});

ReactDOM.render((
  <Router >
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="signup" component={Signup} />
      <Route path="index" component={Index} />
      <Route path="sell" component={Sell} />
      <Route path="donate" component={Donate} />
      <Route path="books/:id" component={BookDetail} />
      <Route path="cart" component={Cart} />
      <Route path="login" component={Login} />

    </Route>
    
  </Router>
), document.getElementById('mount-point')) ;

