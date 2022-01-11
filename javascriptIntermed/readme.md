##### Aula 01 - Window #####
Método -> Toda função que pertence a um objeto.

Quando se tratar de uma propriedade do window, não precisa colocar o window na frente.
  window.console.log("Teste") 
    é igual a 
  console.log("Teste")

- objeto "window" tem uma propriedade "console"
- objeto "console" tem um método "log"


window.alert
- "alert" é um método da propriedade "window"

##### Aula 02 - Document #####

Com o "document" é possível acessar toda a árvore de propriedades do html

##### Aula 03 - Document - Parte 02 #####
DOM -> Document Object Model

Cada tag html pode ser transformada em um objeto javascript.

Ex:
document.body
- document é um objeto
- body é um objeto

##### Aula 04 - Acessando elementos HTML com js #####
let d = document

A partir disso, o código:
document.getElementById("")

É equivalente a:
d.getElementById("")

Ver arquivo

##### Aula 05 - Modificando Elementos #####
p.innerHTML -> Recebe elementos HTML.

p.innerText -> Mostra o que está aparecendo na tela

p.textContent -> Mostra tudo o que existe no HTML (mesmo se oculto)

p.setAttribute -> Serve tanto para substituir um atributo, quanto para criar um novo atributo.

##### Aula 06 - Eventos Parte 1 #####
onchange -> muda o valor só quando sai do foco ou aperta enter.
oninput -> muda o valor do input conforme digita.

##### Aula 07 - Eventos Parte 2 #####
F12 > Network Conditions:
Disable cache: Yes
Network throttling: Slow 3g   (Simular uma internet 3g)

onload -> evento que vai ser executado somente quando a página finalizar de carregar

##### Aula 08 - Eventos Parte 3 #####

addEventListener("mouseover", nomedafuncao)
1º parâmetro: ação (mouseover, click, etc...)
2º parâmetro: função

##### Aula 09 - This #####

##### Aula 10 - Usar parênteses na função #####
ret3() -> Quando usa função COM parentêses está EXECUTANDO e trazendo o retorno da função
ret3 -> Quando usa função SEM parênteses, está apropriando o conteúdo da função. Pode passar essa função para outra variável.

let ret5 = ret3
ret5 
// Vai trazer toda a lógica da função ret3
https://i.imgur.com/m20jdyM.png

let ret5 = ret3()
ret5 // Vai retornar o RESULTADO da função ret3()
https://i.imgur.com/yyufarm.png

https://i.imgur.com/CeniJhB.png

Resumidamente: quando passamos apenas o nome da função sem parênteses fazendo uma referência, é como se ele estivesse passando uma "copia" daquela função, e sempre ficará de olho se certo elemento sofreu aquela ação em específico, caso aconteça ele pega essa referência de função e executa.

Explicação: 
https://pt.stackoverflow.com/questions/377129/d%C3%BAvida-ao-chamar-fun%C3%A7%C3%A3o-em-javascript-uso-de-parenteses
https://www.ti-enxame.com/pt/javascript/em-javascript-faz-diferenca-se-eu-chamar-uma-funcao-entre-parenteses/969474524/


https://i.imgur.com/uarfKVg.png

##### Aula 11 - Comparando maneiras de criar evento

window.onload = function() {}    // Assim que carregar a tela vai rodar a habilitar/função

https://i.imgur.com/uarfKVg.png


```js
<div>

</div>
```