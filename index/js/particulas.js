    particlesJS('particles-js', {
      particles: {
        color: '#fff',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: 1,
        size: 12,
        size_random: true,
        nb: 70,
        line_linked: {
          enable_auto: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        },
        anim: {
          enable: true,
          speed: 1
        }
      },
      interactivity: {
        enable: true,
        mouse: {
          distance: 300
        },
        detect_on: 'window', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
          opacity: .5
        },
        events: {
          onclick: {
            enable: true,
            //mode: 'push', // "push" or "remove"
            //nb: 1
          }
        }
      },
      /* Retina Display Support */
      retina_detect: true
    });