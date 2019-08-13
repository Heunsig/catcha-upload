export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function(e) {
      resolve(e.target.result)
    }
  }) 
}

// const reader = new FileReader()

//     reader.readAsDataURL(file)
//     reader.onload = function(e) {
//       return e.target.result
//       // progressBar.test.style.backgroundImage = `url("${e.target.result}")`
//     }