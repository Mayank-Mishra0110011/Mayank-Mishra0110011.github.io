let name, email, message;

window.onload = function() {
    bgs = document.getElementsByClassName('parallax');
    bgs[1].style.backgroundColor = 'white';
    bgs[2].style.backgroundColor = 'whitesmoke';
    name = document.getElementById('Name');
    email = document.getElementById('Email');
    message = document.getElementById('Message');
}

function sendEmail(e) {
    e.preventDefault();
    let toast = document.getElementById('toast');
    if (name.value != '' && email.value != '' && message.value != '') {
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
