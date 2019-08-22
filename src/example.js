let catchaUpload = new CatchaUpload(document.querySelector('#fileUpload'), {
  // url: 'http://127.0.0.1:5000/upload'
  storageType: 's3',
  s3: {
    IdentityPoolId: 'ap-northeast-2:ea7a12a6-954d-43c0-9e11-72403ec0e280',
    region: 'ap-northeast-2',
    bucket: 'catcha-fileupload-demo'
  }
})

console.log(catchaUpload.version)