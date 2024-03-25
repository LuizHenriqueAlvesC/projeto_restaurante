$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira o e-mail',
            telefone: 'Por favor, insira o telefone',
            mensagem: 'por favor, insira uma mensagem',
        },
    })
})