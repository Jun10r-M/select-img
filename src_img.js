const img = document.querySelector('img');
const btn = document.querySelector('input');

btn.addEventListener('change', (e)=>{
    img.src = URL.createObjectURL(e.target.files[0]);
})