Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile;

  var referralCode = new Meteor.Collection.ObjectID()._str;

  user.profile.referralCode = referralCode;
  user.profile.referrerCode = "";

  return user;
});
