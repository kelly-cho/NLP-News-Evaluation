function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('url').value

    console.log("::: Form Submitted :::")

    Client.postData('/', {url: input})
    
    fetch('http://localhost:8080/analyze')
    .then(res => res.json())
    .then(function(res) {
        console.log(res.subjectivity)
        console.log(res.polarity)
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polarity').innerHTML = res.polarity
    })
}

export { handleSubmit }