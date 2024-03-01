
new WOW().init();


// progress bar
var progressBar = document.querySelector("#progress-bar");
var maxScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateProgress() {
  var percentScrolled = window.scrollY / maxScrollHeight * 100;
  progressBar.style.width = (percentScrolled) + "%";
}

document.addEventListener("scroll", updateProgress);

// owl carousel
$('#owl-partner').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:3,
  dots:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('#partner2').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:3,
  dots:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('#drinks-owl').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  items:4,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.owl-carousel').on('click', '.item', function() {
  // Get the source (src) attribute of the clicked image
  var imgSrc = $(this).find('img').attr('src');

  // Display the clicked image in the target div
  $('#targetDiv').html('<img src="' + imgSrc + '" alt="">');
});

$('.owl-arrow-right').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  
  $('.owl-arrow-left').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });


  $('#owl-menu').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    items:4,
    dots:false,
    mouseDrag:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })

  $('.owl-menu-arrow-right').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  
  $('.owl-menu-arrow-left').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });



//   cursor
  $(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

// preloader
$(window).on('load', function() {
    setInterval(function() {
        $("head title").fadeOut(300, function() {
            $(this).text($(this).text().substring(1) + $(this).text().substring(0, 1)).fadeIn(300); }); }, 300);
  
    let progressBarProload = $('.progress-bar-proload');
    let progressValue = 0;
    let interval = setInterval(increaseProgress,50);
  
    function increaseProgress() {
        progressValue += 1;
        progressBarProload.css('width', progressValue + '%').attr('aria-valuenow', progressValue);
        $('.persentase').text(progressValue + '%');
        if (progressValue >= 100) {
            clearInterval(interval);
            $(".preloader").fadeOut("slow");
        }
    }
  })

  // menu filter

  document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll('.owl-menu-title a');
    console.log(navLinks);
    let items = document.querySelectorAll('.all-menu .menu-item');
    console.log(items);

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        filterItems(filter);
      });
    });
  
    function filterItems(filter) {
      items.forEach(function(item) {
        let category = item.getAttribute('data-category');
        console.log(category);
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
