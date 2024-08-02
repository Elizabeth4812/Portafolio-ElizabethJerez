$(document).ready(function () {
  $("a").click(function () {
    var gato = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top - 95
      },
      800
    );
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});


export default {
  name: 'Contacto',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        agreed: false
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.agreed) {
        alert("¡Mensaje enviado con éxito!");
        this.resetForm();
      } else {
        alert("Debe aceptar los términos y condiciones.");
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
      this.form.agreed = false;
    }
  }
}

