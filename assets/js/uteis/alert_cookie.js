$(document).ready(function () {
    var cookie =
        `
    <div id="message">
        <div>
            <div id="inner-message" class="alert alert-secondary">
                <div class="row">
                    <div class="col-md-9 col-sm-9 col-9 coluna">
                        <i class="fas fa-info-circle"></i>
                        <span class="texto">Usamos cookies para aprimorar sua experiência em nosso site e para fins de publicidade. <a href="https://www.servicequalityse.com.br/politica-de-privacidade.html" target="_blanck">Política de Privacidade</a></span>
                    </div>
                    <div class="col-md-3 col-sm-3 col-3 coluna">
                        <button id="aceitar_cookie" type="submit" class="btn " data-dismiss="alert">Aceitar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    $('#alert_cookie').html(cookie);
});