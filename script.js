document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var formData = new FormData(this); // Get form data
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value; // Convert form data to JSON object
    });

    // Send form data to server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message; // Display server response
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
