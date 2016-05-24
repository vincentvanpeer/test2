import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON('https://itunes.apple.com/lookup?callback=?&id=' + params.track_id);
  }
});
