
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import QuoteCard from "@/components/QuoteCard";
import LanguageSelection from "@/components/LanguageSelection";
import SplashScreen from "@/components/SplashScreen";
import { getRandomQuote, getDailyQuote, setQuoteLanguage } from "@/services/quoteService";
import { initializeAdMob, showBannerAd, showInterstitialAd } from "@/services/adMob";
import { scheduleQuoteNotification, scheduleDailyQuoteNotification } from "@/services/notificationService";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  // Define all state hooks first, before any conditional returns
  const isMobile = useIsMobile();
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [adInitialized, setAdInitialized] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('quoteLanguage') || 'en'
  );
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  
  // First useEffect - for splash screen and first-time check
  useEffect(() => {
    const hasLanguageSet = localStorage.getItem('quoteLanguage');
    setIsFirstTime(!hasLanguageSet);
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Second useEffect - for app setup
  useEffect(() => {
    // Only run the setup if we're showing the main app (not splash or language selection)
    if (!showSplash && !isFirstTime) {
      const setupApp = async () => {
        try {
          const todayQuote = getDailyQuote();
          setQuote(todayQuote);
          
          if (isMobile !== undefined) {
            try {
              await initializeAdMob();
              await showBannerAd();
              setAdInitialized(true);
              
              await scheduleDailyQuoteNotification();
            } catch (adError) {
              console.error("Ad initialization error:", adError);
              // Continue app function even if ads fail
            }
          }
        } catch (error) {
          console.error("Error setting up app:", error);
        } finally {
          setIsLoading(false);
        }
      };

      setupApp();
    }
  }, [isMobile, showSplash, isFirstTime]);

  const handleFirstTimeLanguageSelect = (language: string) => {
    setQuoteLanguage(language as 'en' | 'ar' | 'fr' | 'es');
    setCurrentLanguage(language);
    setIsFirstTime(false);
    const todayQuote = getDailyQuote();
    setQuote(todayQuote);
    toast.success("Language set successfully!");
  };

  const handleLanguageChange = (language: string) => {
    setQuoteLanguage(language as 'en' | 'ar' | 'fr' | 'es');
    setCurrentLanguage(language);
    const todayQuote = getDailyQuote();
    setQuote(todayQuote);
    toast.success("Language changed successfully!");
  };

  const handleNextQuote = async () => {
    setIsLoading(true);
    
    try {
      // Show ad if initialized, but don't wait for it if there's an error
      if (adInitialized) {
        try {
          await showInterstitialAd();
        } catch (adError) {
          console.error("Ad display error:", adError);
          // Continue even if ad fails
        }
      }
      
      const newQuote = getRandomQuote();
      setQuote(newQuote);
      
      if (isMobile) {
        try {
          await scheduleQuoteNotification(newQuote.text, newQuote.author);
        } catch (notificationError) {
          console.error("Notification error:", notificationError);
          // Continue even if notification fails
        }
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      // Don't show error toast anymore as requested
    } finally {
      setIsLoading(false);
    }
  };

  // Render different views based on state, but after all hooks have been defined
  if (showSplash) {
    return <SplashScreen />;
  }

  if (isFirstTime) {
    return <LanguageSelection onLanguageSelect={handleFirstTimeLanguageSelect} />;
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #F6F0FE 0%, #E9E1FC 100%)"
      }}
    >
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#7E69AB]">
          {currentLanguage === 'ar' ? 'اقتباس اليوم' :
           currentLanguage === 'fr' ? 'Citation du Jour' :
           currentLanguage === 'es' ? 'Cita del Día' : 
           'Daily Quote'}
        </h1>
        
        <QuoteCard 
          quoteText={quote.text} 
          quoteAuthor={quote.author}
          onNextQuote={handleNextQuote}
          isLoading={isLoading}
          onLanguageChange={handleLanguageChange}
          currentLanguage={currentLanguage}
        />
        
        <p className="text-center mt-8 text-sm text-gray-500">
          {currentLanguage === 'ar' ? 'انقر على "اقتباس التالي" للمزيد من الإلهام!' :
           currentLanguage === 'fr' ? 'Appuyez sur "Citation Suivante" pour plus d\'inspiration!' :
           currentLanguage === 'es' ? '¡Toca "Siguiente Cita" para más inspiración!' :
           'Tap "Next Quote" for more inspiration!'}
        </p>
        
        <div className="h-16 mt-6 w-full bg-gray-100 flex items-center justify-center rounded">
          <p className="text-xs text-gray-400">Banner Ad Space</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
