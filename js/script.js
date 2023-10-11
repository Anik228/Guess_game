let startBtn = document.querySelector('.startButton');

startBtn.addEventListener('click', showField);

function showField(e) {
    e.preventDefault();

    let formdiv = document.querySelector('.form');

    formdiv.innerHTML = '';

    let form = document.createElement('form');

    form.className = 'book-form';

    let newdiv1 = document.createElement('div');

    newdiv1.innerHTML = `<label for="number">Guess the number</label><br>
    <input type="number" id="number" class="u-full-width"><br><br>`;

    let newdiv2 = document.createElement('div');

    form.appendChild(newdiv1);

    formdiv.appendChild(form);

    newdiv2.innerHTML = `<input type="submit" value="Submit" class="u-full-width">`;

    form.appendChild(newdiv2);

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    console.log(randomNumber);

    let bookForm = document.querySelector('.book-form');

    let attempts = 3; 

    let chance=1;
    let win=0;

    bookForm.addEventListener('submit', (e) => {
        let number = document.querySelector('#number');

        if (number.value > randomNumber) {

            number.value='';
            alert(`Attempts :${chance} = Bigger to the guess number`);
            chance++;
        } else if (number.value < randomNumber) {
            number.value='';
            alert(`Attempts :${chance} = Smaller to the guess number`);
            chance++;
        } else if (number.value == randomNumber) {
            number.value='';
            alert(`Attempts :${chance} = Win`);
            formdiv.innerHTML='';
            win++;
        }

        attempts--;

        if (attempts === 0 && number.value != randomNumber ) {
            number.value='';
            formdiv.innerHTML='';
            if(win!=0)
            alert("All truns was complete");

            else
            alert(`You lose all truns was complete.Guess number is ${randomNumber}`);
        }

       

        //console.log(number.value);

        e.preventDefault();
    });
}
