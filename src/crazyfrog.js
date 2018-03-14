var CrazyFrog = function(top, left, timeBetweenSteps, setPosition){
 this.$node = $('<span class="crazyfrog"></span>');
 Dancer.call(this, top, left, timeBetweenSteps, setPosition);

};

CrazyFrog.prototype = Object.create(Dancer.prototype);
CrazyFrog.prototype.constructor = CrazyFrog;