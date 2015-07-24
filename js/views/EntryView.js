var EntryView = Backbone.View.extend({

  className: 'entry', //creates new div with class = 'entry'

  template:  _.template('<p>It is currently <%= weather %> in <%= city %>.</p>'),

  initialize: function(){
    this.render();
  }, 

  render: function(){
    //render the weather paragraph
    var html = this.template({
      'weather': this.model.get('weather'),
      'city': this.model.get('city')
    });
    //compile the template and then put it into the view html
    this.$el.html(html);
  }
})