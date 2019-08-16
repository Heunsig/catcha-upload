export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = function(e) {
      resolve(e.target.result)
    }
  }) 
}

export const isImage = (data) => {
  const regex = /^data:image\/(png|jpe?g|gif|svg)/
  if (data.search(regex) > -1) {
    return true
  }

  return false
}