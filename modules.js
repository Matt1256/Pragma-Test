function destroy() {
	var hide = document.createElement('template');
	var listLength = document.getElementById('list').getElementsByTagName('li').length;

	for (var i = 1; i < listLength + 1; i++) {
		var item = document.getElementById('item' + i);

		if (item.checked) {
			hide.appendChild(document.getElementById('hide' + i));
		}
	}
}

var num = 1;
var itemID = 0;

function add() {
	itemID++;

	var li = document.createElement('li');
	var input = document.getElementById('add').value;
	var t = document.createTextNode(input);
	var a = document.createElement('a');
	var c = document.createElement('input');

	c.setAttribute('type', 'checkbox');
	c.setAttribute('id', 'item' + itemID);
	li.setAttribute('id', 'hide' + itemID);
	a.setAttribute('href', '#');
	a.setAttribute('class', 'text');

	li.appendChild(c);
	li.appendChild(a);
	a.appendChild(t);

	if (input == '') {
		alert('You need to enter an activity');
	} else {
		document.getElementById('list').appendChild(li);

		if (num == 1) {
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
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	ul = document.getElementById('list');
	li = ul.getElementsByTagName('li');

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
