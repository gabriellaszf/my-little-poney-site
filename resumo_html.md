# Resumo: Introdução ao HTML

## O que é o HTML?
O HTML (HyperText Markup Language) é a estrutura principal de qualquer página na web. É muito importante destacar que o **HTML não é uma linguagem de programação**, pois ele não possui lógica matemática, tomada de decisões (como "se isso, faça aquilo") ou cálculos. Na verdade, ele é uma **linguagem de marcação**. 

Ele funciona através de "tags" (etiquetas) que servem para marcar e dizer ao navegador de internet o que é cada elemento na tela: onde fica um título, onde está um parágrafo, onde deve aparecer uma imagem, etc.



## Estrutura Básica Obrigatória
Para qualquer documento HTML funcionar, ele precisa de uma estrutura inicial (o "esqueleto"):
* `<!DOCTYPE html>`: Avisa ao navegador que estamos usando a versão mais recente do HTML (HTML5).
* `<html>`: A tag raiz que envolve todo o documento.
* `<head>`: O cabeçalho. Aqui ficam as configurações da página (como o título na aba do navegador e links de estilos), coisas que geralmente o usuário não vê diretamente.
* `<body>`: O corpo da página. Tudo o que é visualizado pelo usuário na tela vai aqui dentro.



## Glossário de Principais Tags

As tags geralmente possuem uma abertura (ex: `<p>`), o conteúdo no meio, e um fechamento com barra (ex: `</p>`).

* **`<h1>` a `<h6>`**: Usadas para títulos e subtítulos. O `<h1>` é o título principal e mais importante, e o `<h6>` é o menor e menos importante.
* **`<p>`**: Usada para criar parágrafos de texto.
* **`<a>`**: Usada para criar links (âncoras) que levam o usuário para outras páginas ou sites.
* **`<img>`**: Usada para exibir imagens. (Detalhe: essa tag não precisa de fechamento, ela se fecha sozinha).

## O uso da tag `<div>` e o Aninhamento

A tag `<div>` funciona como uma "caixa" ou contêiner genérico. Sozinha ela não tem nenhum valor visual, mas ela é fundamental para a organização do código.

**Como ela ajuda?**
A `<div>` nos permite agrupar vários elementos juntos. Isso é o que chamamos de **aninhamento** (colocar tags dentro de outras tags). 
Por exemplo, podemos colocar um título `<h2>`, um parágrafo `<p>` e uma imagem `<img>` todos dentro de uma única `<div>`. Isso organiza o código por "seções" ou "blocos", o que facilita muito na hora de dar estilo a essa página inteira mais para frente usando CSS (como colocar uma cor de fundo ou alinhar tudo ao centro).