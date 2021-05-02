# Conceitos-TypeScript
TypeScript
# Conceitos de TypeScript
# Types annotations
- Tipando variaveis primitivas
- Aprofundando nas tipagnes de arrays,objetos e funções
- Usando propriedades readonly(não permite alterações)
- Aplicando conceito de variaveis null e undefined .Normalmente so vamos trabalhar com null e trata-los para não gerar erros
- Aplicando tipagem never. Nunca vai retornar nada,diferente de void
- Usando type unknown  a nosso favor
- Type Script trabalha com tipagem estrutural,algo que não ocorre normalmente em linguagens tipadas ou seja
se você declarar uma função com as variaveis ,so por inferencia ele vai interpretar o tipo.

### Tuples
- Caso desejo que algum array ou objeto  não ocorra a mudança de tipo,apenas valores e bastante util.
- Para tuples ficar tipamente tipada reandoly e uma otima propriedade 

### Enum
- Entendo o funcionamento do enum para TypeScript e apliquei alguns conceitos.
- Trabalha com ideia de objetos , usando conceito diferente do tradicional o java script

### Tipos literais
- Entendo o conceito do tipos literal em Typescript
- Aplicando tecnicas de inserção,para determinar um tipo especifico a uma variavel

### Union types
- Aplicando conceitos de union types é fazer verificaçã da maneira correta

### Tipos Alias
- Conceito do tipo alias,muito importante para manutenção e enxergar nosso codigo
- Crio minhas proprias variaves

### Intersection types
- Principio parecido ao Union types,porém objetivo e similar ao and no controle de fluxo.

# POO
- Primeiras classes em Type Script
- Construindo classes com modificadores de acesso é entendo seus principios public,private,protecded.
- Public:acesso em qualquer lugar 
- Private:acesso so dentro da classe que foi criada
- Proecded:acesso dentro da classe que foi criada e nas sub classes
- Aplicando conceitos de abstração,encapsulamento
- Principio de abstração. Para o funcionamento do meu progama asbtraio de uma classe apenas oque é util.
- Exemplo classico de abstração: Quando ser humano doa sangue,enfermeira abstraia apenas oque é util é não todos os orgãos.
- Prinicipio do encapsulamento. Eu protejo os dados sensiveis
- Exemplo classico é o controle remoto,usuario não tem acesso aos componentes internos.
- Usando getter e setter na classe Type Script
- Atributos e metodos estaticos.
- Atributos e metodos estaticos não podem ser referenciado pela palavra new so pelo proprio objeto

### Herança
- Trabalhando com conceitos de herança,encapsulamento,abstração
- Apliquei herança herdada de classe
- Aplicando na pratica princpio de polimorfismo
- Polimorfismo em  codigo é usar classes do mesmo tipo aplicando metodos de formas diferentes. 
- Exemplo de polimorfismo. class Student extends People. class Client extendes People. Ambos são classses do mesmo tipo,porque extende de People
- Utilizando super class,para acessar a classe principal em uma sub classe


### Factory Method e Singleton
- Com base no projeto padrão de projeto do livro Gang of Four Desing Patterns. Utilizei principio de Factory Method e Singleton
- Singleton seria garantir que não ocorra instancia de um objeto mais de uma vez
- Factory Method e quando uma classe cria um novo objeto,assim a responsabilidade da instancia não e mais da classe pattern.

### Class abstract
- Classes abastratas não podem ser instanciadas pelo new, porém podem ser estendidas,suas classes ou metodos passam a ser sub classe. Se ela possuir
classe ou metodo abstrato,não precisa passar valores.
- Normalmente elas são uteis quando desejo apenas criar uma classe para ser extendida ou seja a classse patern ou principal sera apenas modelo. 
- Usando uma pequena aplicação de personagens, ataque e defesa, para exemplificar classe abstrata

### Associações
- Aplicando principio de assoiação entre as classes. 
- Associação fraca, são assoaciações entre classes para usar determinadas coisas,mas sem depender necessariamente uma da outra.
- Aplicou inversão de dependencia,normalmente as classes apontam para classes concretas que são inferidas com new. Porém se alterar algo nas classes podem gerar conflito,então com inversão dependencia eu aponto minha classe para uma classe abstrata ou contrado.

### Agregação
- Aplicação de agregação de classes
- Agregação são classes que funcionam isoladamente,porém para funcionar corretamente precisam estar associadas
- Exemplo é o  carro e pneu,ambos podem viver isoladamente,porém para carro funcionar precisa de pneu.  
