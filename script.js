let card = document.getElementById("card");

//Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener('click', function() {
    let question = document.getElementById("question")
    let message = document.getElementById('answer')

    card.style.backgroundImage = url(
        'https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif'
    );
    question.style.display = 'none'
    message.style.display = 'flex'
 });

 // movimento aleatorio do botao 'nao'
 document.querySelector("#no").addEventListener('mouseover', function() {
    let width = window.innerWidth -  30;
    let height = window.innerHeight - 30;

    this.style.possition =  'absolute'
    this.style.top = Math.random() * width + 'px'
    this.style.left = Math.random() * height + 'px'
 })
