
/* SHOW & HIDE MODAL (POPUP)*/

/* Step1: Target modal element*/
const myModal = document.getElementById("modalcontent"); // get modal from page.
const openModalbtn = document.getElementById("openModal");
const closeModal = document.getElementById("closebtn");


/* Step2: //Show modal (popup) */


openModalbtn.onclick = function() {
    myModal.style.display = "block"; 
};



/* Step3: Hide Modal in 3 seconds*/
/*
closeModal.onclick = function() {
        myModal.style.display = "none";
 };
*/

/* IF Submission successful, call functions below:*/

/*
showModal();
setTimeout(); 
*/

/* JQUERY - MODAL (POPUP)
        <script>
            $(document).ready(function(){
                // Open modal on page load
                $("#myModal").modal('show');

                // Close modal on button click
                $(".btn").click(function(){
                    $("#myModal").modal('hide');
                });
            });
    </script>


 * /

/*BOOTSTRAP MODAL DEMO
 *   <!-- MODAL SECTION: THIS MODAL IS DISPLAYED AFTER SUCCESSFUL FORM SUBMISSION-->
		<!--========================================================================-->
		<div class="bs-example">   
			<!-- Modal HTML -->
			<div id="gxModal" class="modal fade" tabindex="-1">
				<div class="modal-dialog">
					<div class="modal-content">
		
						<div class="modal-header">
							<h5 class="modal-title">Your contact information have been successfully submitted.</h5>
						</div>
		
						<div class="modal-body">
							<p>Thank you.</p>
						</div>
		
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
 */






/* POPUP MODAL JAVASCRIPT.
 // Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 */ 
 