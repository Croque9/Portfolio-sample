const myCv = document.querySelector('.cv')

function theCv(){

    myCv.textContent = "Progressing"
 

}

myCv.addEventListener('click',theCv)


document.querySelector('.cv').onclick = function(){

    location.href = "https://www.linkedin.com/in/mert-gunes-b37b16138/"

}

anime.timeline({loop: true})
  .add({
    targets: '.title .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  