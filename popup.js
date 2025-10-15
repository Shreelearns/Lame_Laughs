async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();

    document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
    const lameJokeEmojis = ["😅", "🤭", "🙃", "🫣", "😬"];
    document.getElementById('emoji').textContent =
    lameJokeEmojis[Math.floor(Math.random() * lameJokeEmojis.length)];
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

getJoke();
