import AOS from 'aos';
import 'aos/dist/aos.css';



const baseOptions = {
  offset: 120,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  anchorPlacement: 'top-bottom',

};

AOS.init({
    ...baseOptions,

  });



