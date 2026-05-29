<?php if (!defined('ABSPATH')) exit; get_header(); ?>
<div class="content-area">
  <div class="container">
    <h1 class="page-title"><?php the_archive_title(); ?></h1>
    <?php if (have_posts()): ?>
      <div class="post-list">
        <?php while (have_posts()): the_post(); ?>
          <article class="post-card">
            <?php if (has_post_thumbnail()): ?>
              <a class="thumb" href="<?php the_permalink(); ?>"><?php the_post_thumbnail('large', array('loading'=>'lazy','alt'=>esc_attr(get_the_title()))); ?></a>
            <?php endif; ?>
            <div class="body">
              <div class="meta"><?php echo esc_html(get_the_date()); ?></div>
              <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
              <p class="excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
              <a class="read-more" href="<?php the_permalink(); ?>">Read more →</a>
            </div>
          </article>
        <?php endwhile; ?>
      </div>
      <div class="pagination-wrap"><?php echo paginate_links(); ?></div>
    <?php else: ?>
      <div class="no-results"><p>No posts found in this archive.</p></div>
    <?php endif; ?>
  </div>
</div>
<?php get_footer(); ?>
