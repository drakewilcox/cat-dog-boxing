$(document).ready(function()	{
  $("button").click(function()	{
		$("ul#cat-list").prepend("<li>MEOW</li>");
		$("ul#dog-list").prepend("<li>BARK!</li>");
	});
	$(".catimg").click(function(){
		$("#catimg").toggle()
		$("#catimg2").toggle()
	})
});
