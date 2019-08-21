let cu = new CatchaUpload(document.querySelector('#fileUpload'), {
  url: 'http://127.0.0.1:5000/upload',
  maximumFileSize: 0,
  minimumFileSize: 0,
  maximumFileNumber: 5,
  dropZoneSize: '200px',
  width: '600px',
  storageType: 's3',
  s3: {
    accessKeyId: 'AKIATK2EOW6PJZX5LBFD',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
    bucket: 'catcha-fileupload-demo'
  }
})