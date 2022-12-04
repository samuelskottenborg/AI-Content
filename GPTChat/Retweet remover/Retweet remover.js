// Delay for unretweeting
const delay = 200;

// Interval for reloading unretweet buttons
const reloadInterval = 1000;

// Function for unretweeting a tweet
const unretweet = () => {
  // Check if unretweet button exists
  const unretweetButton = document.querySelector('[data-testid="unretweet"]');
  if (unretweetButton) {
    // Click unretweet button
    unretweetButton.click();

    // Wait for confirmation button to appear
    setTimeout(() => {
      // Check if confirmation button exists
      const confirmButton = document.querySelector('[data-testid="unretweetConfirm"]');
      if (confirmButton) {
        // Click confirmation button
        confirmButton.click();
      }
    }, delay);
  }
};

// Main function for removing retweets
const removeRetweets = () => {
  // Unretweet first tweet
  unretweet();

  // Set interval for unretweeting subsequent tweets
  setInterval(unretweet, delay);

  // Set interval for reloading unretweet buttons
  setInterval(() => {
    // Reload unretweet buttons by scrolling down and back up
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => window.scrollTo(0, 0), delay);
  }, reloadInterval);
};

// Start removing retweets
removeRetweets();