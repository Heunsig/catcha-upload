let cu = new CatchaUpload(document.querySelector('#fileUpload'), {
  url: 'http://127.0.0.1:5000/upload',
  maximumFileSize: 360000,
  minimumFileSize: 0,
  maximumFileNumber: 0
})

console.log(cu)

let cu2 = new CatchaUpload(document.querySelector('#fileUpload2'), {
  url: 'http://127.0.0.1:5000/upload',
  maximumFileSize: 360000,
  minimumFileSize: 0,
  maximumFileNumber: 7
})

console.log(cu2)

console.log(cu === cu2)