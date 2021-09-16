const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        paises(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}

const paises = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${item.region}
                </p>
                <p>
                <b>Moneda: </b>
                ${item.currencies[0].name} | ${item.currencies[0].symbol} 
            </p>
            <p>
            <b>Lenguaje: </b>
            ${item.languages[0].name}
        </p>
        <p>
            <b>Países limítrofes: </b>
            ${item.borders.join(', ')}
        </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}