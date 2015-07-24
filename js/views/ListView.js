var ListView = Backbone.View.extend({
  // el: '<div>'
  // tagname: 'div'
  id: 'list', //list view is an empty div with id = list

  initialize: function(){
    //listenTo is similar to on but does other things
      //with on you need to specify the context
      //with listenTo we can let backbone handle the context
      //and assume its running with reference to the View
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function(){
    //do something
    this.$el.empty();
    this.entries = this.collection.map(function(model){
      return new EntryView({'model': model});
      //now we have an array of entry views
    });
    var $els = this.entries.map(function(entry){
      return entry.$el;
    });
    //now we append the els to the target node
    this.$el.append($els);
  }
});