function addBook() {
    
     
}

function addBookTitle() {
    // Get the book title entered by the user
    const titleInput = document.getElementById("bookTitleInput");
    const bookTitle = titleInput.value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Book Title: ${bookTitle}`;
}
