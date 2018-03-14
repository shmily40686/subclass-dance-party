var DragFrog = function(top, left, timeBetweenSteps, setPosition) {
  this.$node = $('<span class="dragfrog"></span>');
  Dancer.call(this, top, left, timeBetweenSteps, setPosition);
  this.shouldLineUp = true;
};

DragFrog.prototype = Object.create(Dancer.prototype);
DragFrog.prototype.constructor = DragFrog;
