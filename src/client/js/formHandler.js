function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('url').value

    console.log("::: Form Submitted :::")

    document.getElementById('analysis').innerHTML = 'Analyzing...'
    Client.postData('/', {url: input})
    
    fetch('http://localhost:8080/analyze')
    .then(res => res.json())
    .then(function(res) {
        console.log(res.subjectivity)
        console.log(res.polarity)
        document.getElementById('analysis').innerHTML = 'This article is ' + res.subjectivity 
                                                      + ' and ' + res.polarity + '.'
    })
}

export { handleSubmit }