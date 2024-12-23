<template>
  <div class="info-container">
    <h2 class="accent left">About</h2>
    <p>
      Hey! I'm Juan Bouza or AndresDev, depends on my name or username. I'm
      currentty working as a Frontend web developer, but with a passion of
      building games, so I'm more focused on building Game project to pursue my
      career as a game developer.
    </p>
  </div>
</template>

<style>
.info-container {
  background: #000;
  padding: 10px 20px;
  border: 2px solid white;
}

@media (min-width: 320px) and (max-width: 768px) {
  .info-container {
    margin: 10% 15%;
  }
}

@media (min-width: 769px) {
  h2 {
    font-size: 40px;
  }
  .info-container {
    margin: 10% 20%;
  }
}
</style>
