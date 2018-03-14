describe('CornerDancer', function() {

  var cornerDancer, rightCornerDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cornerDancer = new CornerDancer(10, 20, timeBetweenSteps, false, true);
    rightCornerDancer = new CornerDancer(10, 20, timeBetweenSteps, false, false);
  });
  
  describe('dance', function() {
    it('should have the expected class', function() {
      console.log(cornerDancer.$node);
      expect(cornerDancer.$node.attr('class')).to.equal('cornerdancerleft' );
      expect(rightCornerDancer.$node.attr('class')).to.equal('cornerdancerright' );
    });
  });
});