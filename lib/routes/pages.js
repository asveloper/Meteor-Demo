Router.route('/', {
  name: "pages.welcome",
  onBeforeAction: function(){
    if(this.userId){
      this.redirect('/dashboard');
    }else{
      this.next();
    }
  }
});

Router.route('/dashboard', {
  name: "pages.dashboard",
  onBeforeAction: function(){
    if(this.userId){
      this.next();
    }else{
      this.redirect('/');
    }
  }
});
