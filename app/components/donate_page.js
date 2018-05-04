var React = require("react");
var Link = require('react-router').Link;
var Child = require('./child');

var DonateInfo = React.createClass({
  render: function() {
    return (
      <div className="center jumbotron donateframe">
      <div className="donatetable">
      <label className="pull-left sellinfo">Shipping Address:</label><br />
      <table>
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="First Name" style={{display:"table-cell",width:200}} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Last Name" style={{display:"table-cell",width:200}} />
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="Area Code" style={{display:"table-cell",width:100}} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Primary Phone" style={{display:"table-cell",width:300}} />
          </td>
        </tr>
      </table>

       <table>
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="ZIP Code" style={{display:"table-cell",width:100}} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Street Address" style={{display:"table-cell",width:300}} />
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" style={{display:"table-cell",width:400}} />
          </td>
        </tr>
      </table>
      </div>

      <br /><br />

  
      <div>
        <Child />
      </div>

      <nav>
        <ul className="pagination">
        <li>
        <a aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>5</a></li>
        <li>
        <a aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
        </ul>
      </nav>



        <div className="btnposition btndonate"><button type="button" className="btn btn-default btnfont">
          Donate
        </button></div>
    
      </div>
    );
  }
});

exports.DonateInfo = DonateInfo;