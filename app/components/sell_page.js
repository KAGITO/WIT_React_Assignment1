var React = require("react");
var Link = require('react-router').Link;

var SellInfo = React.createClass({
  render: function() {
    return (
      <div className="center jumbotron">
<table>
  <tr>
    <td className="selltable">
      	<div>
          <label className="pull-left sellinfo">Book name:</label><br />
          <input type="text" className="form-control" placeholder="'Grimm's Fairy Tales' ..." name="name" style={{width:200}}/>
     	</div>
      <br/>

        <div>
          <label className="pull-left sellinfo">Introduction:</label><br />
          <input type="text" className="form-control" name="lastName" style={{width:400, height:200}}/>
        </div>
        <br/>

        <div>
          <label className="pull-left sellinfo">Cover page:</label>
        <br/>  
          <div className="row">
            <div className="sellimg" >
              <img src="..." />
            </div>
          </div>
          <input type="file" className="pull-left" accept="image/*" name="myPic" />
        </div>
        <br /><br/>

        <div>
          <label className="pull-left sellinfo">Set price:</label>
          <br />
          <div className="input-group">
            <span className="input-group-addon">€</span>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" style={{width:167}}/>
          </div>
        </div>
        <br/>
       
       <div>
         <label className="pull-left sellinfo">The income will be donated to:</label>
         <br />
         <div className="col-md-4 pull-left">
                  <select id="sort" className="form-control" style={{width:400}}>
                     <option>Charity Total Association</option>
                     <option>The Red Cross</option>
                     <option>Foundation For Disabled Persons</option>
                     <option>Children and Teenagers Fund</option>
                     <option>ProjectOrbis</option>
                 </select>
          </div>
        </div>
</td>
<td className="selltable">
            <img src="img/cover/cover.jpg" style={{height:500}}/>


        <div className="btnposition">
           <Link to="/index">
          <button type="button" className="btn btn-default btnfont btnsell">
           Submit
          </button>
          </Link>
          </div>

</td>
</tr>
</table>
        </div>
    );
  }
});

exports.SellInfo = SellInfo;