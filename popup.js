// Have to put JS in a seperate file

document.addEventListener('DOMContentLoaded', function() {
    var item = Math.floor((Math.random() * 10) + 1);
    var url = 'https://jsonplaceholder.typicode.com/todos/' + item;

    var heading = document.getElementsByName('h1');
    var contentText = document.getElementById('contentText');
    var titleText = document.getElementById('titleText');
  
    chrome.tabs.getSelected(null, function(tab) {

        heading.text = "Random =" + item

        titleText.innerText = "Getting " + url

        // info on the fetch object can be founf here https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch(url)
            .then(response => {
                // the result of this function is the contents of the "result" below
                return response.text()
            })
            .then(result => {
                contentText.innerText = result
            })

    });

}, false);
