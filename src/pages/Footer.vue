<template>
  <footer>
    <hr class="line" />
    <p>All my links: <a href="https://github.com/AndresZbz">Github</a></p>
  </footer>
</template>
<style>
.line {
  height: 2px; /* Adjust the thickness of the line */
  background-color: #2c5530; /* Set the desired color (e.g., red) */
  border: none; /* Remove default border and shading */
  margin: 1em 0; /* Add top and bottom spacing */
}

footer {
  text-align: center;
  margin-bottom: 2em;
}

a {
  text-decoration: none;
  color: #949494; /* Warm terracotta */
  font-weight: bold;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
  padding: 5px 10px;
  border-radius: 4px;
}

a:hover {
  color: #a0a0a0; /* Deep forest green */
  background: rgba(200, 245, 255, 0.1); /* Light terracotta tint */
  transform: translateY(-2px);
}
</style>
