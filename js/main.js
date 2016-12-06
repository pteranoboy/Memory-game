(function(){
	"use strict";
	var classes = [
					"poland1", 
					"poland2",
					"estonia1",
					"estonia2",
					"romania1",
					"romania2",
					"bulgaria1",
					"bulgaria2",
					"ukraine1",
					"ukraine2"
					];
	var turnedUp = [];
	var matches = 0;


	function initSlot(){
		var nodes = document.getElementsByClassName("slot");
        var slots = Array.prototype.slice.call(nodes,0);
        slots.forEach(function(e){
        	getRandomFlagClass(e);
        });
	}

	function getRandomFlagClass(e){
		
		var randomClassesIndex = Math.floor(Math.random() * (classes.length));
		console.log("Assigned class index", randomClassesIndex);
		var classToAssign = classes[randomClassesIndex];
		console.log("Assigned flag:", classToAssign);
		e.classList.add(classToAssign);
		delete classes[randomClassesIndex];	
		classes = classes.filter(function( element ) {
   				return element !== undefined;
		});
		console.log(classes);
	}

	function clickOnSlot(){
		var nodes = document.getElementsByClassName("slot");
        var slots = Array.prototype.slice.call(nodes,0);
        slots.forEach(function(e){
        	e.addEventListener("click", function(){
        		console.log("You clicked on", e);
        		turnSlot(e);
        	});
        });
	}

	function turnSlot(e){
		//resetTurnedUp();
		if (e.classList.contains("backSide")){
			e.classList.remove("backSide");
			drawFlag(e);
		}
		else {
			window.alert("Select an unturned slot");
		}
	}

	function drawFlag(e){
		//resetTurnedUp();
		if(e.classList.contains("poland1") || e.classList.contains("poland2")){
			drawPoland(e);
			if(turnedUp.includes("poland")){
				match();
			}
			else {
				turnedUp.push("poland");
			}
		}
		if(e.classList.contains("estonia1") || e.classList.contains("estonia2")){
			drawEstonia(e);
			if(turnedUp.includes("estonia")){
				match();
			}
			else {
				turnedUp.push("estonia");
			}
		}
		if(e.classList.contains("romania1") || e.classList.contains("romania2")){
			drawRomania(e);
			if(turnedUp.includes("romania")){
				match();
			}
			else {
				turnedUp.push("romania");
			}
		}
		if(e.classList.contains("bulgaria1") || e.classList.contains("bulgaria2")){
			drawBulgaria(e);
			if(turnedUp.includes("bulgaria")){
				match();
			}
			else {
				turnedUp.push("bulgaria");
			}
		}
		if(e.classList.contains("ukraine1") || e.classList.contains("ukraine2")){
			drawUkraine(e);
			if(turnedUp.includes("ukraine")){
				match();
			}
			else {
				turnedUp.push("ukraine");
			}
		}
		console.log("Turned up:", turnedUp);
		if (turnedUp.length === 2){resetTurnedUp();}
	}

	function match(){
		console.log("You made a match!");
		matches++;
		if (matches === 5){
			win();
		}
		console.log("Matches made:", matches);
		turnedUp = [];
	}

	(function (){
		if (turnedUp.length === 2){resetTurnedUp();}
	})();

	function resetTurnedUp(){
		if (turnedUp[0].charAt(0) != turnedUp[1].charAt(0)) {
			console.log("Turning down");
			window.setTimeout(function(){ turnDown();},1000);
		console.log("turnedUp array reset.", turnedUp);
		}
	}

	function turnDown() {
		console.log("Turning down......");
		var nodes = document.getElementsByClassName("slot");
        var slots = Array.prototype.slice.call(nodes,0);
        slots.forEach(function(elem){
        	turnedUp.forEach(function(tt){
        		if(elem.className.split(' ')[1].charAt(0) == tt.charAt(0 )){
        			elem.classList.add("backSide");
        			while (elem.firstChild) {
    					elem.removeChild(elem.firstChild);
					}
        		}
        	});
        });
        turnedUp = [];
	}

	function drawPoland(e){
		var pol1 = document.createElement("div");
		var pol2 = document.createElement("div");
		pol1.setAttribute("id","pol1");
		pol2.setAttribute("id","pol2");
		e.appendChild(pol1);
		e.appendChild(pol2); 
	}

	function drawEstonia(e){
		var est1 = document.createElement("div");
		var est2 = document.createElement("div");
		var est3 = document.createElement("div");
		est1.setAttribute("id","est1");
		est2.setAttribute("id","est2");
		est3.setAttribute("id","est3");
		e.appendChild(est1);
		e.appendChild(est2); 
		e.appendChild(est3);
	}

	function drawRomania(e){
		var rom1 = document.createElement("div");
		var rom2 = document.createElement("div");
		var rom3 = document.createElement("div");
		rom1.setAttribute("id","rom1");
		rom2.setAttribute("id","rom2");
		rom3.setAttribute("id","rom3");
		e.appendChild(rom1);
		e.appendChild(rom2); 
		e.appendChild(rom3);
	}

	function drawBulgaria(e){
		var bul1 = document.createElement("div");
		var bul2 = document.createElement("div");
		var bul3 = document.createElement("div");
		bul1.setAttribute("id","bul1");
		bul2.setAttribute("id","bul2");
		bul3.setAttribute("id","bul3");
		e.appendChild(bul1);
		e.appendChild(bul2); 
		e.appendChild(bul3);
	}

	function drawUkraine(e){
		var ukr1 = document.createElement("div");
		var ukr2 = document.createElement("div");
		ukr1.setAttribute("id","ukr1");
		ukr2.setAttribute("id","ukr2");
		e.appendChild(ukr1);
		e.appendChild(ukr2); 
	}

	function win(){
		var conf = window.confirm("You won, congratulations! Play again?");
		if (conf === true){
			window.location.reload();
		}
	}
	//Main fucntion
	(function (){
		initSlot();
		clickOnSlot();
		//resetTurnedUp();
	})();
})();