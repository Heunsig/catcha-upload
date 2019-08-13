import './styles/style.css'


$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()

    let formData = new FormData($('form')[0])

    // var file = _("file1").files[0];
    // // alert(file.name+" | "+file.size+" | "+file.type);
    // var formdata = new FormData();
    // formdata.append("file1", file);
    
    // var ajax = new XMLHttpRequest();
    // ajax.upload.addEventListener("progress", progressHandler, false);
    // // ajax.onprogress = function () {
    // //   console.log('abc')
    // // }
    // ajax.addEventListener("load", completeHandler, false);
    // ajax.addEventListener("error", errorHandler, false);
    // ajax.addEventListener("abort", abortHandler, false);
    // ajax.open("POST", "http://127.0.0.1:5000/upload"); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
    // //use file_upload_parser.php from above url
    // ajax.send(formData);

    // function progressHandler(event) {
    //   console.log(event)
    //   // _("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
    //   // var percent = (event.loaded / event.total) * 100;
    //   // _("progressBar").value = Math.round(percent);
    //   // _("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
    // }

    // function completeHandler(event) {
    //   // _("status").innerHTML = event.target.responseText;
    //   // _("progressBar").value = 0; //wil clear progress bar after successful upload
    // }

    // function errorHandler(event) {
    //   // _("status").innerHTML = "Upload Failed";
    // }

    // function abortHandler(event) {
    //   // _("status").innerHTML = "Upload Aborted";
    // }

    // let url = 'http://127.0.0.1:5000/upload'
    // fetch(url, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   body: formData
    // })
    // .then(response => console.log(response.blob()))
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', JSON.stringify(response)));
    

    $.ajax({
      crossDomain: true,
      xhr: function () {
        let xhr = new window.XMLHttpRequest()
        console.log(xhr)

        xhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            // console.log('Bytes Loaded: ' + e.loaded)
            // console.log('Total Size: ' + e.total)
            // console.log('Percentage Uploaded: ' + (e.loaded/e.total))

            let percent = Math.round(e.loaded / e.total * 100)
            console.log(percent)

            // $("#progressBar").attr('aria-valuenow', percent).css('width', percent + '%').text(percent + '%')
          }
        })

        return xhr
      },
      type: 'post',
      url: 'http://127.0.0.1:5000/upload',
      data: formData,
      processData: false,
      contentType: false,
      success: function () {
        alert('File uploaded!')
      }
    })
  })
})