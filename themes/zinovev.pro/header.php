<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <?php wp_head(); ?>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> itemscope itemtype="https://schema.org/WebPage">
    <header class="header" itemscope itemtype="https://schema.org/Organization">
        <div class="container d-flex flex-row justify-content-between py-3">
            <div class="header-logo">
                <div id="logo">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="<?php bloginfo('name'); ?>">
                    </a>
                    <p class="mb-0">green house</p>
                </div>
            </div>
            <div class="header-menu d-none d-md-flex align-items-center mb-0">
                <nav id="main-menu">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header-menu',
                        'container' => 'ul'
                    ));
                    ?>
                </nav>
            </div>
            <div id="connect-button-header">
                <div class="btn">Забронировать</div>
            </div>
        </div>

    </header>