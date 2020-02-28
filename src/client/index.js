import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

export {
    checkForName,
    handleSubmit
}


console.log(checkForName);
document.getElementById("nameform").addEventListener("submit", handleSubmit);