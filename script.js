const ruby = document.querySelector("#ruby img");

let scale = 1;
let direction = 1;

function animateRuby() {

    scale += direction * 0.0015;

    if (scale > 1.03) direction = -1;
    if (scale < 0.97) direction = 1;

    ruby.style.transform = `scale(${scale})`;

    requestAnimationFrame(animateRuby);
}

animateRuby();