function addBookTitle(){
    const titleInput=document.getElementById("bookTitleInput");
    const bookTitle=titleInput.value;
    const resultDiv=document.getElementById("result");
    resultDiv.innerHTML='Book Title: ${bookTitle}';
}