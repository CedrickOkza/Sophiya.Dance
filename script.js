window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})


// SOPHIYA ADDITIONS

 let timer;
  const mainTitle = document.getElementById('mainTitle');

  function resetFadeOut() {
    mainTitle.classList.remove('fade-out');
    mainTitle.style.opacity = 1;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      mainTitle.classList.add('fade-out');
    }, 4000);
  }

  document.body.addEventListener('mousemove', () => {
    resetFadeOut();
  });


 function checkOverlap() {
        var h1 = document.querySelector('h1');
        var images = document.querySelectorAll('img');
        var h1Rect = h1.getBoundingClientRect();

        for (var i = 0; i < images.length; i++) {
          var img = images[i];
          var imgRect = img.getBoundingClientRect();

          var overlap = !(h1Rect.right < imgRect.left || h1Rect.left > imgRect.right ||
                          h1Rect.bottom < imgRect.top || h1Rect.top > imgRect.bottom);

          if (overlap) {
            h1.classList.add('h1-inverted');
            return; // Break the loop once an overlap is found
          }
        }

        h1.classList.remove('h1-inverted'); // Remove the class if no overlap is found
      }

      // Check for overlap on page load and on scroll
      window.addEventListener('load', checkOverlap);
      window.addEventListener('scroll', checkOverlap);


  // Initialize the title visibility
  resetFadeOut();



  function animate() {
    images.forEach(img => {
        let currentLeft = parseInt(img.style.left, 10);
        img.style.left = (currentLeft - 1) + 'px'; 
        if (currentLeft < -img.offsetWidth) {
            img.style.left = window.innerWidth + 'px';
        }
    });
    requestAnimationFrame(animate);
}