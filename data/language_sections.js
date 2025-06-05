// Language sections for the interactive riddle game
// This file organizes riddles by language for easy access in the game interface

const languageSections = {
  // English Section
  english: {
    name: "English",
    description: "Classic riddles and brain teasers in English",
    icon: "🇬🇧",
    categories: ["riddles", "logic", "math", "iq"],
    difficulty_levels: ["easy", "medium", "hard"],
    total_riddles: 500, // Will be calculated dynamically
    sample_riddle: {
      question: "What gets wetter as it dries?",
      hint: "You use it after a shower.",
      answer: "A towel"
    }
  },
  
  // Spanish Section
  spanish: {
    name: "Español",
    description: "Adivinanzas y acertijos en español",
    icon: "🇪🇸",
    categories: ["riddles", "logic"],
    difficulty_levels: ["easy", "medium", "hard"],
    total_riddles: 200, // Will be calculated dynamically
    sample_riddle: {
      question: "Oro parece, plata no es. El que no lo adivine, bien tonto es.",
      hint: "Es un fruto amarillo.",
      answer: "El plátano"
    }
  },
  
  // French Section
  french: {
    name: "Français",
    description: "Énigmes et devinettes en français",
    icon: "🇫🇷",
    categories: ["riddles", "logic"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 150, // Will be calculated dynamically
    sample_riddle: {
      question: "Je suis pris avant d'être vu. Qui suis-je?",
      hint: "C'est quelque chose que vous faites avec un appareil photo.",
      answer: "Une photo"
    }
  },
  
  // German Section
  german: {
    name: "Deutsch",
    description: "Rätsel und Denksportaufgaben auf Deutsch",
    icon: "🇩🇪",
    categories: ["riddles", "logic"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 150, // Will be calculated dynamically
    sample_riddle: {
      question: "Was hat einen Hut, aber keinen Kopf, ein Bein, aber keinen Schuh?",
      hint: "Es wächst im Wald.",
      answer: "Ein Pilz"
    }
  },
  
  // Chinese Section
  chinese: {
    name: "中文",
    description: "中文谜语和脑筋急转弯",
    icon: "🇨🇳",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 150, // Will be calculated dynamically
    sample_riddle: {
      question: "什么东西，越洗越脏？",
      hint: "用来洗东西的。",
      answer: "水"
    }
  },
  
  // Japanese Section
  japanese: {
    name: "日本語",
    description: "日本語のなぞなぞと頭の体操",
    icon: "🇯🇵",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 100, // Will be calculated dynamically
    sample_riddle: {
      question: "入れば入るほど大きくなる穴は何？",
      hint: "あなたの体に関係があります。",
      answer: "口"
    }
  },
  
  // Arabic Section
  arabic: {
    name: "العربية",
    description: "ألغاز وأحاجي باللغة العربية",
    icon: "🇦🇪",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 100, // Will be calculated dynamically
    sample_riddle: {
      question: "ما هو الشيء الذي يمشي ويقف وليس له أرجل؟",
      hint: "يقيس الوقت.",
      answer: "الساعة"
    }
  },
  
  // Russian Section
  russian: {
    name: "Русский",
    description: "Загадки и головоломки на русском языке",
    icon: "🇷🇺",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 100, // Will be calculated dynamically
    sample_riddle: {
      question: "Что можно увидеть с закрытыми глазами?",
      hint: "Это происходит, когда вы спите.",
      answer: "Сон"
    }
  },
  
  // Hindi Section
  hindi: {
    name: "हिन्दी",
    description: "हिंदी में पहेलियाँ और बुझौवल",
    icon: "🇮🇳",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 100, // Will be calculated dynamically
    sample_riddle: {
      question: "वह क्या है जिसके पास आँखें हैं लेकिन देख नहीं सकता?",
      hint: "इसे आप खाते हैं।",
      answer: "आलू"
    }
  },
  
  // Portuguese Section
  portuguese: {
    name: "Português",
    description: "Adivinhas e quebra-cabeças em português",
    icon: "🇵🇹",
    categories: ["riddles"],
    difficulty_levels: ["easy", "medium"],
    total_riddles: 100, // Will be calculated dynamically
    sample_riddle: {
      question: "O que tem dentes mas não morde?",
      hint: "Você usa para seu cabelo.",
      answer: "Pente"
    }
  },
  
  // Special Categories Section
  categories: {
    // IQ Questions Category
    iq: {
      name: "IQ Questions",
      description: "Test your intelligence with challenging IQ questions",
      icon: "🧠",
      difficulty_levels: ["easy", "medium", "hard"],
      total_riddles: 150, // Will be calculated dynamically
      sample_riddle: {
        question: "Which number should come next in the series? 1, 4, 9, 16, 25, ...",
        hint: "Think about square numbers.",
        answer: "36 (6²)"
      }
    },
    
    // Logic Puzzles Category
    logic: {
      name: "Logic Puzzles",
      description: "Challenge your logical thinking with these puzzles",
      icon: "🧩",
      difficulty_levels: ["easy", "medium", "hard"],
      total_riddles: 150, // Will be calculated dynamically
      sample_riddle: {
        question: "Four cars come to a four-way stop, each coming from a different direction. They can't decide who got there first, so they all go forward at the same time. All four cars go, but none crash into each other. How is this possible?",
        hint: "Think about different directions they could go.",
        answer: "They all made right-hand turns"
      }
    },
    
    // Math Riddles Category
    math: {
      name: "Math Riddles",
      description: "Put your mathematical skills to the test",
      icon: "🔢",
      difficulty_levels: ["easy", "medium", "hard"],
      total_riddles: 150, // Will be calculated dynamically
      sample_riddle: {
        question: "If 2 is company and 3 is a crowd, what are 4 and 5?",
        hint: "Think about basic arithmetic.",
        answer: "9 (4 + 5 = 9)"
      }
    }
  }
};

// Function to calculate total riddles in each section
function calculateTotals(allRiddles) {
  // This will be implemented to dynamically calculate totals from the riddles collection
  // For each language and category, count the total number of riddles
  
  for (const language in languageSections) {
    if (language !== "categories" && allRiddles[language]) {
      let total = 0;
      for (const difficulty in allRiddles[language]) {
        total += allRiddles[language][difficulty].length;
      }
      languageSections[language].total_riddles = total;
    }
  }
  
  // Calculate totals for special categories
  for (const category in languageSections.categories) {
    if (allRiddles[category]) {
      let total = 0;
      for (const difficulty in allRiddles[category]) {
        total += allRiddles[category][difficulty].length;
      }
      languageSections.categories[category].total_riddles = total;
    }
  }
  
  return languageSections;
}

// Export the language sections
// calculateTotals will be called after importing all riddles
