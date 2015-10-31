function Point(x, y) {
  this.x = x
  this.y = y
}

function Triangle(p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
}

var p1 = new Point(10, 30);
var p2 = new Point(70, 20);
var p3 = new Point(50, 60);

var t1 = new Triangle(p1, p2, p3);
// var t2 = new Triangle(p4, p1, p5);

// State 1
// $('.shard').css('-webkit-clip-path', 'polygon('
//   + t1.p1.x + '% ' + t1.p1.y + '% ,'
//   + t1.p2.x + '% ' + t1.p2.y + '% ,'
//   + t1.p3.x + '% ' + t1.p3.y + '%)')

var drawShape = function(t) {
$('.shard').css('-webkit-clip-path', 'polygon('
  + t.p1.x + '% ' + t.p1.y + '% ,'
  + t.p2.x + '% ' + t.p2.y + '% ,'
  + t.p3.x + '% ' + t.p3.y + '%)')
}

drawShape(t1)

// Show state 2 when the window is scrolled
$( window ).scroll(function() {
  p1.x = 7
  p1.y = 20
  $( ".shard" ).css('-webkit-clip-path', 'polygon('+ p1.x + '% ' + p1.y + '% ,30% 50% ,0% 50%)')
})


// var points = [];
//
// for (var i = 0; i < 100; i++) {
//   var p = new Point(50, 30);
//   points.push(p);
// }
//
