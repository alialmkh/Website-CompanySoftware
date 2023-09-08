$(document).ready(function() {
    
    $("#btn-enviar-msg").click(function (event) {
        event.preventDefault();

      MostrarSweetPadrao('warning', 'Oops...', 'Em manutenção, contate-nos via whatsapp!', '#0a58ca');

        // $('#resposta-envio').removeClass('d-none');

        // var nome = $('#nome').val();
        // var email = $('#email').val();
		// var assunto = $('#assunto').val();
        // var telefone = $('#telefone').val();
        // var mensagem = $('#mensagem').val();

        // if(nome) {
        //     if (telefone) {
        //         if (assunto) {
        //             if (mensagem) {

        //                 var verificaCheck = $('#aceitoAsPoliticas').is(':checked');
    
        //                 if (verificaCheck == true) {
        //                     $('#resposta-envio').removeClass('d-none');
        //                         setTimeout(
        //                             function() {
        //                                 $.ajax({
        //                                     url: "email-home.php",
        //                                     method: "POST",
        //                                     data: {
        //                                         nome: nome,
        //                                         email: email,
        //                                         assunto: assunto,
        //                                         telefone: telefone,
        //                                         mensagem: mensagem
        //                                     },
        //                                     success: function(response) {
        //                                         $('#resposta-envio').addClass('d-none');
        //                                         MostrarSweetPadrao('success', 'Uhuul!', 'E-mail enviado com sucesso!', '#041432');
    
        //                                        LimparCampos()
        //                                    },
        //                                    error: function(request, status, error) {
        //                                        $('#resposta-envio').addClass('d-none');
        //                                        MostrarSweetPadrao('error', 'Oops...', 'Erro ao enviar o e-mail!', '#0a58ca');
        //                                      }
        //                                  });
        //                              }, 2000
        //                          );
    
        //                  }
        //                  else {
        //                      MostrarSweetPadrao('warning', 'Oops...', 'Aceite o termo de "<b>Política de Privacidade</b>" para o envio da mensagem!', '#0a58ca');
        //                  }
        //              } 
        //              else {
        //                  MostrarSweetPadrao('warning', 'Oops...', 'Digite uma mensagem!', '#0a58ca');
        //              }
        //          } 
        //          else {
        //              MostrarSweetPadrao('warning', 'Oops...', 'Informe o assunto!', '#0a58ca');
        //        }
        //    } 
        //    else {
        //        MostrarSweetPadrao('warning', 'Oops...', 'Informe o telefone!', '#0a58ca');
        //      }
        //  }
        //  else{
        //      MostrarSweetPadrao('warning', 'Oops...', 'Informe o seu nome!', '#0a58ca');
        //  }
       
    });

    function LimparCampos(){
        $('#nome').val('');
        $('#email').val('');
		$('#assunto').val('');
        $('#telefone').val('');
        $('#mensagem').val('');
    }});