window.onload = async () => {
    await fetchedBooks()
    await showHideCart()
}


// fetch books
const fetchedBooks = async () => {

    let response = await fetch('https://striveschool-api.herokuapp.com/books')
    let books = await response.json()
    displayBooks(books)
    console.log(books)
}

// display UI
const displayBooks = (data) => {
    let container = document.querySelector('.book-row')

    data.forEach(book => {
        let card = document.createElement('div')

        card.innerHTML = `
        <div class="col-lg-3 col-md-4 col-6 col-1 mb-4">
                <div class="card"  style="width: 18rem;">
                    <img src=${book.img} data-id=${book.asin} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title" data-id=${book.asin}>${book.title}</h5>
                      <div>
                        <p>Category: <small class="font-weight-bold" data-id=${book.asin}>${book.category}</small></p>
                        <p>Price: <small class="font-weight-bold" data-id=${book.asin}>$${book.price}</small></p>
                      </div>
                      <button class="btn btn-primary add-cart">Add to card</button>
                    </div>
                  </div>
              </div>
        `
        container.appendChild(card)
        
    });
}

const showHideCart = () => {
    let cartBtn = [...document.querySelectorAll('.add-cart')]
    let closeBtn = document.querySelector('.close-btn')
    let cartContainer = document.querySelector('.cart-container')
    
    closeBtn.addEventListener('click', () => {
        cartContainer.classList.add('cart-hide')
        cartContainer.classList.remove('cart-show')
    })
    
    cartBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.target.innerHTML = 'Added'
            event.target.classList.add('btn-secondary')
            event.target.setAttribute("disabled", true)
            cartContainer.classList.remove('cart-hide')
            cartContainer.classList.add('cart-show')
        })
    })

}
