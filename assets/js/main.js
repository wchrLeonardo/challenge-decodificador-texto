// TEMAS-APLICAÇÃO
//funções para alternar entre os modos
function dark_mode() {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
}
function light_mode() {
    document.body.classList.remove('dark-mode')
    
}

let texto 
//CRIPTOGRAFAR
function encrypt(){
  //Pega o valor da mensagem digitada no campo
    texto = document.getElementById('texto-recebido').value
  //Objeto contendo o padrão de criptografia
    const criptografado = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }
    
        let texto_criptografado = '' // Armazena o texto após as substituições
      // a sintaxe dessa variável limita a apenas caracteres minusculos e sem acentos
        const regex = /^[a-z\s]*$/
        //Testa se o valor digitado está correspondente as regras
        if(regex.test(texto)){
          //Se o valor for dirente de vazio executa a operação
        if(texto != ''){
        // Itera sobre cada caractere do texto
        for (let i = 0; i < texto.length; i++) {
          const caractere = texto[i] // Obtém o caractere atual
          // Verifica se o caractere deve ser substituído
          if (criptografado[caractere]) {
            texto_criptografado += criptografado[caractere] // Substitui o caractere
          } else {
            texto_criptografado += caractere // Mantém o caractere original
          }
        }
       
        // console.log(texto_criptografado) //Testar se está funcionando...
        //trocando a visibilidade dos elementos
        document.querySelector('.imagem-mensagem').style.visibility = 'hidden'
        document.querySelector('.mensagem').style.visibility = 'hidden'
        document.querySelector('.mensagem-mensagem').style.visibility = 'hidden'
        document.querySelector('.botao-copiar').style.visibility = 'visible'
        document.querySelector('.texto-criptografado').style.visibility = 'visible'
        document.querySelector('.texto-criptografado').value = texto_criptografado
        document.querySelector('.input-texto').value = ''
        }
    } else{
        document.querySelector('.input-texto').value = 'a mensagem deve conter apenas letras minusculas e sem acentos'
    }

}
//FUNÇÃO COPIAR TEXTO
function copy_as(){
    let valor_texto_criptografado = document.querySelector('.texto-criptografado').value
    document.querySelector('.input-texto').value = valor_texto_criptografado
    document.querySelector('.texto-criptografado').value = ''
}
//FUNÇÃO DESCRIPTOGRAFAR
function decrypt(){
  //Armazena o valor do input que deverá conter o texto criptogrado depois de copiado
  texto = document.getElementById('texto-recebido').value
  //Variável vazia para capturar o texto descriptografado
   let texto_descriptografado = ''
   //Verifica se o input não está vazio, para poder executar a lógica
    if(texto != ''){
    let i = 0;
      //Um contador que irá percorrer os caracteres do texto até seu tamanho total
    while (i < texto.length) {
      //faz as verificações ao decorrer da iteração, quando a frase conter alguma das palavras chaves
      //é substituida pela vogal correspondente.
      //startswith utiliza 2 argumentos e verifica se a sub-string está contida na variável texto atráves do contador
      //Caso contenha, é substituida pela volgal correspondente
        if (texto.startsWith('enter', i)) {
            texto_descriptografado += 'e';
            i += 5; // tamanho de caracteres da string texto que será pulada correspondente ao tamanho da sub-string
        } else if (texto.startsWith('ai', i)) {
            texto_descriptografado += 'a';
            i += 2;
        } else if (texto.startsWith('imes', i)) {
            texto_descriptografado += 'i';
            i += 4; 
        } else if (texto.startsWith('ober', i)) {
            texto_descriptografado += 'o';
            i += 4; 
        } else if (texto.startsWith('ufat', i)) {
            texto_descriptografado += 'u';
            i += 4; 
        } else {
            texto_descriptografado += texto[i];
            i++;
        }
    }
    document.getElementById('texto-recebido').value = '' //Limpa o campo de mensagens
    document.getElementById('texto-colado').value = texto_descriptografado //Adiciona o valor do texto descriptografado
  }   
}


document.addEventListener('DOMContentLoaded', function(){
    // Define o texto que será "descriptografado"
    const text = "Decodificador de Texto";
    
    // Seleciona o elemento do título onde o texto será exibido
    const titleElement = document.getElementById('animacao_titulo');

    // Função para obter um caractere aleatório
    function getRandomChar() {
      // Define os caracteres que podem ser usados para simular a descriptografia
      const chars = 'ABCDEFstuvwxyz01234567';
      // Retorna um caractere aleatório do conjunto definido
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Função que simula a descriptografia do texto
    function decryptText() {
      let displayText = ''; // Inicializa a string que será exibida
      let index = 0; // Índice que rastreia a posição atual no texto real

      // Define um intervalo que se repete a cada 150 milissegundos
      const interval = setInterval(() => {
        displayText = ''; // Reseta a string de exibição a cada iteração

        // Constrói a string de exibição
        for (let i = 0; i < text.length; i++) {
          if (i < index) {
            // Se o índice atual for menor que a posição no texto real, usa o caractere real
            displayText += text.charAt(i);
          } else {
            // Caso contrário, usa um caractere aleatório
            displayText += getRandomChar();
          }
        }

        // Atualiza o conteúdo do título com a string de exibição
        titleElement.textContent = displayText;

        // Se o índice atual for maior ou igual ao comprimento do texto real, limpa o intervalo e inicia a animação de opacidade
        if (index >= text.length) {
          clearInterval(interval);
          anime({
            targets: '#animacao_titulo', // Alvo da animação
            opacity: [0, 1], // Animação de opacidade de 0 a 1
            easing: 'easeInOutQuad', // Tipo de easing para suavizar a animação
            duration: 800 // Duração da animação em milissegundos
          });
        }

        // Incrementa o índice para avançar no texto real
        index++;
      }, 150); // Intervalo de tempo entre cada iteração (150 milissegundos)
    }

    decryptText();
});