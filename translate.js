
function gototransition()
{
	function animate();
}
var pos = 250;
function animate()
{
		var x= document.getElementById('image');
		var t= setInterval(move,15);
		function move()
		{
		x.style.left= pos+'px';
		} 
