 "use strict";

    function isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
    
    function getName() {
      let name = prompt('What is your name?');
      while (!name) { 
        name = prompt('Please enter your name:', name);
      }
      return name;
    }
    
    let age;
    do {
      age = prompt('How old are you?');
    } while (!isNumeric(age));
    
    age = parseInt(age); 
    
    if (age < 18) {
      alert('You are not allowed to visit this website');
    } else if (age >= 18 && age <= 22) {
      const isConfirmed = confirm('Are you sure you want to continue?');
      if (isConfirmed) {
        const name = getName();
        alert('Welcome, ' + name);
      } else {
        alert('You are not allowed to visit this website');
      }
    } else if (age > 22) {
      const name = getName();
      alert('Welcome, ' + name);
    }

