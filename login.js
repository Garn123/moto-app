//Register
const postData = async () => {
    let data = {name: document.getElementsByName("name")[0].value,
                email: document.getElementsByName("email")[0].value,
                password: document.getElementsByName("password")[0].value
                };
    const url = 'http://localhost:8080/api/users/register';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(data)
    });
    return response.json().then(data => {console.log(data)});
}

const login = async () => {
    let data = {email: document.getElementsByName("email")[0].value,
                password: document.getElementsByName("password")[0].value
                };
    console.log(data);
    const url = 'http://localhost:8080/api/users/login';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify(data)
    });
    
    return response.json().then(token => {localStorage.setItem('jwt', token)});
}

const logOut = async () => {

    const url = 'http://localhost:8080/api/users/logout';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST"
    });
    
    return response.json().then(token => {localStorage.clear()});
}