# Conceitos-TypeScript
TypeScript
# Conceitos de TypeScript

## Types annotations
- Tipando variaveis primitivas
- Aprofundando nas tipagnes de arrays,objetos e funções
- Usando propriedades readonly(não permite alterações)
- Aplicando conceito de variaveis null e undefined .Normalmente so vamos trabalhar com null e trata-los para não gerar erros
- Aplicando tipagem never. Nunca vai retornar nada,diferente de void
- Usando type unknown  a nosso favor
- Type Script trabalha com tipagem estrutural,algo que não ocorre normalmente em linguagens tipadas ou seja
se você declarar uma função com as variaveis ,so por inferencia ele vai interpretar o tipo.
- Aplicando espelhamento entre tipos alias
- Modificador de acesso: Public--pode ser acessado por todos
- Modificador de acesso: Private-- apenas na classe que foi criada
- Modificaor de acesso: Proteced-- posso acesar na classe que foi criada e subs classes
- Usando this como retorno
- Usar this como retorno e interessante,porque comportamento cada metodo é instancia da minha classe,assim posso
gerar varias chamadas em cadeias. Exemplo: objeto.objeto.
- Overload de funções. Minha função se comporta de maneira diferente de acordo com os parametros enviados

## Types Guards
- Procedimento usado para refinar os codigos é garantir menos possibilidades de erro.
- Usei types alias,fucntion é switch

## Tuples
- Tuplas são parecidos com array, mas permitem tipos de dados diferentes.


## Enum
- Entendo o funcionamento do enum para TypeScript e apliquei alguns conceitos.
- Trabalha com ideia de objetos , usando conceito diferente do tradicional o java script

## Tipos literais
- Entendo o conceito do tipos literal em Typescript
- Aplicando tecnicas de inserção,para determinar um tipo especifico a uma variavel

## Union types
- Aplicando conceitos de union types é fazer verificaçã da maneira correta

## Tipos Alias
- Conceito do tipo alias,muito importante para manutenção e enxergar nosso codigo
- Crio minhas proprias variaves

## Intersection types
- Principio parecido ao Union types,porém objetivo e similar ao and no controle de fluxo.

## Keyof and TypeOf
- Com typeof eu posso pegar o tipo de um objeto ou  valor que foi inferido,cofigurado
- É a partir de typeof,com keyof posso pegar as chaves desse objeto 
- Pequena aplicação para entender keyof e typeof, interessante com esse metodo meu codigo fica dinamico,tudo alterado no objeto reflete 
no keyof e typeof 

# POO
- Primeiras classes em Type Script
- Construindo classes com modificadores de acesso é entendo seus principios public,private,protecded.
- Public:acesso em qualquer lugar 
- Private:acesso so dentro da classe que foi criada
- Proetecd:acesso dentro da classe que foi criada e nas subs classes
- Aplicando conceitos de abstração,encapsulamento
- Principio de abstração. Para o funcionamento do meu software asbtraio de uma classe apenas oque é util.
- Exemplo classico de abstração: Quando ser humano doa sangue,enfermeira abstraia apenas oque é util é não todos os orgãos.
- Prinicipio do encapsulamento. Eu protejo os dados sensiveis
- Exemplo classico é o controle remoto,usuario não tem acesso aos componentes internos.
- Usando getter e setter na classe Type Script
- Atributos e metodos estaticos.
- Atributos e metodos estaticos não podem ser referenciado pela palavra new so pelo proprio objeto

## Herança
- Trabalhando com conceitos de herança,encapsulamento,abstração
- Apliquei herança herdada de classe
- Aplicando na pratica princpio de polimorfismo
- Polimorfismo em  codigo é usar classes do mesmo tipo aplicando metodos de formas diferentes. 
- Exemplo de polimorfismo. class Student extends People. class Client extendes People. Ambos são classses do mesmo tipo,porque extende de People
- Utilizando super class,para acessar a classe principal em uma sub classe


## Factory Method e Singleton
- Com base no projeto padrão de projeto do livro Gang of Four Desing Patterns. Utilizei principio de Factory Method e Singleton
- Singleton seria garantir que não ocorra instancia de um objeto mais de uma vez
- Factory Method e quando uma classe cria um novo objeto,assim a responsabilidade da instancia não e mais da classe pattern.

