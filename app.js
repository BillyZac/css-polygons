function Point(x, y) {
  this.x = x
  this.y = y
}





var p1 = new Point(50, 30)
console.log(p1)

// State 1
$('.shard').css('-webkit-clip-path', 'polygon('+ p1.x + '% ' + p1.y + '% ,30% 0% ,0% 50%)')

p1.x = 10
$('.shard').click().css('-webkit-clip-path', 'polygon('+ p1.x + '% ' + p1.y + '% ,30% 0% ,0% 50%)')
