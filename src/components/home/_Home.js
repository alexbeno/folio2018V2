
// import script

import router from '@/router';
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
      current: 0,
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
     * @function clickNav
     * @param {*} number witch project
     */
    clickNav(number) {
      this.nextWork(number, this.getWork());
      this.current = number;
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
        if (current === this.work.length) {
          news = null;
        } else {
          news = current + 1;
        }
      } else if (sens === 'prev') {
        if (current === 0) {
          news = null;
        } else {
          news = current - 1;
        }
      }
      this.current = news;
      return news;
    },

    /**
     * @function nextWork
     */
    nextWork(news, current) {
      if (news !== null) {
        const home = document.querySelector('#home');
        const active = document.querySelector('.navigation__item--active');
        const menu = document.querySelector(`.navigation__item--${this.work[news]}`);
        const wrapper = document.querySelector('.wrapper--a');
        const wrapperR = document.querySelector('.wrapper--a--right');
        const wrapperB = document.querySelector('.wrapper--b');
        const wrapperBR = document.querySelector('.wrapper--b--right');

        home.setAttribute('data-current', news);
        home.classList.add(`home--${this.work[news]}`);
        home.classList.remove(`home--${this.work[current]}`);

        setTimeout(() => {
          active.classList.remove('navigation__item--active');
          menu.classList.add('navigation__item--active');
        }, 300);

        if (news > current) {
          wrapper.classList.add('wrapper--active');
          wrapperR.classList.add('wrapper--active');
          setTimeout(() => {
            wrapper.classList.add('wrapper--return');
            wrapperR.classList.add('wrapper--returnB');
            setTimeout(() => {
              wrapper.style.display = 'none';
              wrapperR.style.display = 'none';
              wrapper.classList.remove('wrapper--return');
              wrapperR.classList.remove('wrapper--returnB');
              wrapper.classList.remove('wrapper--active');
              wrapperR.classList.remove('wrapper--active');
              setTimeout(() => {
                wrapper.style.display = 'block';
                wrapperR.style.display = 'block';
              }, 50);
            }, 650);
          }, 650);
        } else {
          wrapperB.classList.add('wrapper--active');
          wrapperBR.classList.add('wrapper--active');
          setTimeout(() => {
            wrapperB.classList.add('wrapper--returnB');
            wrapperBR.classList.add('wrapper--return');
            setTimeout(() => {
              wrapperB.style.display = 'none';
              wrapperBR.style.display = 'none';
              wrapperB.classList.remove('wrapper--returnB');
              wrapperBR.classList.remove('wrapper--return');
              wrapperB.classList.remove('wrapper--active');
              wrapperBR.classList.remove('wrapper--active');
              setTimeout(() => {
                wrapperB.style.display = 'block';
                wrapperBR.style.display = 'block';
              }, 50);
            }, 650);
          }, 650);
        }
      }
      setTimeout(() => {
        this.canScroll = true;
      }, 1350);
    },
    go() {
      const wrapperA = document.querySelector('.clickWrapper');
      const wrapperB = document.querySelector('.clickWrapper--b');
      const home = document.querySelector('#home');

      home.classList.add('home--leave');
      wrapperA.classList.add('clickWrapper--active');
      wrapperB.classList.add('clickWrapper--b--active');

      setTimeout(() => {
        home.classList.add('home--leaveTwo');
      }, 1200);

      setTimeout(() => {
        wrapperB.style.transitionDelay = '0s';
        wrapperB.style.transitionDuration = '0.8s';
        wrapperB.classList.add('clickWrapper--b--end');
        setTimeout(() => {
          this.changePage();
        }, 900);
      }, 2000);
    },

    /**
     * @function changePage
     * @description programatique navigation to the project page
     * @param name name of project
     */
    changePage() {
      let road = this.work[this.current];
      router.push({ path: road });
    },
  },
  mounted: function () {
    this.scrollEvent();
  },
};
