import './styles/style.css'
import CatchaUpload from './CatchaUpload'

new CatchaUpload(document.querySelector('#fileUpload'), {
  url: 'http://127.0.0.1:5000/upload'
})