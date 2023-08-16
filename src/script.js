function showvalue(algo) {
    document.getElementById('preco').value = "R$" + algo + ".00";
}

// function audioplay(){
//     var audio = document.getElementById('audio')
//     audio.currentTime = 0;
//     audio.play();
// }
function mudar(){
    document.getElementById('preco').value = "R$0.00";
}

var valor = 0;
var optionValue;
function moveToRight() {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const totalValueElement = document.getElementById('totalValue');
    
    let totalValue = parseFloat(totalValueElement.value);
    for (let i = 0; i < select1.options.length; i++) {
        if (select1.options[i].selected) {
            optionValue = parseFloat(select1.options[i].value);
            console.log(optionValue)
            valor = eval(valor + parseInt(optionValue))
            console.log(valor)
            totalValueElement.value = "R$" + valor + ".00";
            
            select2.appendChild(select1.options[i]);
            i--; // Adjust the index because we're removing an element
        }
    }
}

function moveToLeft() {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    const totalValueElement = document.getElementById('totalValue');
    
    let totalValue = parseFloat(totalValueElement.value);

    for (let i = 0; i < select2.options.length; i++) {
        if (select2.options[i].selected) {
            const optionValue = parseFloat(select2.options[i].value);
            valor = eval(valor - parseInt(optionValue))
            console.log(valor)
            totalValueElement.value = "R$" + valor + ".00";
            
            select1.appendChild(select2.options[i]);
            i--; // Adjust the index because we're removing an element
        }
    }
}




