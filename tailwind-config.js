

//gradient css

tailwind.config = {
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      }                    
    },
  },
};
// Hero CSS

const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-in-out;
}
.animate-slideInRight {
  animation: slideInRight 1.5s ease-out;
}
.animate-slideInLeft {
  animation: slideInLeft 1.5s ease-out;
}
`;
document.head.appendChild(style);


// Team swiper js

const swiper = new Swiper('.mySwiper', {
slidesPerView: 1, 
spaceBetween: 20,
loop: true,
autoplay: {
  delay: 2000,
  disableOnInteraction: false,
},
breakpoints: {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
},
// pagination: {
//   el: '.swiper-pagination',
//   clickable: true,
// },
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});


// Swiper JS About Us page

const swiperAbout = new Swiper('.mySwiperAbout', {
  slidesPerView: 4, // Default: 4 columns
  grid: {
    rows: 2, // Default: 2 rows
    fill: 'row',
  },
  spaceBetween: 20, // Space between cards
  loop: true, // Infinite loop
  autoplay: {
    delay: 1200, // Auto-slide every 2 seconds
    disableOnInteraction: false, // Keep autoplay running
  },

  breakpoints: {
    // For small and medium screens
    0: {
      slidesPerView: 2, // 2 columns
      grid: {
        rows: 2, // 2 rows
      },
    },
    768: {
      slidesPerView: 4, // 4 columns
      grid: {
        rows: 2, // 2 rows
      },
    },
  },
});