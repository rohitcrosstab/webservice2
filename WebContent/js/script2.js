$('#myCarousel').carousel({
	pause : "false"
});

$(document).ready(function() {
	$("#testimonial-slider").owlCarousel({
		items : 3,
		itemsDesktop : [ 1000, 3 ],
		itemsDesktopSmall : [ 979, 2 ],
		itemsTablet : [ 768, 2 ],
		itemsMobile : [ 650, 1 ],
		pagination : true,
		autoPlay : true
	});

	// $('#myModal').modal('show');

	// Add scrollspy to <body>
	$('body').scrollspy({
		target : ".navbar"
	});

	// Add smooth scrolling on all links inside the navbar
	$("#bs-example-navbar-collapse-1 a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it
			// takes to scroll to the specified area
			$('html, body').animate({
				scrollTop : $(hash).offset().top
			}, 800, function() {

				// Add hash (#) to URL when done scrolling (default click
				// behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	$(".testimonials").hide();
	$(".testimonials").fadeIn(6000);

	/*
	 * $('#goToHome').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section1').offset().top - 50 },
	 * 'slow');
	 *  })
	 * 
	 * 
	 * $('#goToJobMap').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section2').offset().top - 50 },
	 * 'slow');
	 *  })
	 * 
	 * $('#goToCoreValues').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section3').offset().top - 50 },
	 * 'slow');
	 *  })
	 * 
	 * $('#goToEmpSpeak').click(function() {
	 * 
	 * $('html,body').animate({ scrollTop : $('#section4').offset().top - 50 },
	 * 'slow');
	 *  })
	 */

	$('#scrollToJobMap2').click(function() {

		$('html,body').animate({
			scrollTop : $('.container-map').offset().top - 140
		}, 'slow');

	})

	$('#scrollToJobMap3').click(function() {

		$('html,body').animate({
			scrollTop : $('.container-map').offset().top - 140
		}, 'slow');

	})

	$('#section1-arrow').click(function() {

		$('html,body').animate({
			scrollTop : $('#section2').offset().top
		}, 'slow');

	})

});

/* Map Script Start */
$(function() {
	$(".container-map").mapael(
			{
				map : {
					name : "world_countries"

					// Enable zoom on the map
					,
					zoom : {
						enabled : true,
						mousewheel : false,
						maxLevel : 10,
						buttons : {
							"reset" : {
								cssClass : "zoomButton zoomReset",
								content : "&#x2609;", // bullet sign
								title : "Reset zoom"
							},
							"in" : {
								cssClass : "zoomButton zoomIn",
								content : "+",
								title : "Zoom in"
							},
							"out" : {
								cssClass : "zoomButton zoomOut",
								content : "-", // minus sign
								title : "Zoom out"
							}
						}
					}
					// Set default plots and areas style
					,
					defaultPlot : {
						attrs : {
							fill : "#20359E",
							opacity : 2
						},
						attrsHover : {
							opacity : 5,
							stroke : "#ffffff",
							"stroke-width" : 2,
							animDuration : 0
						},
						text : {
							attrs : {
								fill : "#505444"
							},
							attrsHover : {
								fill : "#000",
								stroke : "#ffffff",
								"stroke-width" : 2
							}
						}
					},
					defaultArea : {
						attrs : {
							fill : "#20359E",
							stroke : "#ffffff"
						},
						attrsHover : {
							fill : "#25359E",
							stroke : "#ffffff",
							"stroke-width" : 2,
							animDuration : 0
						},
						text : {
							attrs : {
								fill : "#505444"
							},
							attrsHover : {
								fill : "#000",
								stroke : "#ffffff",
								"stroke-width" : 2
							}
						}
					},
					afterInit : function($self, paper, areas, plots, options) {
						// india circle
						var hoverIn = function() {
							this.attr({
								"fill" : "red"
							});
						};

						var hoverOut = function() {
							this.attr({
								"fill" : "black"
							});
						}
						paper.circle(690, 170, 10).attr({
							stroke : "#fff",
							fill : "#ffcc29",
							"stroke-width" : 1
						});
						paper.circle(690, 160, 10).attr({
							stroke : "#fff",
							fill : "#8ec859",
							"stroke-width" : 1
						});
						// india circle close
						// USA circle
						paper.circle(180, 110, 10).attr({
							stroke : "#fff",
							fill : "#ffcc29",
							"stroke-width" : 1
						});
						paper.circle(185, 100, 10).attr({
							stroke : "#fff",
							fill : "#8ec859",
							"stroke-width" : 1
						});
						// Usa Circle close
						// singapur
						paper.circle(755, 220, 10).attr({
							stroke : "#fff",
							fill : "#8ec859",
							"stroke-width" : 1
						});
						paper.rect(815, 220, 0.5, 40).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(755, 220, 60, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(815, 260, 40, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						var c7 = paper.rect(855, 240, 80, 30).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2,

						});
						
						var t14 = paper.text(860, 255, "Singapore");
						t14.attr({
							"font-family" : "georgia",
							fill : "black",
							"cursor" : "pointer",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t14, t14);
						t14.node.onclick = function() {
							alert("");
						};
						// singapur close
						// Europe

						paper.circle(540, 100, 10).attr({
							stroke : "#fff",
							fill : "#8ec859",
							"stroke-width" : 1
						});
						paper.rect(480, 50, 0.5, 50).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(480, 100, 60, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(480, 50, 40, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						var c7 = paper.rect(520, 30, 100, 40).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2,

						});

						var t15 = paper.text(525, 35, "Europe");
						t15.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t15, t15);

						t15.node.onclick = function() {
							alert("");
						};
						var t16 = paper.text(570, 50, "Merelbeke, Belgium");
						t16.attr({
							"cursor" : "pointer"
						}).hover(hoverIn, hoverOut, t16, t16)
						t16.node.onclick = function() {
							alert("");
						};
						// Europe close
						// China
						paper.circle(765, 140, 10).attr({
							stroke : "#fff",
							fill : "#8ec859",
							"stroke-width" : 1
						});
						paper.rect(820, 140, 0.5, 20).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(760, 140, 60, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(820, 160, 40, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						var c8 = paper.rect(860, 140, 100, 40).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2,

						});

						var t17 = paper.text(865, 148, "China");
						t17.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t17, t17);
						t17.node.onclick = function() {
							alert("");
						};
						var t18 = paper.text(902, 162, "Shanghai, China");
						t18.attr({
							"cursor" : "pointer"
						}).hover(hoverIn, hoverOut, t18, t18);
						t18.node.onclick = function() {
							alert("");
						};
						// China close
						// second usa
						paper.rect(90, 110, 0.5, 60).attr({
							stroke : "#ffcc29",
							fill : "#ffcc29",
							"stroke-width" : 2
						});
						paper.rect(90, 110, 90, 0.5).attr({
							stroke : "#ffcc29",
							fill : "#ffcc29",
							"stroke-width" : 2
						});
						var c1 = paper.rect(25, 170, 150, 65).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2,

						});

						var t10 = paper.text(30, 175, "North America");
						t10.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t10, t10);
						t10.node.onclick = function() {
							$(
							"#locationUL")
						.html(
							'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Spokane">Spokane</span></li><li><span data-path=".Yardley">Yardley</span></li>');
						$(
							"#functionUL")
						.html(
							'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li><li><span data-path=".Pharmacovigilance">Pharmacovigilance</span></li>');
						$(
							"#businessUL")
						.html(
							'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Allergy">Allergy</span></li><li><span data-path=".Corporate">Corporate</span></li>');
						$(
							"#jobpostingsBody")
						.html(
							'<tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Inside Sales Representative</td><td class="desc">An arch is a structure that spans a space and supports a load.</td><td class="Spokane">Spokane</td><td class="Allergy">Allergy</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

						$(
							'#demo')
						.jplist(
						{
							itemsBox : '.demo-tbl',
							itemPath : '.tbl-item',
							panelPath : '.jplist-panel'
						});

						$(
							'.demo-tbl .header')
						.on(
							'click',
							function() {
								$(
									this)
								.next(
									'.sort-btns')
								.find(
									'[data-path]:not(.jplist-selected):first')
								.trigger(
									'click');
							});


						$('#section2description')
						.show();
						$(
							'html,body')
						.animate(
						{
							scrollTop : $(
								'.jplist')
							.offset().top - 80
						},
						'slow');


				
						};
						var t11 = paper.text(30, 205, "Montreal, Quebec" + "\n"
								+ "Montreal, Quebec" + "\n"
								+ "Spokane, Washington" + "\n"
								+ "Salisbury, Maryland");
						t11.node.onclick = function() {
							alert("");
						};
						t11.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 10,
							"font-weight" : "normal",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t11, t11);
						// second usa close
						// North America
						paper.rect(185, 10, 0.5, 90).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(185, 10, 10, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						var c2 = paper.rect(190, 1, 150, 45).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2
						});

						var t8 = paper.text(190, 10, "North America");
						t8.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t8, t8);
						t8.node.onclick = function() {
							$(
							"#locationUL")
						.html(
							'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Spokane">Spokane</span></li><li><span data-path=".Yardley">Yardley</span></li>');
						$(
							"#functionUL")
						.html(
							'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li><li><span data-path=".Pharmacovigilance">Pharmacovigilance</span></li>');
						$(
							"#businessUL")
						.html(
							'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Allergy">Allergy</span></li><li><span data-path=".Corporate">Corporate</span></li>');
						$(
							"#jobpostingsBody")
						.html(
							'<tr class="tbl-item"><td class="title">Learning & Development Manager</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Yardley">Yardley</td><td class="Corporate">Corporate</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Inside Sales Representative</td><td class="desc">An arch is a structure that spans a space and supports a load.</td><td class="Spokane">Spokane</td><td class="Allergy">Allergy</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

						$(
							'#demo')
						.jplist(
						{
							itemsBox : '.demo-tbl',
							itemPath : '.tbl-item',
							panelPath : '.jplist-panel'
						});

						$(
							'.demo-tbl .header')
						.on(
							'click',
							function() {
								$(
									this)
								.next(
									'.sort-btns')
								.find(
									'[data-path]:not(.jplist-selected):first')
								.trigger(
									'click');
							});


						$('#section2description')
						.show();
						$(
							'html,body')
						.animate(
						{
							scrollTop : $(
								'.jplist')
							.offset().top - 80
						},
						'slow');


					
				
						};
						var t9 = paper.text(190, 30, "Malvern, Pennsylvania"
								+ "\n" + "Yardley Pennsylvania");
						t9.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 10,
							"font-weight" : "normal",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t9, t9);
						t9.node.onclick = function() {
							alert("");
						};

						// North america close
						paper.rect(690, 48, 0.5, 120).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						paper.rect(570, 173, 0.5, 70).attr({
							stroke : "#ffcc29",
							fill : "#ffcc29",
							"stroke-width" : 2
						});
						paper.rect(570, 173, 120, 0.5).attr({
							stroke : "#ffcc29",
							fill : "#ffcc29",
							"stroke-width" : 2
						});
						// india manufacture rectangle
						var c3 = paper.rect(480, 240, 160, 85).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2
						});

						var t4 = paper.text(485, 250, "India - Manufacturing");
						t4.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t4, t4);
						t4.node.onclick = function() {
							$(
							"#locationUL")
						.html(
							'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Banglore">Banglore</span></li><li><span data-path=".Noida">Noida</span></li>');
						$(
							"#functionUL")
						.html(
							'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
						$(
							"#businessUL")
						.html(
							'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Dosage_Forms">Dosage Forms</span></li><li><span data-path=".Generics">Generics</span></li>');
						$(
							"#jobpostingsBody")
						.html(
							'<tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

						$(
							'#demo')
						.jplist(
						{
							itemsBox : '.demo-tbl',
							itemPath : '.tbl-item',
							panelPath : '.jplist-panel'
																//save plugin state
																//,storage: 'localstorage' //'', 'cookies', 'localstorage'			
																//,storageName: 'jplist-table-sortable-cols'
															});

						$(
							'.demo-tbl .header')
						.on(
							'click',
							function() {
								$(
									this)
								.next(
									'.sort-btns')
								.find(
									'[data-path]:not(.jplist-selected):first')
								.trigger(
									'click');
							});
						$('#section2description')
						.show();
						$(
							'html,body')
						.animate(
						{
							scrollTop : $(
								'.jplist')
							.offset().top - 80
						},
						'slow');
						
	};
						var t5 = paper.text(485, 270, "Nanjangud, Karnatak,"
								+ "\n" + "Roorkee, Uttrakhand");
						t5.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 10,
							"font-weight" : "normal",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t5, t5);
						t5.node.onclick = function() {
							alert("");
						};
						var t6 = paper.text(485, 290, "R&D Centers");
						t6.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t6, t6);
						t6.node.onclick = function() {
							$(
							"#locationUL")
						.html(
							'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Banglore">Banglore</span></li><li><span data-path=".Noida">Noida</span></li>');
						$(
							"#functionUL")
						.html(
							'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
						$(
							"#businessUL")
						.html(
							'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Dosage_Forms">Dosage Forms</span></li><li><span data-path=".Generics">Generics</span></li>');
						$(
							"#jobpostingsBody")
						.html(
							'<tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

						$(
							'#demo')
						.jplist(
						{
							itemsBox : '.demo-tbl',
							itemPath : '.tbl-item',
							panelPath : '.jplist-panel'
																//save plugin state
																//,storage: 'localstorage' //'', 'cookies', 'localstorage'			
																//,storageName: 'jplist-table-sortable-cols'
															});

						$(
							'.demo-tbl .header')
						.on(
							'click',
							function() {
								$(
									this)
								.next(
									'.sort-btns')
								.find(
									'[data-path]:not(.jplist-selected):first')
								.trigger(
									'click');
							});
						$('#section2description')
						.show();
						$(
							'html,body')
						.animate(
						{
							scrollTop : $(
								'.jplist')
							.offset().top - 80
						},
						'slow');
						

						};
						var t7 = paper.text(485, 310, "Noida, Uttar Pradesh,"
								+ "\n" + "Nanjangud Karnatak");
						t7.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 10,
							"font-weight" : "normal",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t7, t7);
						t7.node.onclick = function() {
							alert("");
						};
						paper.rect(690, 50, 120, 0.5).attr({
							stroke : "#8ec859",
							fill : "#8ec859",
							"stroke-width" : 2
						});
						// for india offices
						var c4 = paper.rect(780, 18, 150, 60).attr({
							stroke : "#f3f3f4",
							fill : "#f3f3f4",
							"stroke-width" : 2
						});

						var t2 = paper.text(785, 28, "India - Offices");
						t2.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 12,
							"font-weight" : "bold",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t2, t2);
						t2.node.onclick = function() {
							$(
							"#locationUL")
						.html(
							'<li><span data-path="default">Filter by Location</span></li><li><span data-path=".Banglore">Banglore</span></li><li><span data-path=".Noida">Noida</span></li>');
						$(
							"#functionUL")
						.html(
							'<li><span data-path="default">Filter by Function</span></li><li><span data-path=".Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</span></li>');
						$(
							"#businessUL")
						.html(
							'<li><span data-path="default">Filter by Business</span></li><li><span data-path=".Dosage_Forms">Dosage Forms</span></li><li><span data-path=".Generics">Generics</span></li>');
						$(
							"#jobpostingsBody")
						.html(
							'<tr class="tbl-item"><td class="title">DGM - Business Development & Sales</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Noida">Noida</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span class="modalTrigger" style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr><tr class="tbl-item"><td class="title">Manager - Sales & Marketing (Domestic)</td><td class="desc">A Short job-description telling all the main responsibilites and tasks related to this job.</td><td class="Banglore">Banglore</td><td class="Sales_Marketing_n_Business_Development">Sales, Marketing & Business Development</td><td><a href="#" data-toggle="modal" data-target="#myModal"><span style="cursor: pointer; text-decoration: underline; color: #004d99;"><i class="fa fa-paper-plane"></i>&nbsp;Apply</span></a><br><a href="#" data-toggle="modal" data-target="#emailModal"><span style="cursor: pointer; text-decoration: underline; color: #80bb2d;"><i class="fa fa-envelope"></i>&nbsp;Refer a friend</span></a></td></tr>');

						$(
							'#demo')
						.jplist(
						{
							itemsBox : '.demo-tbl',
							itemPath : '.tbl-item',
							panelPath : '.jplist-panel'
																//save plugin state
																//,storage: 'localstorage' //'', 'cookies', 'localstorage'			
																//,storageName: 'jplist-table-sortable-cols'
															});

						$(
							'.demo-tbl .header')
						.on(
							'click',
							function() {
								$(
									this)
								.next(
									'.sort-btns')
								.find(
									'[data-path]:not(.jplist-selected):first')
								.trigger(
									'click');
							});
						$('#section2description')
						.show();
						$(
							'html,body')
						.animate(
						{
							scrollTop : $(
								'.jplist')
							.offset().top - 80
						},
						'slow');
						

						};
						var t3 = paper.text(785, 53, "Noida, Uttar Pradesh"
								+ "\n" + "Greater Noida, Uttar Pradesh" + "\n"
								+ "Mumbai, Maharastra");
						t3.attr({
							"font-family" : "georgia",
							"cursor" : "pointer",
							fill : "black",
							"font-size" : 10,
							"font-weight" : "normal",
							stroke : "black",
							"stroke-width" : "0px",
							"text-anchor" : "start",
							"font-style" : "normal"
						}).hover(hoverIn, hoverOut, t3, t3);
						t3.node.onclick = function() {
							alert("");
						};
						// india offices
					},
				},
				// Customize some areas of the map
				areas : {
					"IN" : {
						eventHandlers : {
							click : function() {
								alert("");
							},
						},
						attrs : {
							fill : "#20359E"
						},
						attrsHover : {
							fill : "#000000"
						},

					},
					"CA" : {
						eventHandlers : {
							click : function() {
								alert("");
							},
						},

						attrs : {
							fill : "#20359E"
						},
						attrsHover : {
							fill : "#000000"
						}
					},
					"US" : {

						eventHandlers : {
							click : function() {
								alert("");
							},
						},
						attrs : {
							fill : "#20359E"
						},
						attrsHover : {
							fill : "#000000"
						}
					}
				},

			// Add some plots on the map

			});

});
/* Map Script End */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

