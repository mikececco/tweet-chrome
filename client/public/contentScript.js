// import { API_URL } from "../../constants";

// Function to modify the content of the specific element
const modifyElement = (targetElement) => {
  if (targetElement) {
    // Check if the modification is already done
    if (targetElement.dataset.modificationDone) {
      return;
    }

    // Create a div element
    const customDiv = document.createElement('div');

    // Remove size (width and height) of the div
    customDiv.style.width = 'auto';
    customDiv.style.height = 'auto';

    // Set display property to "flex"
    customDiv.style.display = 'flex';

    // Create the first button element
    const customButton1 = document.createElement('button');
    customButton1.textContent = '🔌 Integrate my product';
    customButton1.className = 'blue btn mini';

    // Create the second button element
    const customButton2 = document.createElement('button');
    customButton2.textContent = '😀 Generate meme';
    customButton2.className = 'red btn mini';

    // Append both buttons to the div
    customDiv.appendChild(customButton1);
    customDiv.appendChild(customButton2);

    // Assuming the element you want to select has the class "specific-class"
    const specificElement = document.querySelector('article[role="article"]');

    if (specificElement) {
      customButton1.addEventListener('click', (event) => {
        // Your custom button click logic here
        makeApiRequest(); // Call the function to make the API request

        // Find the div with the specified attributes within the article
        const targetDiv = specificElement.querySelector('div[dir="auto"][lang="en"].css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7') || specificElement.querySelector('div[data-testid="tweetText"]');

        // Check if the div is found
        if (targetDiv) {
          // Find the span within the targeted div
          const targetSpan = targetDiv.querySelector('.css-1qaijid.r-bcqeeo.r-qvutc0.r-poiln3');

          // Check if the span is found
          if (targetSpan) {
            // Perform operations on the found span
            console.log(targetSpan.textContent);
          } else {
            // Log a message if the span is not found
            console.log('Span not found within the targeted div');
          }
        } else {
          // Log a message if the div is not found
          console.log('Div not found within the article');
        }
      });
    } else {
      console.error('Element with class "specific-class" not found');
    }






    // Find the element with data-testid="toolBar"
    const tweetButtonInline = document.querySelector('div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c');

    // Check if the tweetButtonInline element is found
    if (tweetButtonInline) {
      // Append the custom button as the last child of tweetButtonInline
      tweetButtonInline.appendChild(customDiv);
    } else {
      // Log a message if the tweetButtonInline element is not found
      console.log('Tweet button element not found');
    }


    // Mark the modification as done
    targetElement.dataset.modificationDone = true;

    // Notify the background page that the extension is activated
    chrome.runtime.sendMessage({ message: 'extensionActivated' });
  } else {
    // Log a message if the target element is not found
    console.log('Target element not found');
  }
};

// Function to make an API request
const makeApiRequest = () => {
  // Replace the API endpoint with your actual endpoint
  console.log("MAKING REQUEST");

  const fetchCurrentEmail = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/home`);

      if (response.ok) {
        console.log("SUCCESSFULLY CALLED");
        const data = await response.json();
        // Process the API response data as needed
        console.log('API Response:', data);
      } else {
        throw response;
      }
    } catch (e) {
      console.error("Error", e);
    } finally {
      console.log("LOADING STOPPED");
    }
  };

  // Call the async function to make the API request
  fetchCurrentEmail();
};

// Call your function to make the API request

// Callback function to handle mutations
const mutationCallback = (mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Check if the desired element is now available
      const targetElement = document.querySelector('div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c');
      if (targetElement) {
        // Call the modify function
        modifyElement(targetElement);
      }
    }
  }
};

// Observer configuration
const observerConfig = { childList: true, subtree: true };

// Create a MutationObserver with the callback function
const observer = new MutationObserver(mutationCallback);

// Start observing the entire document
observer.observe(document.documentElement, observerConfig);

// Run your modification directly
const targetElement = document.querySelector('div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c');
modifyElement(targetElement);
