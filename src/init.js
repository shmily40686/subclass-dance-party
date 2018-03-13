var cornerButtonClicked = false;
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      true
    );
    $('body').append(dancer.$node);
  });
   $('.addCrazyFrogButton').on('click', function(event) {
   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() / 2,
      $("body").width() / 2,
      Math.random() * 1000,
      true
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addCornerDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (cornerButtonClicked === false) {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000,
        false,
        true
      );

      var dancer2 = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000,
        false,
        false
      );
      window.dancers.push(dancer);
      window.dancers.push(dancer2);
      $('body').append(dancer.$node);
      $('body').append(dancer2.$node);
    } else {
      $('.cornerdancerleft').remove('.cornerdancerleft');
      $('.cornerdancerright').remove('.cornerdancerright');
    }
    cornerButtonClicked = !cornerButtonClicked;
    console.log(window.dancers);
  });

  $('.lineUpButton').on('click', function(event) {
    var widthBetweenDancers = $('body').width() / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp($('body').height()/2, i * widthBetweenDancers);
    }
  });
  
  $('.danceTogetherButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var closest = Infinity;
      for (var j = 0; j < window.dancers.length; j++) {
        var dancerBox = window.dancers[i].getBoundingClientRect();
        var dancerBox2 = window.dancers[j].getBoundingClientRect();
        var dancerLoc = [dancerBox.top - dancerBox.bottom/2, dancerBox.left - dancerBox.right/2];
        var dancerLoc2 = [dancerBox2.top - dancerBox2.bottom/2, dancerBox2.left - dancerBox2.right/2];
        var distance = [dancerLoc[0] - dancerLoc2[0]/2, dancerLoc[1] - dancerLoc2[1]/2];
        if(dancerLoc - dancerLoc2 < closest){
          closest = window.dancers[i].position - window.dancers[j].position;
          
        }
      }
    }
  });

  $('.screenWipeButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000,
        true
      );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    var animation = function() {
      //run animation code on the face here
    }
    // $( '.screenwipe' ).effect( "size", {
    //   to: { width: 1260, height: 1260 }
    // }, 1000 );
    animation();
  });
});