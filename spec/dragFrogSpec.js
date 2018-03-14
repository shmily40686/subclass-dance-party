 describe('DragFrog', function() {

  var dragFrog;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dragFrog = new DragFrog(10, 20, timeBetweenSteps, false);
  });
  
  describe('dance', function() {
    it('should have the expected class', function() {
      console.log(dragFrog.$node);
      expect(dragFrog.$node.attr('class')).to.equal('dragfrog' );
    });
  });
});