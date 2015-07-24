var InputView = Backbone.View.extend({
  // el: '<input>',
  tagName: 'input' ,//will create a new dom node and be bound to it

  //how do we capture these events from the user??
  events: {
    //any sort of dom event you can capture
    'keypress': 'keyAction'
  },

  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.attr('placeholder', 'Enter a zip code');
  },

  keyAction: function(event){
    var isEnterKey = (event.which === 13);
    if(isEnterKey){
      //do stuff
      this.collection.addNewWeatherEntry(this.$el.val());
      this.$el.val('');
    }
  }
})