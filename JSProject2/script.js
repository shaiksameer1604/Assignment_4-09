document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://type.fit/api/quotes';
    const quoteContainer = document.querySelector('.quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');
  
    async function fetchRandomQuote() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        return randomQuote;
      } catch (error) {
        console.error('Error fetching quote:', error);
        return null;
      }
    }
  
    async function updateQuote() {
      const randomQuote = await fetchRandomQuote();
      if (randomQuote) {
        quoteContainer.innerHTML = `<p>${randomQuote.text}</p><p class="author">— ${randomQuote.author || 'Unknown'}</p>`;
      } else {
        quoteContainer.innerHTML = '<p>Error fetching quote.</p>';
      }
    }
  
    // Initial quote on page load
    updateQuote();
  
    newQuoteBtn.addEventListener('click', updateQuote);
  });
  