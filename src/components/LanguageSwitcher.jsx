"use client";
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, switchLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 text-sm transition-colors ${
          locale === 'en'
            ? 'text-primary-400 font-medium'
            : 'text-white hover:text-primary-400'
        }`}
      >
        {t('languages.english')}
      </button>
      <span className="text-white">|</span>
      <button
        onClick={() => switchLanguage('tr')}
        className={`px-3 py-1 text-sm transition-colors ${
          locale === 'tr'
            ? 'text-primary-400 font-medium'
            : 'text-white hover:text-primary-400'
        }`}
      >
        {t('languages.turkish')}
      </button>
    </div>
  );
}
