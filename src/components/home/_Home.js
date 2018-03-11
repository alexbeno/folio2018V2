
// import script

import router from '@/router';
import about from '@/components/home/about/about';

const Lethargy = require('lethargy').Lethargy;
const Hammer = require('hammerjs');


// end import

export default {
  name: 'home',
  components: {
    about,
  },
  data: function () {
    return {
      lethargy: new Lethargy(),
      canScroll: true,
      work: ['bmw', 'louisj', 'sens'],
      current: 0,
      mobile: false,
      intro: true,
    };
  },
  methods: {

    /**
     * @function endIntro
     * @description animation at the end of the introducgtion
     */
    endIntro: function () {
      // select DOM element
      const mover = document.querySelector('.intro__slice__content');
      const moverTitle = document.querySelector('.intro__welcome');
      const intro = document.querySelector('.intro');
      window.scroll(0, 0);
      // unshow letter introduction
      setTimeout(() => {
        moverTitle.style.transform = 'translateY(-60px)';
        mover.style.transform = 'translateY(-150px)';
        setTimeout(() => {
          intro.style.opacity = '0';
        }, 800);

        setTimeout(() => {
          this.returns();
          this.intro = false;
        }, 1800);
      }, 1800);
    },

    /**
     * @function introText
     * @description Texte introduction animation
     */
    introText: function () {
      // select DOM element
      const mover = document.querySelector('.intro__slice__content');
      const text = document.querySelector('.intro__slice__contentText');
      const size = text.offsetHeight;
      let span;

      // set params
      let index = 1;
      let tranfTemp = 0;
      let tranf = 0;

      // first animation

      // set the transformation size
      tranfTemp = size - 8.5 + 30;
      tranf = tranfTemp * index;

      // set the current span
      span = document.querySelector(`.intro__slice__contentText--${index}`);

      // show texte
      setTimeout(() => {
        span.classList.add('intro__slice__contentText--active');
      }, 200);

      // unshow current texte
      setTimeout(() => {
        span.classList.add('intro__slice__contentText--return');
      }, 1800);

      // translate the mover
      setTimeout(() => {
        mover.style.transform = `translateY(-${tranf}px)`;
      }, 2200);

      // repete animation
      const times = setInterval(() => {
        index += 1;
        // set the transformation size
        tranfTemp = size - 8.5 + 30;
        tranf = tranfTemp * index;

        // set the current span
        span = document.querySelector(`.intro__slice__contentText--${index}`);

        // show texte
        setTimeout(() => {
          span.classList.add('intro__slice__contentText--active');
        }, 200);

        // if index < to 2
        if (index <= 2) {

          // unshow current texte
          setTimeout(() => {
            span.classList.add('intro__slice__contentText--return');
          }, 1800);

          // translate the mover
          setTimeout(() => {
            mover.style.transform = `translateY(-${tranf}px)`;
          }, 2200);
        }

        // end
        if (index === 3) {
          clearInterval(times);
          this.endIntro();
        }
      }, 2600);
    },

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
     * @function scrollMobile
     */
    scrollMobile: function () {
      const container = document.querySelector('body');
      const options = {
        preventDefault: true,
      };
      const hammer = new Hammer(container, options);
      hammer.on('panup pandown', (e) => {
        if (this.canScroll === true) {
          if (e.type === 'panup') {
            this.canScroll = false;
            this.nextWork(this.newWork(this.getWork(), 'next'), this.getWork());
          } else if (e.type === 'pandown') {
            this.canScroll = false;
            this.nextWork(this.newWork(this.getWork(), 'prev'), this.getWork());
          }
        }
      });
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
      const app = document.querySelector('#app');

      home.classList.add('home--leave');
      wrapperA.classList.add('clickWrapper--active');
      wrapperB.classList.add('clickWrapper--b--active');

      app.setAttribute('data-return', true);
      app.setAttribute('data-project', this.current);

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
     * @function returns
     * @description return animation when close project
     */
    returns() {
      const wrapperA = document.querySelector('.clickWrapper');
      const wrapperB = document.querySelector('.clickWrapper--b');
      const home = document.querySelector('#home');

      wrapperB.style.transitionDelay = '0s';
      wrapperB.style.transitionDuration = '0.8s';
      wrapperB.classList.remove('clickWrapper--b--end');

      setTimeout(() => {
        wrapperB.classList.remove('clickWrapper--b--active');
        setTimeout(() => {
          wrapperA.classList.remove('clickWrapper--active');
          home.classList.remove('home--leaveTwo');
          home.classList.remove('home--leave');
          setTimeout(() => {
            home.classList.remove('home--leave');
          }, 600);
        }, 1000);
      }, 850);
    },

    /**
     * @function changePage
     * @description programatique navigation to the project page
     * @param name name of project
     */
    changePage() {
      const road = this.work[this.current];
      router.push({ path: road });
    },
  },
  mounted: function () {
    const app = document.querySelector('#app');
    const about = document.querySelector('.headerNav__link');
    const home = document.querySelector('#home');
    const wrapperA = document.querySelector('.clickWrapper');
    const wrapperB = document.querySelector('.clickWrapper--b');
    const current = app.getAttribute('data-project');
    const body = document.querySelector('body');

    body.classList.add('body__home--mobile');

    about.innerHTML = 'Info';

    if (app.getAttribute('data-return') !== null) {
      this.intro = false;
      const menu = document.querySelector(`.navigation__item--${this.work[current]}`);
      const active = document.querySelector('.navigation__item--active');
      // project
      home.setAttribute('data-current', current);
      home.classList.add(`home--${this.work[current]}`);
      home.classList.remove('home--bmw');
      active.classList.remove('navigation__item--active');
      menu.classList.add('navigation__item--active');
      setTimeout(() => {
        this.returns();
      }, 10);
    } else {
      this.introText();
    }

    // animation
    home.classList.add('home--leave');
    home.classList.add('home--leaveTwo');
    wrapperA.classList.add('clickWrapper--active');
    wrapperB.classList.add('clickWrapper--b--active');
    wrapperB.classList.add('clickWrapper--b--end');
    if (this.mobile === false) {
      this.scrollEvent();
    } else if (this.mobile === true) {
      this.scrollMobile();
    }
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
