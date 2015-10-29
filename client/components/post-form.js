Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPost = {
      title: event.target.title.value,
      url: event.target.url.value
    };

    // create the new poll
    Meteor.call("addPost", newPost);

    template.find("form").reset();
  }

});