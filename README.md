# DDD-BASIC

Projeto introdutório de **Domain-Driven Design (DDD)** em TypeScript. O objetivo é modelar um domínio simples de e-commerce com entidades, value objects e regras de validação no próprio domínio.

## Sobre o projeto

Este repositório demonstra conceitos fundamentais do DDD aplicados a um cenário de pedidos e clientes:

- **Entidades** com identidade única (`Customer`, `Order`, `OrderItem`)
- **Value Objects** imutáveis e validados (`Address`)
- **Validação no domínio**, garantindo que objetos inválidos não sejam criados
- **Separação por contexto**, organizando o código em pastas por agregado/entidade

## Estrutura do projeto

```
src/
├── index.ts                          # Ponto de entrada e exemplo de uso
└── entities/
    ├── customer/
    │   ├── Customer.ts               # Entidade Cliente
    │   └── VO/
    │       └── Address.ts            # Value Object de endereço
    ├── order/
    │   └── Order.ts                  # Entidade Pedido
    └── ordem_item/
        └── order_item.ts             # Entidade Item do Pedido
```

## Modelo de domínio

### Customer (Cliente)

Representa um cliente do sistema. Possui identificador, nome, status de ativação e um endereço opcional.

- Valida `id` e `name` na criação
- Permite associar um `Address` via setter
- Métodos `activate()` e `deactivate()` reservados para regras de negócio futuras

### Address (Value Object)

Objeto de valor que representa um endereço completo (rua, número, CEP, cidade, estado e país). É validado no construtor e não possui identidade própria — faz sentido apenas no contexto do cliente.

### Order (Pedido)

Agrega um pedido vinculado a um cliente (`customerId`) e uma lista de itens (`OrderItem[]`).

### OrderItem (Item do Pedido)

Representa um produto dentro de um pedido, com `id`, `name` e `price`.

## Tecnologias

| Tecnologia   | Uso                          |
| ------------ | ---------------------------- |
| TypeScript   | Linguagem e tipagem estática |
| tsx          | Execução e hot-reload em dev |
| Node.js ESM  | Módulos nativos (`"type": "module"`) |

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm

## Como executar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/viniciochavess/DDD-BASIC.git
cd DDD-BASIC
npm install
```

Inicie o projeto em modo de desenvolvimento (com watch):

```bash
npm run dev
```

O arquivo `src/index.ts` cria um cliente com endereço e um pedido com três itens como exemplo.

## Scripts disponíveis

| Comando      | Descrição                                      |
| ------------ | ---------------------------------------------- |
| `npm run dev` | Executa `src/index.ts` com recarregamento automático |

## Conceitos DDD aplicados

- **Entidade**: objeto com identidade persistente ao longo do tempo (ex.: `Customer`, `Order`)
- **Value Object**: objeto definido pelos seus atributos, sem identidade (ex.: `Address`)
- **Validação no domínio**: regras de negócio encapsuladas nas classes do domínio, não em camadas externas
- **Organização por bounded context implícito**: pastas separadas por conceito de domínio (`customer`, `order`, `ordem_item`)

## Próximos passos sugeridos

- Implementar `activate()` e `deactivate()` em `Customer`
- Adicionar validações em `Order` e `OrderItem`
- Introduzir agregados e repositórios
- Criar camadas de aplicação e infraestrutura
- Adicionar testes unitários para as regras de domínio

## Licença

ISC

## Repositório

[github.com/viniciochavess/DDD-BASIC](https://github.com/viniciochavess/DDD-BASIC)
