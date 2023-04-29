Projeto da trilha ReactJs do Ignite em produção...

Projeto criado em NextJs e Typescript

A aplicação é fullstack e suas principais funcionalidades são:

- poder se autenticar com google ou github - para isso foi usado o OAuth
- poder criar avaliações de livros - para isso foi criado rotas (api routes) dentro do NextJs
- poder acompanhar informações acerca de quantos livros foram lidos, categorias mais lidas, etc, na página Profile - foi usado o Javascript para realizar os cálculos
- pesquisar por livros na página Explorer e acompanhar avaliação de outros usuários - novamente possível devido as rotas (api routes) que foram criadas dentro do frontend

algumas tecnologias usadas para criar a aplicação:

- NextJs - uso das funções do Next como o getServerSideProps
- Typescript - para criar as tipagens de objetos, variáveis, constantes, funções
- stitches - para criar componentes, estilos, temas, animações

Você pode clonar o projeto no seu pc 
Para executá-lo usar o comando: npm run dev
Para abrir o banco de dados usar o comando: npx prisma studio
