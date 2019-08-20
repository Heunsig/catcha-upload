let cu = new CatchaUpload(document.querySelector('#fileUpload'), {
  url: 'http://127.0.0.1:5000/upload',
  maximumFileSize: 360000,
  minimumFileSize: 0,
  maximumFileNumber: 0
})