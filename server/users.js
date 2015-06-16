Meteor.publish("usersCount", function(){
    var referralCode = Meteor.users.findOne({_id: this.userId}).profile.referralCode;

    return Meteor.users.find({"profile.referrerCode": referralCode});
});
