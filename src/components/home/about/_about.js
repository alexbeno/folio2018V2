
// import script

// end import

export default {
  name: 'about',
  methods: {
    openEvent: function () {
      const link = document.querySelector('.headerNav__link');
      const about = document.querySelector('.about__content');
      const extern = document.querySelector('.about__externe ');
      const header = document.querySelector('.about .header');
      const content = document.querySelector('.about .content');
      const social = document.querySelector('.about__social');


      link.addEventListener('click', (event) => {
        event.preventDefault();
        extern.style.display = 'block';

        setTimeout(() => {
          extern.classList.add('about__externe--active');
        }, 50);

        setTimeout(() => {
          about.classList.add('about--active');
        }, 300);

        setTimeout(() => {
          header.classList.add('header--active');
          content.classList.add('content--active');
          setTimeout(() => {
            social.classList.add('about__social--active');
          }, 400);
        }, 600);
      });
    },
    closeEvent: function () {
      const link = document.querySelector('.header__close');
      const about = document.querySelector('.about__content');
      const extern = document.querySelector('.about__externe');
      const header = document.querySelector('.about .header');
      const content = document.querySelector('.about .content');
      const social = document.querySelector('.about__social');

      link.addEventListener('click', (event) => {
        event.preventDefault();
        header.classList.remove('header--active');
        content.classList.remove('content--active');
        social.classList.remove('about__social--active');
        setTimeout(() => {
          about.classList.remove('about--active');
          extern.classList.remove('about__externe--active');
        }, 500);
        setTimeout(() => {
          extern.style.display = 'none';
        }, 1000);
      });

      extern.addEventListener('click', (event) => {
        event.preventDefault();
        header.classList.remove('header--active');
        content.classList.remove('content--active');
        social.classList.remove('about__social--active');
        setTimeout(() => {
          about.classList.remove('about--active');
          extern.classList.remove('about__externe--active');
        }, 500);
        setTimeout(() => {
          extern.style.display = 'none';
        }, 1000);
      });
    },
  },

  mounted: function () {
    this.openEvent();
    this.closeEvent();
  },
};
