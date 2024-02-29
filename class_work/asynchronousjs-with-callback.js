// Task 1: Fetching Data
function fetchData(url, successCallback, errorCallback) {
    // Fetching API to make request
    fetch(url)
    .then(response => {
        // check if the response status is  OK
        if (!response.ok) {
            throw new Error(`Failed to fetch data`);
        }
        // Parse the response JSON and invoke success callback
        return response.json();
    })
    .then(data => successCallback(data))
    .catch(error => errorCallback(error.message));
}

// Task 2: Displaying Data
function displayData(data) {
    // Log the fetched data to display it on webpage
    console.log(data);
    // For displaying on webpage
}

// Task 3: Error handling
function handleError(errorMessage) {
    // Log the error message to webpage
    console.log(errorMessage);
    // For displaying on webpage
}

// Putting them together
const sampleApiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Use fetchData function
fetchData(sampleApiUrl, displayData, handleError);

// Testing code
const incorrectUrl = 'https://example.com/nonexistent';
fetchData(incorrectUrl, displayData, handleError);
