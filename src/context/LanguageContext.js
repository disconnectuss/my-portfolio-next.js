"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const messages = {
  en: {
    hero: {
      greeting: "Hello, I'm Fatma",
      roles: [
        "Fullstack Developer",
        "React Native Expert",
        "React Enthusiast",
        "Backend Solutions",
        "Mobile Developer"
      ],
      description: "I transform complex problems into elegant digital solutions! Specializing in React & React Native development, I create apps that users love and businesses need. Ready to bring your next project to life? 🚀",
      hireMe: "Hire Me",
      downloadCV: "Download CV",
      viewGithub: "View GitHub"
    },
    about: {
      title: "About Me",
      description: "Hey there! 👋 I'm a full-stack developer who believes great software should be both powerful and delightful. When I'm not crafting pixel-perfect UIs or optimizing databases, you'll find me exploring the latest tech trends or debugging code with way too much enthusiasm! 🤓\n\nI specialize in React and React Native, turning complex problems into elegant solutions. From e-commerce platforms to mobile apps, I've built projects that real people use and love. My secret? I code with empathy - always thinking about the human on the other side of the screen. 💝\n\nCurrently seeking exciting opportunities to collaborate with teams who value innovation, quality, and maybe a good laugh during code reviews! 😄",
      tabs: {
        skills: "Skills",
        journey: "Journey",
        focus: "Focus"
      },
      skills: [
        "React & React Native 🚀 (My daily superpowers!)",
        "JavaScript & TypeScript 💪 (Fluent in both dialects)",
        "Node.js 🔧 (Backend magic happens here)",
        "MongoDB 📊 (Data whisperer)",
        "HTML5 & CSS3 🎨 (Making things pretty since day 1)",
        "GraphQL 🔗 (Efficient data fetching ninja)",
        "Redux Toolkit 🏪 (State management zen master)",
        "Full Stack Development 🌐 (Jack of all trades, master of fun!)"
      ],
      journey: [
        "🎯 Self-taught Full Stack Developer (Google University graduate!)",
        "📚 Continuous Learning Enthusiast (Always exploring new tech)",
        "🌟 Open Source Contributor (Giving back to the community)",
        "☕ Coffee-to-Code Converter (Powered by caffeine & curiosity)"
      ],
      focus: [
        "🔬 Exploring cutting-edge frontend & backend technologies",
        "📱 Optimizing React Native mobile experiences",
        "🏗️ Building scalable, maintainable full-stack solutions",
        "🎨 Crafting delightful UI/UX that users actually enjoy",
        "🤝 Collaborating with amazing teams on impactful projects"
      ]
    },
    projects: {
      title: "My Projects",
      tags: {
        all: "All",
        web: "Web",
        mobile: "Mobile"
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Got a cool project in mind? Need a bug squashed? Just want to chat about tech? I'd love to hear from you! Whether it's a quick question or your next big idea, my inbox is always open. Let's build something awesome together! ✨",
      form: {
        email: "Your email",
        subject: "Subject",
        message: "Message",
        emailPlaceholder: "jacob@google.com",
        subjectPlaceholder: "Just saying hi",
        messagePlaceholder: "Let's talk about...",
        sendMessage: "Send Message",
        successMessage: "Email sent successfully!"
      }
    },
    footer: {
      rights: "All rights reserved."
    },
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    languages: {
      english: "English",
      turkish: "Türkçe"
    }
  },
  tr: {
    hero: {
      greeting: "Merhaba, Ben Fatma",
      roles: [
        "Fullstack Geliştirici",
        "React Native Uzmanı",
        "React Meraklısı",
        "Backend Çözümleri",
        "Mobil Geliştirici"
      ],
      description: "Karmaşık problemleri zarif dijital çözümlere dönüştürüyorum! React ve React Native geliştirme konusunda uzmanlaşarak, kullanıcıların sevdiği ve işletmelerin ihtiyaç duyduğu uygulamalar yaratıyorum. Bir sonraki projenizi hayata geçirmeye hazır mısınız? 🚀",
      hireMe: "Beni İşe Al",
      downloadCV: "CV İndir",
      viewGithub: "GitHub'ı Gör"
    },
    about: {
      title: "Hakkımda",
      description: "Merhaba! 👋 Harika yazılımlar hem güçlü hem de keyifli olmalı diye inanan bir full-stack geliştiriciyim. Piksel mükemmelliğinde UI'lar oluşturmadığım veya veritabanlarını optimize etmediğim zamanlarda, en yeni teknoloji trendlerini keşfediyor veya kodda hata ayıklamayla uğraşıyorum! 🤓\n\nReact ve React Native konusunda uzmanım, karmaşık problemleri zarif çözümlere dönüştürüyorum. E-ticaret platformlarından mobil uygulamalara kadar, gerçek insanların kullandığı ve sevdiği projeler geliştirdim. Sırım? Empatiyle kod yazıyorum - her zaman ekranın diğer tarafındaki insanı düşünüyorum. 💝\n\nŞu anda yenilik, kalite ve belki kod incelemeleri sırasında iyi bir kahkaha atan ekiplerle işbirliği yapma fırsatları arıyorum! 😄",
      tabs: {
        skills: "Yetenekler",
        journey: "Yolculuk",
        focus: "Odak"
      },
      skills: [
        "React & React Native 🚀 (Günlük süper güçlerim!)",
        "JavaScript & TypeScript 💪 (Her iki lehçede akıcıyım)",
        "Node.js 🔧 (Backend sihri burada gerçekleşiyor)",
        "MongoDB 📊 (Veri fısıldayıcısı)",
        "HTML5 & CSS3 🎨 (Gün 1'den beri güzelleştiriyorum)",
        "GraphQL 🔗 (Verimli veri alma ninja'sı)",
        "Redux Toolkit 🏪 (Durum yönetimi zen ustası)",
        "Full Stack Development 🌐 (Her işin ustası, eğlencenin efendisi!)"
      ],
      journey: [
        "🎯 Kendini Öğreten Full Stack Geliştirici (Google Üniversitesi mezunu!)",
        "📚 Sürekli Öğrenme Tutkunu (Her zaman yeni teknoloji keşfediyorum)",
        "🌟 Açık Kaynak Katkıda Bulunan (Topluluğa geri veriyorum)",
        "☕ Kahve-Kod Dönüştürücü (Kafein ve merakla güçlendirildi)"
      ],
      focus: [
        "🔬 Keskin uçlu frontend ve backend teknolojilerini keşfetmek",
        "📱 React Native mobil deneyimlerini optimize etmek",
        "🏗️ Ölçeklenebilir, sürdürülebilir full-stack çözümler oluşturmak",
        "🎨 Kullanıcıların gerçekten keyif aldığı harika UI/UX tasarlamak",
        "🤝 Etkili projelerde harika ekiplerle işbirliği yapmak"
      ]
    },
    projects: {
      title: "Projelerim",
      tags: {
        all: "Tümü",
        web: "Web",
        mobile: "Mobil"
      }
    },
    contact: {
      title: "Bağlantı Kur",
      description: "Harika bir proje aklında mı var? Bir hata mı düzeltmek gerekiyor? Sadece teknoloji hakkında sohbet etmek mi istiyorsun? Senden haber almak çok hoşuma gider! İster hızlı bir soru olsun ister bir sonraki büyük fikrin, gelen kutum her zaman açık. Birlikte harika bir şey inşa edelim! ✨",
      form: {
        email: "E-posta adresin",
        subject: "Konu",
        subjectPlaceholder: "Sadece merhaba demek",
        messagePlaceholder: "Hakkında konuşalım...",
        sendMessage: "Mesaj Gönder",
        successMessage: "E-posta başarıyla gönderildi!"
      }
    },
    footer: {
      rights: "Tüm hakları saklıdır."
    },
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim"
    },
    languages: {
      english: "English",
      turkish: "Türkçe"
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLocale(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'tr') {
        setLocale('tr');
      }
    }
  }, []);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('language', newLocale);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = messages[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage, t, messages: messages[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
};
