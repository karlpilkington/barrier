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
    }
    i++;
  })
})

var i = 0

var transactions  = [
  '<tr><td>1</td><td>$2000</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>',
  '<tr><td>2</td><td>$500</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>',
  '<tr><td>3</td><td>$10000</td><td>pending</td><td><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-flag"></span></td></tr>'
]

var alert_html = '<tr style="background-color: rgba(237, 28, 36, 0.5);"><td>1</td><td>$2,300</td><td>now</td><td><span class="glyphicon glyphicon-flag"></span></td></tr>'

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