module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
        'app.js': /^app/,
      }
    },
      stylesheets: {
          joinTo: "css/app.css"
      },
    templates: {
      joinTo: 'app.js'
    },
  },
  plugins: {
    babel: {
      presets: ['latest', 'stage-3']
    },
    vue: {
      extractCSS: true
    }
  }
}
