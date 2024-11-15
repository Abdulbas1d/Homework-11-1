const container = document.querySelector("#container");

function createCard(data) {
    return `
        <div class="block">
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            <h3>UserId: ${data.userId}</h3>
            <h3>Id: ${data.id}</h3>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function() {

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
    })


       .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })
       .then(data => {
            container.innerHTML += "";
            data.forEach(element => {
                let card = createCard(element);
                container.innerHTML += card
            });
        })

       .catch(error => {
        console.log(error);
        })
})