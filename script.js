$(document).ready(function() {
	$("#p1").hide();
	$("#img1").click(function() {
	  $("#p1").toggle();
	})
 
  });
  $(document).ready(function() {
	 $("#p2").hide();
	 $("#img2").click(function() {
	   $("#p2").toggle();
	 })
  });
  $(document).ready(function() {
	 $("#p3").hide();
	 $("#img3").click(function() {
	   $("#p3").toggle();
	 })
  });
  $(document).ready(function() {
	 $("#p4").hide();
	 $("#img4").click(function() {
	   $("#p4").toggle();
	 });
  });
const form = document.querySelector("#cont");
const input = "https://www.youtube.com/watch?v=4KTB0MPHHrg"
function validate(){
	form.addEventListener("submit", function(button){
		button.preventDefault();
		const jsform = new FormData(form);
		if(jsform.get("username") == "kelicaleb" && jsform.get("password") == "123"){
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your have been subscribed',
				showConfirmButton: false,
				timer: 1500
			  })
			
		}
		else if(jsform.get("username") == "Hilary" && jsform.get("password") == "123"){
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your have been subscribed',
				showConfirmButton: false,
				timer: 1500
			  })
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'You have not been subscribed !',
			  })
		}
	
	})
}
const fom = document.querySelector("#control")
fom.addEventListener("submit", function(btn){
	btn.preventDefault();
	const jsform = new FormData(fom)
	if(jsform.get("email") && jsform.get("email") && jsform.get("password")){
		Swal.fire({
            title: 'Click save to save in your deatils ' ,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'Your details have been succesfully saved!', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
	    })
	}
	else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ensure all fields are filled !',
          })
    }
	
})

	
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

