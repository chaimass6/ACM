// Draw animation
gsap.fromTo("#acm-logo", { strokeDashoffset: 4000 }, {
    strokeDashoffset: 0,
    duration: 4,
    ease: "power4.inOut"
  });
  
  // Fade-in text
  gsap.fromTo(".logoname", { opacity: 0 }, {
    opacity: 1,
    delay: 2.5,
    duration: 2,
    ease: "power2.out"
  });
  
  // Optional: redirect after animation
  // setTimeout(() => {
  //   window.location.href = "acm-home.html";
  // }, 6000);
  