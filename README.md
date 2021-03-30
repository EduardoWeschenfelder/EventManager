## Para começar

**Instalando as dependencias**

Apos clonar o repositório execute umas das opçoes abaixo, a que preferir, eu sugiro o yarn

```
npm install
# or
yarn
```

**Resumo**

Um componente reutizavel para gerenciar eventos onClick.
Esse compoente pode controlar requições em um determinado periodo de tempo, evitando o acumulo de requisições

**Funcionalidades**

Ao clicar em um botão a primeira requisão será executa sem deley, (deley configuravel para cada botão), durante esse delay as requisições não devem ser feitas.
Após o delay retorna a condição inicial
