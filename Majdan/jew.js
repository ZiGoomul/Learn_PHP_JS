
var shekeliStolen = 0;
var allTimeShekeli = 0;
var multiplier = 1;
var currentDPS = 0;

var goyMercCounter = 0;
var cheapJewCounter = 0;
var vacuumCleanerCounter = 0;

var beggarPloxCounter = 0;
var taxMenCounter = 0;
var creditCompanyCounter = 0;

var sinagogaCounter = 0;
var jewHospitalCounter = 0;
var mcDonaldsCounter = 0;
var massonCounter = 0;

// Prices 
	// Tier 1 
var goyMercPrice = 50;
var cheapJewPrice = 300;
var vacuumCleanerPrice = 600;

	// Tier 2 
var beggarPloxPrice = 2000;
var taxMenPrice = 4000;
var creditCompanyPrice = 7500;
	
	// Tier 3 
var sinagogaPrice = 10000;
var jewHospitalPrice = 20000;
var mcDonaldsPrice = 50000;
var massonPrice = 200000;

	// Consumables 
var steamPrice = 750000;
var OdessaModePrice = 500000;


// Multipliers 
	// Tier 1 
var goyMercMultiplier = 0;
var cheapJewMultiplier = 1;
var vacuumCleanerMultiplier = 2;

	// Tier 2 
var beggarPloxMultiplier = 3;
var taxMenMultiplier = 4;
var creditCompanyMultiplier = 5;
	
	// Tier 3 
var sinagogaMultiplier = 7;
var jewHospitalMultiplier = 9;
var mcDonaldsMultiplier = 11;
var massonMultiplier = 15;

	// Consumables
var OdessaModeMultiplier = 30;
var steamMultiplier = 100;

// DPS counters 
	// Tier 1 
var goyMercDPS = 1;
var cheapJewDPS = 2;
var vacuumCleanerDPS = 3;

	// Tier 2 
var beggarPloxDPS = 5;
var taxMenDPS = 7;
var creditCompanyDPS = 10;
	
	// Tier 3 
var sinagogaDPS = 12;
var jewHospitalDPS = 15;
var mcDonaldsDPS = 18;
var massonDPS = 25;

	// Consumables
var OdessaModeDPS = 30;
var steamDPS = 1000;

	// Other
var displayString = "брущатки сорвано";
var hasOdessaMode = false;
var hasSteamMode = false;


window.setInterval(tick, 1000);

function gibeShekel() {
	 // this is for debugging
	shekeliStolen += multiplier;
	allTimeShekeli += multiplier;
	updateDisplay();
}

