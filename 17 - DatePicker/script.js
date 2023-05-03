

const months = ['Jan', 'Fev', 'Mar', 'Abr', "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
//new Date().getMonth() , segue a mesma estrutra do array acima do 0 até o 11

function render() {
    let output = ''


    const thisMonth = months [new Date().getMonth()] //pega o mês atual
    console.log(thisMonth)


    for (let month of months) {
        const active = thisMonth == month ? 'active' : '' // vai veirificar até que thisMonth seja igual a Month que é o mês atual, então active
       // output = output + '<div>' + month + '</div>'
       output += `<div class="${active}">${month}</div>`
    }

    return output
}


app.querySelector('main').innerHTML = render()

app.querySelector('header span').innerHTML = new Date().getFullYear() // informa o ano atual dentro da tag span

 