// Step 1: Use the terminal command 'npm install dotenv'

// Step 2: Create a .env file and add the following line:
// API_KEY=...
// Replace ... with the API key from GChat

// Step 3: Create a .gitignore file and add .env to it

// Step 4: Import dotenv config
require('dotenv').config()
// Step 5: Access the API key from the .env file using process.env and store it in a variable
const apiKey = process.env.API_KEY
// Step 6: Construct the request URL using the environmental variable
const requestURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

console.log(requestURL)
async function fetchData(url) {
  // Step 7: Wrap your code in a try {} block
  try{
  const response = await fetch(url);

  // Step 8: Check if the response status is not OK
  // Log an error message if the response status is not OK
if (response.ok ===false) {
  console.log(response.status)
}


  const data = await response.json();

  console.log(data);
  return data;
  }catch(error){
    console.log(error.message)
  }
  // Step 10: Add a catch block to handle any errors that occur during the fetch or data processing
}

fetchData(requestURL);

// Step 11: Add, Commit, & Push. Look on at the repo on GitHub and notice that your API is never shown publicly. 


// Step 12: Individual Practice - Go to previous repos and add error handling/environmental variables, some options include: 
// U2L7: ARTIC API Lab 
// U2L8: Auth Code Along
// U2L9: Documentation Practice
// U2L13: Creating Post Requests
