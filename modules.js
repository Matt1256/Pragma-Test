//Variables declared outside so it doesn't change when add function is clicked
var num = 1;
var sortList = document.getElementsByTagName('li');

class headings extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<title>Pragma Test</title>
			<link rel="stylesheet" href="style.css" />
		
			<body>
				<div>
					<h1>My To Do List</h1>
					<input type="text" id="add" placeholder="Add item" />
					<button onclick="add()" class="addBtn" id="btn">Add</button>
					<button onclick="destroy()" class="addBtn">Delete</button>
					<input type="text" id="search" onkeyup="search()" placeholder="Search" />
					<button id="all" onclick="selectAll()">Select all</button>
				</div>
		
				<div id="get">
					<ul id="list"></ul>
				</div>
			</body>`;
	}
}

customElements.define('heading-element', headings);

var selectAll = () => {
	var select = document.getElementById('get').getElementsByTagName('input');

	for (var i = 0; i < select.length; i++) {
		select[i].checked = true;
	}
};

var destroy = () => {
	//Adding the template tag to hide data
	var hide = document.createElement('template');
	var item = document.getElementById('get').getElementsByTagName('input');

	//Going through each li element to check if it's checked
	for (var i = 0; item.length > 0; i++) {
		var id = document.getElementById('item' + i);

		if (id.checked) {
			//Hide data if it is checked
			hide.appendChild(document.getElementById('hide' + i));
		}
	}

	//Sort ID of the li tags
	for (var j = 0; j < item.length; j++) {
		sortList[j].setAttribute('id', 'hide' + j);
		item[j].setAttribute('id', 'item' + j);
	}
};

var add = () => {
	//Creating necessary elements to add to the list
	var li = document.createElement('li');
	var input = document.getElementById('add').value;
	var t = document.createTextNode(input);
	var a = document.createElement('a');
	var c = document.createElement('input');

	//Setting attributes of elements for formatting and functionality
	c.setAttribute('type', 'checkbox');
	li.setAttribute('id', 'hide' + sortList.length);
	c.setAttribute('id', 'item' + sortList.length);
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
				ev => {
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
};

var search = () => {
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
};
