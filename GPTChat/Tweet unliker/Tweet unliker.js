// This function will unlike a tweet
function unlikeTweet() {
  // Find the "unlike" button for the tweet
  let unlikeButton = document.querySelector('[data-testid="unlike"]');
  // If the button was found, click it
  if (unlikeButton) {
    unlikeButton.click();
  }
}

// This function will scroll the page and call the "unlikeTweet" function
// every 200ms until there are no more tweets left to unlike
function scrollAndUnlike() {
  // Scroll the page down by 1000 pixels
  window.scrollBy(0, 1000);
  // Wait for 200ms
  setTimeout(() => {
    // Unlike the tweet
    unlikeTweet();
    // Check if there are more tweets left to unlike
    if (document.querySelector('[data-testid="unlike"]')) {
      // If there are more tweets, scroll and unlike again
      scrollAndUnlike();
    } else {
      // If there are no more tweets, stop the script
      console.log("Finished unliking all tweets!");
    }
  }, 200);
}

// Start the script by scrolling and unliking the first tweet
scrollAndUnlike();