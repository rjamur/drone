function exibirImagem(src) {
    var novaJanela = window.open();
    novaJanela.document.write('<html><head><title>Imagem</title></head><body style="margin: 0; text-align: center;background-color: black;"><img src="' + src + '" style="max-width: 100%; max-height: 100%;"><h1>Faça movimento de pinça para dar zoom</h1></body></html>');
    novaJanela.document.close();
}