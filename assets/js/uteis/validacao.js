// Máscara de E-mail

function ValidateEmail(id) {
    var inputText = $('#' + id).val();
    var mensagemErro = $('#' + id).parent().find('.email-invalido');

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        mensagemErro.text('');
        return true;
    }
    else {
        mensagemErro.text('Informe um e-mail válido!');
        return false;
    }
}

// Máscara de Nome

function ValidarNome(id) {
    var inputText = $('#' + id).val();
    var mensagemErro = $('#' + id).parent().find('.nome-invalido');

    var nomeformat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    if (inputText.match(nomeformat)) {
        mensagemErro.text('');
        return true;
    }
    else {
        mensagemErro.text('Informe apenas letras!');
        return false;
    }
}

// Máscara do Telefone

$(document).ready(function() {

        $("#telefone")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });
});

function MostrarSweetPadrao(icone, titulo, descricao, corbotao) {
    Swal.fire({
        icon: icone,
        title: titulo,
        html: descricao,
        confirmButtonColor: corbotao
    });
    $('#resposta-envio').addClass('d-none');
}

function ajuste(nr, casas) {
    const og = Math.pow(10, casas)
    return Math.floor(nr * og) / og;
}

// function RemoverFinsDeSemana(classe) {
//     const picker = $('.' + classe);
//     picker.change(function (e) {
//         var day = new Date(this.value).getUTCDay();
//         if ([6, 0].includes(day)) {
//             e.preventDefault();
//             this.value = '';
//             MostrarSweetPadrao('warning', 'Atenção', 'Trabalhamos apenas de segunda à sexta!');
//         }
//     });
// }