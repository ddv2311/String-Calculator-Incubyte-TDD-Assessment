function add(numbers) {
    if (numbers === "") 
        return 0;

    let delimiter = /[\n,]/;

    if(numbers.startsWith("//")){

        const parts = numbers.split('\n');
        let delimiterLine = parts[0].slice(2); 

         if (delimiterLine.startsWith('[')) {
            const match = delimiterLine.match(/\[(.+?)\]/);
            const customDelimiter = escapeSpecialChars(match[1]);
            delimiter = new RegExp(customDelimiter);
  } 
        else {
            delimiter = new RegExp(escapeSpecialChars(delimiterLine));
  }

        numbers = parts[1];
    
    }
    const parts = numbers.split(delimiter).map(Number);

    const negatives = parts.filter(token => token < 0);
    if(negatives.length > 0){
        throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
    }
    return parts .filter(n => n <= 1000).reduce((a,b)=>a+b,0);


    

  }

  function escapeSpecialChars(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  module.exports = add;