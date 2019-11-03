function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input = document.getElementById('url').value
    document.getElementById('url').value = ''

    if (!checkURL(input)) {
        alert('Please enter a valid URL.')
        return;
    }

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

function checkURL(str) {
    var regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    
    return regex.test(str);
}

export { 
    handleSubmit,
    checkURL
}