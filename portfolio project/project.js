const changeWord = document.querySelector('.interested')

function change(){

changeWord.textContent ="Force will be with you!"
console.log(changeWord);

}
changeWord.addEventListener('mouseover',change)


document.querySelector('.me').onclick = function(){

    location.href = "http://127.0.0.1:5500/index2.html"

}


document.querySelector('.git').onclick = function (){

    location.href = "https://github.com/Croque9"
}

document.querySelector('.contact').onclick = function (){

  location.href ="http://127.0.0.1:5500/index3.html"
}



anime.timeline({loop: true})
  .add({
    targets: '.contact .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.contact',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  

  