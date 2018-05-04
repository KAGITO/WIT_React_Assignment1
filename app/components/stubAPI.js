 var _ = require('lodash');
 

    var posts = [
             {  id: 1 ,
                content : 'This book is very good.',
                username : 'Weitong Xia',
                upvotes : 10
              },
             { 
                id: 2,
                content : 'I hope more children can read this book.',
                username : 'Elie MacDowell',
                upvotes : 12
              },
              { 
                id: 3,
                content : 'It is very cheap, I like it!!!',
                username : 'Tio Plato',
                upvotes : 12
              },
              { 
                id: 4,
                content : 'I hope I can help more children.',
                username : 'Randy Orlando',  
                upvotes : 2
              }
          ] ;


     var stubAPI = {
          getAll : function() {
              return posts ;
          },
         add : function(t,n) {
              var id = 1 ;
              var last = _.last(posts) ;
              if (last) {
                 id = last.id + 1 ;
              }
                  console.log( 'Id =  ' + id);
              posts.push({ 'id': id,  
                       content: t, editor: n, username: '', upvotes: 0 }) ;

              },
         upvote : function(id) {
                 var index = _.findIndex(posts, function(post) {
                        return post.id == id;
                      } );      
                   if (index != -1) {                 
                      posts[index].upvotes = posts[index].upvotes + 1 ;
                      }
              }
          }
    exports.api = stubAPI ;