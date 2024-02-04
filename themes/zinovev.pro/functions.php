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
- Регистрация произвольного (кастомного) типа записи
- Регистрация таксономий
- Хук для добавление полей в админку (прим. добавление лайков на страницу)
- Хук сохранения введеных данных в новые поля админки

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

//Регистрация произвольного (кастомного) типа записи
add_action('init', 'dz_register_types');

function dz_register_types()
{
    register_post_type('services', [
        'labels' => [
            'name'               => 'Услуги', // основное название для типа записи
            'singular_name'      => 'Услуги', // название для одной записи этого типа
            'add_new'            => 'Добавить новую услугу', // для добавления новой записи
            'add_new_item'       => 'Добавить новую услугу', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактировать услугу', // для редактирования типа записи
            'new_item'           => 'Новая услуга', // текст новой записи
            'view_item'          => 'Смотреть услуги', // для просмотра записи этого типа.
            'search_items'       => 'Искать услуги', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
            'parent_item_colon'  => '', // для родителей (у древовидных типов)
            'menu_name'          => 'Услуги', // название меню
        ],
        'public'              => true,
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-groups',
        'hierarchical'        => false,
        'supports'            => ['title'],
        'has_archive' => true
    ]);

    register_post_type('trainers', [
        'labels' => [
            'name'               => 'Тренеры', // основное название для типа записи
            'singular_name'      => 'Тренеры', // название для одной записи этого типа
            'add_new'            => 'Добавить нового тренера', // для добавления новой записи
            'add_new_item'       => 'Добавить нового тренера', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактировать тренера', // для редактирования типа записи
            'new_item'           => 'Новая тренер', // текст новой записи
            'view_item'          => 'Смотреть тренера', // для просмотра записи этого типа.
            'search_items'       => 'Искать тренера', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
            'parent_item_colon'  => '', // для родителей (у древовидных типов)
            'menu_name'          => 'Тренеры', // название меню
        ],
        'public'              => true,
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-universal-access',
        'hierarchical'        => false,
        'supports'            => ['title'],
        'has_archive' => true
    ]);

    register_post_type('schedule', [
        'labels' => [
            'name'               => 'Занятие', // основное название для типа записи
            'singular_name'      => 'Занятие', // название для одной записи этого типа
            'add_new'            => 'Добавить новое занятие', // для добавления новой записи
            'add_new_item'       => 'Добавить новое занятие', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактировать занятие', // для редактирования типа записи
            'new_item'           => 'Новое занятие', // текст новой записи
            'view_item'          => 'Смотреть занятие', // для просмотра записи этого типа.
            'search_items'       => 'Искать занятие', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
            'parent_item_colon'  => '', // для родителей (у древовидных типов)
            'menu_name'          => 'Занятия', // название меню
        ],
        'public'              => true,
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-universal-access-alt',
        'hierarchical'        => false,
        'supports'            => ['title'],
        'has_archive' => true
    ]);

    //Регистрация таксономий
    register_taxonomy('schedule_days', ['schedule'], [
        'labels'                => [
            'name'              => 'Дни недели',
            'singular_name'     => 'День',
            'search_items'      => 'Найти день недели',
            'all_items'         => 'Все дни недели',
            'view_item '        => 'Посмотреть дни недели',
            'edit_item'         => 'Редактировать дни недели',
            'update_item'       => 'Обновить',
            'add_new_item'      => 'Добавить день недели',
            'new_item_name'     => 'Добавить день недели',
            'menu_name'         => 'Все дни недели',
        ],
        'description'           => '',
        'public'                => true,
        'hierarchical'          => true
    ]);

    register_taxonomy('places', ['schedule'], [
        'labels'                => [
            'name'              => 'Залы',
            'singular_name'     => 'Залы',
            'search_items'      => 'Найти залы',
            'all_items'         => 'Все залы',
            'view_item '        => 'Посмотреть залы',
            'edit_item'         => 'Редактировать залы',
            'update_item'       => 'Обновить',
            'add_new_item'      => 'Добавить залы',
            'new_item_name'     => 'Добавить залы',
            'menu_name'         => 'Все залы',
        ],
        'description'           => '',
        'public'                => true,
        'hierarchical'          => true
    ]);

    register_post_type('prices', [
        'labels' => [
            'name'               => 'Прайсы', // основное название для типа записи
            'singular_name'      => 'Прайсы', // название для одной записи этого типа
            'add_new'            => 'Добавить новый прайс', // для добавления новой записи
            'add_new_item'       => 'Добавить новый прайс', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактировать прайсы', // для редактирования типа записи
            'new_item'           => 'Новое прайсы', // текст новой записи
            'view_item'          => 'Смотреть прайсы', // для просмотра записи этого типа.
            'search_items'       => 'Искать прайсы', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
            'parent_item_colon'  => '', // для родителей (у древовидных типов)
            'menu_name'          => 'Прайсы', // название меню
        ],
        'public'              => true,
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-text-page',
        'hierarchical'        => false,
        'supports'            => ['title'],
        'has_archive' => true
    ]);

    register_post_type('cards', [
        'labels' => [
            'name'               => 'Карты', // основное название для типа записи
            'singular_name'      => 'Карты', // название для одной записи этого типа
            'add_new'            => 'Добавить новую карту', // для добавления новой записи
            'add_new_item'       => 'Добавить новую карту', // заголовка у вновь создаваемой записи в админ-панели.
            'edit_item'          => 'Редактировать карты', // для редактирования типа записи
            'new_item'           => 'Новоя карта', // текст новой записи
            'view_item'          => 'Смотреть карты', // для просмотра записи этого типа.
            'search_items'       => 'Искать картыы', // для поиска по этим типам записи
            'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
            'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
            'parent_item_colon'  => '', // для родителей (у древовидных типов)
            'menu_name'          => 'Клубные карты', // название меню
        ],
        'public'              => true,
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-tickets-alt',
        'hierarchical'        => false,
        'supports'            => ['title'],
        'has_archive' => false
    ]);
}

//Хук для добавление полей в админку (прим. добавление лайков на страницу)
add_action('add_meta_boxes', 'dz_meta_boxes');

function dz_meta_boxes()
{
    add_meta_box(
        'dz-like',
        'Количество лайков: ',
        'dz_meta_like_cb',
        'post'
    );
}

function dz_meta_like_cb($post_obj)
{
    $likes = get_post_meta($post_obj->ID, 'dz-like', true);
    $likes = $likes ? $likes : 0;
    echo "<input type=\"text\" name=\"dz-like\" value=\"${likes}\">";
    //echo '<p>' . $likes . '</p>';
}

//Хук сохранения введеных данных в новые поля админки
add_action('save_post', 'dz_save_like_meta');

function dz_save_like_meta($post_id){
    if(isset($_POST['dz-like'])){
        update_post_meta($post_id,'dz-like', $_POST['dz-like']);
    }
}