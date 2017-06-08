import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //get users from firebase
    //return this.store.findRecord('username');
  },
  actions:{
    logUser(params){
      console.log('ready to compatre the username and password FOR this user:' );
      console.log(params.username);
      var users=this.store.findAll('user').then(function() {
        console.log(users);
      })
      //check username is mapped to the password

    }
  }
});
