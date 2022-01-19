





### Aula 03 - Seletores
- Vai selecionar todos width que sejam 500
[width="500"] {
  color: red;
}

- Vai selecionar todos seletores que possuam width:
[width] {
  font-weight: bold;
}

~ =
- Vai pegar todo title que tenha a palavra "titulo"
[title~="titulo"] {
  color: blue;
}

^ =
- Vai pegar todos title que COMECE com "sub"
[title^="sub"] {
  background-color: green;
}

$ = 
- Vai pegar todos title que terminarem com 2 
[title$="2"] {
  font-size: 40px;
}

* =
- Vai pegar todos title que tenha pelo menos um dos indicativos
[title*="plo"] {
  color: chartreuse;
}

### pseudoElemento x pseudoClass (Aula 04)

pseudoElemento vai ter dois "dois pontos"
```css
p::first-line {
  color: red;
}
```

pseudoClass vai ter UM "dois pontos"
```css
input:focus {
  color: red;
}
```

### Tranform Images

```css
img {
  width: 420px;
  transform: rotate(45Deg);  // Rotacionar
  
  transform: scale(1.5);     // Alterar Escala
  transform: scale(1.5, 2);     // Alterar Escala (larg, alt)
  transform: skew(45deg, 30deg) // Alterar o angulo (horiz, vert)
}
```