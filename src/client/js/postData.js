const postData = async(url = '', data = {}) => {

    const response = await fetch (url, {
    method: 'POST', // * GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json', // indicates that our app run on JSON data
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        return newData;

    } catch(error) {
        console.log('error', error);
    }
}

// for testing JEST
function postDataTest(a, b) {
  return a + b
}

export { 
    postData,
    postDataTest
}
