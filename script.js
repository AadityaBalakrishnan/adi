const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let expenses = [];

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;

  if (title === "" || isNaN(amount) || date === "") {
    alert("Please fill all fields correctly.");
    return;
  }

  const expense = { title, amount, date };
  expenses.push(expense);
  renderExpenses();
  clearInputs();
});

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    total += expense.amount;

    const item = document.createElement("div");
    item.classList.add("expense-item");
    item.innerHTML = `
      <div>
        <strong>${expense.title}</strong><br/>
        ₹${expense.amount.toFixed(2)} - ${expense.date}
      </div>
      <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(item);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

function clearInputs() {
  titleInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
}
