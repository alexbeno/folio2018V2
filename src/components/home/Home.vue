<!-- eslint-disable -->
<!-- templating html -->
<template>
  <div class="home home--bmw home--leave home--leaveTwo" id="home" ref="scrollpage" data-current="0">

  <!-- intro -->
  <div class="intro" v-if="intro">
      <div class="intro__welcomeContent">
          <h2 class="intro__welcome">Welcome</h2>
      </div>
      <div class="intro__slice">
        <div class="intro__slice__content">
            <p class="intro__slice__contentText intro__slice__contentText--1"><span>I’m</span><span>Alexis</span><span class="color1">Benoliel</span></p>
            <p class="intro__slice__contentText intro__slice__contentText--2"><span>I'm</span><span>creative</span><span class="color2">developer</span></p>
            <p class="intro__slice__contentText intro__slice__contentText--3"><span>Enjoy</span><span>your</span><span class="color3">visit</span></p>
        </div>
      </div>
    </div>

    <!-- about components -->
    <about></about>
    <!-- start project visual -->
    <div class="visual">
      <div class="visual__mover" v-if="mobile === false">
          <div class="visual__container"><video class="visual__content" src="@/../static/video/bmw/bmw.mp4" autoplay loop muted></video></div>
          <div class="visual__container"><video class="visual__content" src="@/../static/video/louisj/louisj.mp4" autoplay loop muted></video></div>
          <div class="visual__container"><video class="visual__content" src="@/../static/video/sens/sens.mp4" autoplay loop muted></video></div>
      </div>
      <div class="visual__mover" v-if="mobile === true">
          <div class="visual__container"><img src="@/../static/image/project/bmw/i8.jpg" alt="bmw" class="visual__content"></div>
          <div class="visual__container"><img src="@/../static/image/project/louisj/jo.jpg" alt="louis j" class="visual__content"></div>
          <div class="visual__container"><img src="@/../static/image/project/sens/silent.jpg" alt="Sens" class="visual__content"></div>
      </div>
    </div>
    <!-- end project visual -->

    <!-- start information parts -->
    <div class="information">

      <!-- role -->
      <div class="information__role">
        <div class="roleOverflow">
          <div class="roleMover">
            <p class="information__roleContent"><span>Role</span> Developer</p>
            <p class="information__roleContent information__roleContent--louisj"><span>Role</span> Developer - Designer</p>
            <p class="information__roleContent information__roleContent--sens"><span>Role</span> Developer</p>
          </div>
        </div>
      </div>

      <!-- date and type -->
      <div class="information__date">
        <div class="information__dateNumber__container">
          <div class="information__dateNumber__overflow">
            <div class="information__dateNumber__mover">
              <p class="information__dateNumber">2017</p>
              <p class="information__dateNumber information__dateNumber--louisj">2018</p>
              <p class="information__dateNumber information__dateNumber--sens">2017</p>
            </div>
          </div>
        </div>

        <div class="information__dateType__container">
          <div class="information__dateType__overflow">
            <div class="information__dateType__mover">
              <p class="information__dateType">School project</p>
              <p class="information__dateType">Singer portfolio</p>
              <p class="information__dateType">School project</p>
            </div>
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="information__title">
        <div class="information__title__mover">
          <h1 class="information__titleContent information__titleContent--bmw">BMW.</h1>
          <h1 class="information__titleContent information__titleContent--louisj">LOUISJ.</h1>
          <h1 class="information__titleContent information__titleContent--sens">SENS.</h1>
        </div>
      </div>

      <!-- discover -->
      <a class="information__discover" href="#" v-on:click.prevent="go">
        <div class="information__disoverBorder"></div>
        <div class="information__disoverContent">
          <div class="information__disoverText">
              <p class="information__disoverText__static">Discover</p>
              <div class="information__disoverText__Mover">
                <p class="information__disoverText__change">BMW</p>
                <p class="information__disoverText__change information__disoverText__change--louisj">LOUISJ</p>
                <p class="information__disoverText__change information__disoverText__change--sens">SENS</p>
              </div>
            </div>
          <div class="information__disoverText--hover">
              <p class="information__disoverText__static--hover">Let's <span>Go</span></p>
            </div>
        </div>
      </a>

      <!-- scroll indication -->
      <div class="scroll">
        <p class="scroll__content">Scroll Down</p>
      </div>

      <!-- navigation -->
      <div class="navigation">
        <div class="navigation__item">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Intro</p>
        </div>
        <div class="navigation__item navigation__item--active navigation__item--bmw" v-on:click="clickNav(0)">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Bmw</p>
        </div>
        <div class="navigation__item navigation__item--louisj" v-on:click="clickNav(1)">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Louis J</p>
        </div>
        <div class="navigation__item navigation__item--sens" v-on:click="clickNav(2)">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Sens</p>
        </div>
      </div>
    </div>
    <!-- end information parts -->

    <!-- wrapper -->

    <div class="wrapper wrapper--a"></div>
    <div class="wrapper wrapper--a--right wrapper--right"></div>
    <div class="wrapper wrapper--b"></div>
    <div class="wrapper wrapper--b--right wrapper--right"></div>

    <!-- click wrapper -->
    <div class="clickWrapper clickWrapper--active"></div>
    <div class="clickWrapper--b clickWrapper--b--active clickWrapper--b--end"></div>

  </div>
</template>


<!-- script  -->
<script type="text/javascript" src="@/components/home/_Home.js"></script>


<!-- sass stylesheet -->
<style media="screen" src="@/components/home/_Home.scss" lang="scss" scoped></style>
