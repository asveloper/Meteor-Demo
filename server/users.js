Meteor.methods({
  usersCount: function(referralCode){
    check(referralCode, String);

    return Meteor.users.find({"profile.referrerCode": referralCode}).count();
  }
});
