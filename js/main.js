// List of JavaScript tips
var tipsList = [
	"<h2>El hipotálamo produce:</h2> 1. Hormona liberadora de tirotropina (TRH). <br><b>Función Principal:</b> Estimula la secreción de TSH y prolactina. <br><hr class='aml-hr'>Su estructura química: péptido. <p class='p-aml-right'>#1</p>",
	"<h2>La Adenohipófisis produce:</h2> 1. Hormona del crecimiento.<br><b>Función:</b> Estimula la síntesis de proteínas y el crecimiento general de casi todas las células y tejidos. <br><hr class='aml-hr'>Su estructura química: péptido. <p class='p-aml-right'>#2</p>",
	"<h2>La Neurohipófisis produce:</h2> 1. Hormona antidiurética ADH (Vasopresina) y Oxitocina.<br><b>Función de ADH:</b> Incrementa la reabsorción de agua por los riñones e induce vasoconstricción y aumento de la presión arterial. <br><hr class='aml-hr'>Su estructura química: péptido. <p class='p-aml-right'>#3</p>",
	"<h2>La Tiroides produce:</h2> 1. Tiroxina(T4) y 2. triyodotironina(T3). <br><b>Función de T4:</b> Incrementa la velocidad de las reacciones químicas de casi todas las células y, por tanto, el índice metabólico del cuerpo. <br><hr class='aml-hr'> Su estructura química: Amina. <p class='p-aml-right'>#4</p>",
	"<h2>La Corteza Suprarrenal produce:</h2> 1. Cortisol y 2. Aldosterona. <br><b>Función del Cortisol:</b> Múltiples funciones metabólicas en el control del metabolismo de las proteínas, los carbohidratos y las grasas y tambien posee efectos antiinflamatorios. <br><hr class='aml-hr'>Su estructura química: Esteroide. <p class='p-aml-right'>#5</p>",
	"<h2>La Médula Suprarrenal produce:</h2> 1. Noradrenalina y 2. Adrenalina. <br><b>Función de la Adrenalina:</b> Incrementa la frecuencia cardíaca, contrae los vasos sanguíneos, dilata los conductos de aire y participa en la reacción de lucha o huida del sistema nervioso simpático. <br><hr class='aml-hr'>Su estructura química: Amina. <p class='p-aml-right'>#6</p>",
	"<h2>El páncreas produce:</h2> 1. Insulina y 2. glucagón <br><b>Función de la insulina:</b> Favorece el paso de la glucosa al interior de muchas células y de esta forma controla el metabolismo de los hidratos de carbono. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#7</p>",
	"<h2>La Paratiroides produce:</h2> 1. Hormona Paratiroidea (PTH) <br><b>Función:</b> Controla la concentración de iones de calcio en el suero por aumento de su absorción intestinal y renal y liberación del calcio de los huesos. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#8</p>",
	"<h2>Los testículos producen:</h2> 1. Testosterona. <br><b>Función:</b> Favorece el desarrollo del aparato reproductor masculino y de los caracteres sexuales secundarios del varón. <br><hr class='aml-hr'>Su estructura química: Esteroide. <p class='p-aml-right'>#9</p>",
	"<h2>Los Ovarios producen:</h2> 1. Estrógenos y 2. Progesterona <br><b>Función de los Estrógenos:</b> Estimula el crecimiento y desarrollo del aparato reproductor femenino, de la mama femenina y de los caracteres sexuales secundarios de la mujer. <br><hr class='aml-hr'>Su estructura química: Esteroide <p class='p-aml-right'>#10</p>",
	"<h2>La Placenta produce:</h2> 1. Gonadotropina Corionica Humana (HCG), 2. Somatomamotropina Humana, 3. Estrogenos y 4. Progesterona. <br><b>Función de la HCG:</b> Favorece el desarrollo del cuerpo lúteo y la secreción por este de estrógenos y de Progesterona. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#11</p>",
	"<h2>El Riñón produce:</h2> 1. Renina, 2. 1,25-dihidroxicolecalciferol y 3. Eritropoyetina. <br><b>Función de la Renina:</b> Cataliza la conversión de angiotensinógeno en angiotensina 1 actuando como una enzima. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#12</p>",
	"<h2>El Corazón produce:</h2> 1. Péptido natriurético auricular (PNA). <br><b>Función del PNA:</b> Incrementa la excreción de sodio por los riñones y reduce la presión arterial. <br><hr class='aml-hr'>Su estructura química: Péptido <p class='p-aml-right>#13</p>",
	"<h2>El Estómago produce:</h2> 1. Gastrina. <br><b>Función del Gastrina:</b> Estimula la secreción de HCL por las células parietales. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#14</p>",
	"<h2>El Intestino Delgado produce:</h2> 1. Secretina y 2. Colecistocinina (CCk). <br><b>Función de la Secretina:</b> Estimula la liberación de bicarbonato y agua en las células acinares del páncreas. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#15</p>",
	"<h2>Los Adipocitos producen:</h2> 1. Leptina. <br><b>Función:</b> Inhibe el apetito, estimula la termogenia. <br><hr class='aml-hr'>Su estructura química: Péptido. <p class='p-aml-right'>#16</p>",
];

// Tip Limit counter
var tipLimit = 3;


// Generate a number
function generateNumber() {
	return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip() {
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
	tipButton.addEventListener('click', function() {
		tipLimit = tipLimit -1;
		if (tipLimit >= 0) {
			generateTip();

			if (tipLimit === 0) {
				tipButton.innerHTML = 'Nos vemos en otra pestaña!';
				tipButton.classList.add('disabled');
			}
		}
		console.log('Hipotalamo... Hormona liberadora  de tirotropina... estimula la secreción de TSH y prolactina...Péptido')
	});
}
onTipButtonClick();

// Getting the first tip
generateTip();
