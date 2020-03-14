// import { response } from "express";

function createFetchOptions(formText) {
    return {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
            url: formText
        }),
        headers: {
            'Content-Type': "application/json"
        }
    }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value;
    fetch('http://localhost:8080/classify', createFetchOptions(formText))
        .then(res => {
            return res.json();
        })
        .then(content => {
            const categories = content.categories.map(a => a.label).join(", ");
            console.log("hello", categories);
            document.getElementById("results").innerHTML = categories;
        })
        // .catch(function (error) {
        //     console.log(error)
        //     document.getElementById("results").innerHTML  = "Error occured.";
        // });
        
};

export {
    handleSubmit
};
export {
    createFetchOptions
};