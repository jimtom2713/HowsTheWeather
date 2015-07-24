var AppView = Backbone.View.extend({
  //what do we need to extend?
  //Three diferent things for views **
    //target element
      //bind a backbone view to the div on the html page
  // $el: $('#app') //one way, but not the best
  el: '#app', //takes advantage of backbone to turn it into $el and jQuery

  initialize: function(){
    this.title = new TitleView();
    this.input = new InputView({
      collection: this.collection
    });
    this.list = new ListView({
      collection: this.collection
    });
    this.render();
  },

  render: function(){
    //we append the title view dom node to the AppView dom  node
    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
      ]);
  }
});