document.addEventListener('DOMContentLoaded', () => {

	const formField = document.getElementById('registrar');
	const inputField = document.getElementsByTagName('INPUT')[0];
	const mainDiv = document.querySelector('.main');
	const ulInvitedList = document.getElementById('invitedList');
	const div = document.createElement('DIV');
	const filterLabel = document.createElement('LABEL');
	const filterCheckBox = document.createElement('INPUT');

	filterLabel.textContent = "Hide those, who haven't responded";
	filterCheckBox.type = "checkbox";
	div.appendChild(filterCheckBox);
	div.appendChild(filterLabel);

	mainDiv.insertBefore(div, ulInvitedList);

	filterCheckBox.addEventListener('change', e => {

		const isChecked = e.target.checked;
		const listElements = ulInvitedList.children;

		if (isChecked) {

			for (let i = 0; i < listElements.length; i++) {
				
				let li = listElements[i];
				if (li.className != "responded") {

					li.style.display = "none";
				}
			}
		}
		else {
			for (let i = 0; i < listElements.length; i++) {
				
				let li = listElements[i];
				li.style.display = "";
				
			}
		}
	});


	function createLI(userInput) {
		// body...

		function createElement(elementName, property, value){

			const element = document.createElement(elementName);
			element[property] = value;
			liElement.appendChild(element);
			return element;
		}

		let liElement = document.createElement("LI", );

		const span = createElement("span", "textContent", userInput);
		
		const label = createElement('LABEL', 'textContent', 'confirmed');
		
		const checkBox = createElement('INPUT', 'type', 'checkbox');
		
		label.appendChild(checkBox);
		
		const editButton = createElement('BUTTON', 'textContent', 'edit');
		
		const removeButton = createElement('BUTTON', 'textContent', 'remove');
		
		
		return liElement;
	}

	formField.addEventListener("submit", e => {

		e.preventDefault();

		const userInput = inputField.value;
		inputField.value = '';	
		let liElement = createLI(userInput);

		ulInvitedList.appendChild(liElement);
	});

	ulInvitedList.addEventListener('change', e => {

		const checkbox = e.target;
		const checked = checkbox.checked;
		let liElement = checkbox.parentNode.parentNode;

		if (checked) {

			liElement.className = "responded";
		} 
		else {
			liElement.className = "";
		}
	});

	ulInvitedList.addEventListener('click', e => {

		if (e.target.tagName === "BUTTON") {

			const li = e.target.parentNode;
			const ul = li.parentNode;

			if (e.target.textContent === "remove") {
				ul.removeChild(li);
			}
			else if(e.target.textContent === "edit"){

				const span = li.firstElementChild;
				const input = document.createElement('INPUT');
				input.type = "text";
				input.value = span.textContent;
				li.insertBefore(input, span);
				li.removeChild(span);
				e.target.textContent = "save";
				
			}
			else if(e.target.textContent === "save"){

				const input = li.firstElementChild;
				const span = document.createElement('SPAN');
				span.textContent = input.value;
				li.insertBefore(span, input);
				li.removeChild(input);
				e.target.textContent = "edit";
				
			}
		} 
	});

});//end of DOMContentLoaded
