var table;
var columb = 1;
var line = 0;

function creatTable(){
	table = document.getElementById('myTable');
	table.border = 1;
	table.align = 'center';
	var row = table.insertRow(0);
	document.body.appendChild(table);
}

function addLine(){
	var row = table.insertRow(0);
	for(var i = 0; i < columb; i++){
		var cell = row.insertCell(0);
		cell.ondblclick = function(){
				setText(this);
			 }
	}
	line++;
}

function addColumb(){
	var trs = document.getElementsByTagName('tr');
	for(var i = 0; i < line; i++){
		var cell = trs[i].insertCell();
		cell.ondblclick = function(){
				setText(this);
			 }
	}
	columb++;
}

function setText(td){
	var input = document.createElement('input');
		input.value = td.innerHTML;
		td.innerHTML = '';
		input.type = 'text';
		input.style.width = '60px';
        input.style.height = '30px';
		document.onkeyup = function (e) {
			e = e || window.event;
			if (e.keyCode === 13) {
				var line = input.value;
				td.removeChild(input);
				td.innerHTML = line;
			}
		}
		td.appendChild(input);
}