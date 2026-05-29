<?php if (!defined('ABSPATH')) exit; get_header(); ?>
<?php while (have_posts()): the_post(); ?>
<article class="page-article">
  <h1><?php the_title(); ?></h1>
  <?php if (has_post_thumbnail()): ?>
    <div class="featured" style="border-radius:12px;overflow:hidden;margin:0 0 20px"><?php the_post_thumbnail('full'); ?></div>
  <?php endif; ?>
  <div class="content"><?php the_content(); ?></div>
</article>
<?php if (comments_open() || get_comments_number()) { comments_template(); } ?>
<?php endwhile; ?>
<?php get_footer(); ?>
