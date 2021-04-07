const trafficLightEl = document.querySelectorAll('#trafficLight'),
	  colorArray = ['green', 'yellow', 'red'];

let flag = -1;

trafficLightEl.forEach(item => {
	item.addEventListener('click', () => {

		trafficLightEl.forEach(ball => {
			ball.style.background = 'black';
		})

		flag += 1;
		if (flag >= trafficLightEl.length) {
			flag = 0;
		}

		trafficLightEl[flag].style.background = colorArray[flag];
	});
});	


// function makeYellow() {
//     		trafficLightEl[flag].style.background = ('yellow');
//     		trafficLightEl[flag].removeEventListener('click', makeYellow);
//     		trafficLightEl[flag].addEventListener('click', makeRed);
// 		}

// 		item.addEventListener('click', makeYellow);

// 		function makeGreen() {
//     		trafficLightEl[flag].style.background = ('green');
//     		trafficLightEl[flag].removeEventListener('click', makeGreen);
//     		trafficLightEl[flag].addEventListener('click', makeYellow);
// 		}

// 		item.addEventListener('click', makeGreen);
	
// 		function makeRed() {
//     		trafficLightEl[flag].style.background = ('red');
//     		trafficLightEl[flag].removeEventListener('click', makeRed);
//     		trafficLightEl[flag].addEventListener('click', makeGreen);
// 		}

// 		item.addEventListener('click', makeRed);