var elDollarForm = document.querySelector(".site-dollar-form");
var elUserMoney = document.querySelector(".site-dollar-input");
var elAllSum = document.querySelector(".cost");
var elSelect = document.querySelector(".site-select");

elDollarForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    var elCostMoney = elUserMoney.value * elSelect.value;
    elAllSum.textContent = elCostMoney;
})