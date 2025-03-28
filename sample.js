            var typed = new Typed('#element', {
              strings: ['<b><i>Web</i></b> <b>developer.</b>', '<b><i>Cloud</i></b> <b>Engineer.</b>','<b><i>Graphic</i></b> <b>designer.</b>', '<b><i>Software</i></b> <b>Consultant.</b>'],
              typeSpeed: 50,
            });
// Download Resume Function
          function downloadResume() {
    alert('Downloading resume...');
    window.location.href = 'SWATISNIGDHA PANIGRAHI.pdf'; 
}
// Visit Github Function
function VisitGit() {
    window.location.href = 'https://github.com/SwatiPanigrahi'; 
}
function view1() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/blob/main/Atm.java'; 
}
function view2() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyPortfolio/tree/main'; 
}
function view3() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/Connect%204'; 
}
function view4() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/Survey%20Form'; 
}
function view5() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/Tribute%20Page'; 
}
function view6() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/Calculator'; 
}
function view7() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/To-Do-List'; 
}
function view8() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/blob/main/Python%20Projects%2Frps.py'; 
}
function view9() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/blob/main/Python%20Projects%2Frps.py'; 
}
function lkin() {
    window.location.href = 'https://www.linkedin.com/in/swatisnigdhapanigrahi'; 
}
function int1() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/blob/main/Atm.java'; 
}
function int2() {
    window.location.href = 'https://github.com/SwatiPanigrahi/MyProjects/tree/main/Connect%204'; 
}
function cert1() {
    window.location.href = 'NPTEL Online Certification - Elite Silver-1.pdf'; 
}
function cert2() {
    window.location.href = ''; 
}
function cert3() {
    window.location.href = 'MIS NPTEL Certificate .pdf'; 
}



// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Message sent successfully!';
        this.reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill all fields.';
    }
});


