var React = require("react");
var Link = require('react-router').Link;

var Delivery = React.createClass({
  render: function(){
  	return (
<div>
<br/><br/>
 <div><h3 className="delivery pull-left">Deliveries</h3></div>
 <br /><br />
 <div><p>Place an order for over €10 to receive free delivery to anywhere in Ireland and the UK! See our Delivery Charges section below for a full breakdown of shipping costs for all destinations.</p></div>
<br />
<div><h4>Delivery Charges</h4></div>

<table width="200">
  <tr>
  <td></td>
    <td>Ireland</td>
    <td>UK</td> 
    <td>World</td>
  </tr>
  <tr>
  <td>Under €10</td>
    <td>€3.80</td>
    <td>€10</td> 
    <td>€25</td>
  </tr>
 <tr>
  <td>Over €10</td>
    <td>Free</td>
    <td>€10</td> 
    <td>€25</td>
  </tr>
</table>
<br />
<div>
<p>*Free delivery on all orders over €10 - only applies to order total, does not include eBooks.</p>
</div>
<div>
All orders will be delivered by An Post.
</div>





</div>


    )
  }
});

exports.Delivery= Delivery;





