let images = [
  {image: "./ProjecImages/project1.png",
    src: "https://github.com/MdAnas877/ImageSearching",
    live: "https://image-searching-tau.vercel.app/"
  },
  {image: "./ProjecImages/project2.png",
    src: "https://github.com/MdAnas877/ShopingCardApplication",
    live: "https://shoping-card-application.vercel.app/"
  },
]
const live = document.querySelector('#live')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const img = document.querySelector('#screenShot')
const sourceCode = document.querySelector('#source')

let index = 0
img.src = images[0].image
live.href = images[0].live
source.href = images[0].src


const nextFunction = () => {
 
    index++;
    if(index < images.length){
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }else if(index == images.length){
      index = 0;
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }

}

const prevFunction = () => {
    index--;
    if(index > -1){
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    }else if( index == -1){
      index = images.length-1;
      img.src = images[index].image
      live.href = images[index].live
  source.href = images[index].src
    
  }
}

prev.addEventListener('click', prevFunction);
next.addEventListener('click', nextFunction)
const Slider = () => {
  setInterval(nextFunction,3000)
}
window.onload = Slider


// nav section 

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navCenter = document.querySelector('#nav-center');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('change'); // Toggle hamburger animation

    // Toggle menu items visibility
    if (navCenter.classList.contains('active')) {
      navCenter.classList.remove('active');
    } else {
      navCenter.classList.add('active');
    }
  });

  // Close menu when clicking outside on smaller screens
  window.addEventListener('click', function(e) {
    if (!navCenter.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navCenter.classList.remove('active');
      hamburgerMenu.classList.remove('change');
    }
  });
});
