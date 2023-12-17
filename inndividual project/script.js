function runCode() {
    // Get the HTML code from the textarea
    const htmlCode = document.getElementById('htmlCode').value;
  
    // Get the iframe to display the result
    const outputFrame = document.getElementById('outputFrame');
  
    // Write the HTML code to the iframe
    outputFrame.contentDocument.write(htmlCode);
    outputFrame.contentDocument.close();
  }
  