$(function() {
  console.log("hey");
  $("img").click(function() {
	console.log(this);
	$(this).toggleClass("spin");	
  });
  
  
});

