var point = {
  x: 50,
  y: 30
}

// $('.shard').click().toggleClass('state1')

$('.shard').css('-webkit-clip-path', 'polygon('+ point.x + '% ' + point.y + '% ,30% 0% ,0% 50%)')
