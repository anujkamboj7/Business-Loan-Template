if ($(window).width() >= 991.98) {
	var timeline1 = gsap.timeline();
	timeline1
		.from(".navbar", {
			y: -100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.1
		})
		.from(".hero-content", {
			x: -100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.1
		})
		.from(".hero-img", {
			x: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.1
		})
		.from(".content", {
			x: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.1,
			stagger: 0.2
		});

	// timeline2

	var timeline2 = gsap.timeline();
	timeline2
		.from("#products .section-heading h2", {
			y: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0
		})
		.from(".product", {
			x: -50,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			stagger: 0.2
		});

	// controller
	const controller = new ScrollMagic.Controller();

	// scene

	const scene1 = new ScrollMagic.Scene({
		triggerElement: "#products",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline2)
		.addTo(controller);

	// timeline3

	var timeline3 = gsap.timeline();
	timeline3
		.from("#benifits .section-heading h2", {
			y: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0
		})
		.from(".benifit", {
			y: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0
		});

	// scene

	const scene2 = new ScrollMagic.Scene({
		triggerElement: "#benifits",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline3)
		.addTo(controller);

	// timeline4

	var timeline4 = gsap.timeline();
	timeline4
		.from("#testimonial .inner", {
			x: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.2
		})
		.from("#testimonial blockquote", {
			x: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0
		});

	// scene

	const scene3 = new ScrollMagic.Scene({
		triggerElement: "#testimonial",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline4)
		.addTo(controller);

	// timeline5

	var timeline5 = gsap.timeline();
	timeline5.from("#short-testimonial", {
		x: 100,
		ease: "back.out(1.7)",
		autoAlpha: 0
	});

	// scene

	const scene4 = new ScrollMagic.Scene({
		triggerElement: "#short-testimonial",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline5)
		.addTo(controller);

	// timeline6

	var timeline6 = gsap.timeline();
	timeline6
		.from("#total-testimonial", {
			y: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0
		})
		.from("#total-testimonial div", {
			x: -50,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			stagger: 0.2,
			delay: -0.2
		});

	// scene

	const scene5 = new ScrollMagic.Scene({
		triggerElement: ".review p",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline6)
		.addTo(controller);

	// timeline7

	var timeline7 = gsap.timeline();
	timeline7
		.from("#advisor .advisor-info", {
			y: 100,
			ease: "back.out(1.7)",
			autoAlpha: 0,
			delay: 0.4
		})
		.from("#advisor .advisor-img", {
			x: 50,
			ease: "back.out(1.7)",
			autoAlpha: 0
		});

	// scene

	const scene6 = new ScrollMagic.Scene({
		triggerElement: "#advisor",
		triggerHook: 0.4,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline7)
		.addTo(controller);
}
