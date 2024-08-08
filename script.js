document.addEventListener('DOMContentLoaded', () => {
    // Function to update greeting based on the time of day
    function updateGreeting() {
        const greetingElement = document.getElementById('greeting');
        const hours = new Date().getHours();

        if (hours < 12) {
            greetingElement.textContent = 'Good Morning!';
            document.body.style.backgroundColor = '#FFFAE3'; // Light Yellow
        } else if (hours < 18) {
            greetingElement.textContent = 'Good Afternoon!';
            document.body.style.backgroundColor = '#FFF5E6'; // Light Orange
        } else {
            greetingElement.textContent = 'Good Evening!';
            document.body.style.backgroundColor = '#ECEFF1'; // Light Grey
        }
    }

    // Update the greeting on page load
    updateGreeting();

    // Event listener for the action button
    const actionButton = document.getElementById('action-button');
    actionButton.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Optional: Update greeting periodically (e.g., every minute)
    setInterval(updateGreeting, 60000); // Update every 60 seconds
});
