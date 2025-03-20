<script setup>
import AboutModal from "../modals/aboutModal.vue";
import About from "../pages/About.vue";
</script>

<template>
  <div class="page-body">
    <div class="ben-container container my-4">
      <div class="row g-4">
        <!-- About Me -->
        <div class="col-lg-3 col-md-12">
          <div
            class="ben-item ben-tall text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal"
          >
            <About />
          </div>
        </div>

        <div class="col-lg-9 col-md-12">
          <div class="ben-item bg-secondary">projects</div>

          <!-- Skills and Experience -->
          <div class="row g-4 mt-1">
            <div class="col-md-6 col-s-12">
              <div class="ben-item bg-success">skills web</div>
            </div>
            <div class="col-md-6 col-s-12">
              <div class="ben-item bg-success">skills gamedev</div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="ben-item bg-success">nose</div>
        </div>
      </div>
    </div>
  </div>
  <AboutModal />
</template>
<style>
.ben-container {
  height: 100%;
}

.ben-item {
  height: 200px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease;
}

.ben-item:hover {
  transform: scale(1.05);
}

.ben-tall {
  height: 100%;
  background: #1e1e1e;
}
</style>
