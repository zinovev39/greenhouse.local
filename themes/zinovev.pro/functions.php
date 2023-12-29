<?php
function register_my_menu()
{
    register_nav_menu('header-menu', __('Header Menu'));
}
add_action('init', 'register_my_menu');

// Подключение Bootstrap
function load_bootstrap()
{
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.min.js');
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap-icons', get_template_directory_uri() . '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css');
}
add_action('wp_enqueue_scripts', 'load_bootstrap');


// Подключение файлов стилей
add_action('wp_enqueue_scripts', 'enqueue_custom_styles');
function enqueue_custom_styles()
{
    wp_enqueue_style('swiper', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css');
    wp_enqueue_style('main-styles', get_stylesheet_directory_uri() . '/assets/css/main.css');
}

function my_theme_scripts()
{
    wp_enqueue_script('swiper', get_template_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', false, '1.0', true);
    wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/js/main.js', ('swiper'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'my_theme_scripts');