## Class abstract
- Classes abastratas não podem ser instanciadas pelo new, porém podem ser estendidas,suas classes ou metodos passam a ser sub classe. Se ela possuir
classe ou metodo abstrato,não precisa passar valores.
- Normalmente elas são uteis quando desejo apenas criar uma classe para ser extendida ou seja a classse patern ou principal sera apenas modelo. 
- Usando uma pequena aplicação de personagens, ataque e defesa, para exemplificar classe abstrata

## Type alias for Class
- Classe abstrata e tipo em classes tem bastante semelhanças,ambos são identificos funcionam semelhante ao contrato,as classes que extender de abstrata precisa aplicar tudo que esta exigido nas base é isto também acontece em type alias classes 
- Em classes abstratas posso alterar os modificadores de acesso tanto na classe abastrtata quanto nas que extende delas
,mesmo que não seja boa pratica,ambos possuirem tipos diferentes. Em type classes isto não e possivel,apenas e possivel declarar tipo nas classes
que extender, inclusive utitliza a palavra resevada implements.
- Com type alias class é possivel implementar "n" contratos,classe abastrata não
- Modificadores de acesso das classes que estão implementado type só podem ser public, não sendo possivel outro modificador

## Type interface
- Interfaces e type alias trabalham com mesmo conceitos.
- Ambos são contratos para outras classes,porem em interface esta diretamente ligado a modelagem de objetos,ja tipos alias e generalista
- Diferençãs são minimas, exemplo  nas uniões conforme abaixo.
- type "tipo" = "tipos" & "tipos" 
- inteface "tipo" extendes "outros tipo", "outro tipo"{}
- Outro difernça e na declaração conforme exemplo abaixo
-  type "tipo" ={}  
-  interface "tipo" {}
-  Apliquei pequeno exemplo declaration merge em interface

# POO ligações
- Realizando ligações entres as classes
- Assoiação é a ligação mais fraca
- Agregação é forte
- Composição é muito forte

## Associação
- Aplicando principio de assoiação entre as classes. 
- Associação fraca, são assoaciações entre classes para usar determinadas coisas,mas sem depender necessariamente uma da outra.
- Aplicou inversão de dependencia,normalmente as classes de associação apontam para classes concretas que são inferidas com new. Porém se alterar algo nas classes podem gerar conflito,então com inversão dependencia eu aponto minha classe para uma classe abstrata ou contrado.

## Agregação
- Aplicação de agregação de classes
- Agregação são classes que funcionam isoladamente,porém para funcionar corretamente precisam estar associadas.
- Exemplo é o  carro e pneu,ambos podem viver isoladamente,porém para carro funcionar precisa de pneu.  

## Composition
- Aplicação de composição entre classes
- Composição é uma ligação extremamente forte,uma classe esta diretamente dependendo de outra
- Exemplo de composição: ser humano não vive sem coração. Carro sem motor.

# Types Generic
- Types generic são ideias quando não sabe o tipo da variavel,exemplo banco de dados,api...
- Aplicando meu filter personalizado com generic,para retornar valores filtrados em um array
- Promise e arrays são tipos genericos do java script
- Realizando exemplo de types e inerface generic
- Constraints--> Se desejo restringir  função é o tipo Generic, uilizamos o principio constraints,com a palavra reservada extends, é caso queria 
tambem chave do objeto , extends keyof
- Generic nas classes,pode ocorrer nas classes ou metodos criados não aparecer a inferencia do tipo,então cabe a você inferir.
- Criei uma pequena classe simulando os metodos  push(),pop() e length, em um array, para demostrar Generic Type
- Gerenic intersection, mesmo principio de type intersection,porém com genericos. Recorda que intersection é união, se houver dois objetos com mesa 
variavel na chave,uma vai sobescrever a outra
- Predicados, seria types anotation avançado,quando uma função retorna true,se você inferir que o retorno da função vai ser o argumento com um tipo declarado, este argumento passa a possuir o tipo. Exemplo  function(value) value is number// se retornar true argumento value sera numero
- Existem genericos padrões do type script são conhecidos como utillity types,apliquei alguns deles




