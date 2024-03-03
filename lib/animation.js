import gsap from "gsap";
export  const animatePageIn = (x) => {
  const transitionElement=document.getElementById(x)
    if (transitionElement) {
      const tl = gsap.timeline();
  
      tl.set(transitionElement, {
        yPercent: 100,
      })
        .to(transitionElement, {
          xPercent: 0,
          duration: 0.8,
        })
        .to(
          transitionElement,
          {
            borderTopLeftRadius: "50vh",
            borderBottomLeftRadius: "50vh",
            duration: 0.4,
          },
          "<"
        );
    }
  };