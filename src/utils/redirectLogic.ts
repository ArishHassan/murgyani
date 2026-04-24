export const handleOrderRedirect = (platform: 'zomato' | 'swiggy') => {
  // NOTE: Replace with actual restaurant IDs/URLs when available
  const links = {
    zomato: 'https://www.zomato.com/kolkata/murgyani-the-khandaani-biryani-jadavpur',
    swiggy: 'https://www.swiggy.com/city/kolkata/murgyani-the-khaandani-biryani-santoshpur-rest1083054'
  };

  const targetUrl = links[platform];

  // Using the standard HTTPS web links is the most reliable method.
  // Both Zomato and Swiggy use "Universal Links" (iOS) and "App Links" (Android).
  // If the user is on mobile and has the app installed, their phone's OS will 
  // automatically intercept the web link and open the app natively.
  // If they don't have the app (or are on desktop), it safely opens the web browser page,
  // completely avoiding the "ERR_UNKNOWN_URL_SCHEME" browser error.
  
  window.open(targetUrl, '_blank');
};
