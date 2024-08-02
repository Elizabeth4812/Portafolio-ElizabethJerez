const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], {
        __VUE_OPTIONS_API__: true, // Habilitar o deshabilitar la API de opciones de Vue
        __VUE_PROD_DEVTOOLS__: false, // Deshabilitar devtools en producción
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false // Deshabilitar detalles de discrepancias de hidratación en producción
      });
      return definitions;
    });
  }
})
