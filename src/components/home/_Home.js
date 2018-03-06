
// import script

// import router from '@/router';
import dataProject from '@/components/home/data/data.js';
const Lethargy = require('lethargy').Lethargy;


// end import

export default {
  name: 'home',
  data: function () {
    return {
      bmw: dataProject.bmw,
      louisj: dataProject.louisj,
      lethargy: new Lethargy(),
      canScroll: true,
      work: ['bmw', 'louisj', 'silent'],
    };
  },
  methods: {
    /**
     * @function scrollEvent
     */
    scrollEvent: function () {
      const container = document.querySelector('#home');
      const that = this;
      const scroll = function scroll(e) {
        if (that.canScroll === true) {
          e.preventDefault();
          e.stopPropagation();
          if (that.lethargy.check(e) === -1) {
            that.canScroll = false;
            that.nextWork(that.newWork(that.getWork(), 'next'), that.getWork());
          } else if (that.lethargy.check(e) === 1) {
            that.canScroll = false;
            that.nextWork(that.newWork(that.getWork(), 'prev'), that.getWork());
          }
        }
      };
      container.addEventListener('mousewheel', scroll);
      container.addEventListener('DOMMouseScroll', scroll);
      container.addEventListener('wheel', scroll);
      container.addEventListener('MozMousePixelScroll', scroll);
    },

    /**
     * @function getWork
     * @description return the current work
     */
    getWork() {
      const home = document.querySelector('#home');
      const current = parseInt(home.getAttribute('data-current'));
      return current;
    },

    newWork(current, sens) {
      let news = null;
      if (sens === 'next') {
        news = current + 1;
      } else if (sens === 'prev') {
        news = current - 1;
      }
      return news;
    },

    /**
     * @function nextWork
     */
    nextWork(news, current) {
      const home = document.querySelector('#home');
      home.setAttribute('data-current', news);
      home.classList.remove(`home--${this.work[current]}`);
      home.classList.add(`home--${this.work[news]}`);
    },
  },
  mounted: function () {
    this.scrollEvent();
  },
};
