const records=JSON.parse(localStorage.getItem('records'));
    document.getElementById('fname').value = `${records.fields['First Name']}`
    document.getElementById('lname').value = `${records.fields['Last Name']}` 
    document.getElementById('age').value = `${records.fields['Age']}` 
    document.getElementById('address').value = `${records.fields['Address']}`  
    document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        records: [
        {
            "id": `${records.id}`,
            fields: {
            "First Name": document.getElementById('fname').value,
            "Last Name": document.getElementById('lname').value,
            "Age": document.getElementById('age').value,
            "Address": document.getElementById('address').value,
            }
        }
        ]
    };
    fetch('https://api.airtable.com/v0/apple8Bwot7h7BDlr/Table%202', {
        method: "PATCH",
        headers: {
        'Authorization': 'Bearer patVq5fDpTHdQBNyW.87db1e1c29047033d303caaf6451518d7fb10d39d97ad77622b606b86dc3dd17',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(() => {
        alert('Your Data is Updated!');
    })
    .then(() =>{
        window.location.href = 'index.html'
    })
    .catch(error => {
        console.error('Error:', error);
    });
    });