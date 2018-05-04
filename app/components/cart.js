var ReactDOM = require('react-dom')
var React = require('react')
var ReactRouter = require('react-router');
var Payment = require('./payment_page').Payment;
var Link = require('react-router').Link;



var Cart = React.createClass({

    getInitialState: function() {
      // also subscribe to product events here

      return {
        items: [],
        total: 0,
        currency: 'EUR'
      };
    },

    addItem: function(e, item) {
      this.state.items.push(item);
      this.forceUpdate();
      this.countTotal();
    },

    removeItem: function(e, itemId) {
      var itemIndexInArray;

      this.state.items.some(function(item, index) {
        if(item.id === itemId) {
          itemIndexInArray = index;
          return true;
        }
      });

      this.state.items.splice(itemIndexInArray, 1);
      this.forceUpdate();

      this.countTotal();
    },

    countTotal: function() {
      var total = 0;

      this.state.items.forEach(function(item, index) {
        total += item.price;
      });

      this.setState({
        total: total
      })
    },

    render: function() {
        this.state.items=[localStorage.getItem('books') ?
                JSON.parse(localStorage.getItem('books')) : [] ]; 

        var items = this.state.items.map(function(item) {
            return (
              <li key={item.id} className="glyphicon glyphicon-shopping-cart">
                <span className="cart-item__name">{item.name}</span>
              </li>
            )
        });

        var body = (
          <ul className="shoppingcart">
            {items}
          </ul>
        );

        var empty = <div className="alert alert-info">Cart is empty</div>;
        this.countTotal();

        return (
          <div>
          <div className="panel panel-default">
            <div className="panel-body">
              {items.length > 0 ? body : empty}
              <div className="cart__total">Total: {this.state.total} {this.state.currency}</div>
            
            <div className="btnposition"><button type="button" className="btn btn-default btnfont" data-toggle="modal" data-target="#myModal">
             Pay
            </button></div>

            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Payment information</h4>
                  </div>
                  <div className="modal-body">
                    <div className="modalpic"></div>
                    <p className="modalsnip"><Payment /></p>
                  </div>
                  <div className="modal-footer">  
                  <button type="button" className="btn btn-default btnfont" data-dismiss="modal">Cancel</button>
               <Link to="/index"><button type="button" className="btn btn-default btnfont">Confirm</button></Link>   
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
         
        </div>
        );
    }
});

exports.Cart = Cart;