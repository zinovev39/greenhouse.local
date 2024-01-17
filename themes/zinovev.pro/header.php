<!DOCTYPE html>
<html <?php language_attributes(); ?>> <!-- Динамический вывод атрибута lang (если сайт будет мультиязычным) -->

<head>
    <meta charset="<?php bloginfo('charset'); ?>"> <!-- Передача вызова кодировки WP -->
    <meta http-equiv='X-UA-Compatible' content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="favicon.png">
    <title><?php the_title(); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700, 800,900&display=swap&subset=cyrillic" rel="preload stylesheet">
    <?php wp_head(); ?> <!-- Вызывает do_action - запускает хук wp-head -->
</head>
<!-- Добавляет класс inner к тегу body, если страница внутренняя
<?php
$body_class = '';
if (!is_front_page()) { //проверяет, является ли страница не главной
    $body_class = 'inner';
}
?>
-->
<!-- Добавление класс inner к тегу body, если страница внутренняя -->
<body class="<?php echo $body_class; ?>" itemscope itemtype="https://schema.org/WebPage"> <!-- Подключаем Schema.org (упрощаем поисковым системам обработку информации, размещенной на сайте) -->
    <header class="header" itemscope itemtype="https://schema.org/Organization"> <!-- Подключаем Schema.org (упрощаем поисковым системам обработку информации, размещенной на сайте) -->
        <div class="container d-flex flex-row justify-content-between py-3"> 
            <div class="header-logo">
                <div id="logo">
                    <?php the_custom_logo(); ?> <!-- Вызвали логотип -->
                    <p class="mb-0">green house</p>
                </div>
            </div>
            <div class="header-menu d-flex flex-column flex-md-row align-items-md-center mb-0">
                <nav id="main-menu">
                    <?php
                    //Подключение Header меню 
                    wp_nav_menu([
                        'theme_location' => 'menu-header',
                        'container' => 'nav',
                        'container_class' => 'main-navigation',
                        'menu_class' => 'main-navigation_list',
                        'items_wrap' => '<ul class="%2$s">%3$s</ul>',
                    ])
                    ?>
                </nav>

                <div class="separator d-flex d-md-none flex-row justify-content-between align-items-center mb-3">
                    <span class="line"></span>
                    <span class="dot"><i class="bi bi-record-circle d-flex align-items-center"></i></span>
                    <span class="line"></span>
                </div>
                <div id="connect-button-header" class="d-flex d-md-none align-items-center w-100">
                    <div class="btn w-100">Забронировать</div>
                </div>
            </div>
            <div class="phone d-flex align-items-center">
                <a class="d-none d-sm-block d-md-none" href="tel:88007776785">
                    <i class="bi bi-telephone">
                    </i>
                </a>
                <!-- Вызваем номер телефона из виджета -->
                <?php
                if (is_active_sidebar('dz-header')) {
                    dynamic_sidebar('dz-header');
                }
                ?>
            </div>
            <div id="connect-button-header" class="d-none d-sm-flex align-items-center">
                <div class="btn">Забронировать</div>
            </div>
            <!-- Мобильное меню -->
            <div class="d-flex d-lg-none align-items-center">
                <button class="mobile-menu d-flex justify-content-end align-items-center p-0" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>