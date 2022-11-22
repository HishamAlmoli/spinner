const spinner1 = function() {
    let counterI = 100;
    for (let i = 0; i < 3; i++) {       
        setTimeout(() => {
            process.stdout.write('\r|   ');
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            process.stdout.write('\r/   ');
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            process.stdout.write('\r-   ');
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            // Need to escape the backslash since it's a special character.
            process.stdout.write('\r\\   '); 
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            process.stdout.write('\r-   ');
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            process.stdout.write('\r/  ');
          }, counterI);
          counterI +=200;
          
          setTimeout(() => {
            process.stdout.write('\r|   ');
          }, counterI);
        counterI +=200;
      }
};
spinner1();