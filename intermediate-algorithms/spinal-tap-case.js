function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //Seperates lowercase followed by uppercase letters and sets everything in lowercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  //Replaces spaces and underscores with '-'
  return str.replace(/\s|\_/g, '-');
}

console.log(spinalCase("The_Andy_Griffith_Show"));
