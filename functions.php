<?php
if (!defined('ABSPATH')) exit;

if (!function_exists('examtaza_setup')) {
    function examtaza_setup() {
        load_theme_textdomain('examtaza', get_template_directory() . '/languages');
        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('html5', array('search-form','comment-form','comment-list','gallery','caption','style','script'));
        add_theme_support('responsive-embeds');
        add_theme_support('custom-logo', array('height'=>40,'width'=>40,'flex-height'=>true,'flex-width'=>true));
        register_nav_menus(array(
            'primary'        => __('Primary Menu', 'examtaza'),
            'footer_links'   => __('Footer Quick Links', 'examtaza'),
            'footer_categories' => __('Footer Categories', 'examtaza'),
        ));
    }
}
add_action('after_setup_theme', 'examtaza_setup');

function examtaza_assets() {
    $ver = wp_get_theme()->get('Version');
    wp_enqueue_style('examtaza-style', get_stylesheet_uri(), array(), $ver);
    wp_enqueue_style('examtaza-main', get_template_directory_uri() . '/assets/css/style.css', array('examtaza-style'), $ver);
    wp_enqueue_script('examtaza-main', get_template_directory_uri() . '/assets/js/main.js', array(), $ver, true);
}
add_action('wp_enqueue_scripts', 'examtaza_assets');

function examtaza_content_width() { $GLOBALS['content_width'] = 1200; }
add_action('after_setup_theme', 'examtaza_content_width', 0);

// Indian states / UTs list used by front-page
function examtaza_states() {
    return array(
        'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
        'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
        'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
        'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
        'Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu',
        'Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry',
    );
}

// Default categories shown on home + footer if no menu is set
function examtaza_default_categories() {
    return array(
        array('label'=>'Latest Jobs','slug'=>'latest-jobs','icon'=>'briefcase','color'=>'var(--brand-blue)','desc'=>'Newest government job notifications across India.'),
        array('label'=>'Admit Card','slug'=>'admit-card','icon'=>'file','color'=>'var(--brand-green)','desc'=>'Download admit cards for upcoming exams.'),
        array('label'=>'Results','slug'=>'results','icon'=>'trophy','color'=>'var(--brand-blue)','desc'=>'Latest exam results and merit lists.'),
        array('label'=>'Answer Key','slug'=>'answer-key','icon'=>'check','color'=>'var(--brand-green)','desc'=>'Official answer keys for recent exams.'),
        array('label'=>'Syllabus','slug'=>'syllabus','icon'=>'book','color'=>'var(--brand-blue)','desc'=>'Detailed exam syllabus and patterns.'),
        array('label'=>'Admission','slug'=>'admission','icon'=>'cap','color'=>'var(--brand-green)','desc'=>'University and college admission updates.'),
    );
}

// Tiny inline-SVG icon helper for category cards
function examtaza_icon($name) {
    $stroke = 'stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"';
    $svgs = array(
      'briefcase'=>'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
      'file'=>'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
      'trophy'=>'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
      'check'=>'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 12 2 2 4-4"/>',
      'book'=>'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
      'cap'=>'<path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
      'pin'=>'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
      'arrow'=>'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      'whatsapp'=>'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
      'send'=>'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
      'chevron'=>'<polyline points="6 9 12 15 18 9"/>',
    );
    $path = isset($svgs[$name]) ? $svgs[$name] : '';
    return '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" '.$stroke.'>'.$path.'</svg>';
}

function examtaza_state_slug($s) {
    return sanitize_title($s);
}

// Excerpt length
function examtaza_excerpt_length($len){ return 22; }
add_filter('excerpt_length','examtaza_excerpt_length',999);

function examtaza_excerpt_more($more){ return '…'; }
add_filter('excerpt_more','examtaza_excerpt_more');
