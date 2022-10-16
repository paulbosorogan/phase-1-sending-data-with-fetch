// Add your code here
function submitData(userName, userEmail){
 return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify ({
        "name" : `${userName}`,
        "email" : `${userEmail}`,
    }),
 })
 .then(res => {return res.json()})
 .then(obj => { document.querySelector('body').innerHTML= obj.id})
 .catch(error => { alert("Error!"); document.querySelector('body').innerHTML = error.message})
 }
