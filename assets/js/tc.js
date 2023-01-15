
$(document).ready(function () {

  $(".calc").click(function () {
    let bill_amount = parseInt($('#bill').val());
    let tip = parseInt($('#tip').val());
    let split_bill = parseInt($('#split').val());
    let tip_amount, total_bill;

    tip_amount = (bill_amount / 100) * tip;
    total_bill = tip_amount + bill_amount;
    
    $('.tpe').text(tip_amount / split_bill);
    $('.tbt').text(total_bill);
    $('.tep').text(total_bill / split_bill);
    $('.tt').text(tip_amount);
  })


  $(".clr").click(function () {
    $('#bill').val(' ');
    $('#split').val(' ');
    $('#tip').val(' ');
  })
  
});
