Template.PagesDashboard.helpers({
  referralUrl: function(){
    var referralCode = "";

    if(Meteor.user()){
      referralCode = Meteor.user().profile.referralCode;
    }
    return Router.current().url.replace("dashboard", "?ref="+referralCode);
  },
  shareData: function(){
    var referralCode = "";

    if(Meteor.user()){
      referralCode = Meteor.user().profile.referralCode;
    }
    return {
      url: Router.current().url.replace("dashboard", "?ref="+referralCode)
    }
  },
  level: function(){
    var referralCode = "";

    if(Meteor.user()){
      referralCode = Meteor.user().profile.referralCode;
    }

    return ;
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
          referrerCode: Session.get("referrerCode")
        }
      });
    }

}
