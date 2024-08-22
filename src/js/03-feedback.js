/*
1.Urmăriți în formular evenimentul de input și la fiecare modificare să se salveze local un obiect cu câmpurile email și message, unde vor fi 
stocate valorile curente ale câmpurilor din formular. Cheia obiectului va fi "feedback-form-state"
2.La încărcarea paginii, verificați starea storage-ului, iar dacă există date salvate, completați câmpurile formularului cu aceste date. În 
caz contrar, câmpurile vor fi goale.
3.Când se trimite formularul, la evenimentul submit, ștergeți câmpurile din local storage și afișați în consolă obiectul cu câmpurile email, 
message și valorile lor curente.
4.Asigurați-vă că datele vor fi stocate și actualizate doar o dată la 500 de milisecunde. Pentru a face acest lucru, adăugați la proiect și 
utilizați librăria lodash.throttle.
*/

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// SAVING TO LOCAL STORAGE FUNCTION
const saveToLocalStorage = throttle(() => {
    const dataForm = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

    save(STORAGE_KEY, dataForm);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}, 500);


// LOAD FROM LOCAL STORAGE FUNCTION
const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if(savedData) {
        const { email, message } = JSON.parse(savedData);
        form.elements.email.value = email || '';
        form.elements.message.value = message || '';
    }
}

// EVENT WHEN TYPING IN INPUT
form.addEventListener('input', saveToLocalStorage);

// EVENT ON SUBMIT BUTTON
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log('Form submitted with data:', formData);


// DELETE LOAD LOCAL STORAGE AFTER SUBMIT
//   localStorage.removeItem(STORAGE_KEY);


// RESETING FORM
  form.reset();
});

// LOAD FROM LOCAL STORAGE CALL FUNCTION
loadFromLocalStorage();