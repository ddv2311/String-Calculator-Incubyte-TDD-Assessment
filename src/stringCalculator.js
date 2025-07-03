function add(numbers) {
    if (numbers === "") 
        return 0;

    let delimiter = /[\n,]/;

    if(numbers.startsWith("//")){
        const parts = numbers.split("\n");
        const customDelimiter = escapeSpecialChars(parts[0].substring(2));
        delimiter = new RegExp(customDelimiter);
        numbers = parts[1];
    
    }
    const parts = numbers.split(delimiter).map(Number);

    const negatives = parts.filter(token => token < 0);
    if(negatives.length > 0){
        throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
    }
    return parts.reduce((a,b)=>a+b,0);


    

  }

  function escapeSpecialChars(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  module.exports = add;