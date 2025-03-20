<template>
  <div
    class="modal fade"
    id="aboutModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    role="dialog"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content mod-item">
        <div class="modal-body m-3">
          <div class="row gap-4">
            <div class="col-md-3 col-lg-3 col-s-12">
              <img
                src="../assets/avatar.webp"
                width="128px"
                class="rounded-circle"
              />
            </div>
            <div class="col-md-8 col-lg-8 col-s-12">
              <h1>Hey!</h1>
              <p>
                I'm Juan Bouza, a frontend web developer and a Game Developer
              </p>
              <h2 class="mt-5">About</h2>
              <p>
                I am a 20-year-old Computer Science student in his final year of
                college to obtain his degree. Currently working as a Frontend
                web developer but with aspirations to pursuit a Gamedev career.
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <span><img src="../assets/heart.png" width="16px" /></span>Profile
          picture made by my friend Yul
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.mod-item {
  background: #1e1e1e;
  color: white;
}

.modal-footer {
  border-top: none;
}
</style>
