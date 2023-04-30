// Find the "Continue" button
const continueButton = document.querySelector('#request-code-btn');

// Create the custom button
const selectFileButton = document.createElement('button');
selectFileButton.textContent = 'Select File';
selectFileButton.style.padding = '2px';
selectFileButton.style.border = 'none';
selectFileButton.style.borderRadius = '20px';
selectFileButton.style.color = '#fff';
selectFileButton.style.backgroundColor = '#6e6e80';
selectFileButton.style.fontSize = '10px';
selectFileButton.style.fontWeight = '150';
selectFileButton.style.marginRight = '5px';

// Insert the custom button next to the "Continue" button
if (continueButton) {
  continueButton.parentNode.insertBefore(selectFileButton, continueButton.nextSibling);
}

// Add an event listener to the custom button
selectFileButton.addEventListener('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      readFileContents(file);
    }
  });

  fileInput.click();
});

// Function to read file contents and populate the textarea
function readFileContents(file) {
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    const contents = event.target.result;
    const textarea = document.querySelector('textarea[tabindex="0"]');
    textarea.value = contents;
  });

  reader.readAsText(file);
}
