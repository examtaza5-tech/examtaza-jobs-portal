<?php if (!defined('ABSPATH')) exit; get_header(); ?>
<div class="container">
  <div class="error-404">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <a href="<?php echo esc_url(home_url('/')); ?>">Go home</a>
  </div>
</div>
<?php get_footer(); ?>