function updateDisplay() {
		// Display elements
	document.getElementById("shekelDisplay").innerHTML = beautify(shekeliStolen);
	document.getElementById("shekelFlavorText").innerHTML = displayString;
	document.getElementById("multiplierDisplay").innerHTML = "<br><div>Количество брущатки на клик: " + beautify(multiplier) + "</div>" ;
	document.getElementById("dpsDisplay").innerHTML = "<br><div>Количество брущатки на секунду:  " + beautify(currentDPS)+ "</div>";
	document.getElementById("allTimeDicksSucked").innerHTML = "(Всего сорвал брущатки: " + beautify(allTimeShekeli) + ")";
	
		// Tier 1 
	document.getElementById("buyGoyMercButton").innerHTML = "<b>Бандеровец</b><br />" + beautify(goyMercPrice) + " Брущатки (+" + beautify(goyMercDPS) + "БзС)<br />Куплено: <b>"+beautify(goyMercCounter)+"</b>";
	document.getElementById("buyCheapJewButton").innerHTML = "<b>Бандеровец с палкой</b><br />" + beautify(cheapJewPrice) + " Брущатки (+" + beautify(cheapJewMultiplier) + "БзК,+" + beautify(cheapJewDPS) + "БзС)<br />Куплено: <b>"+beautify(cheapJewCounter)+"</b>";
	document.getElementById("buyVacuumCleanerButton").innerHTML = "<b>Бандеровец с коктейлем</b><br />" + beautify(vacuumCleanerPrice) + " Брущатки (+" + beautify(vacuumCleanerMultiplier) + "БзК,+" + beautify(vacuumCleanerDPS) + "БзС)<br />Куплено: <b>"+beautify(vacuumCleanerCounter)+"</b>";
		
		// Tier 2 
	document.getElementById("buyBeggarPloxButton").innerHTML = "<b>Автомайданщики</b><br />" + beautify(beggarPloxPrice) + " Брущатки (+" + beautify(beggarPloxMultiplier) + "БзК,+" + beautify(beggarPloxDPS) + "БзС)<br />Куплено: <b>"+beautify(beggarPloxCounter)+"</b>";
	document.getElementById("buyTaxMenButton").innerHTML = "<b>Захватить админздание</b><br />" + beautify(taxMenPrice) + " Брущатки (+" + beautify(taxMenMultiplier) + "БзК,+" + beautify(taxMenDPS) + "БзС)<br />Куплено: <b>"+beautify(taxMenCounter)+"</b>";
	document.getElementById("buyCreditCompanyButton").innerHTML = "<b>Канал честных нововостей</b><br />" + beautify(creditCompanyPrice) + " Брущатки (+" + beautify(creditCompanyMultiplier) + "БзК,+" +  beautify(creditCompanyDPS) + "БзС)<br />Куплено: <b>"+beautify(creditCompanyCounter)+"</b>";
	
		// Tier 3 
	document.getElementById("buySinagogaButton").innerHTML = "<b>Послушать Яценюка про КУЛЮ У ЛОБА</b><br />" + beautify(sinagogaPrice) + " Брущатки (+" + beautify(sinagogaMultiplier) + "БзК,+" + beautify(sinagogaDPS) + "БзС)<br />Куплено: <b>"+beautify(sinagogaCounter)+"</b>";
	document.getElementById("buyJewHospitalButton").innerHTML = "<b>Позвать Эштон</b><br />" + beautify(jewHospitalPrice) + " Брущатки (+" + beautify(jewHospitalMultiplier) + "БзК,+" + beautify(jewHospitalDPS) + "БзС)<br />Куплено: <b>"+beautify(jewHospitalCounter)+"</b>";
	document.getElementById("buyMcDonaldsButton").innerHTML = "<b>Покричать Спасибо США</b><br />" + beautify(mcDonaldsPrice) + " Брущатки (+" + beautify(mcDonaldsMultiplier) + "БзК,+" + beautify(mcDonaldsDPS) + "БзС)<br />Куплено: <b>"+beautify(mcDonaldsCounter)+"</b>";
	document.getElementById("buyMassonButton").innerHTML = "<b>Закидать Беркут</b><br />" + beautify(massonPrice) + " Брущатки (+" + beautify(massonMultiplier) + "БзК,+" + beautify(massonDPS) + "БзС)<br />Куплено: <b>"+beautify(massonCounter)+"</b>";
	
		// Consumables 
	if (hasSteamMode == false)
	document.getElementById("buySteamButton").innerHTML = "<b>Стать Президентом</b><br />" + beautify(steamPrice) + " Брущатки (Счастье по Американски)";
	if (hasOdessaMode == false)
	document.getElementById("buyOdessaModeButton").innerHTML = "<b>Подписать ассоциацию с ЕС</b><br />" + beautify(OdessaModePrice) + " Брущатки (Effect: ???)";
	
	toggleButtons();
	updateSlogan();
}

