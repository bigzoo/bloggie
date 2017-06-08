import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    loginUser(){
      var params={
        username: this.get('username'),
        password: this.get('password')
      }
      this.sendAction('logUser', params);
    }
  }
});
