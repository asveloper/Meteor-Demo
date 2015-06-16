Router.route('/', {
  name: "pages.welcome",
  onBeforeAction: function(){
    if(this.params.query.ref){
      Session.set("referrerCode", this.params.query.ref);
    }

    if(Meteor.userId()){
      this.redirect('/dashboard');
    }else{
      this.next();
    }
  }
});

Router.route('/dashboard', {
  name: "pages.dashboard",
  onBeforeAction: function(){
    if(Meteor.userId()){
      this.next();
    }else{
      this.redirect('/');
    }
  },
  data: function(){
    var usersCount = Meteor.users.find({_id: {$nin: [Meteor.userId()]}}).count();
    return {
      userLevel: usersCount == 0 ? 1 : usersCount + 1
    }
  },
  waitOn: function(){
    return Meteor.subscribe("usersCount");
  }
});
