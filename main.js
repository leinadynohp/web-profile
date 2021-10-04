$("body").scroll( () => { 
  if ($(window).outerWidth() < 1024) {
    if ($("body").scrollTop() === 0) {
      $(".navigation-s").css("backgroundColor", "transparent")
    } else {
      $(".navigation-s").css("backgroundColor", "#222831")
    }
  } else {
    if ($("body").scrollTop() === 0) {
      $(".navigation").css("backgroundColor", "transparent")
    } else {
      $(".navigation").css("backgroundColor", "#222831")
    }
  }
});


function menuAppear() {
  var topPosition = $("body").scrollTop();
  $(".dropdown-contents").css("top", topPosition + "px")
  $(".dropdown-contents").css("display", "block");
}

function menuDisappear() {
  $(".dropdown-contents").css("display", "none");
}

function openExpender(idName) {
  /* 
    expending the description section for each project.
    each description sections are distinguished by their ids. 
  */
  var arrows = $("#" + idName).find(".expander-icons");
  var texts = $("#" + idName).find(".expander-text");
  if ($("#" + idName + "-desc").css("height") === 0 +"px") {
    $("#" + idName + "-desc").css("height", "calc(40vh + 2vh)");
    texts.html("Collaps")
    for (i=0; i < $(arrows).length; i++) {
      $(arrows[i]).css("transform","rotate(180deg)")
    }
  } else {
    $("#" + idName + "-desc").css("height", "0vh")
    texts.html("Expand")
    for (i=0; i < $(arrows).length; i++) {
      $(arrows[i]).css("transform","rotate(0deg)")
    }
  }
}


// <=======================================================================>
//                     Slider Animation for Skills Section. 
// <=======================================================================>
// initial index value for upper and lower docks
var firstIndex = 1
var secondIndex = 1
function moveOuterDock(idName, index) {
  /* 
    moving the inner docks according to the index number being parsed from "nextSkill()" function.
  */
  var innerDockLengthUpper = $(".inner-dock-upper").length 
  var innerDockWidthInVwUpper = ($("#upper-dock").innerWidth() / innerDockLengthUpper) * 100 / $(window).outerWidth() // returns the width of each inner dock in "vw" unit.
  var nextDockUpper = ("-" + (innerDockWidthInVwUpper * (index -1)) + "vw")

  var innerDockLengthLower = $(".inner-dock-lower").length 
  var innerDockWidthInVwlower = ($("#lower-dock").innerWidth() / innerDockLengthLower) * 100 / $(window).outerWidth() // returns the width of each inner dock in "vw" unit.
  var nextDockLower = ("-" + (innerDockWidthInVwlower * (index -1)) + "vw")

  if (idName === "next-btn-upper" || idName === "prev-btn-upper") {
    $(".inner-dock-upper").css("transform", "translateX(" + nextDockUpper + ")")
  } else if (idName === "next-btn-lower" || idName === "prev-btn-lower") {
    $(".inner-dock-lower").css("transform", "translateX(" + nextDockLower + ")")
  } else {
    console.log (idName, index)
  }
}

function activeDot(idName, index) {
  /* 
    each dot activates according to the index number being parsed from "nextSkill()" function
    the index starts from 1
  */
  var dotPosition = index - 1
  if (idName === "next-btn-upper" || idName === "prev-btn-upper") {
    $(".dot-upper").removeClass("dot-active");
    $($(".dot-upper")[dotPosition]).addClass("dot-active");
  } else if (idName === "next-btn-lower" || idName === "prev-btn-lower") {
    $(".dot-lower").removeClass("dot-active");
    $($(".dot-lower")[dotPosition]).addClass("dot-active");
  }
}

function nextSkill(idName) {
  /* 
    increase the value of "index" and parse the value to related funtions.
    "moveInnerDock()" function handles the movement of inner dock.
    "activeDot()" function handles the color chnage of dots.
    if the value of index exceeds the length of inner dock, the index is reset to 1 
  */ 
  if (idName === "next-btn-upper") {
    firstIndex++;
    if (firstIndex > $(".inner-dock-upper").length) {
      firstIndex = 1
    } 
    console.log (idName, firstIndex)
    moveOuterDock(idName, firstIndex)
    activeDot(idName, firstIndex)
  } else if (idName === "next-btn-lower") {
    secondIndex++;
    if (secondIndex > $(".inner-dock-lower").length) {
      secondIndex = 1
    }
    console.log (idName, secondIndex)
    moveOuterDock(idName, secondIndex)
    activeDot(idName, secondIndex)
  } else {
    console.log (idName)
  }
}

function prevSkill(idName) {
  /* 
    decrease the value of "index" and parse the value to related functions.
    if the value of index subceed 1, the starting value, the index is reset to 5
  */
  if (idName === "prev-btn-upper") {
    firstIndex--;
    if (firstIndex < 1 ) {
      firstIndex = $(".inner-dock-upper").length
    }
    console.log (idName, firstIndex)
    moveOuterDock(idName, firstIndex)
    activeDot(idName, firstIndex)
  } else if (idName === "prev-btn-lower") {
    secondIndex--;
    if (secondIndex < 1) {
      secondIndex = $(".inner-dock-lower").length
    }
    console.log (idName, secondIndex)
    moveOuterDock(idName, secondIndex)
    activeDot(idName, secondIndex)
  }
}