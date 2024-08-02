<template>
  <section id="Trabajos" class="py-5 container-fluid text-white">
    <div class="text-center">
      <h1 class="fw-bold">Mis Últimos Trabajos</h1>
      <hr class="opacity-100 w-25 mx-auto">
    </div>
    <div class="row pt-4">
      <div class="col-12 col-md-4 my-3" v-for="(project, index) in projects" :key="project.title">
        <div class="card border-0 shadow-sm h-100">
          <img :src="project.image" class="card-img-top" :alt="project.title">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <template v-if="project.title === 'Animales Salvajes'">
                <a href="https://github.com/Elizabeth4812/Animales_salvajes.git" class="stretched-link" target="_blank">
                  {{ project.title }}
                </a>
              </template>
              <template v-else>
                <span class="stretched-link">{{ project.title }}</span>
              </template>
            </h5>
            <p class="card-text fw-light">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Trabajos',
  data() {
    return {
      projects: [
        {
          title: 'Viajes Chile',
          image: require('@/assets/img/viajechile.jpg'),
          description: 'Se diseñó una página web con HTML5 y estilos de CSS, integrando menús y botones según una imagen de referencia. Se utilizó jQuery para capturar y validar entradas numéricas en un formulario, y CanvasJS para mostrar datos en un gráfico de pastel. La información se consultó mediante AJAX, se presentó en tarjetas de Bootstrap, y se generaron alertas para manejar errores en la búsqueda.'
        },
        {
          title: 'Encuentra tu SuperHero',
          image: require('@/assets/img/Super.jpg'),
          description: 'Se desarrolló una página web con HTML5 para la estructura básica y etiquetas semánticas. Se aplicaron estilos con CSS y se implementaron menús y botones según un diseño específico. La validación de formularios y las consultas AJAX se gestionaron con jQuery. La información se mostró con gráficos de pastel de CanvasJS y tarjetas de Bootstrap, y alertas para manejar errores de búsqueda.'
        },
        {
          title: 'Animales Salvajes',
          image: require('@/assets/img/animales.jpg'),
          description: 'Se usó JavaScript moderno para crear clases con herencia, manejar datos de un formulario y realizar consultas asíncronas con async/await. Se modularizó el código con IIFE y se organizó en módulos. Se manipuló el DOM para mostrar animales en una tabla, validando datos antes de añadirlos, y se implementó un botón de audio y una ventana modal para mostrar detalles y reproducir sonidos de los animales.'
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Estilos aquí */
</style>
