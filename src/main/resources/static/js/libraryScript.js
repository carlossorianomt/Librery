$("document").ready(function (){
    paintCategories();
});


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

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            //  alert('Petición realizada');
        }
    });
}