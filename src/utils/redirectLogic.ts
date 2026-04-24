export const handleOrderRedirect = (platform: 'zomato' | 'swiggy') => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // NOTE: Replace with actual restaurant IDs/URLs when available
  const links = {
    zomato: {
      app: 'zomato://restaurant/123456', // Placeholder deep link
      web: 'https://www.zomato.com/kolkata/murgyani-the-khandaani-biryani-jadavpur' // Placeholder
    },
    swiggy: {
      app: 'swiggy://menu/1083054', // Based on the provided link
      web: 'https://www.swiggy.com/city/kolkata/murgyani-the-khaandani-biryani-santoshpur-rest1083054'
    }
  };

  const { app, web } = links[platform];

  if (isMobile) {
    // Attempt to open the app
    window.location.href = app;

    // Fallback to web if app is not installed
    setTimeout(() => {
      window.location.href = web;
    }, 1500);
  } else {
    // Desktop: go straight to web
    window.open(web, '_blank');
  }
};
