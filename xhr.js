function sendGetRequest(url) {
    return fetch(url)
    }

function sendPostRequest(url, method = 'get', body = '') {
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {'Content-type': 'application/json'}
        })
    } 
sendGetRequest('https://jsonplaceholder.typicode.com/posts/5')
    .then((response) => response.json())
    .then((data) => {
        data.title = 'Новый заголовок, который мы изменили'
        data.body = 'Текст статьи, который мы тоже изменили.Очень интересно.Интересно, увидит ли это Денчик.И Левик.'
        console.log(data)
        return data
    })
    .then((editedData) => sendPostRequest('https://jsonplaceholder.typicode.com/posts/5','PATCH',editedData))
    .then((response) => response.json())
    .then((finalResult) => console.log(finalResult)) 
    .catch((error) => console.log('Catch отработал' + error))
    .finally(() => console.log('Промис польностью отработал'))
