function show() {
			
    document.getElementById('image')
        ;
    document.getElementById('btnID')
        .style.display = "none";
}

function eliminar_elemento() {
    var container = document.getElementById('container')
    container.removeChild( container.lastElementChild )
}