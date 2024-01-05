<?php wp_footer(); ?>

<div class="footer">
    <div class="container d-flex flex-row justify-content-between">
        <div class="about d-flex flex-column">
            <div class="footer-logo mb-3">
                <div id="logo">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" alt="<?php bloginfo('name'); ?>">
                    </a>
                    <p class="mb-0">green house</p>
                </div>
            </div>
            <p class="desc">
                Гостевой дом со всеми удобствами для семейного отдыха в тихом месте г.Зеленоградска
            </p>
            <div class="d-flex flex-row align-items-center">
                <p class="copyright"><img src="/wp-content/themes/zinovev.pro/assets/img/copyright.svg" class="me-2"><span>GreenHouse</span> 2023-2024</p>
            </div>
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
            <p class="adress">Канинградская область, г.Зеленоградск</p>
            <p class="adress">Смотреть на карте</p>
        </div>
    </div>
</div>