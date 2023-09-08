<?php

require_once("/autenvio/PHPMailer.php");
require_once("/autenvio/SMTP.php");

//Para gerar HTML
$template = file_get_contents("email-layout.html");
$variaveis = array(
 "{{nome}}" => $_POST['nome'],
 "{{email}}" => $_POST['email'],
 "{{telefone}}" => $_POST['telefone'],
 "{{mensagem}}" => nl2br($_POST['mensagem'])
);

foreach($variaveis as $key => $value){
  $template = str_replace($key, $value, $template);
}

$emailUsuario = 'contato@companysoftware.com.br';

// Inicia a classe PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

// DEFINIÇÃO DOS DADOS DE AUTENTICAÇÃO - Você deve auterar conforme o seu domínio!
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->SMTPAuth = true; // Define que será utilizada a autenticação -  Mantenha o valor "true"
$mail->SMTPSecure = 'ssl';
$mail->SMTPDebug = 1;
$mail->Host = "br1064.hostgator.com.br"; // Seu endereço de host SMTP
$mail->Port = 465; // Porta de comunicação SMTP - Mantenha o valor "587"
$mail->Username = 'contato@companysoftware.com.br'; // Conta de email existente e ativa em seu domínio
$mail->Password = 'Priber@1303'; // Senha da sua conta de email
$mail->Subject  = "[" .$_POST['assunto'] ."] - " .$_POST['nome']; //Assunto

// DADOS DO DESTINATÁRIO
$mail->AddAddress($emailUsuario); // Define qual conta de email receberá a mensagem 

// Definição de HTML/codificação
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
$mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

$mail->Body .= $template; 

// ENVIO DO EMAIL
$enviado = $mail->Send();
// Limpa os destinatários e os anexos
$mail->ClearAllRecipients();

// Exibe uma mensagem de resultado do envio (sucesso/erro)
if ($enviado) {
  echo "E-mail enviado com sucesso!";
} else {
  echo "Não foi possível enviar o e-mail.";
  echo "Detalhes do erro: " . $mail->ErrorInfo;
}
