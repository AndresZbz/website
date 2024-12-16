<template>
  <div class="info-container">
    <h2 class="accent right">What I know</h2>
    <p>
      Here are my current knowledges of Web development and Game development
    </p>
  </div>

  <div class="web-container">
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
  </div>

  <div class="web-container">
    <div class="card">
      <h3>Game Development</h3>
      <div class="game-div">
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
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}

.game-div {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media (min-width: 320px) and (max-width: 768px) {
  .web-container {
    margin: 10% 15%;
  }
}

@media (min-width: 769px) {
  .web-container {
    margin: 3% 20%;
  }
}
</style>
