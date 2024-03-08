var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

document.querySelector(".check_in_placeholder").placeholder = today;
document.querySelector(".check_in_placeholder2").placeholder = today;

function isEmpty(str) {
  return !str.trim().length;
}

function change_summary_values() {
  const adults_val = document.querySelector(".adult_select").value;
  const children_val = document.querySelector(".child_select").value;
  const checkin_val = document.querySelector("#my_date_picker3").value;
  const checkout_val = document.querySelector("#my_date_picker4").value;
  document.querySelector(".adults_value").textContent = adults_val;
  document.querySelector(".children_value").textContent = children_val;
  document.querySelector(".checkin_date").textContent = checkin_val;
  document.querySelector(".checkout_date").textContent = checkout_val;

  if (
    adults_val.length == 0 ||
    children_val.length == 0 ||
    checkin_val.length == 0 ||
    checkout_val.length == 0
  ) {
    total = 0;
  } else {
    total = 50;
  }

  document.querySelector(".total_value").textContent = total;
}
document
  .querySelector(".sum_apply_change")
  .addEventListener("click", change_summary_values);
