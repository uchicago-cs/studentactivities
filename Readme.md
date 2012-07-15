Website for the Computer Science Student Activities Committee

## Building

First, fork this repository and install the bundled gems:

    git clone https://github.com/sczizzo/studentactivities && cd studentactivities && bundle

This should install [Middleman](https://github.com/middleman/middleman), a static site generator we use to build and develop the website. Make your changes to the `source` directory, and use Middleman&#8217;s built-in server to watch those changes and automatically regenerate the site:

    middleman server -p 3000 -e development

Then point your browser to [`http://localhost:3000/`](http://localhost:3000/). As a bonus, you can use [Foreman](https://github.com/ddollar/foreman) to do execute the server with `foreman start`. When you&#8217;re ready to deploy, use Middleman to build the compressed, production version:

    middleman build && ls build