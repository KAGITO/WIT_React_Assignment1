    var ReactDOM = require('react-dom')
    var React = require('react')
    var books = require('../data/book_data.js').allBooks 
    var _ = require('lodash')
    var ReactRouter = require('react-router')
    var Router = ReactRouter.Router
    var Route = ReactRouter.Route
    var Link = ReactRouter.Link
    var IndexRoute = ReactRouter.IndexRoute 
    var BookDetail = require('./book_details.js' ).BookDetail ;  //NEW

    var SelectBox = React.createClass({
      handleChange : function(e, type,value) {
           e.preventDefault();
           this.props.onUserInput( type,value);
      },
      handleTextChange : function(e) {
            this.handleChange( e, 'search', e.target.value);
      },
      handleSortChange : function(e) {
          this.handleChange(e, 'sort', e.target.value);
      },
      
      render: function(){
           return (
                <div className="row select">
                <div className="col-md-4 col-md-offset-1">
               <input type="text" className="form-control" placeholder="Search" 
                          value={this.props.filterText}
                          onChange={this.handleTextChange} />
                </div> 
                <div className="col-md-1">         
                <h2 className="sort"> Sort by:</h2>
                 </div>
                 <div className="col-md-4">
                  <select id="sort" className="form-control" value={this.props.order } 
                         onChange={this.handleSortChange} >
                     <option value="name">Alphabetical</option>
                     <option value="age">Newest</option>
                 </select>
                 <br/>
             </div>
             </div>
               );
          }
       });


    // TODO (missing component)
  
var BookItem= React.createClass({
  render: function(){
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail" width="200" height="500">
          <img src={this.props.book.imageUrl} width="200" height="242" />
          <div className="caption">
            <h2><Link to={'/books/' + this.props.book.id}> {this.props.book.name}</Link></h2>
 
            <div className="btnposition"><button type="button" className="btn btn-default btnfont" data-toggle="modal" data-target={"#myModal"+this.props.book.id} >
             Introduction
            </button></div>

            <div className="modal fade" id={"myModal"+this.props.book.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Introduction</h4>
                  </div>
                  <div className="modal-body">
                    <div className="modalpic"><img src={this.props.book.imageUrl} width="200" height="300" /></div>
                    <p className="modalsnip"> {this.props.book.snippet}</p>
                  </div>
                  <div className="modal-footer">      
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

     var FilteredBookList = React.createClass({
          render: function(){
              var displayedBooks = this.props.books.map(function(book) {
                  return <BookItem key={book.id} book={book} /> ;
              }) ;
              return (
                      <div className="col-md-10">
                        <ul className="books">
                            {displayedBooks}
                        </ul>
                      </div>
                  ) ;
          }
      });

     var BookCatalogueApp = React.createClass({
      getInitialState: function() {
           return { search: '', sort: 'name' } ;
      },
      handleChange : function(type,value) {
            if ( type == 'search' ) {
                this.setState( { search: value } ) ;
              } else {
                 this.setState( { sort: value } ) ;
              }
      }, 
       render: function(){
           //console.log('Criteria: Search= ' + this.state.search + ' ; Sort= ' this.state.sort);
           var list = books.filter(function(p) {
                  return p.name.toLowerCase().search(this.state.search.toLowerCase() ) != -1 ;
                }.bind(this) );
           var filteredList = _.sortBy(list, this.state.sort) ;
           return (
                <div className="view-container">
                <div className="view-frame">
                   <div className="container-fluid">
                   <div className="row index">
                      <SelectBox onUserInput={this.handleChange } 
                             filterText={this.state.search} 
                             sort={this.state.sort} />
                       <FilteredBookList books={filteredList} />
                  </div> 
                  </div>                   
                </div>
              </div>
           );
         }
      });



    module.exports = BookCatalogueApp;