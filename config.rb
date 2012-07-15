# Minify CSS
compass_config { |config| config.output_style = :compressed }

# Minify JavaScript
require 'uglifier'
set :js_compressor, Uglifier.new(:toplevel => true)

# Build options
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end