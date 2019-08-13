const readFile = (file, progressBar) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function(e) {
      progressBar.test.style.backgroundImage = `url("${e.target.result}")`
    }
}

export default readFile