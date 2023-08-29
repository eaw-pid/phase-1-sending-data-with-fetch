// Add your code herfu


function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail
      }) 
      
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.id)
        let body = document.querySelector('body')
        //let element = document.createElement('p')
        body.textContent = data.id
        //body.appendChild(element)
        //element.innerText = data.id
    }) 
    .catch(error => {
        const body = document.querySelector('body');
        body.textContent = error.message;
    })
}


