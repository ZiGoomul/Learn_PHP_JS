<html>

<head>
	<title>Симулятор Майдауна 2014, Симулятор Майдана, Игра Симулятор Майдана</title>
	<meta name="description" content="Симулятор майдана игра, убивалка времени, Попробуй себя в роли майдановца, Украинский майдан, игать за бендеровца, майданутые">
	<meta name="keywords" content="Игра, Майдан, майданутые, бендеровци, убивалка времени, Украина, Симулятор, Симулятор майдана">
	<link rel="stylesheet" href="./jew.css" type="text/css" />
	<link rel="icon" type="image/x-icon" href="./goyMerc.png" />
	<script src="./jew.js"></script>
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<meta charset="UTF-8">
</head>

<body onLoad="tick()">
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TKLQJ5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKLQJ5');</script>
<!-- End Google Tag Manager -->


    <td> <h1>Симулятор Майдауна 2014</h1> <td>
	
	<div class="magicCenterElement" id="slogan">Ты просишь деньги у мамки.</div>
	
	<div class="shekelDisplay" id="shekelDisplay">0</div>
	<div class="shekelDisplay" id="shekelFlavorText"></div>
	<div class="magicCenterElement" id="allTimeDicksSucked">(: 0)</div>
	
	<div class="magicCenterElement" id="stoleShekelButtonContainer">
		<button id="stoleShekelButton" onMouseDown="gibeShekel()">СОРВАТЬ БРУСЧАТКУ</button><br />
	</div>
	
	<div class="magicCenterElement">
		<small id="multiplierDisplay">Your click multiplier is 1</small><br />
		<small id="dpsDisplay">Your current DPS is 0</small>
	</div>
	
	<div class="magicCenterElement" id="footer">
	
		<small>
		</small>
	</div>
	<div class="magicCenterElement" id="shopContainer">
		
		
		<table width="200" align = 'center'>
		<tr>
          <td><button class="buyButton" id="buyGoyMercButton" onClick="buy('goyMerc')" disabled></button></td>
          <td><button class="buyButton" id="buyCheapJewButton" onClick="buy('cheapJew')" disabled></button></td>
          <td><button class="buyButton" id="buyVacuumCleanerButton" onClick="buy('vacuumCleaner')" disabled></button></td>
          <td><button class="buyButton" id="buyBeggarPloxButton" onClick="buy('beggarPlox')" disabled></button></td>
		</tr>
		<tr>
          <td><button class="buyButton" id="buyTaxMenButton" onClick="buy('taxMen')" disabled></button></td>
          <td><button class="buyButton" id="buyCreditCompanyButton" onClick="buy('creditCompany')" disabled></button></td>
          <td><button class="buyButton" id="buySinagogaButton" onClick="buy('sinagoga')" disabled></button></td>
          <td><button class="buyButton" id="buyJewHospitalButton" onClick="buy('jewHospital')" disabled></button></td>
		</tr>
		<tr>
          <td><button class="buyButton" id="buyMcDonaldsButton" onClick="buy('mcDonalds')" disabled></button></td>
          <td><button class="buyButton" id="buyMassonButton" onClick="buy('masson')" disabled></button></td>
          <td><button class="buyButton" id="buyOdessaModeButton" onClick="buy('OdessaMode')" disabled></button>
			<audio src="https://dl.dropboxusercontent.com/s/eubzzxld9na54v2/odessa.ogg" id="OD" class="hidden"></audio></td>
          <td><button class="buyButton" id="buySteamButton" onClick="buy('steam')" disabled></button> 
			<audio src="./steam.mp3" id="ST" class="hidden"></audio></td>

		</tr>
	</table>
    </div>
		<div class="magicCenterElement" id="grafixContainer"></div>
        <br>
        
        <center>
        <a href="http://info.flagcounter.com/c324">
            <img src="http://s06.flagcounter.com/count/c324/bg_FFFFFF/txt_000000/border_CCCCCC/columns_1/maxflags_5/viewers_3/labels_1/pageviews_1/flags_0/" alt="Flag Counter" border="0">
        </a>	
        </center>

		
        <audio src="https://dl.dropboxusercontent.com/s/eubzzxld9na54v2/odessa.ogg" id="odessa" class="hidden"></audio>
		<audio src="https://dl.dropboxusercontent.com/s/gxrvfu10xmrvwuw/steam.ogg" id="steam" class="hidden"></audio>
    
	<div id = "musicplayer"> 					</div>
	<script>
    var player1 = document.getElementById("odessa");
	var player2 = document.getElementById("steam");
            function music_play1() 
			{
                player1.play();
			}
			function music_play2() 
			{
                player2.play();
			}
		
            
	</script>
	<br>
 
    <div id="version"> Version 1.0 </div>
</body>

</html>