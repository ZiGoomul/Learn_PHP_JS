<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link href="styles/site.css" rel="stylesheet">
    <script src="scripts/jquery.js"></script>
    <script src="scripts/site.js"></script>
    <title>Онлайн магазин</title>
</head>
<body>
<header>
    <div id="headerInside">
        <div id="logo"></div>
        <div id="companyName">Brand</div>
        <div id="navWrap">
            <a href="/">
                Главная
            </a>
            <a href="index.php?page=shop">
                Магазин
            </a>
        </div>
    </div>
</header>

<div id="content">

    <?php
    $goods = [
        [
            'id' => 1,
            'name' => 'Iphone',
            'desc' => 'Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений. ',
            'img' => '/images/goods/iphone.jpg',
            'price' => '2000 $'
        ],
        [
            'id' => 2,
            'name' => 'HTC',
            'desc' => 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Разнообразный и богатый опыт укрепление и развитие структуры играет важную роль в формировании систем массового участия. ',
            'img' => '/images/goods/htc.jpg',
            'price' => '1200 $'
        ],
        [
            'id' => 3,
            'name' => 'Samsung',
            'desc' => 'Таким образом рамки и место обучения кадров представляет собой интересный эксперимент проверки модели развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке новых предложений. Равным образом дальнейшее развитие.',
            'img' => '/images/goods/samsung.jpg',
            'price' => '1400 $'
        ],
    ];

    $page = $_GET['page'];

    if (!isset($page)) {
        require('templates/main.php');
    } elseif ($page == 'shop') {
        require('templates/shop.php');
    } elseif ($page == 'product') {
        $id = $_GET['id'];
        $good = [];
        foreach ($goods as $product) {
        	if ($product['id'] == $id) {
        		$good = $product;
        		break;
        	}
        }
        require('templates/openedProduct.php');
    }
?>

</div>

<footer>
    <div id="footerInside">

        <div id="contacts">
            <div class="contactWrap">
                <img src="images/envelope.svg" class="contactIcon">
                info@brandshop.ru
            </div>
            <div class="contactWrap">
                <img src="images/phone-call.svg" class="contactIcon">
                8 800 555 00 00
            </div>
            <div class="contactWrap">
                <img src="images/placeholder.svg" class="contactIcon">
                Москва, пр-т Ленина, д. 1 офис 304
            </div>
        </div>

        <div id="footerNav">
            <a href="/">Главная</a>
            <a href="index.php?page=shop">Магазин</a>
        </div>

        <div id="social">
            <img class="socialItem" src="images/vk-social-logotype.svg">
            <img class="socialItem" src="images/google-plus-social-logotype.svg">
            <img class="socialItem" src="images/facebook-logo.svg">
        </div>

        <div id="copyrights">&copy; Brand</div>
    </div>
</footer>

</body>
</html>