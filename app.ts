(function(){

    function saludar( nombre:string ) {
        console.table( 'Hola como estás: ' + nombre ); // Hola Logan
    }
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar( wolverine.nombre );

})();