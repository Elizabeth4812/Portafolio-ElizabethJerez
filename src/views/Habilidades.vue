<template>
  <section id="Habilidades" class="container py-5">
    <div class="text-center">
      <h1 class="fw-bold">Habilidades</h1>
      <hr class="opacity-100 w-25 mx-auto">
    </div>
    <div class="row pt-4">
      <div
        class="col-12 col-sm-6 col-md-4 mb-4"
        v-for="skill in skills"
        :key="skill.name"
      >
        <div class="card skill-card text-center" >
          <div class="card-body">
            <img :src="require(`@/assets/img/${skill.icon}`)" class="skill-icon mb-3" alt="" />
            <h5 class="card-title">{{ skill.name }}</h5>
            <p class="card-text">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Habilidades",
  data() {
    return {
      skills: [
        { name: "HTML", description: "Lenguaje de marcado para estructurar contenido web.", icon: "html.png" },
        { name: "CSS", description: "Lenguaje de estilo para diseño y presentación de páginas web.", icon: "css.png" },
        { name: "JavaScript", description: "Lenguaje de programación para el desarrollo web interactivo.", icon: "js.png" },
        { name: "Ruby on Rails", description: "Framework para el desarrollo de aplicaciones web con Ruby.", icon: "ruby.png" },
        { name: "Python", description: "Lenguaje de programación versátil para diversas aplicaciones.", icon: "python.png" },
        { name: "PostgreSQL", description: "Sistema de gestión de bases de datos relacional.", icon: "postgresql.png"},
        { name: "Vue", description: "Framework para construir interfaces de usuario interactivas.", icon: "vue.png" },
        { name: "Bootstrap", description: "Framework para el diseño de interfaces responsivas.", icon: "bootstrap-logo.png" },
        { name: "GitHub", description: "Plataforma de hospedaje de código y control de versiones.", icon: "github.png" }
      ]
    };
  },
};
</script>

<style scoped>

</style>
