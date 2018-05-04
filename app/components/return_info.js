var React = require("react");
var Link = require('react-router').Link;

var Return = React.createClass({
  render: function(){
  	return (
      <div>
      <br/><br/>
     <h3 className="Standard pull-left">Standard Returns</h3><br /><br />
     <p>We accept returns up to 7 days after dispatch if the goods are still in marketable condition. If you would like to return goods, contact xxxx@qq.com to request a returns document, which must be printed and attached to your parcel. Post the goods back to us with all paperwork enclosed and we will credit your account. Note: postage on returned goods will be borne by the customer, unless we were at fault.</p>
     <br />
      <h3 className="Restricted pull-left">Restricted Returns</h3><br /><br />
      <p>Certain goods, such as print-on-demand titles or special limited editions, are not eligible for return. This will be indicated to you before you place your order.</p>
      </div>

    )
  }
});

exports.Return=Return;





