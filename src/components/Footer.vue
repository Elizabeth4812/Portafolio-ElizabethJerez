<template>
  <footer id="Footer" class="text-center text-white py-5">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <a target="_blank" href="https://github.com/Elizabeth4812">
            <i class="fa-brands fa-github fa-2x mx-2"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/elizabeth-jerez-rojas/">
            <i class="fa-brands fa-linkedin fa-2x mx-2"></i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="mb-0">
            Copyright © | Coded with <i class="fa-solid fa-heart"></i> by Elizabeth Jerez
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#Footer a {
  color: white;
  text-decoration: none;
}

#Footer i {
  font-size: 1.5rem; /* Tamaño reducido para los íconos */
}

#Footer .fa-heart {
  font-size: 1rem; /* Tamaño del ícono de corazón */
  color: red; /* Color del ícono de corazón */
}

#Footer p {
  font-size: 0.875rem; /* Tamaño del texto de copyright */
}
</style>
