<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <?php wp_head(); ?>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header>
        <div class="header-container">
            <div class="header-logo">
                <div id="logo">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="<?php bloginfo('name'); ?>">
                    </a>
                </div>
            </div>
            <div class="header-menu">
                <nav id="main-menu">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header-menu',
                        'container' => 'ul'
                    ));
                    ?>
                </nav>
            </div>
            <div class="header-contact">
                <div class="contact-info">
                    <a href="tel:88007775691">8 (800) 777-56-91</a>
                </div>
                <div class="burger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="popup-menu">
                    <ul>
                        <li><a href="/o-sisteme">О системе</a></li>
                        <li><a href="#">Интеграция</a></li>
                        <li><a href="#">Тарифы</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Вход</a></li>
                    </ul>
                    <div class="contact-info">
                        <a href="tel:88007775691">8 (800) 777-56-91</a>
                    </div>
                </div>

                <div id="connect-button-header">
                    <button>Подключиться</button>
                </div>
            </div>
        </div>
    </header>