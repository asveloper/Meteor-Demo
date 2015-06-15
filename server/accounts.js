Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile;

  var referralCode = new Meteor.Collection.ObjectID()._str;

  user.referralCode = referralCode;

  return user;
});
