

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