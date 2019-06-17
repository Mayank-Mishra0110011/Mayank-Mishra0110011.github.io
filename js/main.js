
let name, email, message, nav;
let navbar, video, vIndex = 0, title;
const videoFiles = [
    'Anime.webm', 
    'ShootingGame.webm', 
    'Snake.webm', 
    'BasketballGame.webm', 
    'Astar.webm', 
    'Bricks.webm', 
    '2048.webm', 
    'ShySort.webm', 
    'PPS.webm', 
    'Wind.webm', 
    'JapaneseGame.webm', 
    'Cube.webm', 
    'ElementaryCA.webm', 
    'Maze.webm', 
    'Paint.webm', 
    'VacationPlan.webm', 
    'AdventureGame.webm'
];
const projectInfo = [
    {
        title: 'Anime Info',
        link: 'https://github.com/Mayank-Mishra0110011/Anime-Info',
    },
    {
        title: 'Shooting Game', 
        link: 'https://github.com/Mayank-Mishra0110011/Shooting-Game',
    },
    {
        title: 'Snake', 
        link: 'https://github.com/Mayank-Mishra0110011/SnakeJS',
    },
    {
        title: 'BasketBall Game', 
        link: 'https://github.com/Mayank-Mishra0110011/BasketBall-Game',
    },
    {
        title: 'A Star Path Algorithm Visualization', 
        link: 'https://github.com/Mayank-Mishra0110011/A-Star-Path-Finding-Algorithm-Visualiser',
    },
    {
        title: 'Bricks', 
        link: 'https://github.com/Mayank-Mishra0110011/Bricks',
    },
    {
        title: '2048 Game', 
        link: 'https://github.com/Mayank-Mishra0110011/2048',
    },
    {
        title: 'ShySort', 
        link: 'https://github.com/Mayank-Mishra0110011/Shy-Sort',
    },
    {
        title: 'Primordial Particle System', 
        link: 'https://github.com/Mayank-Mishra0110011/Primordial-Particle-System',
    },
    {
        title: 'Wind Visualization', 
        link: 'https://github.com/Mayank-Mishra0110011/Wind-Visualization',
    },
    {
        title: 'Japanese Practice Game', 
        link: 'https://github.com/Mayank-Mishra0110011/Japanese-Language-Quiz-Game',
    },
    {
        title: 'Rubix Cube', 
        link: 'https://github.com/Mayank-Mishra0110011/Rubix-Cube',
    },
    {
        title: 'Elementary Cellular Automaton', 
        link: 'https://github.com/Mayank-Mishra0110011/Elementary-Cellular-Automaton',
    },
    {
        title: 'Maze Puzzle Game', 
        link: 'https://github.com/Mayank-Mishra0110011/Maze-Puzzle',
    },
    {
        title: 'Paint', 
        link: 'https://github.com/Mayank-Mishra0110011/Paint',
    },
    {
        title: 'Vacation Plan', 
        link: 'https://github.com/Mayank-Mishra0110011/Vacation-Plan',
    },
    {
        title: 'Adventure Game',
        link: 'https://github.com/Mayank-Mishra0110011/Adventure-Fantasy-Game',
    }
];

window.onload = function() {
    name = document.getElementById('Name');
    email = document.getElementById('Email');
    message = document.getElementById('Message');
    navbar = document.getElementById('navbar');
    nav = document.getElementById('nav');
    video = document.getElementById('vid');
    title = document.getElementById('project-title');
    window.addEventListener('scroll', event => {
        if (window.pageYOffset >= navbar.offsetHeight) {
            navbar.classList.add('sticky');
        }
        else {
            navbar.classList.remove('sticky');
        }
    });
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}


function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Programming Languages', 'Knowledge'],
        ['JavaScript', 30],
        ['HTML', 10],
        ['CSS', 10],
        ['SASS', 10],
        ['Java', 7],
        ['C/C++', 7],
        ['SQL', 4],
        ['Python', 4],
        ['Ruby', 2],
        ['Visual Basic', 2],
    ]);

    const options = {
        'width': '100%',
        'height': '100%',
        'pieSliceText': 'none'
    };

    const chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}


function sendEmail(e) {
    e.preventDefault();
    if (name.value != '' && email.value != '' && message.value != '') {
        let toast = document.getElementById('toast');
        const url = 'https://script.google.com/macros/s/AKfycbzRs1_iAU353yCOjC1z5hLbtdYuf9bRNxEA3tzH7SFZSu0NO6E/exec';
        const data = {
            Name: e.target['Name'].value,
            Email: e.target['Email'].value,
            Message: e.target['Message'].value
        };
        $.post(url, JSON.stringify(data)).then(res => {
            let toast = document.getElementById('toast');
            toast.innerText = "Message Sent!!";
            toast.className = "make";
            setTimeout(function() {
                toast.className = toast.className.replace("make", "");
            }, 1500);
        });
    }
    else {
        toast.innerText = "Empty Field!!";
        toast.className = "make";
        setTimeout(function() {
            toast.className = toast.className.replace("make", "");
        }, 1500);
    }
}


function leftClick() {
    if (vIndex > 0) {
        --vIndex;
    }
    else {
        vIndex = videoFiles.length - 1;
    }
    video.src = `img/${videoFiles[vIndex]}`;
    title.innerText = projectInfo[vIndex].title;
    title.href = projectInfo[vIndex].link;
}


function rightClick() {
    if (vIndex < videoFiles.length - 1) {
        ++vIndex;
    }
    else {
        vIndex = 0;
    }
    video.src = `img/${videoFiles[vIndex]}`;
    title.innerText = projectInfo[vIndex].title;
    title.href = projectInfo[vIndex].link;
}


function downloadCV() {
    let link = document.createElement('a');
    link.href = './img/resume.pdf';
    link.download = 'resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
}


function expand() {
    if (nav.className == 'navbar__nav') {
        nav.className += "__responsive";
    }
    else {
        nav.className = "navbar__nav";
    }
}