function destroy() {
	//Adding the template tag to hide data
	var hide = document.createElement('template');
	var sortList = document.getElementsByTagName('li');
	var item = document.getElementById('get').getElementsByTagName('input');

	//Going through each li element to check if it's checked
	for (var i = 0; i < sortList.length; i++) {

		if (item[i].checked) {
			//Hide data if it is checked
			hide.appendChild(document.getElementById('hide' + i));

			//Sort ID's of li and input tags 
			for (var j = 0; j < sortList.length; j++) {
				sortList[j].setAttribute('id', 'hide' + j);
				item[j].setAttribute('id', 'item' + j);
			}
		}
	}
}

//Variables declared outside so it doesn't change when add function is clicked
var num = 1;
var itemID = -1;

function add() {
	//increments so that each item has unique ID
	itemID++;

	//Creating necessary elements to add to the list
	var li = document.createElement('li');
	var input = document.getElementById('add').value;
	var t = document.createTextNode(input);
	var a = document.createElement('a');
	var c = document.createElement('input');

	//Setting attributes of elements for formatting and functionality
	c.setAttribute('type', 'checkbox');
	c.setAttribute('id', 'item' + itemID);
	li.setAttribute('id', 'hide' + itemID);
	a.setAttribute('href', '#');
	a.setAttribute('class', 'text');

	//Adding elements to the list
	li.appendChild(c);
	li.appendChild(a);
	a.appendChild(t);

	//Checking if add text field is empty or not
	if (input == '') {
		alert('You need to enter an activity');
	} else {
		//Adding the text to a list
		document.getElementById('list').appendChild(li);

		//If statement to make sure it only executes once
		if (num == 1) {
			//Creating event for the strike through function
			var list = document.querySelector('ul');
			list.addEventListener(
				'click',
				function(ev) {
					if (ev.target.tagName == 'LI') {
						ev.target.classList.toggle('checked');
					}
				},
				false
			);
			num++;
		}
	}
	document.getElementById('add').value = '';
}

function search() {
	//Declaring variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	ul = document.getElementById('list');
	li = ul.getElementsByTagName('li');

	//Checking whether the keys match the list text
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('a')[0];
		txtValue = a.textContent || a.innerText;

		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}