$('#myBtn').click(function() {
	$("html, body").animate({
		scrollTop : 0
	}, 600);
	return false;
});

// $('.carousel').carousel({ pause: "false" });

/*
 * $(document).ready(function(){ var scroll_start = 0; var startchange =
 * $('#section2'); var offset = startchange.offset();
 * $(document).scroll(function() { scroll_start = $(this).scrollTop();
 * if(scroll_start > offset.top) { $('.navbar-default').css('background-color',
 * '#ffffff'); } else { $('.navbar-default').css('background-color',
 * 'transparent'); } }); });
 */

/*
 * $(document).ready(function(){ $(window).scroll(function() { // check if
 * scroll event happened if ($(document).scrollTop() > 100) { // check if user
 * scrolled more than 50 from top of the browser window
 * $(".navbar-default").css("background-color", "#ffffff"); // if yes, then
 * change the color of class "navbar-fixed-top" to white (#f8f8f8) } else {
 * $(".navbar-default").css("background-color", "transparent"); // if not,
 * change it back to transparent } }); });
 */

$(window).scroll(function() {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(document)
		.ready(
				function() {
					$('#referForm')
							.bootstrapValidator(
									{
										// To use feedback icons, ensure that
										// you use Bootstrap v3.1.0 or later
										feedbackIcons : {
											valid : 'glyphicon glyphicon-ok',
											invalid : 'glyphicon glyphicon-remove',
											validating : 'glyphicon glyphicon-refresh'
										},
										fields : {
											name : {
												validators : {
													stringLength : {
														min : 2,
													},
													notEmpty : {
														message : 'Please write your full name'
													}
												}
											},
											email : {
												validators : {
													notEmpty : {
														message : 'Please enter your friends email address'
													},
													emailAddress : {
														message : 'Please supply a valid email address'
													}
												}
											},
											subject : {
												validators : {
													stringLength : {
														min : 8,
													},
													notEmpty : {
														message : 'Please enter your subject'
													}
												}
											},
											message : {
												validators : {
													stringLength : {
														min : 10,
														max : 200,
														message : 'Please enter at least 10 characters and no more than 200'
													},
													notEmpty : {
														message : 'Please write your message'
													}
												}
											}
										}
									}).on(
									'success.form.bv',
									function(e) {
										$('#success_message').slideDown({
											opacity : "show"
										}, "slow") // Do something ...
										$('#referForm').data(
												'bootstrapValidator')
												.resetForm();

										// Prevent form submission
										e.preventDefault();

										// Get the form instance
										var $form = $(e.target);

										// Get the BootstrapValidator instance
										var bv = $form
												.data('bootstrapValidator');

										// Use Ajax to submit form data
										$.post($form.attr('action'), $form
												.serialize(), function(result) {
											console.log(result);
										}, 'json');
									});
				});