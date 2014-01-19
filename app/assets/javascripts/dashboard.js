$(document).ready(function(){
  $('.refresher').click(function(){
    $('.transactions tbody tr:first-child').before(transactions[i]);
    addThisRow(".transactions tr:first-child")
    $('.transactions tbody tr:last-child').remove();

    if(i == 0)
    {
      $('.alerts tbody tr:first-child').before(alert_html)
      addThisRow('.alerts tbody tr:first-child')
      $('.alerts tbody tr:first-child').animate({backgroundColor: "#FFF"},7000);
      $('.alerts tbody tr:last-child').remove();
      $.get('/twilio/send_message')
    }
    i++;
  })
})

var i = 0

var transactions  = [
  '<tr><td>HP</td><td>$2,000</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>',
  '<tr><td>Brita</td><td>$500</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>',
  '<tr><td>Coffee Espresso</td><td>$10,000</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>'
]

var alert_html = '<tr style="background-color: rgba(237, 28, 36, 0.5);"><td>Payroll</td><td>$2,300</td><td>now</td><td><span class="glyphicon glyphicon-flag"></span></td></tr>'

function addThisRow(row)
{
  $(row).find('td')
 .wrapInner('<div style="display: none; border: none; padding:0; margin: 0; height: auto; background-color: inherit" />')
 .parent()
 .find('td > div')
 .slideDown(350, function(){

  var $set = $(this);
  $set.replaceWith($set.contents());

 });
}