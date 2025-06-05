// Riddles Collection for Interactive Game
// This file contains a large collection of riddles, IQ questions, and brain teasers
// organized by categories and difficulty levels

const riddlesData = {
  // English Riddles
  english: {
    easy: [
      {
        id: 1,
        question: "What gets smaller every time it takes a bath?",
        hint: "It's something you use in the bathroom.",
        answer: "Soap"
      },
      {
        id: 2,
        question: "What has a head but no brain?",
        hint: "It's something you might eat in a salad.",
        answer: "Lettuce"
      },
      {
        id: 3,
        question: "I have a neck, but no head. I have two arms, but no hands. What am I?",
        hint: "You wear it on your body.",
        answer: "A shirt"
      },
      {
        id: 4,
        question: "What word contains 26 letters but only has three syllables?",
        hint: "It's what you use to spell words.",
        answer: "Alphabet"
      },
      {
        id: 5,
        question: "What comes down but never goes up?",
        hint: "It falls from the sky.",
        answer: "Rain"
      },
      {
        id: 6,
        question: "The more you take, the more you leave behind. What am I?",
        hint: "You make these when you walk.",
        answer: "Footsteps"
      },
      {
        id: 7,
        question: "David's father has three sons: Snap, Crackle and _____?",
        hint: "Think about the question carefully.",
        answer: "David"
      },
      {
        id: 8,
        question: "What is more useful when it is broken?",
        hint: "You might cook with it.",
        answer: "An egg"
      },
      {
        id: 9,
        question: "I am easy to lift, but hard to throw. What am I?",
        hint: "It comes from birds.",
        answer: "A feather"
      },
      {
        id: 10,
        question: "What has a neck but no head?",
        hint: "You might drink from it.",
        answer: "A bottle"
      },
      {
        id: 11,
        question: "What is full of holes but still holds water?",
        hint: "You use it for cleaning.",
        answer: "A sponge"
      },
      {
        id: 12,
        question: "What goes up, but never comes down?",
        hint: "It increases every year on your birthday.",
        answer: "Age"
      },
      {
        id: 13,
        question: "A cowboy rode into town on Friday. He stayed for three nights and rode out on Friday. How is this possible?",
        hint: "Think about names.",
        answer: "His horse's name is Friday"
      },
      {
        id: 14,
        question: "I'm not a blanket, yet I cover the ground; a crystal from heaven that doesn't make a sound. What am I?",
        hint: "It's cold and white.",
        answer: "Snowflake"
      },
      {
        id: 15,
        question: "I'm sweet and cold with a stick to hold; a treat on a hot day, worth more than gold. What am I?",
        hint: "You eat it before it melts.",
        answer: "Popsicle"
      }
    ],
    medium: [
      {
        id: 16,
        question: "What five-letter word typed in all capital letters can be read the same upside down?",
        hint: "Think about letters that look similar upside down.",
        answer: "SWIMS"
      },
      {
        id: 17,
        question: "What has hands but cannot clap?",
        hint: "It tells you something important.",
        answer: "A clock"
      },
      {
        id: 18,
        question: "Poor people have it. Rich people need it. If you eat it you die. What is it?",
        hint: "It's not a physical object.",
        answer: "Nothing"
      },
      {
        id: 19,
        question: "What is the longest word in the dictionary?",
        hint: "Think about the spacing of letters.",
        answer: "Smiles (because there is a mile between each 's')"
      },
      {
        id: 20,
        question: "Throw away the outside and cook the inside, then eat the outside and throw away the inside. What is it?",
        hint: "It's a vegetable.",
        answer: "Corn on the cob"
      },
      {
        id: 21,
        question: "What has many rings but no fingers?",
        hint: "You use it to communicate.",
        answer: "A phone"
      },
      {
        id: 22,
        question: "What can you break without touching it?",
        hint: "It's something intangible.",
        answer: "A promise"
      },
      {
        id: 23,
        question: "It has keys, but no locks. It has space, but no room. You can enter, but can't go inside. What is it?",
        hint: "You're using it right now.",
        answer: "A keyboard"
      },
      {
        id: 24,
        question: "Forward, I am heavy; backward, I am not. What am I?",
        hint: "It's a unit of measurement.",
        answer: "Ton (not spelled backward)"
      },
      {
        id: 25,
        question: "What can you hold in your right hand, but never in your left hand?",
        hint: "Think about your body parts.",
        answer: "Your left hand"
      }
    ],
    hard: [
      {
        id: 26,
        question: "I have pointed fangs, and I sit and wait. I have piercing force, and I crunch with weight. I grab my victims, but they do not fight. I join them each with a single, quick bite. What am I?",
        hint: "It's an office supply.",
        answer: "A stapler"
      },
      {
        id: 27,
        question: "Pronounced as one letter, And written with three, two letters there are, and two only in me. I'm double, I'm single, I'm black blue and gray, I'm read from both ends, and the same either way. What am I?",
        hint: "It's a part of your body.",
        answer: "Eye"
      },
      {
        id: 28,
        question: "Who has married many women but was never married?",
        hint: "Think about someone who performs ceremonies.",
        answer: "The priest"
      },
      {
        id: 29,
        question: "What starts with T, ends with T, and has T in it?",
        hint: "You might use it to make a hot drink.",
        answer: "A teapot"
      },
      {
        id: 30,
        question: "What kind of ship has two mates but no captain?",
        hint: "It's not a physical ship.",
        answer: "A relationship"
      }
    ]
  },
  
  // Math Riddles
  math: {
    easy: [
      {
        id: 31,
        question: "What do the numbers 11, 69 and 88 all have in common?",
        hint: "Try turning them upside down.",
        answer: "They all read the same way when placed upside down"
      },
      {
        id: 32,
        question: "If 2 is company and 3 is a crowd, what are 4 and 5?",
        hint: "Think about basic arithmetic.",
        answer: "9 (4 + 5 = 9)"
      },
      {
        id: 33,
        question: "I add 5 to 9 and get 2. The answer is correct, so what am I?",
        hint: "Think about time.",
        answer: "A clock (When it is 9 a.m., adding 5 hours would make it 2 p.m.)"
      },
      {
        id: 34,
        question: "Rachel goes to the supermarket and buys 10 tomatoes. Unfortunately, on the way back home, all but 9 get ruined. How many tomatoes are left in a good condition?",
        hint: "Read the question carefully.",
        answer: "9"
      },
      {
        id: 35,
        question: "What is 3/7 chicken, 2/3 cat, and 2/4 goat?",
        hint: "Look at the letters in each word.",
        answer: "Chicago"
      }
    ],
    medium: [
      {
        id: 36,
        question: "If a zookeeper had 100 pairs of animals in her zoo, and two pairs of babies are born for each one of the original animals, then (sadly) 23 animals don't survive, how many animals do you have left in total?",
        hint: "Calculate step by step.",
        answer: "977 animals (100 × 2 = 200; 200 + 800 = 1000; 1000 – 23 = 977)"
      },
      {
        id: 37,
        question: "If you multiply this number by any other number, the answer will always be the same. What number is this?",
        hint: "It's a single digit.",
        answer: "Zero"
      },
      {
        id: 38,
        question: "I am an odd number. Take away a letter and I become even. What number am I?",
        hint: "Think about spelling.",
        answer: "Seven (take away the 's' and it becomes 'even')"
      },
      {
        id: 39,
        question: "What three numbers give the same result when multiplied and added together?",
        hint: "They are consecutive numbers.",
        answer: "1, 2, and 3 (1 + 2 + 3 = 6 and 1 × 2 × 3 = 6)"
      },
      {
        id: 40,
        question: "A tree doubled in height each year until it reached its maximum height over the course of ten years. How many years did it take for the tree to reach half its maximum height?",
        hint: "Think about exponential growth.",
        answer: "Nine years"
      }
    ]
  },
  
  // Logic Puzzles
  logic: {
    easy: [
      {
        id: 41,
        question: "Every night I'm told what to do, and each morning I do what I'm told. But I still don't escape your scold. What am I?",
        hint: "It wakes you up.",
        answer: "An alarm clock"
      },
      {
        id: 42,
        question: "What do the letter 't' and an island have in common?",
        hint: "Think about their position.",
        answer: "They're both in the middle of water"
      },
      {
        id: 43,
        question: "Which word in the dictionary is spelled incorrectly?",
        hint: "The answer is in the question.",
        answer: "Incorrectly"
      },
      {
        id: 44,
        question: "How can you drop a raw egg from a height onto a concrete floor without cracking it?",
        hint: "Think about what might crack.",
        answer: "Concrete floors are very hard to crack"
      },
      {
        id: 45,
        question: "What do you call a bear with no teeth?",
        hint: "Think about a type of candy.",
        answer: "A gummy bear"
      }
    ],
    medium: [
      {
        id: 46,
        question: "I sometimes run, but I can't walk. What am I?",
        hint: "It's on your face.",
        answer: "A nose"
      },
      {
        id: 47,
        question: "What loses its head in the morning but gets it back at night?",
        hint: "You rest on it.",
        answer: "A pillow"
      },
      {
        id: 48,
        question: "Four cars come to a four-way stop, each coming from a different direction. They can't decide who got there first, so they all go forward at the same time. All four cars go, but none crash into each other. How is this possible?",
        hint: "Think about different directions they could go.",
        answer: "They all made right-hand turns"
      },
      {
        id: 49,
        question: "I have a head like a cat and feet like a cat, but I am not a cat. What am I?",
        hint: "Think about age.",
        answer: "A kitten"
      },
      {
        id: 50,
        question: "Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?",
        hint: "It's used after death.",
        answer: "A coffin"
      }
    ],
    hard: [
      {
        id: 51,
        question: "Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?",
        hint: "Think about his job.",
        answer: "Meat"
      },
      {
        id: 52,
        question: "Ask this question all day long, but always get completely different answers, and yet all the answers will be correct. What is the question?",
        hint: "It changes constantly.",
        answer: "What time is it?"
      },
      {
        id: 53,
        question: "What does a man do only once in his lifetime, but women do once a year after they are 29?",
        hint: "Think about age.",
        answer: "Turn 30"
      },
      {
        id: 54,
        question: "What has four fingers and a thumb, but is not living?",
        hint: "You wear it in winter.",
        answer: "A glove"
      },
      {
        id: 55,
        question: "What can travel around the world while staying in a corner?",
        hint: "You use it to mail letters.",
        answer: "A stamp"
      }
    ]
  },
  
  // Spanish Riddles
  spanish: {
    easy: [
      {
        id: 56,
        question: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. (White inside, green outside. If you want me to tell you, wait.)",
        hint: "Es una fruta.",
        answer: "La pera (The pear)"
      },
      {
        id: 57,
        question: "Oro parece, plata no es. El que no lo adivine, bien tonto es. (Looks like gold, but it's not silver. Whoever doesn't guess it is quite foolish.)",
        hint: "Es un fruto seco.",
        answer: "El plátano (The banana)"
      },
      {
        id: 58,
        question: "Tiene dientes y no come, tiene cabeza y no es hombre. (It has teeth but doesn't eat, it has a head but is not a man.)",
        hint: "Lo usas para tu pelo.",
        answer: "El peine (The comb)"
      },
      {
        id: 59,
        question: "Agua pasa por mi casa, cate de mi corazón. El que no me lo adivine, será un gran cabezón. (Water passes through my house, behold my heart. Whoever doesn't guess it will be a big head.)",
        hint: "Piensa en la palabra 'aguacate'.",
        answer: "Aguacate (Avocado)"
      },
      {
        id: 60,
        question: "Soy redondo como el queso, y nadie puede darme un beso. (I am round like cheese, and nobody can give me a kiss.)",
        hint: "Está en el cielo.",
        answer: "La luna (The moon)"
      }
    ],
    medium: [
      {
        id: 61,
        question: "Tengo agujas y no sé coser, tengo números y no sé leer. (I have needles but I don't know how to sew, I have numbers but I don't know how to read.)",
        hint: "Te dice la hora.",
        answer: "El reloj (The clock)"
      },
      {
        id: 62,
        question: "Vuela sin alas, silba sin boca, azota sin manos y no se toca. (It flies without wings, whistles without a mouth, whips without hands and cannot be touched.)",
        hint: "Es un fenómeno natural.",
        answer: "El viento (The wind)"
      },
      {
        id: 63,
        question: "Lana sube, lana baja. (Wool goes up, wool goes down.)",
        hint: "Es algo que usas para afeitarte.",
        answer: "La navaja (The razor)"
      },
      {
        id: 64,
        question: "Entra al agua y no se moja. (It enters the water and doesn't get wet.)",
        hint: "Es un reflejo.",
        answer: "La sombra (The shadow)"
      },
      {
        id: 65,
        question: "Tiene ojos y no ve, tiene agua y no la bebe, tiene carne y no la come, tiene barba y no es hombre. (It has eyes but doesn't see, it has water but doesn't drink it, it has meat but doesn't eat it, it has a beard but is not a man.)",
        hint: "Es una fruta tropical.",
        answer: "El coco (The coconut)"
      }
    ]
  },
  
  // French Riddles
  french: {
    easy: [
      {
        id: 66,
        question: "Je suis pris avant d'être vu. Qui suis-je? (I am taken before being seen. Who am I?)",
        hint: "C'est quelque chose que vous faites avec un appareil photo.",
        answer: "Une photo (A photo)"
      },
      {
        id: 67,
        question: "Je suis plein de trous, mais je peux quand même retenir l'eau. Qui suis-je? (I am full of holes, but I can still hold water. Who am I?)",
        hint: "On l'utilise dans la cuisine.",
        answer: "Une éponge (A sponge)"
      },
      {
        id: 68,
        question: "Je deviens plus grand quand on me prend, plus petit quand on me donne. Qui suis-je? (I become bigger when taken, smaller when given. Who am I?)",
        hint: "Pensez à quelque chose d'abstrait.",
        answer: "Un trou (A hole)"
      },
      {
        id: 69,
        question: "Je n'ai qu'un œil et je ne peux pas voir. Qui suis-je? (I have only one eye and I cannot see. Who am I?)",
        hint: "C'est utilisé pour coudre.",
        answer: "Une aiguille (A needle)"
      },
      {
        id: 70,
        question: "Je parle toutes les langues et je ne connais aucun mot. Qui suis-je? (I speak all languages and I know no words. Who am I?)",
        hint: "C'est quelque chose qui reflète.",
        answer: "Un écho (An echo)"
      }
    ],
    medium: [
      {
        id: 71,
        question: "Je cours toute la journée et je me couche sous la pluie. Qui suis-je? (I run all day and lie down in the rain. Who am I?)",
        hint: "Pensez à quelque chose à l'extérieur de votre maison.",
        answer: "Un toit (A roof)"
      },
      {
        id: 72,
        question: "Je suis noir, je deviens rouge, et je finis blanc. Qui suis-je? (I am black, I become red, and I end up white. Who am I?)",
        hint: "C'est lié au feu.",
        answer: "Le charbon (Coal)"
      },
      {
        id: 73,
        question: "Je suis léger comme une plume, mais même l'homme le plus fort ne peut pas me tenir plus de 5 minutes. Qui suis-je? (I am as light as a feather, but even the strongest man cannot hold me for more than 5 minutes. Who am I?)",
        hint: "C'est quelque chose d'invisible.",
        answer: "La respiration (Breath)"
      },
      {
        id: 74,
        question: "Je grandis quand on me nourrit, mais je meurs quand on me donne à boire. Qui suis-je? (I grow when fed, but die when given water. Who am I?)",
        hint: "C'est dangereux.",
        answer: "Le feu (Fire)"
      },
      {
        id: 75,
        question: "Je suis entre la terre et le ciel, et je ne suis ni sur terre ni dans le ciel. Qui suis-je? (I am between earth and sky, and I am neither on earth nor in the sky. Who am I?)",
        hint: "Pensez à un mot.",
        answer: "La lettre 'et' (The letter 'and')"
      }
    ]
  },
  
  // German Riddles
  german: {
    easy: [
      {
        id: 76,
        question: "Ich habe Städte, aber keine Häuser. Ich habe Wälder, aber keine Bäume. Ich habe Flüsse, aber kein Wasser. Was bin ich? (I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?)",
        hint: "Es zeigt dir den Weg.",
        answer: "Eine Landkarte (A map)"
      },
      {
        id: 77,
        question: "Was hat einen Hut, aber keinen Kopf, ein Bein, aber keinen Schuh? (What has a hat, but no head, a leg, but no shoe?)",
        hint: "Es wächst im Wald.",
        answer: "Ein Pilz (A mushroom)"
      },
      {
        id: 78,
        question: "Was wird nass beim Trocknen? (What gets wet while drying?)",
        hint: "Du benutzt es nach dem Baden.",
        answer: "Ein Handtuch (A towel)"
      },
      {
        id: 79,
        question: "Was hat Zähne, aber kann nicht beißen? (What has teeth but cannot bite?)",
        hint: "Du benutzt es für dein Haar.",
        answer: "Ein Kamm (A comb)"
      },
      {
        id: 80,
        question: "Was hat ein Bett, aber schläft nie? (What has a bed but never sleeps?)",
        hint: "Es fließt.",
        answer: "Ein Fluss (A river)"
      }
    ],
    medium: [
      {
        id: 81,
        question: "Ich bin leicht zu finden, aber schwer zu behalten. Was bin ich? (I am easy to find, but hard to keep. What am I?)",
        hint: "Es ist etwas Abstraktes.",
        answer: "Zeit (Time)"
      },
      {
        id: 82,
        question: "Je mehr ich trockne, desto nasser werde ich. Was bin ich? (The more I dry, the wetter I get. What am I?)",
        hint: "Du benutzt es im Badezimmer.",
        answer: "Ein Handtuch (A towel)"
      },
      {
        id: 83,
        question: "Was geht um die ganze Welt, bleibt aber in einer Ecke? (What goes around the world but stays in a corner?)",
        hint: "Du klebst es auf einen Brief.",
        answer: "Eine Briefmarke (A stamp)"
      },
      {
        id: 84,
        question: "Was hat Löcher und hält trotzdem Wasser? (What has holes and still holds water?)",
        hint: "Es ist ein Schwamm.",
        answer: "Ein Schwamm (A sponge)"
      },
      {
        id: 85,
        question: "Was hat einen Kopf, aber keine Beine, einen Körper, aber keine Arme? (What has a head, but no legs, a body, but no arms?)",
        hint: "Du benutzt es, um Musik zu hören.",
        answer: "Eine Gitarre (A guitar)"
      }
    ]
  },
  
  // Chinese Riddles
  chinese: {
    easy: [
      {
        id: 86,
        question: "一个盒子，有盖没底，猜一猜是什么东西？(A box with a lid but no bottom, guess what it is?)",
        hint: "你戴在头上。",
        answer: "帽子 (Hat)"
      },
      {
        id: 87,
        question: "什么东西，越洗越脏？(What gets dirtier the more you wash it?)",
        hint: "用来洗东西的。",
        answer: "水 (Water)"
      },
      {
        id: 88,
        question: "什么东西不用时是圆的，用时是方的？(What is round when not in use, but square when in use?)",
        hint: "你坐在上面。",
        answer: "马桶 (Toilet)"
      },
      {
        id: 89,
        question: "什么东西，人人都可以分享，却不能被拿走？(What can be shared by everyone but cannot be taken away?)",
        hint: "是一种感觉。",
        answer: "快乐 (Happiness)"
      },
      {
        id: 90,
        question: "什么东西，头朝下，尾朝上？(What has its head down and its tail up?)",
        hint: "在你的脚上。",
        answer: "鞋子 (Shoes)"
      }
    ],
    medium: [
      {
        id: 91,
        question: "有什么东西你永远不能吃早餐？(What can you never eat for breakfast?)",
        hint: "想想时间。",
        answer: "午餐和晚餐 (Lunch and dinner)"
      },
      {
        id: 92,
        question: "什么东西，你越是看不见它，它就越大？(What gets bigger the more you take away from it?)",
        hint: "想想挖掘。",
        answer: "洞 (Hole)"
      },
      {
        id: 93,
        question: "什么东西，在你需要的时候，把它抛弃；而在你不需要的时候，把它捡回来？(What do you throw away when you need it and take back when you don't need it?)",
        hint: "想想钓鱼。",
        answer: "锚 (Anchor)"
      },
      {
        id: 94,
        question: "什么东西，你给它吃东西它就会活，你给它喝水它就会死？(What lives when you feed it and dies when you give it water?)",
        hint: "它很热。",
        answer: "火 (Fire)"
      },
      {
        id: 95,
        question: "什么东西，站着的时候是坐着的，坐着的时候是站着的？(What is sitting when standing and standing when sitting?)",
        hint: "想想你的腿。",
        answer: "腿 (Legs)"
      }
    ]
  },
  
  // IQ Questions
  iq: {
    easy: [
      {
        id: 96,
        question: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
        hint: "It's a large body of water.",
        answer: "PACIFIC (ocean)"
      },
      {
        id: 97,
        question: "Which number should come next in the series? 1, 4, 9, 16, 25, ...",
        hint: "Think about square numbers.",
        answer: "36 (6²)"
      },
      {
        id: 98,
        question: "A farmer has 17 sheep, all but 9 die. How many sheep are left?",
        hint: "Read the question carefully.",
        answer: "9"
      },
      {
        id: 99,
        question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
        hint: "Think about the rate of production.",
        answer: "5 minutes"
      },
      {
        id: 100,
        question: "Which letter comes next in this sequence? J, F, M, A, M, J, J, A, S, O, N, ...",
        hint: "Think about the calendar.",
        answer: "D (for December)"
      }
    ],
    medium: [
      {
        id: 101,
        question: "If you have a cube, how many squares are there in total (all faces)?",
        hint: "Count the faces of a cube.",
        answer: "6"
      },
      {
        id: 102,
        question: "What is the next number in the sequence? 2, 3, 5, 8, 13, ...",
        hint: "Add the previous two numbers.",
        answer: "21 (Fibonacci sequence)"
      },
      {
        id: 103,
        question: "If a plane crashes on the border between the United States and Canada, where do they bury the survivors?",
        hint: "Think about the word 'survivors'.",
        answer: "You don't bury survivors"
      },
      {
        id: 104,
        question: "A man builds a house with all 4 sides facing south. A bear walks by. What color is the bear?",
        hint: "Think about where this house must be located.",
        answer: "White (it's a polar bear at the North Pole)"
      },
      {
        id: 105,
        question: "How many months have 28 days?",
        hint: "Think about all months.",
        answer: "All 12 months have at least 28 days"
      }
    ],
    hard: [
      {
        id: 106,
        question: "If five cats catch five mice in five minutes, how many cats would be needed to catch 100 mice in 100 minutes?",
        hint: "Think about the rate of catching.",
        answer: "5 cats (the rate remains the same)"
      },
      {
        id: 107,
        question: "I am an odd number. Take away one letter and I become even. What number am I?",
        hint: "Think about spelling.",
        answer: "Seven (take away the 's' and it becomes 'even')"
      },
      {
        id: 108,
        question: "The day before yesterday I was 21, and next year I'll be 24. When is my birthday?",
        hint: "Think about the date.",
        answer: "December 31 (today is January 1)"
      },
      {
        id: 109,
        question: "A doctor gives you three pills and tells you to take one every half hour. How long will the pills last?",
        hint: "Map out the timing.",
        answer: "1 hour (first pill immediately, second at 30 min, third at 60 min)"
      },
      {
        id: 110,
        question: "How many times can you subtract the number 5 from 25?",
        hint: "Think about what happens after subtraction.",
        answer: "Once (after that, you're subtracting 5 from 20, then 15, etc.)"
      }
    ]
  }
};

// This is just the initial set of riddles. The full collection will include over 2000 riddles
// across multiple categories and languages.
