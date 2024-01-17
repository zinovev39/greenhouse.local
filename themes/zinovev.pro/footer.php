<?php wp_footer(); ?>

<div class="footer">
    <div class="container d-flex flex-column">
        <div class="content d-flex flex-row flex-wrap justify-content-between justify-content-sm-around justify-content-md-between mb-3">
            <div class="about d-flex flex-column">
                <div class="footer-logo d-flex justify-content-center justify-content-md-start mb-3">
                    <div id="logo">
                        <a href="<?php echo home_url(); ?>">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="<?php bloginfo('name'); ?>">
                        </a>
                        <p class="mb-0">green house</p>
                    </div>
                </div>
                <p class="desc text-center text-md-start mb-4">
                    Гостевой дом со всеми удобствами для семейного<br class="d-none d-sm-block d-md-none"> отдыха в тихом месте г.Зеленоградска
                </p>

            </div>
            <div class="menu d-flex flex-column">
                <p class="title">меню</p>
                <nav class="footer-menu">
                    <ul>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="rooms">Номера</a></li>
                        <li><a href="services">Услуги</a></li>
                        <li><a href="gallery">Галерея</a></li>
                    </ul>
                </nav>
            </div>
            <div class="contacts d-flex flex-column">
                <p class="title">контакты</p>
                <p class="name">Телефон:</p>
                <p class="phone">+7 999 123 45 67</p>
                <p class="name">Адрес:</p>
                <p class="adress">Канинградская обл., г.Зеленоградск</p>

            </div>
        </div>
        
        <div class="d-flex flex-row flex-wrap justify-content-between mb-2">
            <div class="copyright mb-0 order-2 order-md-1 text-center text-md-start">
                <img src="/wp-content/themes/zinovev.pro/assets/img/copyright.svg" class="me-2"><span><?php bloginfo('name'); ?></span> <?php echo date('Y'); ?>
            </div>
            
            <div class="map order-1 order-md-2 text-center text-md-start mb-3 mb-md-0 pt-3 p-sm-0">
                <a href="">Смотреть на карте</a>
            </div>
            <div class="policy order-3 order-md-3 text-center text-md-start">
                <a href="#">Политика кофеденциальности</a>
            </div>
        </div>
    </div>
    <div class="line py-3">
    </div>
</div>