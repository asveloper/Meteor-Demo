Template.PagesWelcome.events({
  "click #facebookLogin": function (event) {
      Meteor.loginWithFacebook({
        requestPermissions: ['email', 'public_profile']
      }, function (err) {
        if (err)
          Session.set('errorMessage', err.reason || 'Unknown error');
      });
  }
});
