// Create a timeline
// ====================
var tl = new TimelineMax();

var _figureShMobile0 = document.getElementById("figure-sh-mobile-0"),
  _figureShMobile1 = document.getElementById("figure-sh-mobile-1"),
  _figureShMobile2 = document.getElementById("figure-sh-mobile-2"),
  _figureShMobile3 = document.getElementById("figure-sh-mobile-3"),
  _figureShMobile4 = document.getElementById("figure-sh-mobile-4"),
  _figureShMobile5 = document.getElementById("figure-sh-mobile-5"),
  _figureShMobile6 = document.getElementById("figure-sh-mobile-6"),
  _figureShMobile7 = document.getElementById("figure-sh-mobile-7"),
  _figureShMobile8 = document.getElementById("figure-sh-mobile-8"),
  _figureShMobile9 = document.getElementById("figure-sh-mobile-9"),
  _figureShMobile10 = document.getElementById("figure-sh-mobile-10"),
  _figureShMobile11 = document.getElementById("figure-sh-mobile-11");

var _lineBlue0 = document.getElementById("line-sh-mobile-blue-0"),
  _lineBlue1 = document.getElementById("line-sh-mobile-blue-1"),
  _lineBlue2 = document.getElementById("line-sh-mobile-blue-2"),
  _lineBlue3 = document.getElementById("line-sh-mobile-blue-3"),
  _lineBlue4 = document.getElementById("line-sh-mobile-blue-4"),
  _lineBlue5 = document.getElementById("line-sh-mobile-blue-5"),
  _lineBlue6 = document.getElementById("line-sh-mobile-blue-6"),
  _lineBlue7 = document.getElementById("line-sh-mobile-blue-7"),
  _lineBlue8 = document.getElementById("line-sh-mobile-blue-8");

var _textF = document.querySelectorAll(".text-sh-f"),
  _textS = document.querySelectorAll(".text-sh-s");

//
// ====================

// variable
// ====================


//
// ====================


// Main opt
// ====================
tl.set("#platform-mobile-svg", {
  visibility: "visible"
});
tl.set(
  [
    _figureShMobile0, _figureShMobile1, _figureShMobile2, _figureShMobile3, _figureShMobile4,
    _figureShMobile5, _figureShMobile6, _figureShMobile7, _figureShMobile8, _figureShMobile9,
    _figureShMobile10, _figureShMobile11
  ], {
    transformOrigin: 'center'
  }
);
tl.set(
  [
    _lineBlue0, _lineBlue1, _lineBlue2, _lineBlue3, _lineBlue4,
    _lineBlue5, _lineBlue6, _lineBlue7, _lineBlue8,
    _figureShMobile6
  ], {
    opacity: 0
  }
);
tl.set(
  [
    _textF, _textS
  ], {
    visibility: "hidden"
  }
);
tl.set(
  [
    _figureShMobile6
  ], {
    x: "-60px"
  }
);
//
// ================


// Animate
// ====================
tl
  .to(_figureShMobile0, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile0, 0.3, {scale: 1})

  .fromTo(_lineBlue0, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile1, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile1, 0.3, {scale: 1})

  .to(_figureShMobile2, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile2, 0.3, {scale: 1})

  .fromTo(_lineBlue1, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .staggerTo(_textF, 0.75, {visibility: "visible"}, 0.035)

  .fromTo(_lineBlue2, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile3, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile3, 0.3, {scale: 1})

  .to(_figureShMobile4, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile4, 0.3, {scale: 1})

  .fromTo(_lineBlue3, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile5, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile5, 0.3, {scale: 1})

  .fromTo(_lineBlue4, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile6, 0.35, {opacity:1, x: "0", ease: Power1.easeOut})

  .fromTo(_lineBlue5, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile7, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile7, 0.3, {scale: 1})

  .fromTo(_lineBlue6, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile8, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile8, 0.3, {scale: 1})

  .to(_figureShMobile9, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile9, 0.3, {scale: 1})

  .fromTo(_lineBlue7, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .to(_figureShMobile10, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile10, 0.3, {scale: 1})

  .to(_figureShMobile11, 0.35, {opacity:1, scale: 1.1, ease: Power1.easeOut})
  .to(_figureShMobile11, 0.3, {scale: 1})

  .fromTo(_lineBlue8, 0.5, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .staggerTo(_textS, 0.75, {visibility: "visible"}, 0.035);
//
// ====================