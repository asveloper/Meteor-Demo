Meteor.publish("referralCount", function(){
    var referralCode = Meteor.users.findOne({_id: this.userId}).profile.referralCode;
    Counts.publish(this, 'referralCount', Meteor.users.find({"profile.referrerCode": referralCode}));
});
