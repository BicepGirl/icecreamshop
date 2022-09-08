const elFormReq = document.querySelector('#formReq')
const elTxtName = document.querySelector('#contactName')
const elTxtMob = document.querySelector('#contactNumber')
const elTxtEmail = document.querySelector('#contactEmail')
const elTxtMessage = document.querySelector('#contactMessage')


function formComments(event) {
    event.preventDefault();
    let contactName = elTxtName.value;
    let contactNumber = elTxtMob.value;
    let contactEmail = elTxtEmail.value;
    let contactMessage = elTxtMessage.value;

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({contactName:contactName, contactNumber:contactNumber, contactEmail:contactEmail, contactMessage:contactMessage}) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects



}

    postData('http://localhost:3000/api/contacts')
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
            elTxtName.value = '';
            elTxtMob.value = '';
            elTxtEmail.value = '';
            elTxtMessage.value = '';

        });

}
function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('elFormReq')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
}



elFormReq.addEventListener('submit',formComments,false)

