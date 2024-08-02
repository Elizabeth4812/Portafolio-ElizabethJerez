<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Elizabeth Jerez</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre mí</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/curriculum">Curriculum</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/habilidades">Habilidades</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/trabajos">Trabajos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Estilo para hacer el navbar más grueso */
.navbar {
  padding: 1rem 2rem; /* Ajusta el padding para hacer el navbar más grueso */
  min-height: 80px; /* Ajusta la altura mínima del navbar */
}

.navbar-brand {
  font-size: 1.25rem; /* Ajusta el tamaño de la fuente del nombre en el navbar */
}

.nav-link {
  font-size: 1rem; /* Ajusta el tamaño de la fuente de los enlaces */
}

.navbar-toggler-icon {
  width: 1.5rem; /* Ajusta el tamaño del ícono del botón de navegación en dispositivos móviles */
  height: 1.5rem; /* Ajusta el tamaño del ícono del botón de navegación en dispositivos móviles */
}
</style>
