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
                $("#resultado").append(" <button onclick='getClientById(${p[i].id})'>Actualizar</button>");
                $("#resultado").append(" <button onclick='deleteClientById("+p[i].id+")'>Borrar!</button>");
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

function cleanData(){
    $("#nameCliente").val("");
    $("#ageCliente").val("");
    $("#emailCliente").val("");
}

function saveClient() {
    let myData=getData();
    myData.id=null;
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url : "api/Client/save",
        data : dataToSend,
        type : 'POST',
        dataType : 'json',
        contentType:'application/json',
        success : function(dg) {
            console.log(dg);
            cleanData();
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}

function getClientById(idClient){
    $.ajax({
        url : "api/Client/"+idClient,
        type : 'GET',
        dataType : 'json',
        success : function(item) {

            $("#idCliente").val(item.id);
            $("#nameCliente").val(item.name);
            $("#emailCliente").val(item.email);
            $("#ageCliente").val(item.age);

            $("#saveNew").hide();
            $("#updateOld").show();
            $("#cancelUpdate").show();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}

function deleteClientById(idClient){
    $.ajax({
        url : "api/Client/"+idClient,
        type : 'DELETE',
        dataType : 'json',
        success : function(item) {

            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}

function updateClient(){

    let myData=getData();
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url : "api/Client/update",
        data : dataToSend,
        type : 'PUT',
        dataType : 'json',
        contentType:'application/json',
        success : function(dg) {
            console.log(dg);
            cleanData();
            getClients();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
            $("#saveNew").show();
            $("#cancelUpdate").hide();
            $("#updateOld").hide();
        }
    });

}

function cancelUpdate(){
    cleanData();
    $("#saveNew").show();
    $("#cancelUpdate").hide();
    $("#updateOld").hide();
}