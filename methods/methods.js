Meteor.methods({
  addPost: function(newPost){
    Posts.insert(newPost);
  }
});