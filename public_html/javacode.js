/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var virsr = document.getElementsByClassName("virsraksti");
var i;

for (i = 0; i < virsr.length; i++) {
  virsr[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


$(document).ready(function(){
  $("#change").click(function(){  
    $("#changethis").toggle(500);
  });
});

$(document).ready(
	  function(){
		$(".forma").validate({
		  rules: {
			vards: {
			  required: true
			},
			vecums: {
			  required: true,
			  range: [13, 120]
			},
			email: {
			  email: true,
                          required: true
			}
		  }
		});
	  }
	);
