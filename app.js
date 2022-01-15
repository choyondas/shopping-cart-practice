function updateProduct(product, price, isIncrease) {
  const input_case = document.getElementById(product + "-number");
  let case_value = input_case.value;

  //price update
  const case_price = document.getElementById(product + "-price");
  let case_total = case_price.innerText;

  if (isIncrease) {
    input_case.value = parseInt(case_value) + 1;
    case_price.innerText = price * input_case.value;
  } else if (input_case.value > 1) {
    input_case.value = parseInt(case_value) - 1;
    case_price.innerText = price * input_case.value;
  }
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
