Template.PagesDashboard.helpers({
  referralUrl: function(){
    var referralCode = "";

    if(Meteor.user()){
      referralCode = Meteor.user().profile.referralCode;
    }
    return Meteor.absoluteUrl().concat("?ref="+referralCode);
  },
  shareData: function(){
    var referralCode = "";

    if(Meteor.user()){
      referralCode = Meteor.user().profile.referralCode;
    }
    return {
      url: Meteor.absoluteUrl().concat("?ref="+referralCode)
    }
  },
  userLevel: function(){
    return Counts.get('referral') + 1;
  }
});

Template.PagesDashboard.events({
  "click #logout": function(){
    Meteor.logout();
    Router.go('/');
  }

});

Template.PagesDashboard.rendered = function(){

    if(Session.get("referrerCode")){
      Meteor.users.update({_id: Meteor.userId()}, {
        $set: {
          "profile.referrerCode": Session.get("referrerCode")
        }
      });
      Session.set("referrerCode", undefined);
    }

}
