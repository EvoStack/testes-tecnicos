# Frontend

Teste de Frontend usando Vite + ReactJS + React Query + React Charts

## Fundamentos

- Escolhi o Vite, porque o compilador é mais rápido para aplicação
- Usei o TailwindCss, porque o React está mudando o modelo de estilo. Saindo dos estilos compilados no client usando javascript para estilos pre-compilados, além de vir com bootStrap incluído. Funcionando para React, React Native e Expo
- React Query utiliza modelos de chamadas hooks e controle de caches que torna melhor a experiência ao trabalhar com RESTFUL
- por se tratar de um modelo de navegação simples no teste e por ser apensa RectJs e não uma apliação para rodar em multiplataforma, optei pelo react-router-dom

```shell
  |-- assets/
  |-- components/
  |-- pages/
  |-- services/
  |-- specs/
  |-- routes.tsx
```

## Requisitos:

- Node 20.4.0 ou superior

### Para o teste de Fronted funcionar

para o este teste funcionar, ele requer que o backend esteja levantado. Lembrando basta executar `npm run dev` na pasta `backend`

## Instalando dependências

Na pasta `/node/backend/`
Execute:

```bash
npm install
```

## Levantando servidor node

Na pasta `/node/backend/`
Execute:

```bash
npm run dev
```

## Executando os testes

Na pasta `/node/backend/`
Execute:

```bash
npm test
```

## Páginas

criei apenas as páginas:

- Index (Dashboard)
- StockDetails (detalhamento da ação)

Ao acessar o dashboard, há apenas um form para adicionar ações, sendo atualizadas. Deixei a responsabilidade de executar a query dentro do componente responsável por tratar a linha da ação.

Usando o React Query, deixei a chamada em cache por 5 minutos. Evitando consultas desnecessárias ao servidor.

### Ao adicionar temos alguns comportamentos

#### Acessar o histórico da ação

Ao adicionar, o dashboard busca ação e suas informações básica e, assim, disponibiliza um link para visualizar detalhes

### remover ação da lista

Após a adição, uma tabela e sua lista de ações é exibida. Ao exibir, em sua respectiva linha, temos o botão "Remover" para apagar a linha

### Preservando sua lista

Por ser um teste simples, achei que levaria ainda mais tempo estruturar um banco de dados melhor, por isso, achei melhor apenas salvar no storage do navegador a lista implementada
