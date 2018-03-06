<!-- eslint-disable -->
<!-- templating html -->
<template>
  <div class="home home--bmw" id="home" ref="scrollpage" data-current="0">

    <!-- start project visual -->
    <div class="visual">
      <video class="visual__content" src="@/../static/video/bmw/bmw.mp4" autoplay loop muted></video>
    </div>
    <!-- end project visual -->

    <!-- start information parts -->
    <div class="information">

      <!-- role -->
      <div class="information__role">
        <div class="roleMover">
          <p class="information__roleContent"><span>Role</span> Developer</p>
          <p class="information__roleContent information__roleContent--louisj"><span>Role</span> Developer - Designer</p>
        </div>
      </div>

      <!-- date and type -->
      <div class="information__date">
        <div class="information__dateNumber__container">
          <div class="information__dateNumber__mover">
            <p class="information__dateNumber">2017</p>
            <p class="information__dateNumber information__dateNumber--louisj">2018</p>
          </div>
        </div>

        <div class="information__dateType__container">
          <div class="information__dateType__mover">
            <p class="information__dateType">School project</p>
            <p class="information__dateType">Singer portfolio</p>
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="information__title">
        <div class="information__title__mover">
          <h1 class="information__titleContent">BMW.</h1>
          <h1 class="information__titleContent information__titleContent--louisj">LOUISJ.</h1>
        </div>
      </div>

      <!-- discover -->
      <a class="information__discover" href="#">
        <div class="information__disoverBorder"></div>
        <div class="information__disoverContent">
          <div class="information__disoverText">
              <p class="information__disoverText__static">Discover</p>
              <div class="information__disoverText__Mover">
                <p class="information__disoverText__change">BMW</p>
                <p class="information__disoverText__change information__disoverText__change--louisj">LOUISJ</p>
              </div>
            </div>
          <div class="information__disoverText--hover">
              <p class="information__disoverText__static--hover">Let's <span>Go</span></p>
            </div>
        </div>
      </a>

      <!-- scroll indication -->
      <div class="scroll">
        <p class="scroll">Scroll Down</p>
      </div>

      <!-- navigation -->
      <div class="navigation">
        <div class="navigation__item">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Intro</p>
        </div>
        <div class="navigation__item navigation__item--active">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Bmw</p>
        </div>
        <div class="navigation__item">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Louis J</p>
        </div>
        <div class="navigation__item">
          <a href="#" class="navigationItem__link"></a>
          <p class="navigationItem__text">Silent</p>
        </div>
      </div>
    </div>
    <!-- end information parts -->

  </div>
</template>


<!-- script  -->
<script type="text/javascript" src="@/components/home/_Home.js"></script>


<!-- sass stylesheet -->
<style media="screen" src="@/components/home/_Home.scss" lang="scss" scoped></style>
