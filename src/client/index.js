import './styles/main.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import {handleSubmit} from './js/formHandler'
console.log("hello")
document.getElementById('nameform').addEventListener('submit', handleSubmit)