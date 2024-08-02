<template>
  <section id="Contacto" class="contact container p-0 m-0 align-self-center py-5">
    <div class="text-center">
      <h1 class="fw-bold">Contacto</h1>
      <hr class="opacity-100 w-25 mx-auto">
    </div>
    <div class="row justify-content-evenly pt-4">
      <div class="col-12 col-md-6 form-container">
        <div class="p-0 m-0">
          <form @submit.prevent="handleSubmit" class="row g-3 px-2 form-contact">
            <div class="col-md-6">
              <label for="name" class="form-label --form-text text-white" data-toggle="FirstName" title="Espacio para colocar su primer nombre">
                Nombre<i class="fa-solid fa-circle-info px-1"></i>
              </label>
              <input v-model="form.name" type="text" class="form-control border-purple" id="name" placeholder="Ingrese su nombre" required>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label --form-text text-white" data-toggle="Email" title="Espacio para colocar su correo electrónico">
                Correo Electrónico<i class="fa-solid fa-circle-info px-1"></i>
              </label>
              <input v-model="form.email" type="email" class="form-control border-purple" id="email" placeholder="Ingrese su correo electrónico" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label --form-text text-white" data-toggle="Message" title="Por favor, escriba su sugerencia, reclamo o felicitaciones. Sus comentarios son importantes para nosotros! ViajesChile">
                Mensaje<i class="fa-solid fa-circle-info px-1"></i>
              </label>
              <textarea v-model="form.message" class="form-control border-purple" id="message" rows="6" placeholder="Ingrese su mensaje" required></textarea>
            </div>
            <div class="col-12 --form-text">
              <button class="btn btn-secondary btn-light border-purple" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <!-- Contenido de los íconos de contacto -->
        <div class="py-5">
          <div class="mb-3">
            <i class="fa-solid fa-envelope fa-xl --form-text"><span class="px-2 --form-text2">contacto@elizabethjerez.com</span></i>
          </div>
          <div class="mb-3">
            <i class="fa-brands fa-linkedin fa-xl --form-text"><a href="https://www.linkedin.com/in/elizabeth-jerez-rojas/" class="text-decoration-none px-2 --form-text2">Elizabeth Jerez</a></i>
          </div>
          <div class="mb-3">
            <i class="fa-brands fa-instagram fa-xl --form-text"><a href="https://www.instagram.com/miauross06/" class="text-decoration-none px-2 --form-text2">Elizabeth Jerez</a></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      alert("¡Mensaje enviado con éxito!");
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>


</style>
