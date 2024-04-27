const content = document.getElementById('content')
const list = document.querySelectorAll('#list li')
const arrow = document.getElementById('arrow')
const title = document.getElementById('title')

document.addEventListener("DOMContentLoaded", function() {
    content.classList.remove('show');
});

arrow.addEventListener('click', () =>{

    content.classList.toggle('show')

    list.forEach(function(item) {
        item.addEventListener('click', () => {
        
            list.forEach(function(li){
                let img = li.querySelector('.check')
                img.classList.remove('active')
                li.classList.remove('active')
            })


            title.innerText = item.querySelector('h2').textContent
            item.classList.add('active')

            let img = item.querySelector('.check')
            img.classList.add('active')
        })
    })

  
})