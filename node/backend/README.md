# Backend

Teste de backend com api utilizando o node + express como middleware da API Brapi

## Fundamentos

Utilizei a API BRAPI, porque na API sugerida (Alpha Vantage) não continha nenhuma ação da Bovespa (modelo utilizado como referência no escopo da tarefa.

Para deixar o serviço melhor blocado e buscando a clareza e limpeza do código organizei da seguinte forma:

- controllers para responsabilidade de tratar as rotas
- validations para validar as requisições e já retornar o erro usando `express-validator`

```shell
  |-- tests/
  |-- @types/
  |-- controllers/
  |-- validations/
  |-- routes.ts
  |-- api.ts
  |-- server.ts
```

## Requisitos:

- Node 20.4.0 ou superior

### Variável de ambiente obrigatória

```env
BRAPI_API_KEY=XXXXXXXXXX
```

Pode ser colocada no ambiente ou num arquivo `.env`

Uma chave válida para validação do teste foi enviada por e-mail (a API exige assinatura para exibir detalhamento de informações.

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
npm run test
```

## End points

Seguindo o solicitado no escopo:

### Consulta uma ação

#### MÉTODO: GET

##### `/stocks/:stock_name/quote`

Parâmetro
`:stock_name` pode ser tanto no formato tradicional (ex: PETR4), quanto no formato do escopo do teste (ex: PETR4.SA).

#### Sucessso:

**Resposta**:
Código: 2000

```TypeScript
{
	name:  string,
	lastPrice:  number,
	pricedAt:  string // string em formato ISO 8601
}
```

#### Erros:

Código: 404

_Código da ação não encontrada_

```JSON
{
 "errors": [
	 {
	   "msg": `Não encontramos a ação ${stock_name}`
	 }
 ]
}
```

Código: 400
_Algum erro genérico não identificado_

```JSON
{
  "errors": [
	{
	  "msg": "Houve um erro ao consultar a cotação da ação. Por favor, tente novamente mais tarde."
	}
  ]
}
```

### Consulta histórico de uma ação

#### MÉTODO: GET

##### `/stocks/:stock_name/history?from=<date_from>&to=<date_to>`

- from\*: data formato ISO 8601
- to\*: data formato ISO 8601

Parâmetro
`:stock_name` pode ser tanto no formato tradicional (ex: PETR4), quanto no formato do escopo do teste (ex: PETR4.SA).

#### Sucessso:

**Resposta**:
Código: 200

```JSON
{
	"name":  string,
	"prices":  [
	{
		"opening": number,
		"low": number,
		"high": number,
		"closing": number,
		"pricedAt": string // data formato ISO 8601
	}
	],
}
```

#### Erros:

Código: 404

_Código da ação não encontrada_

```JSON
{
 "errors": [
	 {
		 "msg": `Não encontramos a ação ${stock_name}`
	 }
 ]
}
```

Código: 400
_Parâmetros obrigatórios não encontrados ou em formato inválido_

```JSON
{
"errors": [
	{
		"type": "field",
		"msg": "A data inicial é obrigatória",
		"path": "from",
		"location": "query"
	}
]
}
```

### Compara preços de ações

#### MÉTODO: POST

##### `/stocks/:stock_name/compare`

##### Body

```JSON
{
  "stocks": ["<código da ação>"]
}
```

`<código da ação` pode ser tanto no formato tradicional (ex: PETR4), quanto no formato do escopo do teste (ex: PETR4.SA).

Parâmetro
`:stock_name` pode ser tanto no formato tradicional (ex: PETR4), quanto no formato do escopo do teste (ex: PETR4.SA).

#### Sucessso:

**Resposta**:
Código: 201

```TypeScript
[
  {
	name:  string,
	lastPrice:  number,
	pricedAt:  string // string em formato ISO 8601
  }
]
```

#### Erros:

Código: 404

_Código da ação não encontrada_

```JSON
{
 "errors": [
	 {
		 "msg": `Não encontramos a ação ${stock_name}`
	 }
 ]
}
```

Código: 400
_Parâmetros obrigatórios não encontrados ou em formato inválido_

```JSON
{
"errors": [
	{
		"type": "field",
		"msg": "A lista de ações é obrigatória",
		"path": "stocks",
		"location": "body"
	}
]
}
```
