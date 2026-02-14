function calculate() {
  let size = Number(document.getElementById("size").value);
  let cost = Number(document.getElementById("cost").value);
  let battery = Number(document.getElementById("battery").value);

  let sunHours = 5.5;
  let price = 7;

  let monthlyUnits = size * sunHours * 30;
  let monthlySavings = monthlyUnits * price;
  let yearlySavings = monthlySavings * 12;
  let payback = cost / yearlySavings;

  let output =
    "Monthly Units: " + monthlyUnits.toFixed(0) +
    "<br>Monthly Savings: Rs " + monthlySavings.toFixed(0) +
    "<br>Payback Period: " + payback.toFixed(1) + " years";

  if (battery > 0) {
    let usable = battery * 0.8;
    output += "<br>Battery Backup: " + usable.toFixed(1) + " units";
  }

  document.getElementById("result").innerHTML = output;
}
