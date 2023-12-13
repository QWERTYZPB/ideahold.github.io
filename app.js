// const res = document.getElementById('res')
// const inp1 = document.getElementById('inp1')
// const inp2 = document.getElementById('inp2')

// const plus = document.getElementById('but1')
// const minus = document.getElementById('but2')
// const ymn = document.getElementById('but3')
// const razd = document.getElementById('but4')

// const ravno = document.getElementById('ravno')

// let action = '+'



// plus.onclick = function (){
//     action = '+'
// }

// minus.onclick = function (){
//     action = '-'
// }
// ymn.onclick = function (){
//     action = '*'
// }
// razd.onclick = function (){
//     action = '/'
// }


// function schet(inp1, inp2, action){
//     if (action == "+"){
//         const sum  = Number(inp1.value) + Number(inp2.value)
//         return sum
//     }else if (action == "-"){
//         const razn  = Number(inp1.value) - Number(inp2.value)
//         return razn
//     }else if (action == "*"){
//         const y  = Number(inp1.value) * Number(inp2.value)
//         return y
//     }else if (action == "/"){
//         const d  = Number(inp1.value) / Number(inp2.value)
//         return d
//     }
// }


// ravno.onclick = function(){
//     res.textContent = schet(inp1, inp2, action)

// }





let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);