function buy(whatToBuy) {
		// Tier 1 
	if(whatToBuy == "goyMerc") {
		if(shekeliStolen >= goyMercPrice) {
			goyMercCounter += 1;
			shekeliStolen -= goyMercPrice;
			multiplier += goyMercMultiplier;
			currentDPS += goyMercDPS;
			goyMercPrice = Math.round(goyMercPrice * 1.1);
		}
	} else if(whatToBuy == "cheapJew") {
		if(shekeliStolen >= cheapJewPrice) {
			cheapJewCounter += 1;
			shekeliStolen -= cheapJewPrice;
			multiplier += cheapJewMultiplier;
			currentDPS += cheapJewDPS;
			cheapJewPrice = Math.round(cheapJewPrice * 1.1);
		}
	} else if(whatToBuy == "vacuumCleaner") {
		if(shekeliStolen >= vacuumCleanerPrice) {
			vacuumCleanerCounter += 1;
			shekeliStolen -= vacuumCleanerPrice;
			multiplier += vacuumCleanerMultiplier;
			currentDPS += vacuumCleanerDPS;
			vacuumCleanerPrice = Math.round(vacuumCleanerPrice * 1.1);
		}	
		// Tier 2 
	} else if(whatToBuy == "beggarPlox") {
		if(shekeliStolen >= beggarPloxPrice) {
			beggarPloxCounter += 1;
			shekeliStolen -= beggarPloxPrice;
			multiplier += beggarPloxMultiplier;
			currentDPS += beggarPloxDPS;
			beggarPloxPrice = Math.round(beggarPloxPrice * 1.1);
		}
	} else if(whatToBuy == "taxMen") {
		if(shekeliStolen >= taxMenPrice) {
			taxMenCounter += 1;
			shekeliStolen -= taxMenPrice;
			multiplier += taxMenMultiplier;
			currentDPS += taxMenDPS;
			taxMenPrice = Math.round(taxMenPrice * 1.1);
		}
	} else if(whatToBuy == "creditCompany") {
		if(shekeliStolen >= creditCompanyPrice) {
			creditCompanyCounter += 1;
			shekeliStolen -= creditCompanyPrice;
			multiplier += creditCompanyMultiplier;
			currentDPS += creditCompanyDPS;
			creditCompanyPrice = Math.round(creditCompanyPrice * 1.1);
		}
		// Tier 3 
	} else if(whatToBuy == "sinagoga") {
		if(shekeliStolen >= sinagogaPrice) {
			sinagogaCounter += 1;
			shekeliStolen -= sinagogaPrice;
			multiplier += sinagogaMultiplier;
			currentDPS += sinagogaDPS;
			sinagogaPrice = Math.round(sinagogaPrice * 1.1);
		}
	} else if(whatToBuy == "jewHospital") {
		if(shekeliStolen >= jewHospitalPrice) {
			jewHospitalCounter += 1;
			shekeliStolen -= jewHospitalPrice;
			multiplier += jewHospitalMultiplier;
			currentDPS += jewHospitalDPS;
			jewHospitalPrice = Math.round(jewHospitalPrice * 1.1);
		}
	} else if(whatToBuy == "mcDonalds") {
		if(shekeliStolen >= mcDonaldsPrice) {
			mcDonaldsCounter += 1;
			shekeliStolen -= mcDonaldsPrice;
			multiplier += mcDonaldsMultiplier;
			currentDPS += mcDonaldsDPS;
			mcDonaldsPrice = Math.round(mcDonaldsPrice * 1.1);
		}
	} else if(whatToBuy == "masson") {
		if(shekeliStolen >= massonPrice) {
			massonCounter += 1;
			shekeliStolen -= massonPrice;
			multiplier += massonMultiplier;
			currentDPS += massonDPS;
			massonPrice = Math.round(massonPrice * 1.1);
		}
		// Consumables
	
	} else if(whatToBuy == "OdessaMode") {
		if(shekeliStolen >= OdessaModePrice) {
			shekeliStolen -= OdessaModePrice;
			multiplier += OdessaModeMultiplier;
			currentDPS += OdessaModeDPS;
			
			if(hasSteamMode == true) {
				displayString = "Европейские геи надавали вам бабла:";
			} else {
				displayString = "Европейские геи тебя наебали:";
			}
			
			document.body.style.backgroundImage = "url('./i/OdessaModeBackground.png')";
			
			
			
			document.getElementById("buyOdessaModeButton").setAttribute("onclick","music_play1()");
			document.getElementById("buyOdessaModeButton").innerHTML = "PLAY MUZON";
			OdessaModePrice = 0;
			
			hasOdessaMode = true;
		}
	} else if(whatToBuy == "steam") {
		if(shekeliStolen >= steamPrice) {
			shekeliStolen -= steamPrice;
			multiplier += steamMultiplier;
			currentDPS += steamDPS;
			
			if(hasOdessaMode == true) {
				displayString = "Европейские геи надавали вам бабла:";
			} else {
				displayString = "Американское счастье:";
			}

			document.body.style.backgroundImage = "url('./i/SteamBackground.png')";
			document.getElementById("buySteamButton").setAttribute("onclick","music_play2()");
			document.getElementById("buySteamButton").innerHTML = "PLAY MUZON";
			SteamModePrice = 0;
			hasSteamMode = true;
		}
	}
	createGrafix(whatToBuy);
	updateDisplay();
}

function toggleButtons() {
		// Tier 1
	if(shekeliStolen < goyMercPrice) {
		document.getElementById("buyGoyMercButton").disabled = true;
	} else {
		document.getElementById("buyGoyMercButton").disabled = false;
	}
	
	if(shekeliStolen < cheapJewPrice) {
		document.getElementById("buyCheapJewButton").disabled = true;
	} else {
		document.getElementById("buyCheapJewButton").disabled = false;
	}
	
	if(shekeliStolen < vacuumCleanerPrice) {
		document.getElementById("buyVacuumCleanerButton").disabled = true;
	} else {
		document.getElementById("buyVacuumCleanerButton").disabled = false;
	}
		// Tier 2
	if(shekeliStolen < beggarPloxPrice) {
		document.getElementById("buyBeggarPloxButton").disabled = true;
	} else {
		document.getElementById("buyBeggarPloxButton").disabled = false;
	}
	
	if(shekeliStolen < taxMenPrice) {
		document.getElementById("buyTaxMenButton").disabled = true;
	} else {
		document.getElementById("buyTaxMenButton").disabled = false;
	}
	
	if(shekeliStolen < creditCompanyPrice) {
		document.getElementById("buyCreditCompanyButton").disabled = true;
	} else {
		document.getElementById("buyCreditCompanyButton").disabled = false;
	}
		// Tier 3
	if(shekeliStolen < sinagogaPrice) {
		document.getElementById("buySinagogaButton").disabled = true;
	} else {
		document.getElementById("buySinagogaButton").disabled = false;
	}
	
	if(shekeliStolen < jewHospitalPrice) {
		document.getElementById("buyJewHospitalButton").disabled = true;
	} else {
		document.getElementById("buyJewHospitalButton").disabled = false;
	}
	
	if(shekeliStolen < mcDonaldsPrice) {
		document.getElementById("buyMcDonaldsButton").disabled = true;
	} else {
		document.getElementById("buyMcDonaldsButton").disabled = false;
	}
	
	if(shekeliStolen < massonPrice) {
		document.getElementById("buyMassonButton").disabled = true;
	} else {
		document.getElementById("buyMassonButton").disabled = false;
	}
	
		// Consumables
	if(shekeliStolen < steamPrice) {
		document.getElementById("buySteamButton").disabled = true;
	} else {
		document.getElementById("buySteamButton").disabled = false;
	}
	
	if(shekeliStolen < OdessaModePrice) {
		document.getElementById("buyOdessaModeButton").disabled = true;
	} else {
		document.getElementById("buyOdessaModeButton").disabled = false;
	}
	
	
}

