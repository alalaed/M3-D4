

const loadBooks = () => {

fetch("https://striveschool-api.herokuapp.com/books")
.then( (resp) => resp.json())
.then( (data) => {
    console.log(data)


    const body = document.querySelector("#displaysection")

    data.forEach(element => {
        const inhalt = `
        <div class=" col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${element.img}" class="card-image" id="jord" />
                <div class="card-body">
                    <h6>${element.title}</h6>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="chosen btn btn-sm btn-outline-secondary">
                                Hide
                            </button>
                        </div>
                        <small class="text-muted">${element.id}</small>
                    </div>
                </div>
            </div>
        </div>
            `
        body.innerHTML += inhalt
    
    });
    
})
} 

window.onload = function(){
    loadBooks()
}
