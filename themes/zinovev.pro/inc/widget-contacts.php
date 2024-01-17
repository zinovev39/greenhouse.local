<?php

//Виджет контактов
class DZ_Widget_Contacts extends WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            'dz-widget-contacts',
            'DZ - Виджет контактов',
            [
                'name' => 'DZ - Виджет контактов',
                'description' => 'Номер телефона'
            ]
        );
    }

    public function form($instance)
    {
?>
        <p>
            <label for="<?php echo $this->get_field_id('id-phone'); ?>">
                Введите номер телефона:
            </label>
            <input id="<?php echo $this->get_field_id('id-phone'); ?>" type="text" name="<?php echo $this->get_field_name('phone'); ?>" value="<?php echo $instance['phone']; ?>" class="widefat">
        </p>

    <?php
    }

    public function widget($args, $instance)
    {
        $tel_text = $instance['phone'];
        $pattern = '/[^+0-9]/';
        $tel = preg_replace($pattern, '', $tel_text)
    ?>
        <address class="main-header__widget widget-contacts mb-0">
            <a href="tel:<?php echo $tel; ?>" class="widget-contacts__phone">
                <?php echo $instance['phone']; ?>
            </a>
        </address>
<?php
    }

    public function update($new_instance, $old_instance)
    {
        return $new_instance;
    }
}
