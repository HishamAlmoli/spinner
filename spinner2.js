const spinner2 = function() {
    let counterI = 100;
    let linesShape = ['|','/','-','\\','/','|'];
    // let linesShape = '|/-\\/|';
    for (let i = 0; i < linesShape.length; i++) { 
        //console.log(linesShape[i]) ;     
        setTimeout(() => {
            process.stdout.write(`\r${linesShape[i]} `);
          }, counterI);
          counterI +=200;
      }
};
spinner2();