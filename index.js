const loader = document.querySelector('.container')

window.addEventListener('load',()=>{
    setTimeout(() =>{
        loader.classList.add('.fadeOut');
        setTimeout(()=>{
            loader.style.display = 'none';
        },500);
    })
},1000)