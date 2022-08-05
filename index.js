const AmigosBtn = document.querySelector('#AmigosBtn');

AmigosBtn.addEventListener('click',function () {
    alert('Excelente Decisión')
});

const AmigosconBeneficiosBtn = document.querySelector('#AmigosconBeneficiosBtn');

AmigosconBeneficiosBtn.addEventListener('click', function () {
    alert('Lo sabía')
   
});

const ParejaBtn = document.querySelector('#ParejaBtn');

ParejaBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    ParejaBtn.style.setProperty('top',randomY+'%');
    ParejaBtn.style.setProperty('left',randomX+'%');
    ParejaBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

})