let sunn = document.querySelector('#sunn')
let moon = document.querySelector('#moon')
    sunn.addEventListener('click', function (){
        sunn.style.display = 'none'
        moon.style.display = 'block'
        document.body.classList = 'dark'
    
    })

    moon.addEventListener('click', function() {
        moon.style.display = 'none'
        sunn.style.display = 'block'
        document.body.classList = ''
    })