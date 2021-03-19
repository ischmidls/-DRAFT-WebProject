// script.js
alert("Recieved File!");

let form = document.getElementById('fileupload')  
form.addEventListener(
	'change', 
	function () {
		var fr = new FileReader(); 
		fr.onload = function () { 
			let contents = document.getElementById('contents')
			contents.textContent = this.result;};
            fr.readAsText(this.files[0]);
        }
    );