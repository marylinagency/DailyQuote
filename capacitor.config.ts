
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.16d7eacaa6564e4db7c5ec42b53dfa5d',
  appName: 'ad-easy-mobile-ads',
  webDir: 'dist',
  server: {
    url: 'https://16d7eaca-a656-4e4d-b7c5-ec42b53dfa5d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#9b87f5",
      sound: "beep.wav"
    },
    SplashScreen: {
      backgroundColor: "#9b87f5",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;
