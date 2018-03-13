// Get all the elements that we need to use.
const tf = document.getElementById("textField");
const button = document.getElementById("addbutton");
const list = document.getElementById("list");

// Add Event handler to button
button.onclick = function() {
	// Get value of TextField
	const value = tf.value;
	if (value.trim().length != 0) {
		const li = document.createElement("li");
		li.innerHTML = value;
		list.prepend(li);
	} else {
	 
	 alert("Must not be empty")
	}
	
	tf.value ="";
}