
import { LocalNotifications } from '@capacitor/local-notifications';
import { getDailyQuote } from './quoteService';

export const scheduleQuoteNotification = async (quote: string, author: string) => {
  await LocalNotifications.requestPermissions();
  
  // Schedule notification with the quote
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'Daily Inspiration',
        body: `"${quote}" - ${author}`,
        id: Math.floor(Math.random() * 100000),
        schedule: { at: new Date(Date.now() + 1000 * 5) }, // Show 5 seconds from now
        sound: null,
        actionTypeId: '',
        extra: null
      }
    ]
  });
};

export const scheduleDailyQuoteNotification = async () => {
  await LocalNotifications.requestPermissions();

  // Get tomorrow's date at 8:00 AM
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(8, 0, 0, 0);

  const dailyQuote = getDailyQuote();

  // Schedule notification
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'Your Daily Quote',
        body: `"${dailyQuote.text}" - ${dailyQuote.author}`,
        id: 1, // Using fixed ID to avoid multiple notifications
        schedule: { at: tomorrow },
        sound: 'beep.wav',
        actionTypeId: '',
        extra: null
      }
    ]
  });
};
