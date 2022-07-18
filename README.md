# Friday Frontend 2022

## Getting Started

To get site running locally clone or download website zip

Then run npm install to install dependencies

In order for the data to fill the website will need to be connected to a wordpress install of the friday 2022 backend, to do this we need to add our enviornment variables the env.local file.

There is a sample env.local.sample file that shows what variables are needed.

### Envirornment Variables

- WORDPRESS_GRAPHQL_ENDPOINT= wordpress graphQl connection url
- NEXT_PUBLIC_WORDPRESS_URL= wordpress backend url
- NEXT_PUBLIC_LOCAL_URL= The frontend url
- WORDPRESS_USERNAME=username
- WORDPRESS_PASSWORD=password
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY= Api key for google maps
- NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY= The site key for google recaptcha
- GOOGLE_RECAPTCHA_SECRET_KEY= The secret key for google recaptcha
- ENVIORNMENT="production"

Once they are all set up we can run our site with

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Types

The website is build with typescript and types are generated use codegen. The codegen.yml file will need to be updated to include the new backend url.

To then generate you types run

```bash
npm run generate
```
