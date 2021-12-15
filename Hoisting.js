var secret = {
    data: "I am secret"
  };
  
  function destroy (stuff) {
  console.log(secret);
  console.log(stuff);
  stuff.data = "I am stuff.data";
  console.log(secret);
  console.log(stuff);
    stuff= {
    data: "I am stuff"
  };
  console.log(secret);
  console.log(stuff);
  stuff.data = "I am stuff.data 222";
  console.log(secret);
  console.log(stuff);
  
  };
  
  destroy(secret);
  
  console.log(secret); // ?
  console.log(stuff); //에러