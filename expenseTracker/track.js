
  document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    submit.addEventListener('submit', function(event) {
      event.preventDefault();

      const description = document.getElementById('description').value;
      const category = document.getElementById('category').value;
      const amount = parseFloat(document.getElementById('amount').value);

      if (description && category && !isNaN(amount) && amount > 0) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount.toFixed(2)}</td>`;

        expenseList.appendChild(newRow);
        expenseForm.reset();
      } else {
        alert("Please fill out all fields correctly.");
      }
    });
  });

