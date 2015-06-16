Meteor.publish("referralCount", function(){
  var user = Meteor.users.findOne({_id: this.userId});
  if(user){
    Counts.publish(this, 'referralCount', Meteor.users.find({"profile.referrerCode": user.profile.referralCode}));
  }
});
