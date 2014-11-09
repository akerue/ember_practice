App = Ember.Application.create();

App.ApplicationController = Ember.ObjectController.extend({
    actions: {
      front: function() {
        console.debug("front");
      },
    right: function() {
        console.debug("right");
      },
    left: function() {
        console.debug("left");
      },
    back: function() {
        console.debug("back");
      }
    }
});

