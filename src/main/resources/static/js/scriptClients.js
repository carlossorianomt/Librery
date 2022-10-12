$("document").ready(function(){
    getClients();
});

function getClients(){
    $.ajax({
        url : "api/Client/all",
        type : 'GET',
        dataType : 'json',
        success : function(clients) {

            $("#resultado").empty();
            for(i=0;i<clients.length;i++){
                $("#resultado").append(clients[i].name+" "+clients[i].age+" "+clients[i].email+" ");
                $("#resultado").append("  <button onclick='setUserActive("+clients[i].idClient+")'>Seleccionar</button>");
                $("#resultado").append("<br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}


function setUserActive(idCliente){
    console.log(idCliente);
    $("#idMyClient").val(idCliente);
    $("#resultado").hide();
    $("#otroForm").show(50);
}
function sendOtraData(){
    let myOtraData= {
        data1: $("#data1").val(),
        data2: $("#data2").val(),
        data3: $("#data3").val(),
        cliente: {
            idClient: $("#idMyClient").val()
        }
    }
    console.log(myOtraData);


}