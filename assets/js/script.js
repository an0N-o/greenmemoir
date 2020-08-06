@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

html, body {
  position: relative;
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Roboto Slab', serif;
  color:#000;
  margin: 0;
  padding: 0;
}

.heading {
  background: white;
  height: 5%;
  margin: 10px;
  padding: 10px;
}

.swiper-container {
  width: 100%;
  height: 90%;
}
.swiper-slide {
  text-align: center;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

// Image Accordions General
.container-general {
  padding: 75px 0;
  margin: 0 auto;
  width: 800px;
  .gallery-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;
    .item {
      flex: 1;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: none;
      transition: all 0.8s ease;
      &:hover {
        flex: 7;
      }
    }
  }
}

// Image Accordions Effect 1
.wrap-effect-1 {
  .item {
    &:first-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4185141/galshir-cactus-coffee.png');
    }
    &:nth-of-type(2) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/6146136/galshir-tea-biscuit_2x.png');
    }
    &:nth-of-type(3) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4473482/galshir-dog-walker.gif');
    }
    &:nth-of-type(4) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5743606/gal-shir-scooter_2x.png');
    }
    &:last-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4738104/galshir-storytime.png');
    }
  }
}

// Image Accordions Effect 2
.wrap-effect-2 {
  .item {
    &:hover {
      transform: translate3d(0, 0, 100px);
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      filter: saturate(2) contrast(120%);
    }
    &:first-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4854597/galshir-umbrella.jpg');
    }
    &:nth-of-type(2) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4776189/galshir-genesis.png');
    }
    &:nth-of-type(3) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5329211/galshir-walking.gif');
    }
    &:nth-of-type(4) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4611698/galshir-paper-boat.png');
    }
    &:last-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4544774/galshir-window.png');
    }
  }
}

// Image Accordions Effect 3
.wrap-effect-3 {
  .item {
    &:hover {
      animation: rotate 0.7s ease-in-out both;
      border-radius: 10px;
      border: 1px solid gray;
    }
    &:first-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5947483/galshir-wind_2x.png');
    }
    &:nth-of-type(2) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5754705/galshir-rain_2x.png');
    }
    &:nth-of-type(3) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5355160/galshir-attack.gif');
    }
    &:nth-of-type(4) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4742049/galshir-samurai.png');
    }
    &:last-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5594777/galshir-winter-cycling_2x.jpg');
    }
  }
}

// Image Accordions Effect 4 
.wrap-effect-4 {
  .item {
    &:hover {
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      filter: saturate(2) contrast(120%);
    }
    &:first-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4226693/galshir-iphone-x-lemonade.gif');
    }
    &:nth-of-type(2) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4475663/galshir-musical-instruments.gif');
    }
    &:nth-of-type(3) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/5431797/galshir-lemonade-ring.gif');
    }
    &:nth-of-type(4) {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4419736/galshir-lemonade-bike.gif');
    }
    &:last-of-type {
      background-image: url('https://cdn.dribbble.com/users/729829/screenshots/4281500/galshir-lemonade-camera.gif');
    }
  }
}

.inspire {
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-decoration:none;
  margin: 10px;
  padding: 10px;
  &:after {
    background: #38ef7d;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(10deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-10deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(5deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0)
  }
}

