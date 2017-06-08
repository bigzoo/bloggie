import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  posts: DS.hasMany('post', {async: true})
});
