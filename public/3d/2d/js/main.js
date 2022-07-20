//INIT
var controller;
$(document).ready(function($) {
	// init controller
	controller = new ScrollMagic();
});


		

	$(document).ready(function($) {
		
		
		//SLIDE 0	
		//-------------------------------------------------------------------------------------------
		//FADE IN STARS AND COPY HERE
		// build tween
		var tween1 = new TimelineMax ()
			.add([
				TweenMax.to("#scroll_arrow", 1,  {scale: 1.1, autoAlpha: 1, y:-20, repeat:-1, yoyo:true}),
				TweenMax.fromTo("#slide0_stars", 1, {scale: 1, autoAlpha: 0, left: 0}, {left: 0, autoAlpha: 1, ease: Linear.easeNone}),
				TweenMax.fromTo("#slide0_text", 1, {scale: 1, autoAlpha: 0}, { autoAlpha: 1, ease: Linear.easeNone}),
				TweenMax.fromTo("#fri_logo_panel1", 1, {scale: 1, autoAlpha: 0}, { autoAlpha: 1, ease: Linear.easeNone})
			]);

		// build scene
		var scene = new ScrollScene({triggerElement: "#trigger0"})
						.setTween(tween1)
						.addTo(controller);

		
		//PARALLAX FOR MOON AND STARS HERE
		// build tween
		var tween2 = new TimelineMax ()
			.add([
				TweenMax.to(".slide0 #slide0_stars", 1, {backgroundPosition: "0", alpha:0, scale:1.5, ease: Linear.easeNone}),
				TweenMax.to(".slide0 #slide0_moon", 1, {backgroundPosition: "0 40%", x:50, ease: Linear.easeNone})
			]);

		// build scene
		var scene = new ScrollScene({triggerElement: "#trigger0", duration: 300, offset: 350})
						.setTween(tween2)
						.addTo(controller);
						
						
						
		//SLIDE 1	
		//-------------------------------------------------------------------------------------------
		//ANIMATE FOREGROUND AND BACKGROUND HERE
		// build tween
		var tween3 = new TimelineMax ()
			.add([
				TweenMax.to(".firefly1", 2,  {scale: 1, autoAlpha: 1, x: -100}),
				TweenMax.to(".firefly2", 2,  {scale: 1.5, autoAlpha: 0.5, x: -50}),
				TweenMax.to(".firefly3", 2,  {scale: 0.75, autoAlpha: 0.75, x: 50}),
				TweenMax.to(".firefly4", 2,  {scale: 1, autoAlpha: 1.5, x: 100}),
				TweenMax.to("#slide1foreground", 2, {backgroundPosition: '50px 130px', ease:Linear.easeNone})
			]);

		// build scene
		var scene2 = new ScrollScene({triggerElement: "#trigger1", duration: 300, offset: 350})
						.setTween(tween3)
						.addTo(controller);
						
						
		//BRING IN GRAVE
		//TweenMax.to(".grave", 3, {y: -300, ease:Linear.easeNone})
	
		var tween4 = new TimelineMax ()
			.add([
				TweenMax.to("#scroll_arrow", 1,  {scale: 1, autoAlpha: 0}),
				TweenMax.to(".scroll_p", 1,  {scale: 1, autoAlpha: 0}),
				TweenMax.to(".grave", 1.5, {y: -500, ease:Linear.easeNone}),
				TweenMax.to("#slide1foreground", 0.5, {y: 20, ease:Linear.easeNone,onComplete:shakeGrave})
			]);

		// build scene
		var scene3 = new ScrollScene({triggerElement: "#trigger1a"})
						.setTween(tween4)
						.addTo(controller);
					

		function shakeGrave() {
			//console.log("shake grave here");
			TweenMax.to(".grave", 0.05, {css:{rotation:5}, repeat:-1, yoyo:true});

		}	
		
		
		
		//SLIDE 2	
		//-------------------------------------------------------------------------------------------
		//ANIMATE FOREGROUND AND BACKGROUND HERE
		var tween5 = new TimelineMax ()
			.add([
				TweenMax.to(".psycho", 2, {scale:1.2, ease:Linear.easeNone}),
				TweenMax.to("#slide2foreground", 2, {y:-130, scale:1.5, ease:Linear.easeNone})
				
				
			]);

		// build scene
		var scene4 = new ScrollScene({triggerElement: "#trigger2", duration: 300, offset: 350})
						.setTween(tween5)
						.addTo(controller);
						
		//bring in Spider here
		var tween6 = new TimelineMax ()
			.add([
				TweenMax.to(".spider", 1.5, {y: 455, ease:Bounce.easeOut}),
				TweenMax.to(".psycho", 1.5, {x: -100, ease:Linear.easeNone})
			]);

		// build scene
		var scene3 = new ScrollScene({triggerElement: "#trigger2"})
						.setTween(tween6)
						.addTo(controller);
						
						
						
		//SLIDE 3	
		//-------------------------------------------------------------------------------------------
		//ANIMATE FRANK HERE
		var tween7 = new TimelineMax ()
			.add([
				TweenMax.to(".frank", 2, {scale:1.2, ease:Linear.easeNone}),
				TweenMax.to(".thunder", 2, {scale:1.2, ease:Linear.easeNone})
			]);

		// build scene
		var scene5 = new ScrollScene({triggerElement: "#trigger3", duration: 300, offset: 350})
						.setTween(tween7)
						.addTo(controller);
						
		//ANIMATE THUNDER HERE
		var tween8 = new TimelineMax ()
			.add([
				TweenMax.to(".thunder", 0.05, {alpha:0, repeat:-1, yoyo:true})
			]);

		// build scene
		var scene5 = new ScrollScene({triggerElement: "#trigger3"})
						.setTween(tween8)
						.addTo(controller);
						
						
		//SLIDE 4	
		//-------------------------------------------------------------------------------------------
		//ANIMATE bg HERE
		var tween14 = new TimelineMax ()
			.add([
				TweenMax.to(".panel4_bg", 2, {scale:1.2, ease:Linear.easeNone})
				
			]);

		// build scene
		var scene10 = new ScrollScene({triggerElement: "#trigger4", duration: 300, offset: 350})
						.setTween(tween14)
						.addTo(controller);
		//ANIMATE MONSTER HERE
		var tween9 = new TimelineMax ()
			.add([
				TweenMax.to(".panel4_monster", 1.5, {y: -500, ease:Bounce.easeOut})
			]);

		// build scene
		var scene6 = new ScrollScene({triggerElement: "#trigger4"})
						.setTween(tween9)
						.addTo(controller);
						
						
		//SLIDE 5	
		//-------------------------------------------------------------------------------------------
		//ANIMATE star bg here
		var tween9 = new TimelineMax ()
			.add([
				TweenMax.to(".stars", 1.5, {scale: 1.5, ease:Bounce.easeOut})
			]);

		// build scene
		var scene6 = new ScrollScene({triggerElement: "#trigger5"})
						.setTween(tween9)
						.addTo(controller);
						
	 
		//animate random stars here
		

		flickerAnimate(".single_star1");
		flickerAnimate(".single_star2");
		flickerAnimate(".single_star3");
		flickerAnimate(".single_star4");
		flickerAnimate(".single_star5");
		flickerAnimate(".single_star6");
		
		function flickerAnimate(object) {
			TweenMax.to(object, Math.random() * 5 + 0.5, {
				opacity: Math.random(), // or rotation etc
				x: Math.floor((Math.random() * 900) + 1), // or rotation etc
				y: Math.floor((Math.random() * 900) + 1), // or rotation etc
				onComplete: flickerAnimate,
				onCompleteParams: [object]
			});
		}
		
		
							
		//SLIDE 6	
		//-------------------------------------------------------------------------------------------
		//ANIMATE bg HERE
		var tween10 = new TimelineMax ()
			.add([
				TweenMax.to(".slide6_bg", 2, {scale:1.2, ease:Linear.easeNone})
			]);

		// build scene
		var scene8 = new ScrollScene({triggerElement: "#trigger6", duration: 300, offset: 350})
						.setTween(tween10)
						.addTo(controller);
						
		
		//ANIMATE MONSTER HERE
		var tween11 = new TimelineMax ()
			.add([
				TweenMax.to(".panel6_monster", 1.5, {x: 490, ease:Bounce.easeOut})
			]);

		// build scene
		var scene9 = new ScrollScene({triggerElement: "#trigger6"})
						.setTween(tween11)
						.addTo(controller);
						
						
		
		
		//SLIDE 7	
		//-------------------------------------------------------------------------------------------
		
		//ANIMATE bg HERE
		var tween13 = new TimelineMax ()
			.add([
				TweenMax.to(".slide7_bg", 2, {scale:1.2, ease:Linear.easeNone})
			]);

		// build scene
		var scene10 = new ScrollScene({triggerElement: "#trigger7", duration: 300, offset: 350})
						.setTween(tween13)
						.addTo(controller);
						
									
		//ANIMATE MONSTER HERE
		var tween12 = new TimelineMax ()
			.add([
				TweenMax.to(".panel7_monster", 1.5, {x: 450, ease:Bounce.easeOut})
			]);

		// build scene
		var scene10 = new ScrollScene({triggerElement: "#trigger7"})
						.setTween(tween12)
						.addTo(controller);
						

	});
	
	