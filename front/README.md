# Background

Um novo cliente contratou a Evostacke pediu para que fosse feito um frontend para pesquisar dados de repositorios de usuários do github e também as issues dos repositórios. Para essa funcionalidade, a aplicação deve consumir da API do github.

# Requisitos

1. A aplicação deverá inicialmente ter uma página onde o usuário irá digitar o nome de algum user do github.
2. A pagina terá que mostrar o nome do usuário, avatar, e também a lista de repositórios do mesmo. Na lista de repositórios, deve ser mostrado o `nome do repositório`, a `url para clonar o repositório` e um `link` para o usuário poder acessar a página do próprio github do repositório ao clicar nela.
3. Ao clicar no nome do repositório, o usuário deve ser direcionado para uma outra página, que vai listar as `issues` do repositório.
4. Ao clicar no titulo da `issue` nessa página, o usuário vai ser direcionado para uma outra página que mostrará novamente o título da issue, bem como o corpo da issue, que tem a descrição do problema.

# Observações:

- A aplicação deve ser feita utilizando ReactJs
- O importante nesta parte do desafio é que saibamos como você lida com os componentes que formam as técnicas contemporâneas de desenvolvimento client-side, no que tange processamento de assets, transpilers, separação de responsabilidades, minificação, armazenamento local, etc. Por isso, estética não é primordial, no entanto pode contar pontos em sua avaliação.
- A documentação para a API do github: https://docs.github.com/en/rest/reference

# Procedimento para entrega do teste:

1. Faça o fork desse projeto no github;
2. Codifique a aplicação nesse fork;
3. Escreva um README explicando como rodar sua aplicação. Dê o máximo de detalhes.
4. Abra um pull request quando estiver pronto.
