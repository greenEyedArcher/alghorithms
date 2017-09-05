function convertHTML(str) {
  // &colon;&rpar;
  var entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt',
    '"': '&quot;',
    "'": '&apos;'
  };

  var str = str.split('').map(function(char) {
    return entities[char] || char;
  }).join('');

  return str;
}

var converted = convertHTML("Dolce & Gabbana");
console.log(converted);
