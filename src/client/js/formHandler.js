function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let input = document.getElementById('url').value;
    Client.checkForName(input);

    console.log("::: Form Submitted :::");

    postData('/post', {url: input, test: 'ok'});

    /*fetch('http://localhost:8080/')

    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity + " " + res.subjectivity
    })*/
}

// async POST function
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




export { 
    handleSubmit,
    postData 
}
