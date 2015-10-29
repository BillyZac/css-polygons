function Point(x, y) {
  this.x = x
  this.y = y
}



var p1 = new Point(50, 30)
console.log(p1)

// State 1
$('.shard').css('-webkit-clip-path', 'polygon('+ p1.x + '% ' + p1.y + '% ,30% 50% ,0% 50%)')

// Show state 2 when the window is scrolled
$( window ).scroll(function() {
  p1.x = 7
  p1.y = 20
  $( ".shard" ).css('-webkit-clip-path', 'polygon('+ p1.x + '% ' + p1.y + '% ,30% 50% ,0% 50%)')
})
