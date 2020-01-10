const knowledge = {
	html: 85,
	css: 85,
	javascript: 90,
	react: 80,
	node: 75,
	express: 85,
	mongo: 80,
	sql: 70,
	angular: 50,
	php: 60
};
const projectInfo = {
	anime: {
		title: 'Anime Info',
		img: '../img/anime.png',
		description: 'Basic HTML template made using SASS and advanced CSS',
		github: 'https://github.com/Mayank-Mishra0110011/Anime-Info',
		stack: 'HTML, CSS, SASS'
	},
	_2048: {
		title: '2048',
		img: '../img/2048.png',
		description: '2048 Game',
		github: 'https://github.com/Mayank-Mishra0110011/2048',
		stack: 'JavaScript, P5.js'
	},
	adventure: {
		title: 'Adventure Game',
		img: '../img/adventure.png',
		description: 'Fantasy game with terrible dialogue. Needs more content!',
		github: 'https://github.com/Mayank-Mishra0110011/Adventure-Fantasy-Game',
		stack: 'JavaScript, P5.js'
	},
	astar: {
		title: 'A Star Algorithm Visualization',
		img: '../img/astar.png',
		description:
			"Visualization of A star path finding algorithm. A* Algorithm is a path finding Algorithm which can be used to find the shortest path between any starting node and goal node. A* can find the path more efficiently than Dijkstra's Algorithm by making use of heuristic function. You can either use the Eucledian distance as a heuristic or use the Manhattan distance by uncommenting the part in the heuristic function. You Can Increase or Decrease the size of the grid, Add obstacles randomly or create your own obstacles by pressing the left mouse button on the cell that you'd like to make as an obstacle. This algorithm is made using arrays, It can be made even more efficient by making the use of a more suitable data structure like a tree to keep track of the neighbours. Diagonal movement is not Added in this code. It's easy to add but I just don't like the diagonal movement, the path does not look that good with diagonal movement as it does without it, of course that is not very practical however.",
		github: 'https://github.com/Mayank-Mishra0110011/A-Star-Path-Finding-Algorithm-Visualiser',
		stack: 'JavaScript, P5.js, P5.dom.js'
	},
	basketball: {
		title: 'BasketBall Game',
		img: '../img/basketball.png',
		description:
			'A very terrible attempt at making a kuroko no basket, basketball game. Just wanted to have fun with pygame library. Not complete, Never will be complete!',
		github: 'https://github.com/Mayank-Mishra0110011/BasketBall-Game',
		stack: 'Python3, pygame'
	},
	bricks: {
		title: 'Bricks Game',
		img: '../img/bricks.png',
		description: 'Bricks game.',
		github: 'https://github.com/Mayank-Mishra0110011/Bricks',
		stack: 'JavaScript, P5.js'
	},
	chess: {
		title: 'Chess',
		img: '../img/chess.png',
		description:
			'A Multiplayer Chess game made using socket.io library. I plan on making an AI to add a vs CPU mode in the game sometime in the future',
		github: 'https://github.com/Mayank-Mishra0110011/Chess',
		stack: 'JavaScript, Express.js, Socket.io'
	},
	commune: {
		title: 'Commune',
		img: '../img/commune.png',
		description: 'A community website with a somewhat reddit like interface.',
		github: 'https://github.com/Mayank-Mishra0110011/Commune',
		stack: 'HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB'
	},
	cube: {
		title: 'Rubix Cube',
		img: '../img/cube.png',
		description:
			"3x3 rotating rubix cube in the browser. 3d Points are projected onto the 2d screen. The main goal was to make an AI solve it, I'll probably add this functionality in future.",
		github: 'https://github.com/Mayank-Mishra0110011/Rubix-Cube',
		stack: 'JavaScript, P5.js'
	},
	dark: {
		title: 'Maze Game',
		img: '../img/dark.png',
		description: 'A Pacmanesque maze puzzle game with ray casting',
		github: 'https://github.com/Mayank-Mishra0110011/Maze-Puzzle',
		stack: 'JavaScript, P5.js'
	},
	pixboard: {
		title: 'PixBoard',
		img: '../img/pixboard.png',
		description:
			'An Image Board application that allows users to upload images, create image boards, search images, comment on images, like images, add images to their board, follow users, send messages to users, view their profile, edit their profile, delete images from board, delete a board, delete a comment, see their liked/created boards, see their liked/uploaded pix',
		github: 'https://github.com/Mayank-Mishra0110011/Pixboard',
		stack: 'JavaScript, CSS, HTML, Node.js, Express.js, React.js, MongoDB'
	},
	dataStruct: {
		title: 'Data Structure Visualization',
		img: '../img/dataStruct.png',
		description:
			'Visualization sketch for various data structures, traversal, searching and sorting. Not Complete Yet!',
		github: 'https://github.com/Mayank-Mishra0110011/Data-Structure-and-Algorithms-Visualized',
		stack: 'JavaScript, P5.js, P5.dom.js'
	},
	dijkstra: {
		title: 'Dijkstra Algorithm Visualization',
		img: '../img/dijkstra.png',
		description: "Visualization sketch of dijkstra's shortest path finding algorithm",
		github: 'https://github.com/Mayank-Mishra0110011/Dijkstra-s-Algorithm-Visualization',
		stack: 'JavaScript, P5.js, P5.dom.js'
	},
	eca: {
		title: 'Elementary Cellular Automata',
		img: '../img/eca.png',
		description: 'Visualization of all elementary cellular automatons',
		github: 'https://github.com/Mayank-Mishra0110011/Elementary-Cellular-Automaton',
		stack: 'JavaScript, P5.js'
	},
	japanese: {
		title: 'Japanese Quiz Game',
		img: '../img/japanese.png',
		description: 'A quiz game to test your hiragana, katakana and vocabulary skills. Need more content!',
		github: 'https://github.com/Mayank-Mishra0110011/Japanese-Language-Quiz-Game',
		stack: 'JavaScript, P5.js'
	},
	math: {
		title: 'Math Visualization',
		img: '../img/math.png',
		description:
			'Visualization sketches for all sorts of fun math stuff: Polynomial sketch, numbers (odds, evens, primes, perfect squares), trigonometric functions, julia set, mandelbrot set, a matrix library cus why not?',
		github: 'https://github.com/Mayank-Mishra0110011/Math-Visualisation',
		stack: 'JavaScript, P5.js'
	},
	shootingGame: {
		title: 'Shooting Game',
		img: '../img/shootingGame.png',
		description:
			"A somewhat decent shooting game. Made using p5.js, p5.dom.js and p5.sound.js. Press 's' to shoot bullets. Press 'a' to move left, 'd' to move right. Press spacebar to jump. In mid air you can press 'a' or 'd' to move in mid air. Recommended that the player holds the 'a' key since the game loops backwards holding key would provide a better mid air left movement. mid air right movement can be achieved with or without holding the 'd' key. Move your mouse around to change the angle of the gun in order to shoot targets at different angles. Nearly full 360 movement of gun is possible. Player can even choose to move the gun in mid air. The Game loops backwards, so make sure to avoid the wall of spikes near the left end of the screen. At the start of the game player will recieve 5 health bars. Each hit by the spiked wall and normal enemies would reduce each health bar by half. Some higher level enemies and final bosses would be able to deplete 1 or more health bar in a single strike. Not Complete Yet!",
		github: 'https://github.com/Mayank-Mishra0110011/Shooting-Game',
		stack: 'JavaScript, P5.js, P5.dom.js, P5.sound.js'
	},
	paint: {
		title: 'Paint',
		img: '../img/paint.png',
		description: 'Paint application for the browser',
		github: 'https://github.com/Mayank-Mishra0110011/Paint',
		stack: 'HTML, CSS, JavaScript'
	},
	pps: {
		title: 'Primordial Particle System',
		img: '../img/pps.png',
		description: 'Simulation of a 2D Primordial Particle System',
		github: 'https://github.com/Mayank-Mishra0110011/Primordial-Particle-System',
		stack: 'HTML, JavaScript'
	},
	shySort: {
		title: 'ShySort',
		img: '../img/shySort.png',
		description:
			"A sort visualization made using p5.js and clmtrackr.js library. 3 types of sort(bubble, selection and insertion) can be performed by the shySort object. Visualization uses a y centered bargraph with random +ve and -ve y values in the array. Using the clmtrackr library the program tracks a face on the screen and only continues to sort the array if the prediction score is less than 0.5. I'm probably going to add more sorting algorithms to the object in future.",
		github: 'https://github.com/Mayank-Mishra0110011/Shy-Sort',
		stack: 'JavaScript, P5.js, clmtrackr.js'
	},
	weather: {
		title: 'Weather Visualization',
		img: '../img/weather.png',
		description: 'Visualization of Global Wind Data. The API has been deprecated!',
		github: 'https://github.com/Mayank-Mishra0110011/Wind-Visualization',
		stack: 'JavaScript, D3.js, HTML'
	},
	webDevGUI: {
		title: 'Web Dev GUI',
		img: '../img/webDevGUI.png',
		description:
			"Under Development! The Idea behind this project is to create an application that allows a user to create a webpage with simple drag and drop HTML functionality. This drag and drop feature will also be available for css classes and selectors. It would also allow users to add element based javascript without the need to get the DOM object before. As the app is made using electron, It will also be platform Independent. I also want to add an image manipulation window in order to merge the process of web design and web development into one. But that's not gonna happen at least for a very long time.",
		github: 'https://github.com/Mayank-Mishra0110011/WebDevGUI',
		stack: 'HTML, CSS, JavaScript, Electron.js'
	}
};

