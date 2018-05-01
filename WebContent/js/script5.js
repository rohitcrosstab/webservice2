// $('#myCarousel').carousel({ pause: "false" });

	$(document).ready(function(){
		

	//$('#myModal').modal('show');

	  // Add scrollspy to <body>
	  $('body').scrollspy({target: ".navbar"});   

	  // Add smooth scrolling on all links inside the navbar
	  $("#bs-example-navbar-collapse-1 a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	      	scrollTop: $(hash).offset().top
	      }, 800, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	    });
	    }  // End if
	});
		$(".testimonials").hide();
		$(".testimonials").fadeIn(6000);

	/*	$('#goToHome').click(function() {
			$('html,body').animate({
				scrollTop : $('#section1').offset().top - 50
			}, 'slow');
		})
		$('#goToJobMap').click(function() {
			$('html,body').animate({
				scrollTop : $('#section2').offset().top - 50
			}, 'slow');
		})
		
		$('#goToCoreValues').click(function() {
			$('html,body').animate({
				scrollTop : $('#section3').offset().top - 50
			}, 'slow');
		})
		$('#goToEmpSpeak').click(function() {
			$('html,body').animate({
				scrollTop : $('#section4').offset().top - 50
			}, 'slow');
		})*/

		$('#scrollToJobMap2').click(function() {

			$('html,body').animate({
				scrollTop : $('.container-map').offset().top
			}, 'slow');

		})

		$('#scrollToJobMap3').click(function() {

			$('html,body').animate({
				scrollTop : $('.container-map').offset().top
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
				$(".container-map")
						.mapael(
								{
									map : {
										name : "world_countries"

										// Enable zoom on the map
										,
										zoom : {
											enabled : true,
											maxLevel : 10,
											
											mousewheel : false,
											buttons: {
						                        "reset": {
						                            cssClass: "zoomButton zoomReset",
						                            content: "&#x2609;", // bullet sign
						                            title: "Reset zoom"
						                        },
						                        "in": {
						                            cssClass: "zoomButton zoomIn",
						                            content: "+",
						                            title: "Zoom in"
						                        },
						                        "out": {
						                            cssClass: "zoomButton zoomOut",
						                            content: "-", // minus sign
						                            title: "Zoom out"
						                        }
						                    },
											
										}
										// Set default plots and areas style
										,
										defaultPlot : {
											attrs : {
												fill : "#e2e2e2",
												opacity : 2
											},
											attrsHover : {
												opacity : 5,
												stroke : "#ffffff",
												animDuration:0,
												"stroke-width" : 2
											},
											text : {
												attrs : {
													fill : "#505444"
												},
												attrsHover : {
													fill : "#000",
													stroke : "#ffffff",
													animDuration:0,
													"stroke-width" : 2
												}
											}
										},
										defaultArea : {
											attrs : {
												fill : "#e2e2e2",
												stroke : "#4dc7f3"
											},
											attrsHover : {
												fill : "#000000",
												stroke : "#ffffff",
												animDuration:0,
												"stroke-width" : 2
											},
											text : {
												attrs : {
													fill : "#505444"
												},
												attrsHover : {
													fill : "#000",
													stroke : "#ffffff",
													animDuration:0,
													"stroke-width" : 2
												}
											}
										},
										
									},
									// Customize some areas of the map
									areas : {
										"IN" : {
											eventHandlers : {
												click : function() {
													map("IND");
												},
										},
										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">India</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">India</span><br />"
										},

									},
										"CA" : {
											eventHandlers : {
												click : function() {
													map("CAN");
												

											},
										},
										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Canada</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">Canada</span><br />"
										},

									},
										"US" : {
											eventHandlers : {
												click : function() {
													map("USA");

											},
										},
										attrs : {
											fill : "#06425b"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">USA</span><br />"
										},
										attrsHover : {
											fill : "#000000"
										},
										tooltip : {
											content : "<span style=\"font-weight:bold;\">USA</span><br />"
										},

									},
										"MY" : {
											eventHandlers : {
												click : function() {
													map("MYS");
												},
											},
											tooltip : {
												content : "<center><span style=\"font-weight:bold;padding: 5px;max-width: 200px;background-color: #000;color: #fff;\">Malaysia</span></center>"
											},
											attrs : {
												fill : "#06425b"
											},
											attrsHover : {
												fill : "#000000"
											}
										},
										"BE" : {
											eventHandlers : {
												click : function() {
													map("BEL");
												},
											},
											tooltip : {
												content : "<center><span style=\"font-weight:bold;padding: 5px;max-width: 200px;background-color: #000;color: #fff;\">Belgium</span></center>"
											},
											attrs : {
												fill : "#06425b"
											},
											attrsHover : {
												fill : "#000000"
											}
										},
										"CN" : {

											eventHandlers : {
												click : function() {
													map("CHN");
												},
											},
											attrs : {
												fill : "#06425b"
											},
											tooltip : {
												content : "<center><span style=\"font-weight:bold;padding: 5px;max-width: 200px;background-color: #000;color: #fff;\">China</span></center>"
											},
											attrsHover : {
												fill : "#000000"
											}
										}
									},

									// Add some plots on the map
									plots : {
										// Image plot
										// Plot positioned by x and y instead of latitude, longitude

										'Chittorgarh' : {
											size : 5,
											latitude : 28.8887,
											longitude : 74.6269,
											eventHandlers : {
												click : function() {
													maps("CT");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,

											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Chittorgarh</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Bharuch' : {
											size : 5,
											latitude : 21.7051,
											longitude : 72.9959,
											eventHandlers : {
												click : function() {
													maps("B04");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Bharuch</span><br /></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Ambarnath' : {
											size : 5,
											latitude : 19.1825,
											longitude : 73.1926,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Ambarnath</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'bengalore' : {
											size : 5,
											latitude : 12.9716,
											longitude : 77.5946,
											eventHandlers : {
												click : function() {
													maps("B01");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Banglore</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},

										'noida' : {
											size : 5,
											latitude : 27.5355,
											longitude : 77.3910,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Noida</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Nira' : {
											size : 5,
											latitude : 18.1022,
											longitude : 74.2119,
											eventHandlers : {
												click : function() {
													maps("N03");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Nira</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Mumbai' : {
											size : 5,
											latitude : 25.0760,
											longitude : 72.8777,
											eventHandlers : {
												click : function() {
													maps("M05");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Mumbai</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										
										'Roorkee' : {
											size : 5,
											latitude : 30.8543,
											longitude : 77.8880,
											eventHandlers : {
												click : function() {
													maps("R10");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Roorkee</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Spokane' : {
											size : 5,
											latitude : 47.658779,
											longitude : -117.426048,
											eventHandlers : {
												click : function() {
												maps("SPK");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Spokane</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Yardley' : {
											size : 5,
											latitude : 42.2457,
											longitude : -75.8459472,
											eventHandlers : {
												click : function() {
												maps("YRD");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Yardley</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Salisbury' : {
											size : 5,
											latitude : 38.3606700,
											longitude : -75.5993700,
											eventHandlers : {
												click : function() {
													maps("SBY");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Salisbury</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Malvern' : {
											size : 5,
											latitude : 40.036217,
											longitude : -75.513809,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Malvern</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Shanghai' : {
											size : 5,
											latitude : 31.2304,
											longitude : 121.4737,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Shanghai</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Merelbeke' : {
											size : 5,
											latitude : 50.9945,
											longitude : 3.7456,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Merelbeke</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Singapore' : {
											size : 5,
											latitude : 1.3521,
											longitude : 103.8198,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Singapore</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'orlando' : {
											size : 5,
											latitude : 28.538336,
											longitude : -81.379234,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Orlando</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Nanjangud' : {
											size : 5,
											latitude : 12.1200,
											longitude : 76.6801,
											eventHandlers : {
												click : function() {
													maps("N04");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Nanjangud</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										
										
										'Gajraula' : {
											size : 5,
											latitude : 28.8448,
											longitude : 78.2393,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Gajraula</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Savli' : {
											size : 5,
											latitude : 22.5616,
											longitude : 73.2220,
											eventHandlers : {
												click : function() {
													maps("S04");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Savli</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Hyderabad' : {
											size : 5,
											latitude : 17.3850,
											longitude : 78.4867,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Hyderabad</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},

										'Bengaluru' : {
											size : 5,
											latitude : 12.9716,
											longitude : 77.5946,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Bengaluru</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},
										'Montreal' : {
											size : 5,
											latitude : 45.5016889,
											longitude : -73.5672559999999999,
											eventHandlers : {
												click : function() {
													maps("nodata");
												},
											},
											attrs : {
												fill : "orange",
												opacity : 1,
												stroke : '#f4f4e8',
												"stroke-width" : 1,
											},
											tooltip : {
												content : "<center><img src='ju.png'width='60%'height='60%'/><br><span style=\"font-weight:bold;\">Montreal</span></center>"
											},
											attrsHover : {
												fill : "orange",
												stroke : '#f4f4e8',
												"stroke-width" : 2,

											}
										},

									}
								});

			});
	/* Map Script End */

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	}

	$('#myBtn').click(function () {
	    $("html, body").animate({
	        scrollTop: 0
	    }, 600);
	    return false;
	});

	//$('.carousel').carousel({ pause: "false" });

	/*$(document).ready(function(){       
	   var scroll_start = 0;
	   var startchange = $('#section2');
	   var offset = startchange.offset();
	   $(document).scroll(function() { 
	      scroll_start = $(this).scrollTop();
	      if(scroll_start > offset.top) {
	          $('.navbar-default').css('background-color', '#ffffff');
	       } else {
	          $('.navbar-default').css('background-color', 'transparent');
	       }
	   });
	});*/

	/*    $(document).ready(function(){
	      $(window).scroll(function() { // check if scroll event happened
	        if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
	          $(".navbar-default").css("background-color", "#ffffff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
	        } else {
	          $(".navbar-default").css("background-color", "transparent"); // if not, change it back to transparent
	        }
	      });
	    });*/

	$(window).scroll(function(){
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
	});

	  $(document).ready(function() {
	    $('#referForm').bootstrapValidator({
	        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            name: {
	                validators: {
	                        stringLength: {
	                        min: 2,
	                    },
	                        notEmpty: {
	                        message: 'Please write your full name'
	                    }
	                }
	            },
	            email: {
	                validators: {
	                    notEmpty: {
	                        message: 'Please enter your friends email address'
	                    },
	                    emailAddress: {
	                        message: 'Please supply a valid email address'
	                    }
	                }
	            },
	            subject: {
	                validators: {
	                     stringLength: {
	                        min: 8,
	                    },
	                    notEmpty: {
	                        message: 'Please enter your subject'
	                    }
	                }
	            },
	            message: {
	                validators: {
	                      stringLength: {
	                        min: 10,
	                        max: 200,
	                        message:'Please enter at least 10 characters and no more than 200'
	                    },
	                    notEmpty: {
	                        message: 'Please write your message'
	                    }
	                    }
	                }
	            }
	        })
	        .on('success.form.bv', function(e) {
	            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
	                $('#referForm').data('bootstrapValidator').resetForm();

	            // Prevent form submission
	            e.preventDefault();

	            // Get the form instance
	            var $form = $(e.target);

	            // Get the BootstrapValidator instance
	            var bv = $form.data('bootstrapValidator');

	            // Use Ajax to submit form data
	            $.post($form.attr('action'), $form.serialize(), function(result) {
	                console.log(result);
	            }, 'json');
	        });
	});

/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

  //jubilant core values
  					$('.col-is-1').hover(function() {
						$('.banner').css("background-color", "#2957A4");
						$('.banner h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner h2').css("color", "#000000");
					});

					$('.col-is-2').hover(function() {
						$('.banner').css("background-color", "#8EC858");
						$('.banner h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner h2').css("color", "#000000");
					});

					$('.col-is-3').hover(function() {
						$('.banner').css("background-color", "#FFDE1F");
						$('.banner h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner h2').css("color", "#000000");
					});

					$('.col-is-4').hover(function() {
						$('.banner').css("background-color", "#364086");
						$('.banner h2').css("color", "#ffffff");
					}, function() {
						$('.banner').css("background-color", "#ffffff");
						$('.banner h2').css("color", "#000000");
					});
					$("#xmltojson").click(function() {
						$.ajax({
							type : "GET",

							url : "http://localhost:8002/xmlparser/rest/test/xmltojson",
							dataType : "xml",
							success : function(xmlData) {
								console.log(xmlData);
							}
						});
					});
				 
});
function map(country){
	  $.ajax({
			type : "GET",

			url : "http://localhost:8002/xmlparser/rest/test/mapdata/"+country,
			dataType : "json",
			success : function(mapData) {
$('#demo').html(mapData);
				
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
			}
		});
}
function maps(state){
	  $.ajax({
			type : "GET",

			url : "http://localhost:8002/xmlparser/rest/test/mapdatas/"+state,
			dataType : "html",
			success : function(mapsData) {
				console.log(mapsData);
				
			$("#demo").html(mapsdata);	
				
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
			}
		});
} 

