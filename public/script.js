const convertBtn = document.querySelector(".convert-button");
const output = document.querySelector("#output-amount");

//use exchangerates api for exchange rates
const url = "https://api.exchangeratesapi.io/latest";
convertBtn.addEventListener("click", () => {
    //read input amount from the client
    const from = document.querySelector("#input-unit").value;
    const amount = document.querySelector("#input-amount").value;
    const to = document.querySelector("#output-unit").value;
    fetch(url + `?base=${from}`)
        //read the data in json
        .then(res => res.json())
        .then(data => {
            output.setAttribute("readonly", "no");
            output.value = (data.rates[to] * amount).toFixed(2);
            output.setAttribute("readonly", "yes");
        })
        //catch potentially erros and send it
        .catch(e => {
            alert(e.message);
        });
});
