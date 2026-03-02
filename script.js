let books = [];

function addBook(){

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if(title === "" || author === ""){
        alert("Please fill all fields");
        return;
    }

    let book = {
        title:title,
        author:author
    };

    books.push(book);

    displayBooks();

    document.getElementById("title").value="";
    document.getElementById("author").value="";
}

function displayBooks(){

    let list = document.getElementById("bookList");

    list.innerHTML="";

    books.forEach((book,index)=>{

        list.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="delete" onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

}

function deleteBook(index){

    books.splice(index,1);

    displayBooks();
}
