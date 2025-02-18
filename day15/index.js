



let title = document.getElementById('title')

let Content = document.getElementById('Content')

let Select = document.getElementById('category')

document.getElementById('submitbtn').addEventListener('click', function () {
    let titleValue = title.value;
    let contentValue = Content.value;
    let categoryValue = Select.value;

    if (!titleValue || !contentValue || !categoryValue) {
        alert('fill all the fields')
        return
    } else {
        let display = document.getElementById('display')

        let card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
        <div>
            <h3>Title : ${titleValue}</h3>
            <p>Content :${contentValue}</p>
            <p><b>category</b>:${categoryValue}</p>
        </div>
        `
       
        display.appendChild(card)

        title.value=''
        Content.value=''
        Select.value=''

       
    }
})