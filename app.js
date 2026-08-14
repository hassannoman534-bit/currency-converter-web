let from = document.querySelector("#fromCurr");
let to = document.querySelector("#toCurr");

let amount = document.querySelector("#amount");
let convertBtn = document.querySelector("#cnbtn");
let out = document.querySelector(".output");

const fetchData = (async () => {
    let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
    return fetch(url);
});

const recieveData = (async () => {
    let res = await fetchData();
    let jres = await res.json();

    for (let curr in jres) {
        let newEl = document.createElement("option");
        newEl.innerText = curr.toUpperCase();
        newEl.value = curr;
        from.append(newEl);
    }

    for (let curr in jres) {
        let newEl = document.createElement("option");
        newEl.innerText = curr.toUpperCase();
        newEl.value = curr;
        to.append(newEl);
    }
});



convertBtn.addEventListener("click", async () => {

    if (from.value == "" || to.value == "") {
        console.log("Please select both currencies");
        out.style.visibility = "visible";
        out.innerText = "Please Enter Both Currencies";
        out.style.backgroundColor = "#FF7F7F";
        out.style.color = "black";
        out.style.transition = "all 0.3s ease";

        return;
    }

    let fromcurrency = from.value.toLowerCase();
    let toCurrency = to.value.toLowerCase();
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`;

    let res = await fetch(url);
    let data = await res.json();

    let rate = data[fromcurrency][toCurrency];
    let frate = parseInt(amount.value) * rate;
    console.log(rate);
    console.log(frate);

    frate = frate.toFixed(2);

    out.style.visibility = "visible";
    out.style.backgroundColor = "#b3efc4";
    out.style.color = "#047857";
    out.style.transition = "all 0.3s ease";
    out.innerText = `${amount.value} ${fromcurrency.toUpperCase()} = ${frate} ${toCurrency.toUpperCase()}`;
});

recieveData();