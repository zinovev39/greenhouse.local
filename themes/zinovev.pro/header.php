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
            <div class="header-menu d-flex flex-column flex-md-row align-items-md-center mb-0">
                <nav id="main-menu">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header-menu',
                        'container' => 'ul'
                    ));
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
            <div id="connect-button-header" class="d-none d-sm-flex align-items-center">
                <div class="btn">Забронировать</div>
            </div>
            <div class="d-flex d-md-none align-items-center">
                <button class="header-burger d-block d-md-none align-items-center" id="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

    </header>