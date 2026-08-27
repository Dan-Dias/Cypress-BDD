# Cypress BDD

> Testes end-to-end escritos em Gherkin e executados com Cypress.

Este projeto valida os fluxos essenciais de **login** e **cadastro de usuário** da aplicação [Automation Practice](https://automationpratice.com.br/), combinando a legibilidade do BDD com a velocidade e a confiabilidade do Cypress.

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-15.21.0-17202C?logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/BDD-Cucumber-23D96C?logo=cucumber&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-required-339933?logo=node.js&logoColor=white)

</div>

## Visão geral

Os cenários cobrem comportamentos válidos e regras de validação da aplicação:

- **Login:** e-mail vazio, senha vazia e login bem-sucedido.
- **Cadastro:** nome, e-mail e senha vazios ou inválidos, além do cadastro bem-sucedido.
- **Dados de teste:** geração de dados dinâmicos com `@faker-js/faker`.
- **Relatórios:** relatório HTML interativo com gráficos, status, duração e detalhes por cenário.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado, de preferência uma versão LTS.
- npm disponível no terminal.
- Acesso à internet para acessar `https://automationpratice.com.br/`.

## Instalação

Clone o projeto e instale as dependências:

```bash
git clone <url-do-repositorio>
cd Cypress-BDD
npm install
```

## Executando os testes

### Interface do Cypress

Abre o runner para escolher os arquivos `.feature` e acompanhar a execução visualmente:

```bash
npx cypress open
```

No runner, selecione **E2E Testing** e execute `login.feature` ou `register_user.feature`.

### Modo headless

Executa todos os cenários no terminal e gera os artefatos do relatório:

```bash
npx cypress run
```

Para executar uma feature específica:

```bash
npx cypress run --spec "cypress/e2e/features/login.feature"
npx cypress run --spec "cypress/e2e/features/register_user.feature"
```

## Relatório Cypress

O projeto usa [`cypress-mochawesome-reporter`](https://github.com/LironEr/cypress-mochawesome-reporter) para produzir um relatório HTML navegável. A configuração atual inclui gráficos e o título **Projeto Cucumber**.

Depois de executar os testes, abra:

```text
cypress/reports/html/index.html
```

O relatório apresenta:

- resumo de testes aprovados, pendentes e com falha;
- percentual de aprovação e duração da execução;
- visão por suíte, feature e cenário;
- gráficos para leitura rápida dos resultados;
- detalhes do teste e evidências disponíveis.

> Um relatório de exemplo já está versionado em `cypress/reports/html/index.html`. Na execução atual registrada, ele contém **9 testes aprovados em 2 suítes**.

Quando um cenário falha, o Cypress também pode salvar screenshots em:

```text
cypress/screenshots/
```

## Estrutura do projeto

```text
.
├── cypress.config.js              # Configuração do Cypress, Cucumber e reporter
├── cypress
│   ├── e2e/features               # Features escritas em Gherkin
│   │   ├── login.feature
│   │   └── register_user.feature
│   ├── reports/html               # Relatório HTML gerado
│   ├── screenshots                 # Evidências de falhas
│   └── support
│       ├── commands.js            # Comandos customizados
│       ├── e2e.js                  # Imports e configuração de suporte
│       ├── pages                   # Page Objects
│       └── step_definitions        # Implementação dos passos Gherkin
├── package.json
└── package-lock.json
```

## Como o BDD está organizado

Cada arquivo `.feature` descreve o comportamento esperado em linguagem de negócio. Os passos são implementados em `cypress/support/step_definitions/` e reutilizam Page Objects de `cypress/support/pages/`.

```gherkin
Scenario: Login successful
    Given I am on login screen
    And I fill my credentials
    When I click on login button
    Then I see success message "Login realizado"
```

Essa separação mantém os cenários fáceis de ler e concentra os detalhes de interação nos arquivos de suporte.

## Tecnologias

- [Cypress](https://www.cypress.io/) para testes end-to-end.
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) para suporte a Gherkin.
- [esbuild](https://esbuild.github.io/) para o pre processamento dos arquivos de teste.
- [Faker](https://fakerjs.dev/) para dados de teste.
- [Mochawesome Reporter](https://github.com/LironEr/cypress-mochawesome-reporter) para relatórios HTML.

## Licença

Este projeto está configurado com a licença `ISC` no `package.json`.
