let addExpense = document.querySelector('#add-expenses-button-new');
addExpense.addEventListener('click', () => {
    category = document.getElementById("category").value;
    descriptionOfCategory = document.getElementById("description").value;
    amount = document.getElementById("amount").value;
    userId = localStorage.getItem('loggedinUser');  

    let addExpenseRequest = {
        accountOwnerId: userId,
        category: category,
        descriptionOfCategory: description,
        amount: amount
    };

    console.log(addExpenseRequest);
    const addExpenseUrl = 'http://localhost:8080/TrackEx/addExpenses';

    fetch(addExpenseUrl, {
        method: 'POST',
        body: JSON.stringify(addExpenseRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {
        document.getElementById("add-expense-text").innerText = responseObject.data.message;
    })
    .catch(error => {
        console.error('Error:', error)
    })
});


let checkExpense = document.querySelector('#check-expenses-button');
checkExpense.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');    

    let checkExpenseRequest = {
        accountOwner: userId,
    };
    console.log(checkExpenseRequest);
    const checkExpenseUrl = 'http://localhost:8080/TrackEx/check-expenses';

    fetch(checkExpenseUrl, {
        method: 'GET',
        body: JSON.stringify(checkExpenseRequest),
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById(checkExpense-response).innerText = responseText;
    })
    .catch(error => {
        console.error('Error:', error)
    })
});

let addIncome = document.querySelector('#add-income-button-new');
addIncome.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('addIncomeAmount').value

    let addIncomeRequest = {
        accountId: userId,
        amount: amount
    };

    console.log(addIncomeRequest);
    const addIncomeUrl = 'http://localhost:8080/TrackEx/addIncome';

    fetch(addIncomeUrl, {
        method: 'POST',
        body: JSON.stringify(addIncomeRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {
        
        if(typeof responseObject.data !== 'string'){
            document.getElementById("add-income-text").innerText = responseObject.data.message;
        } else{
            let response = document.getElementById("add-income-text");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
        

    })
    .catch(error => {
        console.error('Error:', error)
    })
});


let updateIncome = document.querySelector('#update-income-button-new');
updateIncome.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('updateIncomeAmount');

    let updateIncomeRequest = {
        accountOwnerId: userId,
        amount: amount.value
    };

    console.log(updateIncomeRequest);
    const updateIncomeUrl = 'http://localhost:8080/TrackEx/updateIncome';

    fetch(updateIncomeUrl, {
        method: 'PATCH',
        body: JSON.stringify(updateIncomeRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {

        if(typeof responseObject.data !== 'string'){
            document.getElementById("update-income-text").innerHTML = responseObject.data.message;
            
        } else{
            let response = document.getElementById("update-income-text");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error)
    })
});

let savingGoal = document.querySelector('#saving-goal');
savingGoal.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('setSavingGoal').value

    let savingGoalRequest = {
        accountOwnerId: userId,
        amount: amount
    };

    console.log(savingGoalRequest);
    const savingGoalUrl = 'http://localhost:8080/TrackEx/setSavingGoal';

    fetch(savingGoalUrl, {
        method: 'PATCH',
        body: JSON.stringify(savingGoalRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {
        if(typeof responseObject.data !== 'string'){
        document.getElementById("saving-goal-text").innerText = responseObject.data.message;

        } else{
            let response = document.getElementById("saving-goal-text");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error)
    })  
});

let checkBalance = document.querySelector('#check-balance-button');
checkBalance.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');

    let checkBalanceRequest = {
        accountOwner: userId
    };

    console.log(checkBalanceRequest);
    const checkBalanceUrl = 'http://localhost:8080:TrackEx/check-balance';

    fetch(checkBalanceUrl, {
        method: 'GET',
        body: JSON.stringify(checkBalanceRequest),
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById("checkBalance-response").innerText = responseText;
    })
    .catch(error => {
        console.error('Error:', error)
    })  
});


let addExpenseForm =document.querySelector('#add-expenses-button');
addExpenseForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('addExpenses').style.display='flex';
})

// let checkExpenseForm = document.querySelector('#check-expenses-button');
// checkExpenseForm.addEventListener('click', () => {
//     clearPane();
//     document.getElementById('box2').style.display='flex';
// })

let addIncomeForm = document.querySelector('#add-income-button');
addIncomeForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('add-income').style.display='flex';
})

let updateIncomeForm = document.querySelector('#update-income-button');
updateIncomeForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('update-income-part').style.display='flex';
})

let savingGoalForm = document.querySelector('#saving-goal-button');
savingGoalForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('saving').style.display='flex';
})

// let checkBalanceForm = document.querySelector('#check-balance-button');
// checkBalanceForm.addEventListener('click', () => {
//     clearPane();
//     document.getElementById('box6').style.display='flex';
// })


function clearPane() {
    document.getElementById('check-balance').style.display='none';
    document.getElementById('check-expenses').style.display='none';
    document.getElementById('update-income-part').style.display='none';
    document.getElementById('addExpenses').style.display='none';
    document.getElementById('add-income').style.display='none';
    document.getElementById('saving').style.display='none';
       
}


let logout = document.getElementById('logout');

logout.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    
    let logoutRequest = {
        accountOwner: userId
    };

    console.log(logoutRequest);
    const logoutUrl = 'http://localhost:8080/TrackEx/logout';

    fetch(logoutUrl, {
        method: 'PATCH',
        body: JSON.stringify(logoutRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        window.location = "./index.html"
    })
    .catch(error => {
        console.error('Error:', error)
    })
});