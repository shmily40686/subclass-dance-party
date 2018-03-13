var CornerDancer = function(top, left, timeBetweenSteps, setPosition, isLeft) {
  this.$node = isLeft ? $('<span class="cornerdancerleft"></span>') : $('<span class="cornerdancerright"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, setPosition);
};

CornerDancer.prototype = Object.create(Dancer.prototype);

CornerDancer.prototype.constructor = CornerDancer;

CornerDancer.prototype.lineUp = function() {
  
}