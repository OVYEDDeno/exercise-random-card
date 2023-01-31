const myFunction = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let tld = [".com", ".net"];
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomTld = tld[Math.floor(Math.random() * tld.length)];
    return randomPronoun + randomAdj + randomNoun + randomTld;
  };
  document.getElementById("domain").innerHTML = myFunction();
  //keywords -variable names- assignment operator(=) -Arrays-
  
document.getElementById("topSuit").innerHTML = Math.random();