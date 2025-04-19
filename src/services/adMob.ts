import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize, InterstitialAdPluginEvents } from '@capacitor-community/admob';

// Initialize AdMob - call this at app startup
export const initializeAdMob = async () => {
  await AdMob.initialize({
    appId: 'ca-app-pub-1052685523999700~4657954369', // Your App ID
    testingDevices: ['EMULATOR'],
    initializeForTesting: true, // Set to false for production
  });
};

// Banner ad configuration
const bannerOptions: BannerAdOptions = {
  adId: 'ca-app-pub-1052685523999700/2295740248', // Your Banner Ad unit ID
  adSize: BannerAdSize.ADAPTIVE_BANNER,
  position: BannerAdPosition.BOTTOM_CENTER,
  margin: 0,
  isTesting: true // Set to false for production
};

// Show banner ad
export const showBannerAd = async () => {
  await AdMob.showBanner(bannerOptions);
};

// Hide banner ad
export const hideBannerAd = async () => {
  await AdMob.removeBanner();
};

// Load and show interstitial ad
export const showInterstitialAd = async () => {
  // Load the interstitial ad
  await AdMob.prepareInterstitial({
    adId: 'ca-app-pub-1052685523999700/5396320968', // Your Interstitial Ad unit ID
    isTesting: true // Set to false for production
  });

  // Add a listener for the ad being loaded
  AdMob.addListener(InterstitialAdPluginEvents.Loaded, () => {
    // Show the interstitial ad when loaded
    AdMob.showInterstitial();
  });
};
