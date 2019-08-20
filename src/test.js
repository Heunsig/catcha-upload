let cu = new CatchaUpload(document.querySelector('#fileUpload'), {
  url: 'http://127.0.0.1:5000/upload',
  maximumFileSize: 0,
  minimumFileSize: 0,
  maximumFileNumber: 5,
  dropZoneSize: '200px',
  width: '600px'
})