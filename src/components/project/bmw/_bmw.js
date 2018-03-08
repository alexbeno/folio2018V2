
// import script

// import router from '@/router';

// end import

export default {
  name: 'bmw',
  methods: {
    init() {
      const page = document.querySelector('.project');

      page.classList.add('project--active');
    },
  },
  mounted: function () {
    setTimeout(() => {
      this.init();
    }, 100);
  },
};
