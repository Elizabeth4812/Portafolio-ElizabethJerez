<template>
  <section id="Hero-Section" class="carousel slide text-center text-white" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#Hero-Section" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#Hero-Section" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#Hero-Section" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#Hero-Section" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/Blue.png" class="d-block w-100" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Bienvenido a</h1>
          <h1>Mi Portafolio</h1>
          <hr class="hero-line">
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/gatitos.jpeg" class="d-block w-100" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Mi gran respeto</h1>
          <h1>Amo a los animales, sobre todo los gatos, quienes me acompañaron en todos mis estudios.</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/sur.jpg" class="d-block w-100" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Mi lugar de relajo </h1>
          <h1>Mi bello sur, donde me conecto con la naturaleza y mis seres queridos.</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/img/macul.jpg" class="d-block w-100" alt="fourt slide">
        <div class="carousel-caption d-none d-md-block">
          <h1>Uno de mis hobbies</h1>
          <h1>Es realizar trekking junto a mi familia.</h1>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#Hero-Section" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#Hero-Section" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!-- Botón fijo de contacto -->
    <router-link to="/contacto">
      <button class="btn btn-contacto">Contacto</button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.carousel-caption {
  position: absolute;
  bottom: 45px;
  left: 0;
  right: 0;
  margin: auto;
}

.btn-contacto {
  position: fixed;
  bottom: 20px; /* Ajusta según sea necesario */
  right: 20px; /* Ajusta según sea necesario */
  z-index: 1000; /* Asegúrate de que el botón esté por encima de otros elementos */
  background-color: #412973; /* Ajusta el color de fondo */
  color: white; /* Ajusta el color del texto */
  border: none; /* Quita el borde */
  padding: 10px 20px; /* Ajusta el tamaño del botón */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
}

.btn-contacto:hover {
  background-color: #b8cabe; /* Color de fondo al pasar el cursor */
}
</style>
