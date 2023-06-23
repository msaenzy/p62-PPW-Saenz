function show() {
			
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
}

function eliminar_elemento() {
    var container = document.getElementById('image')
    container.removeChild( image.lastElementChild )
}