let screenSize = window.screen.width;
document.querySelector("body").style.maxWidth = screenSize+"px";
console.log(screenSize+"px");


let displayName = localStorage.getItem("user-user-name");
document.getElementById("user-user-username").innerHTML = displayName;

let currentExpense = "";
let link = 'https://815d-62-173-45-70.ngrok-free.app';

let addExpense = document.querySelector('#add-expenses-button-new');
addExpense.addEventListener('click', () => {
    category = document.getElementById("category").value;
    descriptionOfCategory = document.getElementById("description-text").value;
    amount = document.getElementById("amount").value;
    userId = localStorage.getItem('loggedinUser');  

    let addExpenseRequest = {
        accountOwnerId: userId,
        category: category,
        description: descriptionOfCategory,
        amount: amount
    };

    console.log(addExpenseRequest);
    const addExpenseUrl = `${link}/TrackEx/addExpenses`;

    fetch(addExpenseUrl, {
        method: 'POST',
        body: JSON.stringify(addExpenseRequest),
        headers: {
            'Content-Type': 'application/json; charset:UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {
        console.log(responseObject)
        document.getElementById("add-expense-text").innerText = responseObject.data.message;
        let balance = document.getElementById("add-expense-balance");
        balance.innerText = "Balance: " + responseObject.data.balance;
        balance.style.color = "green";
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
    const addIncomeUrl = `${link}/TrackEx/addIncome`;

    fetch(addIncomeUrl, {
        method: 'POST',
        body: JSON.stringify(addIncomeRequest),
        headers: {
            'Content-Type': 'application/json'
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
    const updateIncomeUrl = `${link}/TrackEx/updateIncome`;

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
            console.log(responseObject.data);
            document.getElementById("update-income-text").innerHTML = responseObject.data.message;
            let newIncome = document.getElementById("update-income-balance");
            newIncome.innerHTML = "Balance: " + responseObject.data.newIncome;
            newIncome.style.color = 'green';
            
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
    const savingGoalUrl = `${link}/TrackEx/setSavingGoal`;

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
            let response = document.getElementById("saving-goal-text");
            response.innerHTML = responseObject.data.message;
            response.style.color = 'green';

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
    clearPane();
    document.getElementById('check-balance').style.display='flex';
    let userId = localStorage.getItem('loggedinUser');
    
    // const checkBalanceUrl = `${link}/TrackEx/check-balance/${userId}/balance`;
    let tempBalanceRequest = {
        accountOwnerId: userId,
        amount: 0
    };

    const tempBalanceURl = `${link}/TrackEx/updateIncome`;

    fetch(tempBalanceURl, {
        method: 'PATCH',
        body: JSON.stringify(tempBalanceRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(responseObject => {
        if(typeof responseObject.data !== 'string'){
            document.getElementById("check-balance-text").innerText = responseObject.data.newIncome; 
        } else{
            console.log("An error occurred");
        }
         
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


let checkExpenseForm = document.querySelector('#check-expenses-button');
checkExpenseForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('check-expenses').style.display='flex';
    userId = localStorage.getItem("loggedinUser");
    console.log(userId)

    fetch(`${link}/TrackEx/check-expenses/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(responseObject => {
        if(typeof responseObject.data !== 'string'){
            let allExpenses =  responseObject.data;
            console.log(responseObject.data);
            console.log(allExpenses);

            waitForNextButton(allExpenses);

        } else{
            let response = document.getElementById("expense-description");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error)
    })  
})

let count = 0;
function waitForNextButton(allExpenses){

    currentExpense = allExpenses;

    display(currentExpense[count]);

}

function display(expenses){
    console.log(expenses)
    let {category ,description, amount, dateCreated} = expenses;
    document.getElementById("expense-category").innerText = category;
    document.getElementById("expense-description").innerHTML = "Description: " + description;
    document.getElementById("expense-price").innerText = "Amount: " + amount;
    document.getElementById("date-created").innerText = "Date: " + dateCreated[2] + "/" + dateCreated[1] + "/" + dateCreated[0] ;
}


let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {

    if(count < currentExpense.length){
        count++;
        display(currentExpense[count]);
    }
    
});


let addIncomeForm = document.querySelector('#add-income-button');
addIncomeForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('add-income').style.display='flex';
});

let updateIncomeForm = document.querySelector('#update-income-button');
updateIncomeForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('update-income-part').style.display='flex';
});

let savingGoalForm = document.querySelector('#saving-goal-button');
savingGoalForm.addEventListener('click', () => {
    clearPane();
    document.getElementById('saving').style.display='flex';
});



function clearPane() {
    document.getElementById('check-balance').style.display='none';
    document.getElementById('check-expenses').style.display='none';
    document.getElementById('update-income-part').style.display='none';
    document.getElementById('addExpenses').style.display='none';
    document.getElementById('add-income').style.display='none';
    document.getElementById('saving').style.display='none';
    document.getElementById("add-expense-text").innerHTML = "";
    document.getElementById("add-expense-balance").innerHTML = "";
    document.getElementById("update-income-text").innerHTML = "";
    document.getElementById("update-income-balance").innerHTML = "";
}


let logout = document.getElementById('logout');

logout.addEventListener('click', () => {
    userId = localStorage.getItem('loggedinUser');
    
    let logoutRequest = {
        accountOwner: userId
    };

    console.log(logoutRequest);
    const logoutUrl = `${link}/TrackEx/logout`;

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