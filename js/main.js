let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navegacion');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
menu.classList.remove('bx-x');
navbar-classList.remove('active')
};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})


sr.reveal('.inicio-texto',{delay:200, origin:'top'})
sr.reveal('.imagenini',{delay:200, origin:'top'})
sr.reveal('.sobremi, .quese, .contact, .experiencias',{delay:200, origin:'top'})

var check=document.querySelector('.check');
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="/en/index.html"
    }else{
        location.href="../en/index.html"
    }
    }