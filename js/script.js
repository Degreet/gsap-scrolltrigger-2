gsap
	.timeline({
		scrollTrigger: {
			trigger: '.wrapper',
			scrub: true,
			pin: true,
		},
	})
	.to('.text-1', {
		scale: 0,
	})
	.from('.work', {
		scale: 0,
	})
	.from('.work .title', {
		opacity: 0,
		scale: 0.8,
		y: 100,
	})
	.to('.work', {
		opacity: 0,
		scale: 0.7,
		delay: 1.5,
	})
	.to('.work', {
		scale: 0,
	})
	.from('.text-2', {
		scale: 0,
	});
