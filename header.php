<?php if (!defined('ABSPATH')) exit; ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php if (function_exists('wp_body_open')) wp_body_open(); ?>

<header class="site-header">
  <div class="container">
    <div class="header-row">
      <a class="logo" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php bloginfo('name'); ?>">
        <span class="logo-icon">E</span>
        <span class="logo-text"><span class="b">Exam</span><span class="g">taza</span><span class="tld">.in</span></span>
      </a>

      <form class="header-search" role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <input type="search" name="s" placeholder="<?php esc_attr_e('Search jobs, results, admit cards...', 'examtaza'); ?>" value="<?php echo esc_attr(get_search_query()); ?>" aria-label="<?php esc_attr_e('Search', 'examtaza'); ?>" />
      </form>

      <button type="button" class="menu-toggle" aria-label="<?php esc_attr_e('Toggle menu', 'examtaza'); ?>">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>

    <nav class="primary-nav" aria-label="Primary">
      <?php
      if (has_nav_menu('primary')) {
          wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => '',
            'items_wrap' => '%3$s',
            'depth' => 1,
            'fallback_cb' => false,
          ));
      } else { ?>
        <a href="<?php echo esc_url(home_url('/')); ?>">Home</a>
        <a href="<?php echo esc_url(home_url('/category/latest-jobs/')); ?>">Latest Jobs</a>
        <a href="<?php echo esc_url(home_url('/category/admit-card/')); ?>">Admit Card</a>
        <a href="<?php echo esc_url(home_url('/category/results/')); ?>">Results</a>
        <a href="<?php echo esc_url(home_url('/category/answer-key/')); ?>">Answer Key</a>
        <a href="<?php echo esc_url(home_url('/category/syllabus/')); ?>">Syllabus</a>
        <a href="<?php echo esc_url(home_url('/category/admission/')); ?>">Admission</a>
        <a href="<?php echo esc_url(home_url('/category/state-jobs/')); ?>">State Jobs</a>
      <?php } ?>
    </nav>

    <div class="mobile-nav" id="mobileNav">
      <?php
      if (has_nav_menu('primary')) {
          wp_nav_menu(array('theme_location'=>'primary','container'=>false,'items_wrap'=>'%3$s','depth'=>1,'fallback_cb'=>false));
      } else { ?>
        <a href="<?php echo esc_url(home_url('/')); ?>">Home</a>
        <a href="<?php echo esc_url(home_url('/category/latest-jobs/')); ?>">Latest Jobs</a>
        <a href="<?php echo esc_url(home_url('/category/admit-card/')); ?>">Admit Card</a>
        <a href="<?php echo esc_url(home_url('/category/results/')); ?>">Results</a>
        <a href="<?php echo esc_url(home_url('/category/answer-key/')); ?>">Answer Key</a>
        <a href="<?php echo esc_url(home_url('/category/syllabus/')); ?>">Syllabus</a>
        <a href="<?php echo esc_url(home_url('/category/admission/')); ?>">Admission</a>
        <a href="<?php echo esc_url(home_url('/category/state-jobs/')); ?>">State Jobs</a>
      <?php } ?>
    </div>
  </div>
</header>

<main id="site-content">
