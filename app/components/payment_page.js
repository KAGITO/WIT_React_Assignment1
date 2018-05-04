var React = require("react");
var Link = require('react-router').Link;

var Payment = React.createClass({
  render: function(){
  	return (
      <div className="payment">

<div className="input-group">
  <span className="input-group-addon" id="sizing-addon3" style={{width:200}}>Card Number</span>
  <input type="text" className="form-control" aria-describedby="sizing-addon" style={{width:300}} />
</div>
<br/>

<div className="input-group">
  <span className="input-group-addon" id="sizing-addon3" style={{width:200}}>Secure Code</span>
  <input type="text" className="form-control" aria-describedby="sizing-addon" style={{width:300}} />
</div>
</div>
    )
  }
});

exports.Payment = Payment;