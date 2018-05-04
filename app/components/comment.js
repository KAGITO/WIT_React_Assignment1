var ReactDOM = require('react-dom')
var React = require('react')
var api =  require ('./stubAPI').api;
var _ = require('lodash');

        var Form = React.createClass({
               getInitialState: function() {
                   return { content: '', name: ''};
                },
                addContent: function(e) {
                    this.setState({content: e.target.value});
                },
                addName: function(e) {
                    this.setState({name: e.target.value});
                },
                addRecord: function(e){
                    e.preventDefault();
                    var content = this.state.content.trim();
                    var name = this.state.name.trim();
                    if (!content) {
                            return;
                    }
                    this.props.addPostHandler(content,name);
                    this.setState({content: "",name: ""});
                },
                render : function() {
                     return (
                       <form style={{marginTop: '30px'}}>
                          <h4>Comment here</h4>
                          <div className="form-group">
                            <input type="text"
                              className="form-control" placeholder="Content"
                              value={this.state.content} onChange={this.addContent} style={{width:400,height:100}}></input>
                          </div>
                          <div className="form-group">
                            <input type="text"
                               className="form-control" placeholder="Name"
                               value={this.state.name} onChange={this.addName} style={{width:400}}></input>
                          </div>
                          <button type="submit" className="btn btn-default btnfont" onClick={this.addRecord} >Post</button>
                        </form>
                      );
                  }
           });

        var CommentItem = React.createClass({
                handleVote : function() {
                     this.props.upvoteHandler(this.props.post.id);
                },
                render : function() {
                    var lineStyle = {
                         fontSize: '20px', marginLeft: '10px'  };
                    var line ;
                    if (this.props.post.id < 5) {
                       line = <span className="comment">{this.props.post.content} Posted by {this.props.post.username}</span> ;
                    } else {
                       line = <span className="comment">{this.props.post.content} Posted by {this.props.post.editor}</span> ;
                    }
                  return (
                        <div >
                          <span className="glyphicon glyphicon-thumbs-up" 
                              onClick={this.handleVote} ></span>
                          {this.props.post.upvotes}
                          <span style={lineStyle} >{line}<span>
                              
                            </span>
                          </span>
                        </div>  
                );
                }
           }) ;

           var CommentList = React.createClass({
                render : function() {
                  var items = this.props.posts.map(function(post,index) {
                         return <CommentItem key={index} post={post} 
                                  upvoteHandler={this.props.upvoteHandler}  /> ;
                     }.bind(this) )
                  return (
                    <div>
                          {items}
                          </div>
                    );
                }
           }) ;  

          var Comment = React.createClass({ 
              incrementUpvote : function(id) {
                   api.upvote(id) ;
                   this.setState({});
              },    
              addPost : function(content,link){
                   api.add(content,link) ;
                   this.setState({});
              }, 
              render: function(){
                  var posts = _.sortBy(api.getAll(), function(post) {
                          return - post.upvotes;
                       }
                    );
                  return (
                    <div className="container">
                       <div className="row">
                          <div>
                             <div className="page-header">
                    
                                   <CommentList posts={posts} 
                                        upvoteHandler={this.incrementUpvote} />
                                   <Form addPostHandler={this.addPost} />
                             </div>
                           </div>
                        </div>
                      </div>
                  );
              }
          });

 exports.Comment = Comment;