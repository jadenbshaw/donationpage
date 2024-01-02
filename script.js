function donate() {
    const amount = document.getElementById('amount').value;

    if (amount > 0) {
        alert(`Thank you for your donation of $${amount}! Your support is invaluable.`);
        // In a real-world scenario, you would handle the donation through a payment gateway.
    } else {
        alert('Please enter a valid donation amount.');
    }
}