function tick() {
	shekeliStolen += currentDPS;
	allTimeShekeli += currentDPS;
	updateDisplay();
}

function beautify(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
}

function createGrafix(which) {
	var newGrafix = document.createElement("img");

	newGrafix.className = "grafix";
	newGrafix.setAttribute("style", "width:60px; height:60px");
	newGrafix.src = "/i/" + which + ".png";
	
	var flavorText;
	flavorText = "Пикча #"+beautify(goyMercCounter);
	newGrafix.setAttribute("alt", flavorText);
	newGrafix.setAttribute("title", flavorText);

	document.getElementById("grafixContainer").appendChild(newGrafix);
	
}

function updateSlogan() {
	var slogan = document.getElementById("slogan");
	
	if(allTimeShekeli <= 500) {
		slogan.innerHTML = "Ты провинциальный майдаун.";
	} else if(allTimeShekeli <= 1000) {
		slogan.innerHTML = "Ты срываешь брущатку в подворотне";
	} else if(allTimeShekeli <= 5000) {
		slogan.innerHTML = "Твои навыки поражают всю твою семью.";
	} else if(allTimeShekeli <= 10000) {
		slogan.innerHTML = "Ты срываейшь брущатку у местных политиков.";
	} else if(allTimeShekeli <= 20000) {
		slogan.innerHTML = "Ты начал курс 'Юного Майдауна'";
	} else if(allTimeShekeli <= 35000) {
		slogan.innerHTML = "Ой бой, ты срываешь брущатку уже у королей и Путина";
	} else if(allTimeShekeli <= 50000) {
		slogan.innerHTML = "Ты чувствуешь, как все завидуют твоим скиллам майдауна.";
	} else if(allTimeShekeli <= 100000) {
		slogan.innerHTML = "Ты превзошел собственного Батю.";
	} else if(allTimeShekeli <= 200000) {
		slogan.innerHTML = "Все дауны завидуют твоей брущатке.";
	} else if(allTimeShekeli <= 350000) {
		slogan.innerHTML = "Люди прилетают с других галактик, чтобы посмотреть на твою брущатку.";
	} else if(allTimeShekeli <= 500000) {
		slogan.innerHTML = "Количество твоей брущатки растет каждую секунду.";
	} else if(allTimeShekeli <= 750000) {
		slogan.innerHTML = "Ты перестал есть нормальную еду, ты теперь ешь только брущатку.";
	} else if(allTimeShekeli <= 1000000) {
		slogan.innerHTML = "99% твоего тела состоит из брущатки.";
	} else if(allTimeShekeli <= 1250000) {
		slogan.innerHTML = "Мир погряз в твоей брущатке.";
	} else if(allTimeShekeli <= 1500000) {
		slogan.innerHTML = "Все в солнечной системе состоит из твоей брущатки. ";
	} else if(allTimeShekeli <= 1750000) {
		slogan.innerHTML = "Ты теперь стал СУПЕР МАЙДАУНОМ.";
	} else if(allTimeShekeli <= 2000000) {
		slogan.innerHTML = "О боже, ты уже заменил свои глаза и нос на брущатку.";
	} else if(allTimeShekeli <= 2500000) {
		slogan.innerHTML = "Ты перестал быть человеком, ты стал одним целым с брущаткой.";
	} else if(allTimeShekeli <= 3000000) {
		slogan.innerHTML = "[jew intensifies]";
	} else {
		slogan.innerHTML = "Пора перестать майдаунить.";
	}
}