$(document).ready(function (){
    getCategoryList();
    getLibs();
});

function getFrontLibData(){
    let k={
        id:$("#idLibrary").val(),
        name:$("#nameLibrary").val(),
        capacity:$("#capacityLibrary").val(),
        target:$("#targetLibrary").val(),
        description:$("#descriptionLibrary").val(),
        category:{
            id:$("#categorySelect").val()
        }
    }
    return k;
}
function cleanFields(){
    $("#idLibrary").val("");
    $("#nameLibrary").val("");
    $("#capacityLibrary").val("");
    $("#targetLibrary").val("");
    $("#descriptionLibrary").val("");
    $("#categorySelect").val("").change();
}


function getCategoryList(){
    $.ajax({
        url : "api/Category/all",
        type : 'GET',
        dataType : 'json',
        success : function(p) {
            console.log(p);
            $("#categorySelect").empty();
            for(let i=0;i<p.length;i++){
                let s=`
                    <option value="${p[i].id}">${p[i].name}</option>                
                `;
                $("#categorySelect").append(s);

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

function saveLib(){
    let data=getFrontLibData();
    data.id=null;
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : "api/Lib/save",
        type : 'POST',
        dataType : 'json',
        contentType:'application/json',
        data:dataToSend,
        success : function(p) {
            console.log(p);
            cleanFields();
            getLibs();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}

function getLibs(){
    $.ajax({
        url : "api/Lib/all",
        type : 'GET',
        dataType : 'json',
        success : function(p) {
            console.log(p);
            $("#results").empty();
            let l="";
            for (let i=0;i<p.length;i++){
                l+=`<div class="col">
                        <div class="card"><div class="card-header">
                                    <h5 class="card-title">${p[i].name}</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">${p[i].description}</p>
                                    <p class="card-text">Capacidad: ${p[i].capacity}</p>
                                    <p class="card-text">Objetivo: ${p[i].target}</p>
                                    <p class="card-text">Categoria: ${p[i].category.name}</p>
                                </div>
                                <div class="card-footer">
                                      <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-outline-primary" onclick='getLibById(${p[i].id})'>Actualizar</button>
                                        <button type="button" class="btn btn-outline-primary" onclick='deleteLibById(${p[i].id})'>Borrar!</button>
                                    </div>
                                
                                </div>
                        </div>
                    </div>
                    `;
            }
            $("#results").append(l);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });

}
function getLibById(idLib){
    $(".saveButtonJL").hide();
    $(".updateButtonJL").show();
    $.ajax({
        url : "api/Lib/"+idLib,
        type : 'GET',
        dataType : 'json',
        success : function(p) {
            console.log(p);
            $("#idLibrary").val(p.id);
            $("#nameLibrary").val(p.name);
            $("#capacityLibrary").val(p.capacity);
            $("#targetLibrary").val(p.target);
            $("#descriptionLibrary").val(p.description);
            $("#categorySelect").val(p.category.id).change();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });

}
function updateLib(){
    let data=getFrontLibData();

    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : "api/Lib/update",
        type : 'PUT',
        dataType : 'json',
        contentType:'application/json',
        data:dataToSend,
        success : function(p) {
            console.log(p);
            cleanFields();
            getLibs();
            $(".saveButtonJL").show();
            $(".updateButtonJL").hide();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}
function cancelUpdateLib(){
    cleanFields();
    $(".saveButtonJL").show();
    $(".updateButtonJL").hide();
}
function deleteLibById(idLib){
    $.ajax({
        url : "api/Lib/"+idLib,
        type : 'DELETE',
        dataType : 'json',
        success : function(p) {
            console.log(p);
            getLibs();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });

}