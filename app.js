
// fetch books
const fetchedBooks = async () => {

    let response = await fetch('https://striveschool-api.herokuapp.com/books')
    let books = await response.json()
    displayBooks(books)
}
fetchedBooks()

// display UI
const displayBooks = (data) => {
    let container = document.querySelector('.book-row')

    data.forEach(book => {
        let card = document.createElement('div')

        card.innerHTML = `
        <div class="col-lg-4 col-6 col-1">
                <div class="card" style="width: 18rem;">
                    <img src=${book.img} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${book.title}</h5>
                      <div>
                        <p>Category: <small class="font-weight-bold">${book.category}</small></p>
                        <p>Price: <small class="font-weight-bold">$${book.price}</small></p>
                      </div>
                      <a href="#" class="btn btn-primary">Add to card</a>
                    </div>
                  </div>
              </div>
        `

        container.appendChild(card)
    });
}

fetchedBooks()