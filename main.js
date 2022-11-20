//Iniciar datatables
//$(document).ready( function () { $('#table_id').DataTable();} );

//a espanish
$(document).ready(function(){
    $('#table_id').DataTable({
        "language":{
            "lengthMenu" : "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info" : "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch" : "Buscar",
            "oPaginate":{
                "sFirst":"Primero",
                "sLast" : "Ultimo",
                "sNext":"Siguiente",
                "sPrevious":"Anterior"
            },
            "sProcessing":"Procesando...",
        }
    });
});