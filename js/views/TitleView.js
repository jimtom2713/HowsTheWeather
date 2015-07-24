var TitleView = Backbone.View.extend({
  el: '<h1>', //<> say "make a new h1 element"
  //without them it looks for an exisiting one
  initialize: function(){
    this.render();
  },
  render: function(){
    //remember el becomes $el
    this.$el.text('How is the weather?');
  }
})