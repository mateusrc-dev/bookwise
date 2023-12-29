# Ignite's ReactJs track project

## Project created in NextJs and Typescript

## The application is fullstack and its main features are:

- be able to authenticate with google or github - OAuth was used for this
- being able to create book reviews - for this, routes (api routes) were created within NextJs
- being able to track information about how many books were read, most read categories, etc., on the Profile page - Javascript was used to perform the calculations
- search for books on the Explorer page and follow the evaluation of other users - again possible due to the routes (api routes) that were created inside the frontend

## Some technologies used to create the application:

- NextJs - use of Next functions like getServerSideProps
- Typescript - to create the types of objects, variables, constants, functions
- stitches - to create components, styles, themes, animations

You can clone the project to your pc.
To run it use the command: npm run dev.
To open the database use the command: npx prisma studio.
You need to create a .env file and put the variable values according to .env.example - for example, put the database url (must be postgresql), and fill in the possible variations to perform social authentication with google and github

You can also access the link to deploy and test the application online: bookwise-livid.vercel.app (note there is a request limit because the free plan is being used to host the database - if there are many requests, error 500 )

## deploy: bookwise-livid.vercel.app
