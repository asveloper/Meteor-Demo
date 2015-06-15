Template.PagesWelcome.events({
  "click #facebookLogin": function (event) {
      Meteor.loginWithFacebook({
      }, function (err) {
        if (err)
          Session.set('errorMessage', err.reason || 'Unknown error');
      });
  }
});
