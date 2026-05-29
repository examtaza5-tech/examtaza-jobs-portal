<?php if (!defined('ABSPATH')) exit; ?>
</main>

<section class="disclaimer-section">
  <div class="container">
    <div class="disclaimer-card">
      <h2><?php esc_html_e('Disclaimer', 'examtaza'); ?></h2>
      <p>Disclaimer: Examtaza.in is an independent platform and is not associated with any official or government organization. All information provided on this website is for general informational purposes only and should not be considered as legal or official advice. We strongly advise visitors to verify all details through official government notifications and websites before making any decision. If you find any errors or inaccurate information, please contact us through our Contact Us page.</p>
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="container footer-main">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="logo" href="<?php echo esc_url(home_url('/')); ?>">
          <span class="logo-icon">E</span>
          <span class="logo-text"><span style="color:#fff">Exam</span><span class="g">taza</span><span class="tld">.in</span></span>
        </a>
        <p>ExamTaza.in is your trusted destination for latest government jobs, admit cards, results, answer keys, syllabus and admission updates from across India — published quickly and accurately.</p>
      </div>

      <div class="footer-col">
        <h3><?php esc_html_e('Quick Links', 'examtaza'); ?></h3>
        <?php if (has_nav_menu('footer_links')) {
          wp_nav_menu(array('theme_location'=>'footer_links','container'=>false,'menu_class'=>'','items_wrap'=>'<ul>%3$s</ul>','depth'=>1,'fallback_cb'=>false));
        } else { ?>
          <ul>
            <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
            <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a></li>
            <li><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Privacy Policy</a></li>
            <li><a href="<?php echo esc_url(home_url('/disclaimer/')); ?>">Disclaimer</a></li>
            <li><a href="<?php echo esc_url(home_url('/terms/')); ?>">Terms &amp; Conditions</a></li>
          </ul>
        <?php } ?>
      </div>

      <div class="footer-col">
        <h3><?php esc_html_e('Categories', 'examtaza'); ?></h3>
        <?php if (has_nav_menu('footer_categories')) {
          wp_nav_menu(array('theme_location'=>'footer_categories','container'=>false,'menu_class'=>'','items_wrap'=>'<ul>%3$s</ul>','depth'=>1,'fallback_cb'=>false));
        } else { ?>
          <ul>
            <li><a href="<?php echo esc_url(home_url('/category/latest-jobs/')); ?>">Latest Jobs</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/admit-card/')); ?>">Admit Card</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/results/')); ?>">Results</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/answer-key/')); ?>">Answer Key</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/syllabus/')); ?>">Syllabus</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/admission/')); ?>">Admission</a></li>
            <li><a href="<?php echo esc_url(home_url('/category/state-jobs/')); ?>">State Jobs</a></li>
          </ul>
        <?php } ?>
      </div>

      <div class="footer-col footer-join">
        <h3><?php esc_html_e('Join Our Community', 'examtaza'); ?></h3>
        <p>Get instant alerts for new jobs, results and admit cards directly on your phone.</p>
        <div class="buttons">
          <a class="btn btn-wa" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('whatsapp'); ?> Join WhatsApp</a>
          <a class="btn btn-tg" href="https://telegram.org" target="_blank" rel="noopener noreferrer"><?php echo examtaza_icon('send'); ?> Join Telegram</a>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="inner">© <?php echo esc_html(date('Y')); ?> Examtaza.in. All Rights Reserved.</div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
