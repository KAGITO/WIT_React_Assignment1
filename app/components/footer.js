var React = require("react");
var Link = require('react-router').Link;

var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
        <small>
          The <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>
          by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
        </small>
        <nav>
          <ul>
            <li><Link to="#">Help</Link></li>
            <li><Link to="#">Contacts</Link></li>
            <li><a href="http://news.railstutorial.org/">News</a></li>
          </ul>
        </nav>
      </footer>
    ) ;
  }
});

module.exports = Footer; 