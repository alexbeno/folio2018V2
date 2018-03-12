<!-- eslint-disable -->
<!-- templating html -->
<template>
  <div class="project projectSens" id="project projectSens">
    <!-- start project visual -->
    <div class="visual">
      <video v-if="mobile === false" class="visual__content" src="@/../static/video/sens/sens.mp4" autoplay loop muted></video>
      <img src="@/../static/image/project/sens/silent.jpg" alt="louis j" class="visual__content" v-if="mobile === true">
    </div>

    <!-- wrapper video -->
    <div class="wrapper"></div>

    <!-- title -->
    <div class="information__title">
      <h1 class="information__titleContent information__titleContent--bmw">SENS.</h1>
    </div>

    <!-- description -->
    <div class="information__describ__container">

      <!-- description texte -->
      <div class="information__describ">
        <p class="information__describ__content">For a 3 rd year project we have to answer to a given problem, deprivation of meaning. To deploy this, we have created an experience. The user must create a journey thanks to the sound he hears in order to help the mascot to cross the screen.</p>
      </div>

      <!-- site information -->
      <div class="information__site">
        <div class="information__siteItem">
          <div class="information__siteItem__title">
            <p class="information__siteItem__titleContent">WHY</p>
          </div>
          <div class="information__siteItem__text">
            <p class="information__siteItem__textContent">School Project</p>
          </div>
        </div>
        <div class="information__siteItem">
          <div class="information__siteItem__title">
            <p class="information__siteItem__titleContent">DATE</p>
          </div>
          <div class="information__siteItem__text">
            <p class="information__siteItem__textContent">2017</p>
          </div>
        </div>
        <div class="information__siteItem">
          <div class="information__siteItem__title">
            <p class="information__siteItem__titleContent">ROLE</p>
          </div>
          <div class="information__siteItem__text">
            <p class="information__siteItem__textContent">Front developer</p>
          </div>
        </div>
      </div>

      <!-- launch site -->
      <a class="information__discover" href="silentprod.netlify.com" target="°blank">
          <div class="information__disoverBorder"></div>
          <div class="information__disoverContent">
            <div class="information__disoverText">
                <p class="information__disoverText__static">Launch <span>Site</span></p>
              </div>
            <div class="information__disoverText--hover">
                <p class="information__disoverText__static--hover">Let's <span>Go</span></p>
              </div>
          </div>
        </a>
    </div>

    <!-- details -->
    <div class="details">
      <div class="details__container" v-if="mobile === false">
        <div class="details__container__video details__container__video--1">
          <video class="details__container__video__content" src="@/../static/video/sens/prehome.mp4" autoplay loop muted></video>
        </div>
        <div class="details__container__video details__container__video--2">
          <video class="details__container__video__content" src="@/../static/video/sens/home.mp4" autoplay loop muted></video>
        </div>
        <div class="details__container__video details__container__video--2">
          <video class="details__container__video__content" src="@/../static/video/sens/game.mp4" autoplay loop muted></video>
        </div>
      </div>
    </div>

  <!-- scroll indication  -->
  <div class="scrolling"></div>

  <!-- next project -->
  <div class="next">
      <!-- title -->
      <div class="next__title">
        <h1 class="next__titleContent">BMW.</h1>
      </div>
      <!-- discover -->
      <a class="information__discover--next" href="#" target="°blank">
        <div class="information__disoverBorder--next"></div>
        <div class="information__disoverContent--next">
          <div class="information__disoverText--next">
              <p class="information__disoverText__static--next">Next <span>Work</span></p>
            </div>
          <div class="information__disoverText--hover--next">
              <p class="information__disoverText__static--hover--next">Let's <span>Go</span></p>
            </div>
        </div>
      </a>
  </div>
  </div>
</template>


<!-- script  -->
<script type="text/javascript" src="@/components/project/sens/_sens.js"></script>

<!-- sass stylesheet -->
<style media="screen" src="@/components/project/sens/_sens.scss" lang="scss" scoped></style>
