//icon
const icon = document.getElementById('icon');
//colors
const red1 = document.getElementById('red1');
const red2 = document.getElementById('red2');
const orange1 = document.getElementById('orange1');
const orange2 = document.getElementById('orange2');
const orange3 = document.getElementById('orange3');
const yellow1 = document.getElementById('yellow1');
const yellow2 = document.getElementById('yellow2');
const yellow3 = document.getElementById('yellow3');
const lime1 = document.getElementById('lime1');
const lime2 = document.getElementById('lime2');
const cyan1 = document.getElementById('cyan1');
const cyan2 = document.getElementById('cyan2');
const cyan3 = document.getElementById('cyan3');
const blue1 = document.getElementById('blue1');
const blue2 = document.getElementById('blue2');
const blue3 = document.getElementById('blue3');
const blue4 = document.getElementById('blue4');
const lightgray1 = document.getElementById('lightgray1');
const gray1 = document.getElementById('gray1');
const hightlighted1 = document.getElementById('hightlighted1');
//input and output
const input = document.getElementById('input');
const output = document.getElementById('output');

//translate simple text to discord colored text
var eventList = ["input", "click", "focus"];

for (event of eventList) {
	input.addEventListener(event, function() {
//red1
		if (red1.checked == true) {
			output.value = "```diff\n\- " + input.value.replace(/\n/g, '\n- ') + "\n```";
		}
//orange1
		if (orange1.checked == true) {
			output.value = "```arm\n" + input.value.replace(/\s/g, '_') + "\n```";
		}
//orange2
		if (orange2.checked == true) {
			output.value = "```css\n[" + input.value.replace(/\n/g, ']\n[') + "]\n```";
		}
//orange3
		if (orange3.checked == true) {
			output.value = "```cs\n# " + input.value + "\n```";
		}
//yellow1
		if (yellow1.checked == true) {
			output.value = "```fix\n" + input.value + "\n```";
		}
//yellow2
		if (yellow2.checked == true) {
			output.value = "```apache\n" + input.value.replace(/ /g, '_') + "\n```";
		}
//yellow3
		if (yellow3.checked == true) {
			output.value = "```autohotkey\n%" + input.value.replace(/\n/g, '%\n%').replace(/ /g, '_') + "%\n```";
		}
//lime1
		if (lime1.checked == true) {
			output.value = "```diff\n! " + input.value.replace(/\n/g, '\n! ') + "\n```";
		}
//lime2
		if (lime2.checked == true) {
			output.value = "```diff\n+ " + input.value.replace(/\n/g, '\n+ ') + "\n```";
		}
//cyan1
		if (cyan1.checked == true) {
			output.value = "```yaml\n" + input.value + "\n```";
		}
//cyan2
		if (cyan2.checked == true) {
			output.value = "```yaml\n\'" + input.value.replace(/\n/g, '\'\n\'') + "\'\n```";
		}
//cyan3
		if (cyan3.checked == true) {
			output.value = "```yaml\n\"" + input.value.replace(/\n/g, '\"\n\"') + "\"\n```";
		}
//blue1
		if (blue1.checked == true) {
			output.value = "```asciidoc\n" + input.value.replace(/\n/g, ' ') + "\n----\n```";
		}
//blue2
		if (blue2.checked == true) {
			output.value = "```css\n." + input.value.replace(/\n/g, '\n.').replace(/ /g, '_') + "\n```";
		}
//blue3
		if (blue3.checked == true) {
			output.value = "```asciidoc\n= " + input.value.replace(/\n/g, '\n= ') + "\n```";
		}
//blue4
		if (blue4.checked == true) {
			output.value = "```ini\n[" + input.value.replace(/\n/g, ']\n[') + "]\n```";
		}
//lightgray1
		if (lightgray1.checked == true) {
			output.value = "```\n" + input.value + "\n```";
		}
//gray1
		if (gray1.checked == true) {
			output.value = "```YAML\n# " + input.value.replace(/\n/g, '\n# ') + "\n```";
		}
//hightlighted1
		if (hightlighted1.checked == true) {
			output.value = "```tex\n$ " + input.value.replace(/\n/g, '\n$ ') + "\n```";
		}
	})
}

function checkBox() {
	input.focus();
}

$(document).ready(function() {
	$("#copy").click(function() {
		$("#output").select();
		document.execCommand("copy");
		document.getSelection().removeAllRanges();
	});
});


$(document).ready(function() {
	$("#clear").click(function() {
		$("#input").select();
		document.getSelection().deleteFromDocument();
		document.getElementById('input').value = "";
    document.getElementById('input').blur();
    document.getElementById('input').focus();
	});
});

$(document).ready(function() {
	$("#clear-all").click(function() {
		$("#input").select();
		document.getSelection().deleteFromDocument();
		document.getElementById('input').innerHTML = "";
		$("#output").select();
		document.getSelection().deleteFromDocument();
		document.getElementById('output').innerHTML = "";
		var radio = document.querySelector('input[type=radio][name=radio]:checked');
		radio.checked = false;
    document.getElementById('input').focus();
    document.getElementById('input').blur();
	});
});

//input ve output alanını yeniden boyutlandırma
function setsize() {
	input.style.height = output.style.height;
	input.style.width = output.style.width;
}
setsize()
new ResizeObserver(setsize).observe(output)

//change icon
let arr = ["palette", "opacity" , "format_paint" ];
let number = 3; // kaç renk istiyorsanız
let count = 1; // adım

function next_icon() {
  document.getElementById("icon").innerHTML = arr[count];
  count++;
  if (count == number) count = 0;
}