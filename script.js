// Function to fetch a new joke from the JokeAPI
function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke');
            if (data.type === 'single') {
                jokeContainer.innerHTML = data.joke;
            } else if (data.type === 'twopart') {
                jokeContainer.innerHTML = `${data.setup} <br> <strong>${data.delivery}</strong>`;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke').innerHTML = 'Oops, something went wrong. Please try again later.';
        });
}

// Fetch a joke when the page loads
window.onload = getJoke;
