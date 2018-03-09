
// import script

import router from '@/router';

// end import

export default {
  name: 'bmw',
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
      app.setAttribute('data-project', 0);

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
      const progress = document.querySelector('.scrolling');
      let current = 0;

      container.addEventListener('scroll', () => {
        current = container.clientHeight  / container.scrollHeight;

        progress.style.height = `${container.scrollTop}px`;
        // progress.style.height = container.clientHeight / container.scrollHeight * container.scrollTop * 1.35 + "px";
      });
    },
    /**
     * @function closes
     * @description closes event for return to home
     */
    closes() {
      const close = document.querySelector('.headerNav__link');
      const page = document.querySelector('.project');
      close.addEventListener('click', () => {
        page.classList.add('project--leave');
        setTimeout(() => {
          router.push({ path: '/' });
        }, 2000);
      });
    },
  },
  mounted: function () {
    setTimeout(() => {
      this.init();
      this.scrolling();
      this.closes();
    }, 10);
  },
};
