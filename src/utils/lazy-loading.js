const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");
  //using the intersection observing API to make the browser know when the image has entered the view-port

  const observer = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target);
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });
  // //to observe the entire page leave it at null
  //     root: null,
  //     //additional space to be observerd on the root, default 0px cuz root is null anyway
  //     rootMargin: '0px',
  //     //defines how much of the image needs to be visible before observing it
  //     threshold: 0;
  //     //to observe the image at the exact moment it enters the view-port leave it at 0.
  //     //we can even remove this entire section cuz its default

  lazyImgs.forEach((img) => {
    observer.observe(img);
  });
};

export default lazyLoading;
