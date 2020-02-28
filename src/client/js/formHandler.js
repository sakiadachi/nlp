import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/classify',{
        method: "POST",
        body: JSON.stringify({url: formText}),
        headers: {'Content-Type': "application/json"}
    })
    .then(res => {
        return res.json();
    })
    .then(content => {
        // JSON.stringify(content)
            const language = content.language;
            const label = JSON.stringify(content.categories);
            console.log(language + label);

            const formResult = document.getElementById("results");
            formResult.innerText = language + label;
        
    })
 }
// const updateUI = async() =>
// {
//     const request = await fetch('http://localhost:8080/classify')
//     try {
//         const allData = await request.json();
//         const lastEntry = allData[allData.length -1];
//         if (lastEntry > 0) {
//             //no previous entry exist
//             return;
//             }
//                 document.getElementById('results').innerHTML = lastEntry.label;
//                 document.getElementById('results').innerHTML = lastEntry.code;
//                 document.getElementById('results').innerHTML = lastEntry.confident;
//         }catch(error) {
//             console.log("error", error);
//         }
        
//     }



export { handleSubmit }
