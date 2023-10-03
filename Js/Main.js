document.getElementById('create').addEventListener('click',() =>{
    window.location.href = 'form.html'
})


document.getElementById('read').addEventListener('click', readData);


function readData(){
fetch('https://api.airtable.com/v0/apple8Bwot7h7BDlr/Table%202?view=Grid%20view', {
method: "GET",
headers: {
  'Authorization': 'Bearer patVq5fDpTHdQBNyW.87db1e1c29047033d303caaf6451518d7fb10d39d97ad77622b606b86dc3dd17',
},
})
.then(result => result.json())
.then((data) => {
  let newArray = data.records;
  newArray.forEach((element) => {
    const tr = document.createElement('tr');
    tr.innerHTML += `<td>${element.fields['First Name']}</td>`;
    tr.innerHTML += `<td>${element.fields['Last Name']}</td>`;
    tr.innerHTML += `<td>${element.fields['Age']}</td>`;
    tr.innerHTML += `<td>${element.fields['Address']}</td>`;
    tr.innerHTML += `<td><button class="update-button button-4">Update Row</button></td>`;
    tr.innerHTML += `<td><button class="delete-button button-4">Delete Row</button></td>`;

    const updateButton = tr.querySelector('.update-button');
    if (updateButton) {
      updateButton.addEventListener('click', () => {
        window.location.href = 'updateForm.html';
        localStorage.setItem('records',JSON.stringify(element));
      });
    }
    const deleteButton = tr.querySelector('.delete-button');
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
        deleteID(element.id); 
    });
    }
    document.querySelector('#addtext').appendChild(tr);
  });
})
.catch(error => {
  console.error('Error:', error);
});
}


async function deleteID(id){
await fetch(`https://api.airtable.com/v0/apple8Bwot7h7BDlr/Table%202/${id} `, {
    method: "DELETE",
    headers: {
    'Authorization': 'Bearer patVq5fDpTHdQBNyW.87db1e1c29047033d303caaf6451518d7fb10d39d97ad77622b606b86dc3dd17'
    }
})
.then(response => response.json())
.then(() => {
    alert('Your Data is Deleted!');
})
.then(() =>{
  window.location.href = 'index.html'
})
.catch(error => {
    console.error('Error:', error);
});
}