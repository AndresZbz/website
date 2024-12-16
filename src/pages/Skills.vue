<template>
  <div class="info-container">
    <h2 class="accent right">What I know</h2>
    <p>
      I currently do Front-end web development as part of my job, but in my free
      time I love doing Game development as a way to pursue my career as a game
      developer. Here's my currently skills of each side of development.
    </p>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Web Development</h3>
      <div class="web-div">
        <img class="skill-img" src="../assets/html.svg" alt="html" />
        <img class="skill-img" src="../assets/js.svg" alt="js" />
        <img class="skill-img" src="../assets/bootstrap.svg" alt="bootstrap" />
        <img class="skill-img" src="../assets/react.svg" alt="react" />
        <img class="skill-img" src="../assets/vue.svg" alt="vue" />
      </div>
    </div>
    <div class="card">
      <h3>Game Development</h3>
      <div class="web-div">
        <img class="skill-img" src="../assets/csharp.svg" alt="csharp" />
        <img class="skill-img" src="../assets/godot.svg" alt="godot" />
        <img class="skill-img" src="../assets/monogame.png" alt="monogame" />
      </div>
    </div>
  </div>
</template>

<style>
.skill-img {
  width: 64px;
}

.web-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media (min-width: 320px) and (max-width: 768px) {
  .grid {
    margin: 0 15%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  }
}

@media (min-width: 769px) {
  .grid {
    margin: 0 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
