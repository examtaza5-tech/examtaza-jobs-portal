<?php if (!defined('ABSPATH')) exit; get_header(); ?>
<?php while (have_posts()): the_post(); ?>
<article class="single-article">
  <h1><?php the_title(); ?></h1>
  <div class="meta">
    <?php echo esc_html(get_the_date()); ?> · <?php the_author(); ?>
    <?php $cats = get_the_category(); if (!empty($cats)) {
      echo ' · ';
      $links = array(); foreach ($cats as $c) { $links[] = '<a href="'.esc_url(get_category_link($c->term_id)).'">'.esc_html($c->name).'</a>'; }
      echo implode(', ', $links);
    } ?>
  </div>
  <?php if (has_post_thumbnail()): ?>
    <div class="featured"><?php the_post_thumbnail('full', array('alt'=>esc_attr(get_the_title()))); ?></div>
  <?php endif; ?>
  <div class="content">
    <?php the_content(); ?>
  </div>
</article>
<?php if (comments_open() || get_comments_number()) { comments_template(); } ?>
<?php endwhile; ?>
<?php get_footer(); ?>
