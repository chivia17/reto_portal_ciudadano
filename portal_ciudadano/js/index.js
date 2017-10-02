$(function() {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/reports',
    dataType: 'jsonp',
  }).done(function(data){
    showReports(data);
  });

});

function showReports(reports){
  for(var k in reports) {

    var date = getDateFormat(reports[k].fecha_publicacion)
    var html = '<div class="card"><div class="card-header">' +
                 '<div class="d-flex w-100 justify-content-between">' +
                   '<h5 class="mb-1">'+reports[k].titulo+'</h5>' +
                   '<small>' + date + '</small>' +
                 '</div>' +
               '</div>' +
               '<div class="card-block">' +
                 '<blockquote class="card-blockquote">' +
                   '<p>' + reports[k].contenido + '</p>' +
                   '<footer>' + reports[k].autor + '</footer>' +
                 '</blockquote>' +
               '</div>'+
              '</div>'
    $(".container").append(html);
 }
}

//Function to calculate how many days ago was published the report
function getDateFormat(date){
  var dateReport =  moment(date)
  var dateToday = moment()

  var dif = dateToday.diff(dateReport, 'days')

  switch (dif) {
    case 0:
      return "Hoy"
      break;
    case 1:
      return "Ayer"
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Hace "+dif+ " dias"
      break;
    default:
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
}
