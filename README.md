## O que é NestJS?

NestJS ou apenas Nest é uma estrutura para criar aplicações em Node.js, ou seja é a linguagem JavaScript sendo executada no server-side ou Back-End.
O Nest foi desenvolvido de maneira que torna mais eficiente, escalável e organizado um projeto Node e usando TypeScript. Além disso, ele combina elementos de programação orientada a objetos, programação funcional e programação reativa funcional.
O servidor HTTP pré-configurado é o já popular Express mas caso queira ainda poderá usar o Fastify ou um totalmente personalizado.

## Porque usar o NestJS?
Com o avanço das aplicações na internet o JavaScript ganhou força e se popularizou influenciando a criação de frameworks e bibliotecas cada vez melhores que ajudam os desenvolvedores a criarem de maneira mais rápida e confiável as aplicações front-end. 
Como exemplo podemos citar React, Angular e Vue.
Porém no server-side não tivemos esta mesma realidade, embora Express, Fastify e até mesmo o Adonis ajudaram muito, nenhum era capaz de resolver todos os desafios de uma aplicação JavaScript no servidor.
Por isso, inspirado no Angular o NestJS foi criado para permitir que desenvolvedores e equipes trabalhem em aplicações testáveis, escaláveis e pouco acopladas.

## Quando usar o NestJS?
Quando for necessário criar uma Aplicação Web, API ou Micro Serviço com a linguagem JavaScript é recomendado usar o NestJS.
Embora seja possível fazer o mesmo usando apenas NodeJS, Express, Adonis ou similares, o padrão e estrutura do Nest facilita muito a criação e a manutenção do código.

## Arquitetura Cliente-Servidor
O modelo cliente-servidor, em computação, é uma estrutura de aplicação distribuída que distribui as tarefas e cargas de trabalho entre os fornecedores de um recurso ou serviço, designados como servidores, e os requerentes dos serviços, designados como clientes.
Um servidor, também chamado de host, é um computador que hospeda um serviço ou aplicação que normalmente pode ser acessado via rede de computadores, como por exemplo a rede mundial, internet.
Um cliente é um computador, tablet, celular ou dispositivo que possui um programa ou aplicação que solicita dados de um servidor.

----------------

## Nest CLI
A maneira recomendada para criar um novo projeto e depois ainda conseguir criar recursos do projeto é usando o Command Line Interface (CLI) do Nest.
Para isso basta instalar de forma global usando o NPM.
$ npm i -g @nestjs/cli


## Criando um Projeto
Uma vez tendo o Nest CLI instalado, execute o comando new no diretório que deseja criar um novo projeto em Nest.
Esse processo criará toda a estrutura de pastas e arquivos necessários para executar uma aplicação convencional em NestJS.
$ nest new project-name Ou $ npx @nestjs/cli new project-name


## O que é API?
API (Application Programming Interface) significa Interface de Programação de Aplicação. 
Uma interface é a parte visível ou acessível para que uma aplicação possa ser usada ou acessada.
No caso uma API é criada de uma forma que outras aplicações possam ser programadas para usar a aplicação.

## REST
REST (Representational State Transfer) significa Transferência Representacional de Estado e é um estilo de arquitetura de software ou convenções de regras para a criação de uma API servida na Web pois depende dos recursos do protocolo HTTP como por exemplo URI e Método

## CRUD
CRUD (Create, Read, Update e Delete) significa criar uma aplicação que consiga criar, ler, alterar e excluir um registro que está gravado de forma persistente como em um banco de dados.

## CRUD em uma API REST
● Registro de Usuários
○ Criar
○ Ler
○ Alterar
○ Excluir


## CRUD em uma API REST
● Registro de Usuários
○ Criar
POST /users
○ Ler
GET /users
GET /users/:id
○ Alterar
PUT /users/:id
PATCH /users/:id
○ Excluir
DELETE /users/:id

## O que é DTO?
DTO (Data Transfer Object) significa Objeto de Transferência de Dados e é um padrão de projeto de software usado para transferir dados em ma aplicação de um ambiente para outro.
Normalmente obtemos um objeto de dados ao acessar um banco de dados ou no NestJS podemos obter um objeto de dados recebido de um request

## Validação
Ao usar o padrão de DTO facilitamos a validação de dados, uma vez que podemos verificar e até alterar os dados que estão em um objeto. Ou até mesmo lançar uma exceção caso o objeto não possua a estrutura ou os tipos de dados que nós estamos esperando.
No NestJS podemos validar os Objetos de Transferência de Dados usando uma biblioteca de decorators chamada class-validator e alterar os dados usando outra biblioteca chamada class-transformer.

## Instalação
Após instalar as dependências com o comando: npm i class-validator class-transformer
Devemos “ensinar” nossa aplicação a usar essas bibliotecas ao receber solicitações (Request). Essa configuração deve ser feita no bootstrap da nossa aplicação.


## Uso de DTO
Para usar o padrão de DTO é necessário criar a definição dos nossos objetos usando classes com os decoradores disponíveis de validação ou transformação.
É possível obter uma lista de todos decoradores na documentação da biblioteca class-validator no endereço: https://github.com/typestack/class-validator#validation-decorators

