<template>
  <section id="Sobre-Mi" class="pt-5 container d-none d-sm-block">
    <div>
      <!-- Agrega un espaciador para empujar el contenido hacia abajo -->
      <div class="spacer"></div>
      <h4 class="text-center fw-bold">
        Desarrolladora Web Front-End.
      </h4>
      <hr class="opacity-100 w-25 mx-auto">
    </div>
    <div class="row pt-4">
      <div class="col-6">
        <p class="hover-text">
          Hola, soy una Ingeniera Civil Industrial y emprendedora con una fuerte base en gestión de datos y desarrollo de software. He trabajado en diversos sectores como el bancario, asegurador y de exportación, además de dirigir mi propia pyme de productos congelados. Mi experiencia abarca desde el uso de herramientas de desarrollo web como HTML, CSS, JavaScript y frameworks como Prisma, Nest, Ruby on Rails y Python, hasta la gestión de bases de datos con PostgreSQL.
        </p>
        
      </div>
      <div class="col-6">
        <p class="hover-text">
          Mi carrera se ha caracterizado por un enfoque en el diseño web y el desarrollo frontend y backend. La experiencia adquirida al gestionar mi propio negocio me ha permitido desarrollar habilidades en la optimización de procesos, gestión de recursos y satisfacción del cliente.
        </p>
        <p class="hover-text">
          Soy una profesional proactiva y orientada a resultados, con una pasión por el aprendizaje continuo y la aplicación de nuevos conocimientos. Estoy lista para contribuir al éxito de organizaciones innovadoras, aportando mi perspectiva técnica y empresarial.
        </p>
      </div>
      <div class="col-6 d-flex align-items-center">
        <img src="../assets/img/fotos.jpg" alt="Foto de Elizabeth Jerez" class="img-fluid rounded-circle shadow-lg">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sobre Mi (sección sobre mí) */
#Sobre-Mi {
  padding-top: 4rem; /* Espacio superior adicional para la sección */
  color: #514b4c; /* Color del texto */
  font-family: "Open Sans"; /* Fuente específica para la sección sobre mí */
  line-height: 1.6; /* Altura de línea ajustada para mejor legibilidad */
  font-size: 18px; /* Tamaño de la letra en la sección sobre mí */
}

#Sobre-Mi .text-center h4 {
  margin-top: 5rem; /* Aumenta el espacio superior específico para el título */
}

#Sobre-Mi .spacer {
  height: 3rem; /* Espaciador para empujar el contenido hacia abajo */
}

#Sobre-Mi img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

#Sobre-Mi .hover-text {
  transition: transform 0.3s ease; /* Transición suave para el movimiento */
}

#Sobre-Mi .hover-text:hover {
  transform: translateX(5px); /* Mueve el texto 5px hacia la derecha al pasar el ratón */
}
</style>
