var Weather = Backbone.Collection.extend({
  //what kind of model does this collection hold?
  model: WeatherEntry,

  addNewWeatherEntry: function(zipcode){
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data){
        //will create a new model and give it properties
        this.add({
          'zipcode': zipcode,
          'weather': data.main.temp,
          'city': data.name
        });
      }.bind(this));
  }
});
