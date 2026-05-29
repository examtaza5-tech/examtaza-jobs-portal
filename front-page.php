<?php
/**
 * Front page template — homepage.
 */
if (!defined('ABSPATH')) exit;
get_header();
$cats = examtaza_default_categories();
$states = examtaza_states();
?>

<section class="hero">
  <div class="container">
    <h1>Latest Govt Jobs, Admit Card, <span class="b">Results</span> &amp; <span class="g">Admission</span> Updates</h1>
    <p>Your one-stop destination for government job notifications, admit cards, results, answer keys, syllabus and admission updates across India.</p>
    <form class="hero-search" role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
      <input type="search" name="s" placeholder="Search for jobs, results, admit cards..." value="<?php echo esc_attr(get_search_query()); ?>" aria-label="Search" />
      <button type="submit">Search</button>
    </form>
    <div class="hero-ctas">
      <a class="btn btn-wa" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('whatsapp'); ?> Join WhatsApp</a>
      <a class="btn btn-tg" href="https://telegram.org" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('send'); ?> Join Telegram</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <h2>Latest Updates</h2>
      <p>Browse the most recent updates by category</p>
    </div>
    <div class="grid grid-cats">
      <?php foreach ($cats as $c): ?>
        <a class="cat-card" href="<?php echo esc_url(home_url('/category/' . $c['slug'] . '/')); ?>">
          <span class="cat-icon" style="background: <?php echo esc_attr($c['color']); ?>;"><?php echo examtaza_icon($c['icon']); ?></span>
          <h3><?php echo esc_html($c['label']); ?></h3>
          <p><?php echo esc_html($c['desc']); ?></p>
          <span class="more">View Updates <?php echo examtaza_icon('arrow'); ?></span>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="container">
    <div class="cta-banner">
      <h2>Never Miss an Update</h2>
      <p>Get instant updates for latest jobs, admit cards, results and admissions directly on your phone.</p>
      <div class="ctas">
        <a class="btn btn-light" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('whatsapp'); ?> Join WhatsApp Channel</a>
        <a class="btn btn-ghost" href="https://telegram.org" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('send'); ?> Join Telegram Channel</a>
      </div>
    </div>
  </div>
</section>

<section class="states-section">
  <div class="container">
    <div class="section-head">
      <span class="pill"><?php echo examtaza_icon('pin'); ?> Across India</span>
      <h2 style="margin-top:12px">State Wise Government Jobs</h2>
      <p>Find latest government job updates by Indian state and union territory.</p>
    </div>
    <div class="states-grid">
      <?php foreach ($states as $s): ?>
        <a class="state-chip" href="<?php echo esc_url(home_url('/state-jobs/' . examtaza_state_slug($s) . '/')); ?>">
          <?php echo examtaza_icon('pin'); ?>
          <span><?php echo esc_html($s); ?></span>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="faq-section">
  <div class="container">
    <div class="section-head">
      <h2>Frequently Asked Questions</h2>
      <p>Everything you need to know about ExamTaza.in</p>
    </div>
    <div class="faq-wrap">
      <?php
      $faqs = array(
        array('q'=>'What is ExamTaza.in?','a'=>'ExamTaza.in is an independent platform that publishes the latest government job notifications, admit cards, results, answer keys, syllabus and admission updates from across India in a fast and reader-friendly format.'),
        array('q'=>'How do I stay updated with latest jobs?','a'=>'You can join our WhatsApp and Telegram channels using the buttons on this page to receive instant alerts as soon as new notifications are published.'),
        array('q'=>'Are all notifications authentic?','a'=>'We collect updates from public sources and official notifications. However, we always recommend verifying details on the respective official government websites before applying or making decisions.'),
        array('q'=>'Is this service free?','a'=>'Yes, all information and updates on ExamTaza.in are completely free for all users.'),
      );
      foreach ($faqs as $f): ?>
        <div class="faq-item">
          <button class="faq-q" type="button">
            <span><?php echo esc_html($f['q']); ?></span>
            <span class="icon"><?php echo examtaza_icon('chevron'); ?></span>
          </button>
          <div class="faq-a"><?php echo esc_html($f['a']); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
