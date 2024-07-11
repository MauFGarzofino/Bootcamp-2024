// Write a JS program to concat arrays

let data = [
    ["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]
  ];
  
  let concatenatedSentences = data.map(arr => arr.join(" "));
  
  console.log(concatenatedSentences);
  