const otherStuff = [ 'Git', 'jQuery', 'Python', 'SASS', 'C/C++', 'Java', 'Bootstrap' ];
let oi = 0;

function toggleTooltip(dir) {
	dir == 0 ? ++oi : --oi;
	if (oi > 6) oi = 0;
	if (oi < 0) oi = 6;
	$('#carouselTooltip').attr('title', otherStuff[oi]);
}

function showInfo(obj) {
	if (obj.children[0]) {
		TweenMax.to(obj.children[0], 0.5, {
			autoAlpha: 1
		});
	}
	TweenMax.to(obj, 0.5, {
		height: '95%'
	});
}

function hideInfo(obj) {
	TweenMax.to(obj, 0.3, {
		height: '0'
	});
	if (obj.children[0]) {
		TweenMax.to(obj.children[0], 0.3, {
			autoAlpha: 0
		});
	}
}

function setModalContent(key) {
	document.getElementById('modalImageContent').src = projectInfo[key].img;
	document.getElementById('projectTitle').innerText = projectInfo[key].title;
	document.getElementById('projectDescription').innerText = projectInfo[key].description;
	document.getElementById('projectLink').innerText = projectInfo[key].github;
	document.getElementById('projectLink').href = projectInfo[key].github;
	document.getElementById('techStack').innerText = projectInfo[key].stack;
}

