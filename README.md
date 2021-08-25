# Hiring Coders - Desafio Final

Esse repositório é o resultado do desafio final entregue na última fase do Hiring Coders.

O desafio é desenhar uma página com a temática da AWS usando VTEX IO.


## Experiência do consumidor

Ao entrar na página, o usuário encontrará um modal com um formulário para se cadastrar para receber novidades. Coletaremos informações de Nome, E-mail e Telefone.

Ao sair do modal, o cliente encontrará uma página com os serviços AWS. Teremos oferta de produtos com preços. Ao clicar no botão "comprar" o serviço é adicionado ao carrinho.

No menu superior, o cliente poderá navegar até uma página de "Sobre", onde terão informações sobre missão, visão e valores da AWS, conforme a [página original aws] (https://aws.amazon.com/pt/about-aws/).

Ao finalizar a compra, o cliente é direcionado para uma página de checkout, onde serão coletados dados de cartão, E-mail e Telefone. Coletaremos essas informações com nossa API.

## Experiência do funcionário

O funcionário AWS terá uma página onde poderá administrar os leads e clientes.

Consumidores que se cadastrarem no formulário da página ficarão cadastrados como "prospectos". Já os que realizarem compras serão classificados como "clientes".

*A ideia inicial é de que prospectos que realizarem compra terão seu status alterado automaticamente pelo sistema*

Essa página terá uma lista de leads com Nome, E-mail, Telefone e Status de cada lead. O funcionário poderá atualizar o status do lead de "prospecto" para "cliente".


### A definir

- O formulário trará qual benefício para o usuário? Desconto? Notícias sobre novos produtos? Desejo de contato de um comercial?
- Lógica de compra - serviços