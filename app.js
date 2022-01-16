function updateProduct(product, price, isIncrease) {
  const input_case = document.getElementById(product + "-number");
  let case_value = input_case.value;

  //price update
  const case_price = document.getElementById(product + "-price");
  let case_total = case_price.innerText;

  //update Subtotal

  if (isIncrease) {
    input_case.value = parseInt(case_value) + 1;
    case_price.innerText = price * input_case.value;
  } else if (input_case.value > 1) {
    input_case.value = parseInt(case_value) - 1;
    case_price.innerText = price * input_case.value;
  }
  updateTotal();
}

function updateTotal() {
  const phone_price = document.getElementById("phone-price").innerText;
  const case_price = document.getElementById("case-price").innerText;
  const subtotal_price = parseInt(phone_price) + parseInt(case_price);
  const subtotal = document.getElementById("subtotal");
  subtotal.innerText= subtotal_price;
  const tax = document.getElementById("tax");
  tax.innerText = parseInt(subtotal_price) /10;

  const total = document.getElementById("total");
  total.innerText = parseFloat( subtotal.innerText) + parseFloat( tax.innerText);
  
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 59, true);
});
document.getElementById("case_minus").addEventListener("click", function () {
  updateProduct("case", 59, false);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});
document.getElementById("phone_minus").addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});
