import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  tags: DS.attr(),
  category: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
