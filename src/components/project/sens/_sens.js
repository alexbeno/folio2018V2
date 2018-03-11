
// import script

import router from '@/router';

// end import

export default {
  name: 'louisj',
  data: function () {
    return {
      mobile: false,
    };
  },
  methods: {
    /**
     * @function init
     * @description init page classe
     */
    init() {
      const page = document.querySelector('.project');
      const close = document.querySelector('.headerNav__link');
      const app = document.querySelector('#app');

      app.setAttribute('data-return', true);
      app.setAttribute('data-project', 2);

      page.classList.add('project--active');
      close.innerHTML = 'Close';
    },
    /**
     * @function scrolling
     * @description scroll event for indication
     */
    scrolling() {
      const container = document.querySelector('.details');
      const content = document.querySelector('.details__container');
      const page = document.querySelector('.project');
      const progress = document.querySelector('.scrolling');
      let current = 0;

      container.addEventListener('scroll', () => {
        current = container.clientHeight  / container.scrollHeight;
        progress.style.height = `${container.scrollTop}px`;
        // progress.style.height = container.clientHeight / container.scrollHeight * container.scrollTop * 1.35 + "px";

        if (container.scrollTop === content.offsetHeight - container.offsetHeight) {
          page.classList.add('project--showNext');
        } else {
          if (page.classList.contains('project--showNext')) {
            page.classList.remove('project--showNext');
          }
        }
      });
    },
    /**
     * @function closes
     * @description closes event for return to home
     */
    closes() {
      const close = document.querySelector('.headerNav__link');
      const page = document.querySelector('.project');
      const details = document.querySelector('.details');

      close.addEventListener('click', () => {
        if (details.scrollTop > 0) {
          this.goUp(300);
          setTimeout(() => {
            page.classList.add('project--leave');
          }, 400);
          setTimeout(() => {
            router.push({ path: '/' });
          }, 2400);
        } else {
          page.classList.add('project--leave');
          setTimeout(() => {
            router.push({ path: '/' });
          }, 2000);
        }
      });
    },
    nextWork() {
      const link = document.querySelector('.information__discover--next');
      const page = document.querySelector('.project');
      const body = document.querySelector('body');

      link.addEventListener('click', (e) => {
        e.preventDefault();
        page.classList.add('project--next');
        setTimeout(() => {
          page.classList.add('project--nextTwo');
          body.classList.add('body__home--mobile');
        }, 900);
        setTimeout(() => {
          router.push({ path: '/louisj' });
          body.classList.add('body__home--mobile');
        }, 2800);
      });
    },
    /**
     * @function closes
     * @description close scrolling project
     */
    goUp: function (dur) {
      // select DOM element
      const page = document.querySelector('.details');

      // init variable

      const to = 0;
      const duration = dur;
      const start = page.scrollTop;
      const change = to - start;
      let currentTime = 0;
      const increment = 20;

      // animate fonction

      const animateScroll = () => {
        currentTime += increment;
        const val = this.easeInOutQuad(currentTime, start, change, duration);
        page.scrollTop = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    },

    /**
     * @function easeInOutQuad
     * @description ease transition for closing scroll
     */
    easeInOutQuad: (tP, bP, cP, dP) => {
      let t = tP;
      const b = bP;
      const c = cP;
      const d = dP;

      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t -= 1;
      return -c / 2 * (t *(t - 2) - 1) + b;
    },
  },
  mounted: function () {
    const body = document.querySelector('body');
    body.classList.remove('body__home--mobile');
    setTimeout(() => {
      this.init();
      this.closes();
      this.nextWork();
    }, 10);
  },
  created: function () {
    if (window.innerWidth < 780) {
      this.mobile = true;
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 780) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },
};
