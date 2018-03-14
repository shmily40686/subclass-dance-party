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
  
  $('.addDragFrogButton').on('click', function(event) {
   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      true
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    
    $( dancer.$node).mousedown(function(event) {
        $( dancer.$node ).on( "mousemove", function( event ) {
          dancer.setPosition(event.pageY - dancer.$node.height()/2, event.pageX - dancer.$node.width()/2);
        });
    });
    
    $( dancer.$node ).mouseup(function(event) {
      $( dancer.$node).off( "mousemove" );
    });
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
    $( '.crazyfrog' ).mouseover(function() {
      var top = $("body").height() * Math.random();
      var left= $("body").width() * Math.random();
      dancer.setPosition(top, left);
    });
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
    var lineUpLength = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].shouldLineUp !== undefined){
        lineUpLength += 1;
      }
    }
    console.log(lineUpLength);
    var widthBetweenDancers = $('body').width() / lineUpLength;
    var temp = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].shouldLineUp !== undefined) {
        window.dancers[i].lineUp($('body').height()/2, temp * widthBetweenDancers); 
        temp += 1;
      }
    }
  });
  
  $('.dancetogether').on('click', function(event) {
    var lineUpLength = 0;
    for(var i = 0; i < window.dancers.length; i++){
      if(window.dancers[i].shouldLineUp !==undefined){
        lineUpLength += 1;
      }
    }
    var heightBetweenDancers = $('body').height() / (lineUpLength / 2);
    var temp = 0;
    var x = 75;
    console.log(lineUpLength/2);
    var half = Math.floor(lineUpLength/2);
    for(var i = 0; i < window.dancers.length; i ++){
      if(window.dancers[i].shouldLineUp !== undefined ){
        window.dancers[i].setPosition(temp * heightBetweenDancers , $('body').width()/2 + x);
        temp += 1;
        if(i + 1 === half){
          console.log("changing");
          x = -x;
          temp = 0;
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