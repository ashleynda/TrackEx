let addExpense = document.querySelector('.addExpenses');
addExpense.addEventListener('click', () => {
    category = document.getElementById("category").value;
    descriptionOfCategory = document.getElementById("description").value;
    amount = document.getElementById("amount").value;
    userId = localStorage.getItem('loggedinUser');  

    let addExpenseRequest = {
        accountOwner: userId,
        category: category.value,
        descriptionOfCategory: description.value,
        amount: amount.value
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
    .then(response => response.text())
    .then(responseText => {
        document.getElementById("addexpense-response").innerText = responseText;
    })
    .catch(error => {
        console.error('Error:error')
    })
});


let checkExpense = document.querySelector('.checkExpenses');
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
        console.error('Error:error')
    })
});

let addIncome = document.querySelector('.addIncome');
addIncome.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('#amount').value

    let addIncomeRequest = {
        accountOwner: userId,
        amount: amount.value
    };

    console.log(addIncomeRequest);
    const addIncomeUrl = 'http://localhost:8080:TrackEx/addIncome';

    fetch(addIncomeUrl, {
        method: 'POST',
        body: JSON.stringify(addIncomeRequest),
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById(addIncome-response).innerText = responseText;
    })
    .catch(error => {
        console.error('Error:error')
    })
});

let updateIncome = document.querySelector('.updateIncome');
updateIncome.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('#amount').value

    let updateIncomeRequest = {
        accountOwner: userId,
        amount: amount.value
    };

    console.log(updateIncomeRequest);
    const updateIncomeUrl = 'http://localhost:8080:TrackEx/updateIncome';

    fetch(updateIncomeUrl, {
        method: 'PATCH',
        body: JSON.stringify(updateIncomeRequest),
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById(addIncome-response).innerText = responseText;
    })
    .catch(error => {
        console.error('Error:error')
    })
});

let savingGoal = document.querySelector('.setSavingGoal');
savingGoal.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    amount = document.getElementById('#amount').value

    let savingGoalRequest = {
        accountOwner: userId,
        amount: amount.value
    };

    console.log(savingGoalRequest);
    const savingGoalUrl = 'http://localhost:8080:TrackEx/setSavingGoal';

    fetch(savingGoalUrl, {
        method: 'PATCH',
        body: JSON.stringify(savingGoalRequest),
        headers: {
            'Content-Type': 'application/json, charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById(savingGoal-response).innerText = responseText;
    })
    .catch(error => {
        console.error('Error:error')
    })  
});

let checkBalance = document.querySelector('.checkBalance');
checkBalance.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');

    let checkBalanceRequest = {
        accountOwner: userId,
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
        document.getElementById(checkBalance-response).innerText = responseText;
    })
    .catch(error => {
        console.error('Error:error')
    })  
});


let addExpenseForm =document.querySelector('.addExpenseForm');
addExpenseForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box1').style.display='flex';
})

let checkExpenseForm = document.querySelector('.checkExpenseForm');
checkExpenseForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box2').style.display='flex';
})

let addIncomeForm = document.querySelector('addIncomeForm');
addIncomeForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box3').style.display='flex';
})

let updateIncomeForm = document.querySelector('.updateIncomeForm');
updateIncomeForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box4').style.display='flex';
})

let savingGoalForm = document.querySelector('.savingGoalForm');
savingGoalForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box5').style.display='flex';
})

let checkBalanceForm = document.querySelector('.checkBalanceForm');
checkBalanceForm.addEventListener('click', () => {
    checkPane();
    document.getElementById('box6').style.display='flex';
})


function checkPane() {
    document.getElementById('box1').style.display='none';
    document.getElementById('box2').style.display='none';
    document.getElementById('box3').style.display='none';
    document.getElementById('box4').style.display='none';
    document.getElementById('box5').style.display='none';
    document.getElementById('box6').style.display='none';

    
}

let logout = document.getElementById('.logout');

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