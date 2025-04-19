
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuoteCardProps {
  quoteText: string;
  quoteAuthor: string;
  onNextQuote: () => void;
  isLoading: boolean;
  onLanguageChange: (language: string) => void;
  currentLanguage: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  quoteText,
  quoteAuthor,
  onNextQuote,
  isLoading,
  onLanguageChange,
  currentLanguage
}) => {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg animate-fade-in">
      <CardContent className="p-6">
        <div className="flex justify-end mb-4">
          <Select value={currentLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-[100px]">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="mb-6 min-h-[180px] flex items-center justify-center">
          <div className="text-center">
            <p className={`text-2xl font-medium text-gray-800 mb-4 leading-relaxed ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
              "{quoteText}"
            </p>
            <p className="text-lg text-purple-600 font-semibold">- {quoteAuthor}</p>
          </div>
        </div>
        
        <Button 
          onClick={onNextQuote} 
          disabled={isLoading}
          className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? "Loading..." : "Next Quote"}
          {!isLoading && <ArrowRight size={18} />}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;

