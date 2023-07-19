$(document).ready(function () {
  $("#btn").click(function () {
    var expname = $("#expname").val();
    var amount = $("#amount").val();

    if (expname !== "" && amount !== "") {
      var newRow = "<tr><td>" + expname + "</td><td>" + amount + "</td><td><button class='delete-btn'>Delete</button></td></tr>";
      $("table").append(newRow);

      // here i'm updating the total sum
      var totalSum = calculateTotalSum();
      $("#total").text("Total : " + totalSum);
    }
  });

  $("body").on("click", ".delete-btn", function () {
    $(this).closest("tr").remove();

    // here i'm updating the total sum after each delete
    var totalSum = calculateTotalSum();
    $("#total").text("Total : " + totalSum);
  });
  // the below function is to calculate the total sum
  function calculateTotalSum() {
    var total = 0;
    $("table tr").each(function () {
      var amount = parseInt($(this).find("td:nth-child(2)").text());
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    return total;
  }
});