var React = require('react')
var request = require('superagent') ; 
var Cart = require('./cart').Cart;
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var api =  require ('./stubAPI').api;
var Comment = require('./comment.js').Comment;
var Delivery = require('./delivery_info').Delivery;
var Return = require('./return_info').Return;



var ImagesSection = React.createClass({
  render: function(){
    var thumbImages = this.props.book.images.map(function(img,index) {
      return (
        <li>
          <img key={index} src={img} />
        </li>
      );
    }.bind(this));
                
    var mainImage = (
      <div className="book-images">
        <img src={this.props.book.images[0]} className="book" />
      </div>
    );
      return (
        <div>
          {mainImage}
          <h1 className="bookdetail1">{this.props.book.name}</h1>
          <p className="bookdetail2">{this.props.book.description}</p>
          <p className="bookdetail3">Price:{this.props.book.price}€</p>
          <ul className="book-thumbs">
            {thumbImages}
          </ul>
        </div>
      );
  }
});

var BookDetail = React.createClass({
  getInitialState: function(){
    return { book: null, added : false };
  },

  addToCart:function(){

  var Validate = localStorage.getItem("user");
  if( Validate != null){

    if(!this.state.added){
      alert("add to shopping cart successful");
      localStorage.setItem("books",JSON.stringify(this.state.book));
      window.poo=JSON.parse(localStorage.getItem('books'));
    }
    else{
      alert("The product hase been removed");
      localStorage.removeItem("books");
    }
    this.setState({
      added: !this.state.added
    });

}else{
  window.location.href="http://localhost:8080/app/#/login"
}


  },

  CheckOut:function(){
    alert("go to the checkout page"); 
    window.location.href= "/app/#/cart"
  },

  componentDidMount: function() {
    request.get(
    'assets/books/' + this.props.params.id + '.json', function(err, res){
      var json = JSON.parse(res.text);
      if (this.isMounted()) {
        this.setState({ book : json});
      }
    }.bind(this));
  },
         
  render: function(){
    var display = <p>No book details</p> ; 
    var detail;
    var book = this.state.book ;
      if (book) {
        display = (
          <div>
            <ImagesSection book={book} />
              <button className={this.state.added ? 'btn btn-danger btnfont' : 'btn btn-default btnfont'} onClick={this.addToCart}>
                {this.state.added ?  ' Remove '  : ' Add to Cart '}</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='btn btn-default btnfont' onClick={this.CheckOut}> Go to Cart </button>
          </div>
        );
      }

      if (book) {
        detail = (
          <div>
          <br/><br/>
                <li>
                    <dl>
                      <dt>ISBN</dt>
                      <dd>{book.isbn}</dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>Publisher</dt>
                      <dd>{book.publisher}</dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>Date</dt>
                      <dd>{book.date}</dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>Category</dt>
                      <dd>{book.category}</dd>
                    </dl>
                  </li>
          </div>
        );
      }
                
      return (
        <div>
          {display}
          <div> 
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a  href="#home" aria-controls="home" role="tab" data-toggle="tab">Comment</a></li>
              <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Details</a></li>
              <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Delivery</a></li>
              <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Returns</a></li>
            </ul>

            <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home"><Comment /></div>
              <div role="tabpanel" className="tab-pane" id="profile">{detail}</div>
              <div role="tabpanel" className="tab-pane" id="messages"><Delivery /></div>
              <div role="tabpanel" className="tab-pane" id="settings"><Return /></div>
            </div>
          </div>
        </div>
      );
  }
});

exports.BookDetail = BookDetail ;