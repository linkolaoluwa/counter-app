let currencyFirst = document.getElementById('currency-first')
let worthFirst = document.getElementById('worth-first')
let currencySecond = document.getElementById('currency-second')
let worthSecond = document.getElementById('worth-second')
let exchangeRate = document.getElementById('exchange-rate')

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/c32b31296f40a2f9fb677cd3/latest/${currencyFirst.value}`)
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates
        [currencySecond.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;

        worthSecond.value = (worthFirst.value * rate).toFixed(2)
    });
}

currencyFirst.addEventListener('change', updateRate)

currencySecond.addEventListener('change', updateRate)

worthFirst.addEventListener('input', updateRate)