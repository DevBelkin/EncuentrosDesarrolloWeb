$(document).ready(function() {
    $(function() {
        var inputId = 0;
        $('.formularioRegistro input').each(function() {
            inputId++;
            $(this).attr('input-id', inputId);
        });
    })
});

$('.formularioRegistro').each(function() {
    $(this).bind('keyup', validarForm);
    $(this).bind('click', validarForm);
})

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

function validarForm(e) {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombre, e.target);
            break;
        case "apellidos":
            validarCampo(expresiones.nombre, e.target);
            break;
        case "email":
            validarCampo(expresiones.email, e.target);
            break;
        case "password":
            validarCampo(expresiones.password, e.target);
            break;
        case "confirmar_password":
            validarCampo(expresiones.password, e.target);
            break;
    }
}

function validarCampo(expresion, input) {
    var inputID = input.attributes[5].nodeValue;
    var inputActivo = $(`.inputFormulario[input-id="${inputID}"]`);

    if (expresion.test(input.value)) {
        $(inputActivo).removeClass('campoIncorrecto');
        $(inputActivo).addClass('campoCorrecto');
    } else {
        $(inputActivo).addClass('campoIncorrecto');
        $(inputActivo).removeClass('campoCorrecto');
    }
}