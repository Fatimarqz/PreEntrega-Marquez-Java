alert ("Bienvenidos a Clínica  Del Valle")


for(let i =1 ; i<=8; i++){
    let nombreIngresado = prompt('ingrese su nombre y apellido');
    let edad = prompt('ingrese su edad');
    console.log()
    if(nombreIngresado === 'esc'){
    alert('Ha cancelado el sistema, ingrese devuelta y complete la solicitud.')
    break
}
alert(nombreIngresado + ' Su turno  ha sido registrado, es el numero:' + i)
}