window.onload = function() {
	$('#curYear').text(new this.Date().getFullYear());
	$('#extendedProject').on('shown.bs.modal', () => {
		TweenMax.to('#modalTextContent', 0.8, {
			autoAlpha: 1,
			transform: 'translateY(-50px)'
		});
		TweenMax.to('#modalImageContent', 0.8, {
			autoAlpha: 1,
			transform: 'translateX(30px)'
		});
	});
	$('#extendedProject').on('hide.bs.modal', () => {
		TweenMax.to('#modalTextContent', 0, {
			autoAlpha: 0,
			transform: 'translateY(50px)'
		});
		TweenMax.to('#modalImageContent', 0, {
			autoAlpha: 0,
			transform: 'translateX(-30px)'
		});
	});
	window.addEventListener('keydown', (event) => {
		let btn = this.document.getElementById('closeBtn');
		if (event.key === 'Escape' && btn) {
			btn.click();
		}
	});
	if (window.innerWidth > 500) {
		TweenMax.fromTo(
			'.anim1',
			5,
			{
				width: '0'
			},
			{
				width: '100%',
				ease: SteppedEase.config(50),
				onComplete: () => {
					this.document.getElementsByClassName('line1')[0].style.borderRight = 'none';
					this.document.getElementsByClassName('line2')[0].style.visibility = 'visible';
					TweenMax.fromTo(
						'.anim2',
						5,
						{
							width: '0'
						},
						{
							width: '100%',
							ease: SteppedEase.config(37),
							onComplete: () => {
								this.document.getElementsByClassName('line2')[0].style.borderRight = 'none';
								this.document.getElementsByClassName('line1')[0].style.whiteSpace = 'normal';
								this.document.getElementsByClassName('line2')[0].style.whiteSpace = 'normal';
							}
						},
						0
					);
				}
			},
			0
		);
	} else {
		const line1 = this.document.getElementsByClassName('line1')[0];
		const line2 = this.document.getElementsByClassName('line2')[0];
		line1.style.borderRight = 'none';
		line1.style.width = 'auto';
		line1.style.whiteSpace = 'normal';
		line1.style.visibility = 'visible';
		line2.style.borderRight = 'none';
		line2.style.width = 'auto';
		line2.style.whiteSpace = 'normal';
		line2.style.visibility = 'visible';
	}
	TweenMax.set('#abt', {
		autoAlpha: 0,
		transform: 'translateX(-100px)'
	});
	TweenMax.set('#port', {
		autoAlpha: 0,
		transform: 'translateX(-100px)'
	});
	TweenMax.set('#con', {
		autoAlpha: 0,
		transform: 'translateX(-100px)'
	});
	TweenMax.set('#abtcont', {
		autoAlpha: 0,
		transform: 'translateY(100px)'
	});
	TweenMax.set('#fe, #be', {
		autoAlpha: 0
	});
	if (document.body.scrollTop > 58 || document.documentElement.scrollTop > 58) {
		if (!$('nav').hasClass('sticky-top')) {
			$('nav').addClass('sticky-top');
			TweenMax.set('nav', { autoAlpha: 0 });
			TweenMax.to('nav', 0.5, {
				autoAlpha: 1,
				ease: Power0.ease
			});
		}
	} else {
		$('nav').removeClass('sticky-top');
	}
	if (window.scrollY > window.innerHeight && !$('nav').hasClass('border-nav')) {
		$('nav').addClass('border-nav');
	} else if (window.scrollY <= window.innerHeight) {
		$('nav').removeClass('border-nav');
	}
	window.addEventListener('scroll', () => {
		if (document.body.scrollTop > 58 || document.documentElement.scrollTop > 58) {
			if (!$('nav').hasClass('sticky-top')) {
				$('nav').addClass('sticky-top');
				TweenMax.set('nav', { autoAlpha: 0 });
				TweenMax.to('nav', 0.5, {
					autoAlpha: 1,
					ease: Power0.ease
				});
			}
		} else {
			$('nav').removeClass('sticky-top');
		}
		if (window.scrollY > window.innerHeight && !$('nav').hasClass('border-nav')) {
			$('nav').addClass('border-nav');
		} else if (window.scrollY <= window.innerHeight) {
			$('nav').removeClass('border-nav');
		}
		if (window.scrollY > 150) {
			TweenMax.to('#abt', 0.8, {
				transform: 'translateX(25px)',
				autoAlpha: 1,
				ease: Power0.easeOut
			});
			TweenMax.to('#abtcont', 0.5, {
				transform: 'translateY(-25px)',
				autoAlpha: 1,
				ease: Power0.easeOut
			});
		}
		if (window.scrollY > 3650) {
			TweenMax.to('#con', 0.8, {
				transform: 'translateX(25px)',
				autoAlpha: 1,
				ease: Power0.easeOut
			});
		}
		if (window.scrollY > 1820) {
			TweenMax.to('#port', 0.8, {
				transform: 'translateX(25px)',
				autoAlpha: 1,
				ease: Power0.easeOut
			});
		}
		if (window.scrollY > 560) {
			TweenMax.to('#fe, #be', 2, {
				autoAlpha: 1,
				ease: Power0.easeOut
			});
		}
		if (window.scrollY > 980) {
			for (let k in knowledge) {
				TweenMax.to(`.${k}`, 2, {
					width: `${80 * (knowledge[k] / 100)}%`,
					ease: Power0.ease
				});
				this.document.getElementById(k).style.width = `${80 * ((100 - knowledge[k]) / 100)}%`;
				this.document.getElementById(k).innerText = `${knowledge[k]}%`;
			}
		}
	});
	if (window.scrollY > 150) {
		TweenMax.to('#abt', 0.8, {
			transform: 'translateX(25px)',
			autoAlpha: 1,
			ease: Power0.easeOut
		});
		TweenMax.to('#abtcont', 0.5, {
			transform: 'translateY(-25px)',
			autoAlpha: 1,
			ease: Power0.easeOut
		});
	}
	if (window.scrollY > 560) {
		TweenMax.to('#fe, #be', 2, {
			autoAlpha: 1
		});
	}
	if (window.scrollY > 980) {
		for (let k in knowledge) {
			TweenMax.to(`.${k}`, 2, {
				width: `${80 * (knowledge[k] / 100)}%`,
				ease: Power0.ease
			});
			this.document.getElementById(k).style.width = `${80 * ((100 - knowledge[k]) / 100)}%`;
			this.document.getElementById(k).innerText = `${knowledge[k]}%`;
		}
	}
	if (window.scrollY > 1450) {
		TweenMax.to('#port', 0.8, {
			transform: 'translateX(25px)',
			autoAlpha: 1,
			ease: Power0.easeOut
		});
	}
	if (window.scrollY > 3650) {
		TweenMax.to('#con', 0.8, {
			transform: 'translateX(25px)',
			autoAlpha: 1,
			ease: Power0.easeOut
		});
	}
};

function sendEmail(e) {
	e.preventDefault();
	const name = document.getElementById('Name');
	const email = document.getElementById('Email');
	const message = document.getElementById('Message');
	const toast = document.getElementById('toast');
	if (name.value.trim() != '' && email.value.trim() != '' && message.value.trim() != '') {
		const url = 'https://script.google.com/macros/s/AKfycbzRs1_iAU353yCOjC1z5hLbtdYuf9bRNxEA3tzH7SFZSu0NO6E/exec';
		const data = {
			Name: name.value,
			Email: email.value,
			Message: message.value
		};
		$.post(url, JSON.stringify(data)).then(() => {
			toast.innerText = 'Message Sent!!';
			$('.toast').toast('show');
		});
	} else {
		toast.innerText = 'Empty Field!!';
		$('.toast').toast('show');
	}
}

function downloadCV() {
	let link = document.createElement('a');
	link.href = './img/resume.pdf';
	link.target = '_blank';
	link.dispatchEvent(new MouseEvent('click'));
}
