const kebabCaseToCamelCase = (string) => {
    return string.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
  }
  
  console.log(kebabCaseToCamelCase('my-class'));
  console.log(kebabCaseToCamelCase('get-element-by-id')); 
  console.log(kebabCaseToCamelCase('class'));
  