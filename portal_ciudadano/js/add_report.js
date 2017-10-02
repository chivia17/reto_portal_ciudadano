$(function() {

  //Hide div-email when the page is load
  $("#div-email").hide()

  //Save new report
  $("#saveReport").click( function() {
    if(validateFields()){
      var parameters = {
        'title': $("#titleReport").val(),
        'content': $("#textReport").val(),
        'author': $("#authorReport").val(),
        'email': $("#emailReport").val(),
        'notify': $("#notificar").prop("checked")
      }

      $.ajax({
        type: 'post',
        url: "http://localhost:3000/api/report",
        data: parameters,
        dataType: 'json',
        success: function(data){
          if(typeof data._id !== 'undefined'){
            alert("Tu reporte se guardo correctamente")
            cleanFields()
          } else{
            alert("En este momento no se pudo guardar tu reporte, intentalo mas tarde")
          }
        }
      })
    }
  });

  //Function to show or hide email field
  $("#notificar").change(function() {
    if(this.checked)
      $("#div-email").fadeIn("slow")
    else
      $("#div-email").hide()
  });

});

//Function to validate that any field is empty
function validateFields(){
  if($("#titleReport").val() != ""){
    if($("#textReport").val() != ""){
      if($("#authorReport").val() != ""){
        if($("#notificar").prop("checked")){
          if($("#emailReport").val() != ""){
            return true
          }else{
            alert("El campo correo es obligatorio")
            return false
          }
        }else
          return true
      }else{
        alert("El campo autor es obligatorio")
        return false
      }
    } else{
      alert("El cuerpo del reporte es obligatorio")
      return false
    }
  }else{
    alert("El campo titulo es obligatorio")
    return false
  }
}

//Function to clean fields if the report was save correctly
function cleanFields(){
  $("#titleReport").val("")
  $("#textReport").val("")
  $("#authorReport").val("")
  $("#emailReport").val("")
  $("#div-email").hide()
  $('#notificar').attr('checked', false);
}
