$("document").ready(function (){
    getLibrerys();
    getCategories();
    paintCategories();
});
function getCategories(){
    $.ajax({
        url : "api/Category/all",
        type : 'GET',
        dataType : 'json',
        success : function(p) {
            $("#categoryLibrary").empty();
            for(i=0;i<p.length;i++){
                let k="<option value='"+p[i].id+"'>"+p[i].name+"</option>";
                $("#categoryLibrary").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });

    function getLibrerys(){
        $.ajax({
            url : "api/Library/all",
            type : 'GET',
            dataType : 'json',
            success : function(p) {
                $("#resultado").empty();
                for(i=0;i<p.length;i++){
                    $("#resultado").append(p[i].name+" "+p[i].description+" "+p[i].target+" "+p[i].capacity+" ");
                    $("#resultado").append(p[i].category.name+" ");
                    $("#resultado").append(" <button onclick='getClientById("+p[i].id+")'>Actualizar</button>");
                    $("#resultado").append(" <button onclick='deleteLibrary("+p[i].id+")'>Borrar!</button>");
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


function getLibData(){
    let data={
        name:$("#libName").val(),
        target:$("#libTarget").val(),
        capacity:$("#libCapacity").val(),
        description:$("#libDescription").val(),
        category:{
            id:$("#category option:selected").val()
        }
    }
    return data;
}

}

function cleanData(){
    $("#nameLibrary").val("");
    $("#capacityLibrary").val("");
    $("#descriptionLibrary").val("");
    $("#targetLibrary").val("");
}

function saveLib(){

    let myData=getLibData();

    $.ajax({
        url : "api/Lib/save",
        type : 'POST',
        dataType : 'json',
        contentType:'application/json',
        data: JSON.stringify(myData),
        success : function(res) {
            console.log(res);
            cleanData();
            getLibrerys();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });

    function getClientById(idCliente){
        $.ajax({
            url : "api/Client/"+idCliente,
            type : 'GET',
            dataType : 'json',
            success : function(item) {

                $("#idCliente").val(item.id);
                $("#nameCliente").val(item.name);
                $("#emailCliente").val(item.email);
                $("#ageCliente").val(item.age);
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            },
            complete : function(xhr, status) {
                //  alert('Petición realizada');
            }
        });
    }
}

