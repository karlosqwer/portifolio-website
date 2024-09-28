// Seleciona o botão com a classe "botao-visita"
document.querySelector('.botao-visita').addEventListener('click', function() {
    window.open('https://github.com/karlosqwer', '_blank');
});
// Seleciona o botão de download
document.getElementById('download-cv').addEventListener('click', function() {
    // Define o caminho relativo do arquivo PDF
    const link = document.createElement('a');
    link.href = 'scr/downloads/CURRICULO-KARLOS.pdf'; // Caminho relativo ao arquivo
    link.download = 'CURRICULO-KARLOS.pdf'; // Nome do arquivo baixado
    link.click(); // Simula o clique
});