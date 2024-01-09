/*variabler*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const description = document.querySelector('#description');
const submitBtn = document.querySelector('#submit');
const submissionTime = new Date().toLocaleDateString('en-US', { /*object för att kunna returna en viss tid eller datum*/
    month: 'long', /*formatet som ska visas, long = hela namnet, numeric = siffra*/
    day: 'numeric',
    year: 'numeric'
});

let container = document.querySelector('.card-container')

submitBtn.addEventListener('click', e => { /*funktion för submit button i form */

    if (validation()) {
        display();
        clearForm();
        e.preventDefault();
    } else {
        alert(' Enter an input')
        e.preventDefault();
    }
    
});

function clearForm () { /* funktion för att radera allt i alla forms */
    title.value = '';
    author.value = '';
    description.value = '';
}

function validation () { /*funktion för att se till om input är tomma */
    if (title.value === '' || author.value === '' || description.value === '') {
        return false;
    } else return true;
}

function display() { /*funktion för att skapa en blog och lägga till i blogg container */
    container.innerHTML += 
    `
    <div class="card">
        <div class="card-title"><b>Title: </b>${title.value}"</div>
        <div class="author"><b>Author: </b>${author.value}</div>
        <div class="date"><b>Date: </b>${submissionTime}</div>
        <div class="text">${description.value}</div>
    </div>
    `
}