<?php

/******************************

- Включение дополнительных опций темы
- Путь к каталогу assets
- Путь к каталогу node_modules
- Подключение Bootstrap
- Подключение стилей и скриптов
    * Подключение Swiper
- Скрытие админки
- Отображения шорткода в виджете
- Подключение кастомных виджетов
- Шорткоды

 ******************************/

//Включение дополнительных опций темы
add_action('after_setup_theme', 'dz_setup');

function dz_setup()
{
    register_nav_menu('menu-header', 'Header'); //Меню - Header
    register_nav_menu('menu-footer', 'Footer'); //Меню - Footer
    add_theme_support('custom-logo'); //Вывод логотипа
    add_theme_support('title-tag'); //Вывод title
    add_theme_support('post-thumbnails'); //Вывод миниатюр
}

// Путь к каталогу assets
function _dz_assets_path($path)
{
    return get_template_directory_uri() . '/assets/' . $path;
}

// Путь к каталогу node_modules
function _dz_node_modules_path($path)
{
    return get_template_directory_uri() . '/node_modules/' . $path;
}

//Подключение Bootstrap
function load_bootstrap()
{
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.min.js');
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap-icons', get_template_directory_uri() . '/node_modules/bootstrap-icons/font/bootstrap-icons.min.css');
}
add_action('wp_enqueue_scripts', 'load_bootstrap');

// Подключение стилей и скриптов
add_action('wp_enqueue_scripts', 'dz_scripts');

function dz_scripts()
{
    //Подключение Swiper
    wp_enqueue_style(
        'swiper_css',
        _dz_node_modules_path('swiper/swiper-bundle.min.css'),
        [],
        '1,0',
        'all'
    );

    //Подключение main.css
    wp_enqueue_style(
        'dz_style',
        _dz_assets_path('css/main.css'),
        [],
        '1,0',
        'all'
    );
    //Подключение Swiper
    wp_enqueue_script(
        'swiper_js',
        _dz_node_modules_path('swiper/swiper-bundle.min.js'),
        [],
        '1.0',
        true
    );

    //Подключение main.js
    wp_enqueue_script(
        'dz_script',
        _dz_assets_path('js/main.js'),
        [],
        '1.0',
        true
    );
}

//Скрытие админки
add_filter('show_admin_bar', '__return_true');

//Отображения шорткода в виджете
add_filter('dz_widget_text', 'do_shortcode');

//Подключение кастомных виджетов
$widget = [
    'widget-contacts.php',
];

foreach ($widget as $w) {
   require_once(__DIR__ . '/inc/' . $w);
}

add_action('widgets_init', 'dz_register');
function dz_register()
{
    register_sidebar([
        'name' => 'Контакты',
        'id' => 'dz-header',
        'before_widget' => null,
        'after_widget' => null
    ]);
    
    register_widget('dz_widget_contacts');
}

//Шорткоды
add_filter('show_admin_bar', '__return_true');


function dz_paste_link($attr)
{
    $params = shortcode_atts([
        'link' => '',
        'text' => '',
        'type' => 'link'
    ], $attr);
    $params['text'] = $params['text'] ? $params['text'] : $params['link'];
    if ($params['link']) {
        $protocol = '';
        switch ($params['type']) {
            case 'email':
                $protocol = 'mailto:';
                break;
            case 'phone':
                $protocol = 'tel:';
                $params['link'] = preg_replace('/[^+0-9]/', '', $params['link']);
                break;
            default:
                $protocol = '';
                break;
        }
        $link = $protocol . $params['link'];
        $text = $params['text'];
        return "<a href=\"${link}\">${text}</a>";
    } else {
        return '';
    }
}