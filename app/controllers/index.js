import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateResults: function() {
      var app = this;
      $.getJSON('https://itunes.apple.com/search?callback=?&term=' + this.get('search') + '&limit=25').done(function( data ) {
        app.set('model', data);
      });
    }
  }
});
