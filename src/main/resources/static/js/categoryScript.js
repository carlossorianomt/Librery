
function paintCategories(){
    $.ajax({
        url : "api/Category/all",
        type : 'GET',
        dataType : 'json',
        success : function(c) {
            $("#category").empty();
            for (i=0;i<c.length;i++){
                let option="<option value='"+c[i].id+"'>"+c[i].name+"</option>";
                $("#category").append(option);
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