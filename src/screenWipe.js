var ScreenWipe = function(top, left, timeBetweenSteps, setPosition) {
  this.$node = $('<span class="screenwipe"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, setPosition);
};

ScreenWipe.prototype = Object.create(Dancer.prototype);
ScreenWipe.prototype.constructor = ScreenWipe;
