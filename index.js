



const addCart = () =>{
    let chosen = document.getElementsByClassName("chosen")

    for ( let i =0; i<chosen.length; i++){
        
            chosen[i].addEventListener("click",(event) => {
                const chosenBook = event.target
                let add = chosenBook.closest(".col-md-6")
                add.classList.add("bordered")
            
        })    
    }
}

const searchQuery = () =>{
    const searched = document.getElementById("searchbar").value
    const booksToBeFiltered = document.getElementsByClassName("cardbody")
    let title = booksToBeFiltered[i].querySelectorAll("h6").innerText
    const Arr = title.filter(searched)
    loadBooks(Arr)
    
}

const modalCart = () =>{

        const bookToBeAdded = document.getElementsByClassName("bordered")
        const modal = document.getElementById("cart-list")
        console.log(bookToBeAdded)
        modal.innerHTMl =""
        
        for ( let i =0; i<bookToBeAdded.length; i++){

            const title = bookToBeAdded[i].querySelector("h6").innerText

            
            const inhalt = `
                            <tr>
                                <td>${title}</td>
                                <td>${bookToBeAdded.title}</td>
                            </tr>`
             modal.innerHTML+=inhalt
        }
}



const hideCard = () =>{
    const cardArr = document.getElementsByClassName("discard")
    // console.log(cardArr)

    for( let i = 0 ; i < cardArr.length ; i++){
        cardArr[i].addEventListener("click", (e) => {
            const selected =  e.target
            // const parent = selected.parentNode.parentNode.parentNode.parentNode.parentNode
            
            const card = selected.closest(".col-md-6")
            card.classList.add("hide")
        })
    }
}



const loadBooks = (callback) => {

fetch("https://striveschool-api.herokuapp.com/books")
.then( (resp) => resp.json())
.then( (data) => {
    // console.log(data)


    const body = document.querySelector("#displaysection")

    data.forEach(element => {
        const inhalt = `
        <div class=" col-md-6">
            <div class="card mb-4 shadow-sm">
                <img src="${element.img}" style=" height: 300px; object-fit: cover" />
                <div class="card-body">
                    <h6>${element.title}</h6>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="chosen btn btn-sm btn-outline-secondary">
                                add to cart
                            </button>
                            <button type="button" class="discard btn btn-sm btn-outline-secondary">
                                discard
                            </button>
                        </div>
                        <small class="text-muted">${element.category}</small>
                    </div>
                </div>
            </div>
        </div>
            `
        body.innerHTML += inhalt

        
    
    });
    hideCard()
    addCart()
})
} 


window.onload = function(){
    loadBooks()
    searchQuery()

}
