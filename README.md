# NextJS + WordPress + useSWR

Demo of Next.JS Automatic Static Optimization With WordPress backend.

Started from the [example code for this post](https://dev.to/shelob9/using-docker-for-local-development-of-headless-wordpress-apps-with-nextjs-1m85) about NextJS + Docker.

## Development

- Start [docker-based local development site](https://developer.wordpress.org/block-editor/packages/packages-env/) with these plugins pre-installed:
   - [wp-graphql](https://www.wpgraphql.com/)
   - [Headless Mode](https://wordpress.org/plugins/headless-mode)
   - `yarn wordpress`
   - [http://localhost:4113/](http://localhost:4113/)
 - Create .env
  - `WORDPRESS_API_URL=http://localhost:4113/graphql`
 - Install client
   - `yarn`
 - Start client
   - `yarn dev`


Beacuse the Headless Mode plugin is being used, all unauthenticated requests to the front-end of the WordPress site will be redirected to the client. The redirect URL is already configured for local dev. You will need to set one constant in production to match your deployed URL for the client, as [documented here](https://wordpress.org/plugins/headless-mode/#%0Ahow%20do%20i%20set%20it%20up%3F%0A).

## PHP Code

The directory "wordpress-plugin" is a plugin that will be activated. You can put PHP code there. This is a good place to register custom post types, mutations, etc.

## WordPress Site

- Start server
  - `yarn wordpress`
- Create 25 sample posts
  - `yarn seed`
 - Run wp-cli command
  - `yarn wp`
  - Example: `yarp wp user list`
