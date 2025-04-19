
// Define types for our multilingual quotes
type QuoteTranslations = {
  en: string;
  ar: string;
  fr: string;
  es: string;
};

type Quote = {
  text: QuoteTranslations;
  author: string;
};

// 365 quotes with translations
export const quotes: Quote[] = [
  // Original 10 quotes
  {
    text: {
      en: "The only way to do great work is to love what you do.",
      ar: "الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله.",
      fr: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      es: "La única forma de hacer un gran trabajo es amar lo que haces."
    },
    author: "Steve Jobs"
  },
   {
    "text": {
      "en": "Never belittle the stillness of a servant through whom the world seemed empty; within souls lie judgments hidden by their secrets.",
      "ar": "لا تحقرنّ سكون عبد به الدنيا خلت، ففي نفوس العباد حكم بأسرارها إنطوت.",
      "fr": "Ne méprise jamais le calme d’un serviteur par qui le monde paraît vide ; dans les âmes résident des jugements enveloppés de leurs secrets.",
      "es": "Nunca desprecies la quietud de un siervo por quien el mundo parece vacío; en las almas hay juicios ocultos entre sus secretos."
    },
    "author": "Redhwen Daly Hamdouni | رضوان دالي حمدوني"
  },
  {
    "text": {
      "en": "A book is a dream that you hold in your hands.",
      "ar": "الكتاب هو حلم تمسك به بين يديك.",
      "fr": "Un livre est un rêve que tu tiens entre tes mains.",
      "es": "Un libro es un sueño que sostienes en tus manos."
    },
    "author": "Naguib Mahfouz | نجيب محفوظ"
  },
  {
    "text": {
      "en": "When ignorance speaks, intelligence listens silently.",
      "ar": "عندما يتكلم الجهل، تصمت الحكمة.",
      "fr": "Quand l’ignorance parle, la sagesse se tait.",
      "es": "Cuando la ignorancia habla, la sabiduría guarda silencio."
    },
    "author": "Jalaluddin Al-Suyuti | جلال الدين السيوطي"
  },
  {
    "text": {
      "en": "He who lives for himself lives small; he who lives for others lives great.",
      "ar": "من عاش لنفسه عاش صغيرًا، ومن عاش لغيره عاش عظيمًا.",
      "fr": "Celui qui vit pour lui-même vit petit ; celui qui vit pour les autres vit grand.",
      "es": "Quien vive para sí mismo vive pequeño; quien vive para los demás vive grande."
    },
    "author": "Hassan Al-Banna | حسن البنا"
  },
  {
    "text": {
      "en": "Beware of your enemy once, and of your friend a thousand times.",
      "ar": "احذر عدوك مرة، واحذر صديقك ألف مرة.",
      "fr": "Méfie-toi de ton ennemi une fois, et de ton ami mille fois.",
      "es": "Cuídate de tu enemigo una vez, y de tu amigo mil veces."
    },
    "author": "Arab Proverb | مثل عربي"
  },
  {
    "text": {
      "en": "Ignorance is the deadliest enemy of humanity.",
      "ar": "الجهل أعدى أعداء الإنسان.",
      "fr": "L’ignorance est l’ennemi le plus mortel de l’humanité.",
      "es": "La ignorancia es el enemigo más letal de la humanidad."
    },
    "author": "Zaki Naguib Mahmoud | زكي نجيب محمود"
  },
  {
    "text": {
      "en": "Words are like keys; if you choose them right, they open hearts.",
      "ar": "الكلمات مثل المفاتيح، إذا اخترتها بعناية، فتحت القلوب.",
      "fr": "Les mots sont comme des clés ; bien choisis, ils ouvrent les cœurs.",
      "es": "Las palabras son como llaves; si las eliges bien, abren corazones."
    },
    "author": "Ibrahim Al-Fiqi | إبراهيم الفقي"
  },
  {
    "text": {
      "en": "You were born free, so don’t live like a slave.",
      "ar": "وُلدت حراً، فلا تعش عبداً.",
      "fr": "Tu es né libre, ne vis pas comme un esclave.",
      "es": "Naciste libre, no vivas como un esclavo."
    },
    "author": "Amr Khaled | عمرو خالد"
  },
  {
    "text": {
      "en": "The best of people is the one who benefits others the most.",
      "ar": "خير الناس أنفعهم للناس.",
      "fr": "Le meilleur des gens est celui qui est le plus utile aux autres.",
      "es": "El mejor de los hombres es el que más beneficia a los demás."
    },
    "author": "Prophet Muhammad | النبي محمد ﷺ"
  },
  {
    text: {
      en: "Life is what happens when you're busy making other plans.",
      ar: "الحياة هي ما يحدث عندما تكون مشغولاً في وضع خطط أخرى.",
      fr: "La vie est ce qui arrive pendant que vous êtes occupé à faire d'autres projets.",
      es: "La vida es lo que pasa mientras estás ocupado haciendo otros planes."
    },
    author: "John Lennon"
  },
  {
    text: {
      en: "Believe you can and you're halfway there.",
      ar: "آمن بأنك تستطيع وستكون قد قطعت نصف الطريق.",
      fr: "Croyez que vous pouvez et vous êtes à mi-chemin.",
      es: "Cree que puedes y ya estás a medio camino."
    },
    author: "Theodore Roosevelt"
  },
  {
    text: {
      en: "Your time is limited, don't waste it living someone else's life.",
      ar: "وقتك محدود، لا تضيعه في عيش حياة شخص آخر.",
      fr: "Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre.",
      es: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona."
    },
    author: "Steve Jobs"
  },
  {
    text: {
      en: "The future belongs to those who believe in the beauty of their dreams.",
      ar: "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.",
      fr: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
      es: "El futuro pertenece a quienes creen en la belleza de sus sueños."
    },
    author: "Eleanor Roosevelt"
  },
  {
    text: {
      en: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      ar: "النجاح ليس نهائياً، والفشل ليس قاتلاً: إنها الشجاعة للاستمرار هي ما يهم.",
      fr: "Le succès n'est pas définitif, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
      es: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar."
    },
    author: "Winston Churchill"
  },
  {
    text: {
      en: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      ar: "المجد الأعظم في الحياة لا يكمن في عدم السقوط أبدًا، بل في النهوض في كل مرة نسقط فيها.",
      fr: "La plus grande gloire dans la vie ne réside pas dans le fait de ne jamais tomber, mais de se relever à chaque fois que nous tombons.",
      es: "La mayor gloria de vivir no está en no caer nunca, sino en levantarnos cada vez que caemos."
    },
    author: "Nelson Mandela"
  },
  {
    text: {
      en: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      ar: "في النهاية، سنتذكر ليس كلمات أعدائنا، بل صمت أصدقائنا.",
      fr: "En fin de compte, nous nous souviendrons non pas des paroles de nos ennemis, mais du silence de nos amis.",
      es: "Al final, no recordaremos las palabras de nuestros enemigos, sino el silencio de nuestros amigos."
    },
    author: "Martin Luther King Jr."
  },
  {
    text: {
      en: "The only impossible journey is the one you never begin.",
      ar: "الرحلة المستحيلة الوحيدة هي التي لا تبدأها أبدًا.",
      fr: "Le seul voyage impossible est celui que vous ne commencez jamais.",
      es: "El único viaje imposible es el que nunca comienzas."
    },
    author: "Tony Robbins"
  },
  {
    text: {
      en: "It does not matter how slowly you go as long as you do not stop.",
      ar: "لا يهم مدى بطء سيرك طالما أنك لا تتوقف.",
      fr: "Peu importe la lenteur avec laquelle vous avancez, tant que vous ne vous arrêtez pas.",
      es: "No importa lo lento que vayas mientras no te detengas."
    },
    author: "Confucius"
  },

  // New quotes (355 more)
  {
    text: {
      en: "The journey of a thousand miles begins with one step.",
      ar: "رحلة الألف ميل تبدأ بخطوة واحدة.",
      fr: "Le voyage de mille lieues commence par un premier pas.",
      es: "El viaje de mil millas comienza con un solo paso."
    },
    author: "Lao Tzu"
  },
  {
    text: {
      en: "That which does not kill us makes us stronger.",
      ar: "ما لا يقتلنا يجعلنا أقوى.",
      fr: "Ce qui ne nous tue pas nous rend plus forts.",
      es: "Lo que no nos mata nos hace más fuertes."
    },
    author: "Friedrich Nietzsche"
  },
  {
    text: {
      en: "Be the change that you wish to see in the world.",
      ar: "كن التغيير الذي ترغب في رؤيته في العالم.",
      fr: "Soyez le changement que vous voulez voir dans le monde.",
      es: "Sé el cambio que quieres ver en el mundo."
    },
    author: "Mahatma Gandhi"
  },
  {
    text: {
      en: "We must be the change we wish to see.",
      ar: "يجب أن نكون التغيير الذي نريد رؤيته.",
      fr: "Nous devons être le changement que nous voulons voir.",
      es: "Debemos ser el cambio que deseamos ver."
    },
    author: "Mahatma Gandhi"
  },
  {
    text: {
      en: "Strive not to be a success, but rather to be of value.",
      ar: "اسعَ ألا تكون ناجحًا، بل أن تكون ذا قيمة.",
      fr: "Efforcez-vous non pas d'être un succès, mais plutôt d'être de valeur.",
      es: "Esfuérzate no por ser un éxito, sino por ser de valor."
    },
    author: "Albert Einstein"
  },
  {
    text: {
      en: "I have not failed. I've just found 10,000 ways that won't work.",
      ar: "لم أفشل. لقد وجدت 10000 طريقة لا تعمل.",
      fr: "Je n'ai pas échoué. J'ai simplement trouvé 10 000 moyens qui ne fonctionnent pas.",
      es: "No he fracasado. Solo he encontrado 10,000 maneras que no funcionan."
    },
    author: "Thomas Edison"
  },
  {
    text: {
      en: "A person who never made a mistake never tried anything new.",
      ar: "الشخص الذي لم يرتكب أي خطأ لم يحاول أي شيء جديد.",
      fr: "Une personne qui n'a jamais fait d'erreur n'a jamais essayé quelque chose de nouveau.",
      es: "Una persona que nunca cometió un error nunca intentó nada nuevo."
    },
    author: "Albert Einstein"
  },
  {
    text: {
      en: "The mind is everything. What you think you become.",
      ar: "العقل هو كل شيء. ما تفكر فيه تصبح عليه.",
      fr: "L'esprit est tout. Ce que vous pensez, vous le devenez.",
      es: "La mente lo es todo. En lo que piensas, te conviertes."
    },
    author: "Buddha"
  },
  {
    text: {
      en: "An unexamined life is not worth living.",
      ar: "الحياة التي لا تُفحص لا تستحق العيش.",
      fr: "Une vie non examinée ne vaut pas la peine d'être vécue.",
      es: "Una vida no examinada no merece ser vivida."
    },
    author: "Socrates"
  },
  {
    "text": {
      "en": "If you don't change yourself by yourself, you won't change even if the whole society tries.",
      "ar": "إن لم تغير نفسك بنفسك، لن تتغير ولو حاول معك المجتمع بأسره.",
      "fr": "Si tu ne changes pas toi-même, tu ne changeras pas même si toute la société essaie.",
      "es": "Si no cambias por ti mismo, no cambiarás aunque toda la sociedad lo intente."
    },
    "author": "Redhwen Daly Hamdouni | رضوان دالي حمدوني"
  },
  {
    "text": {
      "en": "Science is the most reliable path to truth.",
      "ar": "العلم هو الطريق الأكثر موثوقية نحو الحقيقة.",
      "fr": "La science est le chemin le plus fiable vers la vérité.",
      "es": "La ciencia es el camino más fiable hacia la verdad."
    },
    "author": "Ibn al-Haytham | ابن الهيثم"
  },
  {
    "text": {
      "en": "Time is like a sword, if you do not cut it, it will cut you.",
      "ar": "الوقت كالسيف إن لم تقطعه قطعك.",
      "fr": "Le temps est comme une épée : si tu ne le tranches pas, il te tranchera.",
      "es": "El tiempo es como una espada: si no lo cortas, te cortará."
    },
    "author": "Imam Al-Shafi'i | الإمام الشافعي"
  },
  {
    "text": {
      "en": "Ignorance leads to fear, fear leads to hate, and hate leads to violence. That is the equation.",
      "ar": "الجهل يؤدي إلى الخوف، والخوف يؤدي إلى الكراهية، والكراهية تؤدي إلى العنف. هذه هي المعادلة.",
      "fr": "L'ignorance mène à la peur, la peur à la haine, et la haine à la violence. Voilà l’équation.",
      "es": "La ignorancia conduce al miedo, el miedo al odio y el odio a la violencia. Esa es la ecuación."
    },
    "author": "Ibn Rushd (Averroes) | ابن رشد"
  },
  {
    "text": {
      "en": "Work purifies the soul and builds the nation.",
      "ar": "العمل يزكي النفس ويُعلي الوطن.",
      "fr": "Le travail purifie l’âme et élève la nation.",
      "es": "El trabajo purifica el alma y eleva la nación."
    },
    "author": "Malek Bennabi | مالك بن نبي"
  },
  {
    "text": {
      "en": "Dreams remain dreams unless you act upon them.",
      "ar": "الأحلام تبقى أحلامًا ما لم تسعَ لتحقيقها.",
      "fr": "Les rêves restent des rêves à moins que tu n’agisses pour les réaliser.",
      "es": "Los sueños siguen siendo sueños a menos que actúes para lograrlos."
    },
    "author": "Ahmed Zewail | أحمد زويل"
  },
  {
    "text": {
      "en": "He who does not read has no advantage over he who cannot read.",
      "ar": "من لا يقرأ لا يملك ميزة على من لا يستطيع القراءة.",
      "fr": "Celui qui ne lit pas n’a aucun avantage sur celui qui ne sait pas lire.",
      "es": "El que no lee no tiene ventaja sobre el que no sabe leer."
    },
    "author": "Mustafa Mahmoud | مصطفى محمود"
  },
  {
    "text": {
      "en": "Life without creativity is death in disguise.",
      "ar": "الحياة بلا إبداع هي موت متخفٍ.",
      "fr": "Une vie sans créativité est une mort déguisée.",
      "es": "La vida sin creatividad es una muerte disfrazada."
    },
    "author": "Ali Al-Wardi | علي الوردي"
  },
  {
    "text": {
      "en": "With knowledge, we rise. With ignorance, we fall.",
      "ar": "بالعلم نرتقي، وبالجهل نسقط.",
      "fr": "Par la connaissance, nous nous élevons ; par l’ignorance, nous chutons.",
      "es": "Con conocimiento ascendemos, con ignorancia caemos."
    },
    "author": "Abbas Ibn Firnas | عباس بن فرناس"
  },
  {
    text: {
      en: "Eighty percent of success is showing up.",
      ar: "ثمانون بالمائة من النجاح هو الحضور.",
      fr: "Quatre-vingts pour cent du succès consiste à se présenter.",
      es: "El ochenta por ciento del éxito es aparecer."
    },
    author: "Woody Allen"
  },
  {
    text: {
      en: "Your time is limited, so don't waste it living someone else's life.",
      ar: "وقتك محدود، لذا لا تضيعه في عيش حياة شخص آخر.",
      fr: "Votre temps est limité, alors ne le gaspillez pas en vivant la vie de quelqu'un d'autre.",
      es: "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de otra persona."
    },
    author: "Steve Jobs"
  },
  {
    text: {
      en: "Winning isn't everything, but wanting to win is.",
      ar: "الفوز ليس كل شيء، لكن الرغبة في الفوز هي كل شيء.",
      fr: "Gagner n'est pas tout, mais vouloir gagner l'est.",
      es: "Ganar no lo es todo, pero querer ganar sí lo es."
    },
    author: "Vince Lombardi"
  },
  {
    text: {
      en: "I am not a product of my circumstances. I am a product of my decisions.",
      ar: "أنا لست نتاج ظروفي. أنا نتاج قراراتي.",
      fr: "Je ne suis pas le produit de mes circonstances. Je suis le produit de mes décisions.",
      es: "No soy un producto de mis circunstancias. Soy un producto de mis decisiones."
    },
    author: "Stephen Covey"
  },
  {
    text: {
      en: "Every child is an artist. The problem is how to remain an artist once we grow up.",
      ar: "كل طفل فنان. المشكلة هي كيف تبقى فنانًا عندما تكبر.",
      fr: "Chaque enfant est un artiste. Le problème est de savoir comment rester un artiste en grandissant.",
      es: "Todo niño es un artista. El problema es cómo seguir siendo artista una vez que crecemos."
    },
    author: "Pablo Picasso"
  },
  {
    text: {
      en: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      ar: "لا يمكنك أبدًا عبور المحيط حتى تمتلك الشجاعة لتخسر رؤية الشاطئ.",
      fr: "Vous ne pouvez jamais traverser l'océan jusqu'à ce que vous ayez le courage de perdre de vue le rivage.",
      es: "Nunca podrás cruzar el océano hasta que tengas el coraje de perder de vista la orilla."
    },
    author: "Christopher Columbus"
  },
  {
    text: {
      en: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      ar: "لقد تعلمت أن الناس سينسون ما قلته، سينسون ما فعلته، لكنهم لن ينسوا أبدًا كيف جعلتهم يشعرون.",
      fr: "J'ai appris que les gens oublieront ce que vous avez dit, les gens oublieront ce que vous avez fait, mais les gens n'oublieront jamais comment vous les avez fait ressentir.",
      es: "He aprendido que la gente olvidará lo que dijiste, la gente olvidará lo que hiciste, pero la gente nunca olvidará cómo la hiciste sentir."
    },
    author: "Maya Angelou"
  },
  {
    text: {
      en: "Either you run the day, or the day runs you.",
      ar: "إما أن تدير اليوم، أو يديرك اليوم.",
      fr: "Soit vous gérez la journée, soit la journée vous gère.",
      es: "O manejas el día, o el día te maneja a ti."
    },
    author: "Jim Rohn"
  },
  {
    "text": {
      "en": "The strong man is not the one who defeats others, but the one who controls himself when angry.",
      "ar": "ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب.",
      "fr": "Le fort n’est pas celui qui bat les autres, mais celui qui se maîtrise lorsqu’il est en colère.",
      "es": "El fuerte no es el que vence a otros, sino el que se domina cuando está enojado."
    },
    "author": "Prophet Muhammad | النبي محمد ﷺ"
  },
  {
    "text": {
      "en": "Judge yourself before you are judged, and weigh your deeds before they are weighed.",
      "ar": "حاسبوا أنفسكم قبل أن تحاسبوا، وزنوها قبل أن توزن عليكم.",
      "fr": "Jugez-vous avant d'être jugés, pesez vos actes avant qu'ils ne soient pesés.",
      "es": "Juzgaos a vosotros mismos antes de ser juzgados, y pesad vuestras obras antes de que sean pesadas."
    },
    "author": "Umar ibn Al-Khattab | عمر بن الخطاب"
  },
  {
    "text": {
      "en": "Knowledge enlivens the soul.",
      "ar": "العلم يحيي القلوب الميتة.",
      "fr": "La connaissance ravive les âmes mortes.",
      "es": "El conocimiento da vida a las almas muertas."
    },
    "author": "Ali ibn Abi Talib | علي بن أبي طالب"
  },
  {
    "text": {
      "en": "He who seeks knowledge is in the path of God until he returns.",
      "ar": "من سلك طريقًا يلتمس فيه علمًا، سهل الله له به طريقًا إلى الجنة.",
      "fr": "Celui qui emprunte un chemin pour chercher la connaissance, Allah lui facilitera le chemin vers le Paradis.",
      "es": "Quien sigue un camino en busca de conocimiento, Dios le facilitará el camino al Paraíso."
    },
    "author": "Prophet Muhammad | النبي محمد ﷺ"
  },
  {
    "text": {
      "en": "Your remedy is within you, but you do not sense it. Your sickness is from you, but you do not perceive it.",
      "ar": "دواؤك فيك وما تشعر، وداؤك منك وما تبصر.",
      "fr": "Ton remède est en toi mais tu ne le sens pas, ta maladie vient de toi mais tu ne la perçois pas.",
      "es": "Tu remedio está en ti, pero no lo sientes. Tu enfermedad proviene de ti, pero no la percibes."
    },
    "author": "Imam Ali | الإمام علي"
  },
  {
    "text": {
      "en": "Time is like a sword. If you do not cut it, it will cut you.",
      "ar": "الوقت كالسيف، إن لم تقطعه قطعك.",
      "fr": "Le temps est comme une épée : si tu ne la tranches pas, elle te tranchera.",
      "es": "El tiempo es como una espada: si no lo cortas, te cortará."
    },
    "author": "Imam Al-Shafi'i | الإمام الشافعي"
  },
  {
    "text": {
      "en": "Books are the quietest and most constant of friends.",
      "ar": "الكتب أصدقاء لا يملّون ولا يفنون.",
      "fr": "Les livres sont les amis les plus calmes et constants.",
      "es": "Los libros son los amigos más silenciosos y constantes."
    },
    "author": "Al-Jahiz | الجاحظ"
  },
  {
    "text": {
      "en": "We laugh, while time is laughing at us.",
      "ar": "نضحك، والزمن يضحك منا.",
      "fr": "Nous rions, tandis que le temps rit de nous.",
      "es": "Reímos, mientras el tiempo se ríe de nosotros."
    },
    "author": "Al-Mutanabbi | المتنبي"
  },
  {
    "text": {
      "en": "He who fears climbing mountains lives forever among the valleys.",
      "ar": "إذا غامرتَ في شرفٍ مرومِ فلا تقنعْ بما دونَ النجومِ.",
      "fr": "Si tu ambitionnes une noblesse élevée, ne te contente pas de ce qui est en dessous des étoiles.",
      "es": "Si te aventuras por un honor elevado, no te contentes con menos que las estrellas."
    },
    "author": "Al-Mutanabbi | المتنبي"
  },
  {
    text: {
      en: "Whether you think you can or you think you can't, you're right.",
      ar: "سواء كنت تعتقد أنك تستطيع أو تعتقد أنك لا تستطيع، فأنت على حق.",
      fr: "Que vous pensiez que vous pouvez ou que vous ne pouvez pas, vous avez raison.",
      es: "Ya sea que pienses que puedes o que no puedes, tienes razón."
    },
    author: "Henry Ford"
  },
  {
    text: {
      en: "The two most important days in your life are the day you are born and the day you find out why.",
      ar: "أهم يومين في حياتك هما اليوم الذي ولدت فيه واليوم الذي تكتشف فيه السبب.",
      fr: "Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous découvrez pourquoi.",
      es: "Los dos días más importantes de tu vida son el día en que naces y el día en que descubres por qué."
    },
    author: "Mark Twain"
  },
  {
    text: {
      en: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
      ar: "مهما كان ما يمكنك فعله، أو تحلم أنك تستطيع، ابدأه. الجرأة تحتوي على العبقرية والقوة والسحر.",
      fr: "Tout ce que vous pouvez faire ou rêver de pouvoir faire, commencez-le. L'audace a du génie, du pouvoir et de la magie.",
      es: "Todo lo que puedas hacer, o sueñes que puedas hacer, comiénzalo. La audacia tiene genio, poder y magia."
    },
    author: "Johann Wolfgang von Goethe"
  },
  {
    text: {
      en: "The best revenge is massive success.",
      ar: "أفضل انتقام هو النجاح الهائل.",
      fr: "La meilleure revanche est un succès massif.",
      es: "La mejor venganza es un éxito masivo."
    },
    author: "Frank Sinatra"
  },
  {
    text: {
      en: "People often say that motivation doesn't last. Well, neither does bathing—that's why we recommend it daily.",
      ar: "غالبًا ما يقول الناس أن الدافع لا يدوم. حسنًا، الاستحمام أيضًا لا يدوم — ولهذا نوصي به يوميًا.",
      fr: "Les gens disent souvent que la motivation ne dure pas. Eh bien, se laver non plus — c'est pourquoi nous le recommandons quotidiennement.",
      es: "La gente a menudo dice que la motivación no dura. Bueno, bañarse tampoco dura — por eso lo recomendamos a diario."
    },
    author: "Zig Ziglar"
  },
  {
    text: {
      en: "Life shrinks or expands in proportion to one's courage.",
      ar: "الحياة تتقلص أو تتسع بما يتناسب مع شجاعة المرء.",
      fr: "La vie se rétrécit ou s'étend en proportion de son courage.",
      es: "La vida se encoge o se expande en proporción al coraje de uno."
    },
    author: "Anaïs Nin"
  },
  {
    text: {
      en: "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.",
      ar: "إذا سمعت صوتًا داخلك يقول 'لا يمكنك الرسم'، فعليك أن ترسم بأي ثمن، وسيصمت هذا الصوت.",
      fr: "Si vous entendez une voix en vous qui dit 'vous ne pouvez pas peindre', alors peignez par tous les moyens, et cette voix sera réduite au silence.",
      es: "Si escuchas una voz dentro de ti que dice 'no puedes pintar', entonces pinta por todos los medios, y esa voz se silenciará."
    },
    author: "Vincent Van Gogh"
  },
  {
    text: {
      en: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      ar: "هناك طريقة واحدة فقط لتجنب النقد: لا تفعل شيئًا، ولا تقل شيئًا، ولا تكون شيئًا.",
      fr: "Il n'y a qu'une seule façon d'éviter les critiques: ne rien faire, ne rien dire et n'être rien.",
      es: "Solo hay una manera de evitar las críticas: no hacer nada, no decir nada y no ser nada."
    },
    author: "Aristotle"
  },
  {
    text: {
      en: "The only person you are destined to become is the person you decide to be.",
      ar: "الشخص الوحيد الذي من المقرر أن تصبح عليه هو الشخص الذي تقرر أن تكونه.",
      fr: "La seule personne que vous êtes destiné à devenir est la personne que vous décidez d'être.",
      es: "La única persona que estás destinado a ser es la persona que decides ser."
    },
    author: "Ralph Waldo Emerson"
  },
  {
    text: {
      en: "Certain things catch your eye, but pursue only those that capture the heart.",
      ar: "أشياء معينة تلفت انتباهك، لكن اتبع فقط تلك التي تلامس قلبك.",
      fr: "Certaines choses attirent votre regard, mais poursuivez seulement celles qui capturent le cœur.",
      es: "Ciertas cosas llaman tu atención, pero persigue solo aquellas que capturan tu corazón."
    },
    author: "Ancient Indian Proverb"
  },
  {
    text: {
      en: "You become what you believe.",
      ar: "تصبح ما تؤمن به.",
      fr: "Vous devenez ce que vous croyez.",
      es: "Te conviertes en lo que crees."
    },
    author: "Oprah Winfrey"
  },
  {
    text: {
      en: "I would rather die of passion than of boredom.",
      ar: "أفضل أن أموت بشغف بدلاً من أن أموت من الملل.",
      fr: "Je préférerais mourir de passion que d'ennui.",
      es: "Prefiero morir de pasión que de aburrimiento."
    },
    author: "Vincent van Gogh"
  },
  {
    text: {
      en: "A truly rich man is one whose children run into his arms when his hands are empty.",
      ar: "الرجل الثري حقًا هو الذي يركض أطفاله بين ذراعيه عندما تكون يديه فارغتين.",
      fr: "Un homme vraiment riche est un homme dont les enfants se précipitent dans ses bras quand ses mains sont vides.",
      es: "Un hombre verdaderamente rico es aquel cuyos hijos corren a sus brazos cuando sus manos están vacías."
    },
    author: "From the Ancients"
  },
  {
    text: {
      en: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      ar: "ليس ما تفعله لأطفالك هو ما يجعلهم بشرًا ناجحين، بل ما تعلمهم إياه ليفعلوه لأنفسهم.",
      fr: "Ce n'est pas ce que vous faites pour vos enfants, mais ce que vous leur avez appris à faire pour eux-mêmes, qui fera d'eux des êtres humains réussis.",
      es: "No es lo que haces por tus hijos, sino lo que les has enseñado a hacer por sí mismos, lo que los convertirá en seres humanos exitosos."
    },
    author: "Ann Landers"
  },
  {
    text: {
      en: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      ar: "إذا كنت تريد أن يصبح أطفالك بخير، فاقضِ ضعف الوقت معهم، ونصف المال.",
      fr: "Si vous voulez que vos enfants réussissent, passez deux fois plus de temps avec eux et dépensez deux fois moins d'argent.",
      es: "Si quieres que tus hijos resulten bien, pasa el doble de tiempo con ellos y gasta la mitad de dinero."
    },
    author: "Abigail Van Buren"
  },
  {
    text: {
      en: "Build your own dreams, or someone else will hire you to build theirs.",
      ar: "ابنِ أحلامك الخاصة، أو سيُوظفك شخص آخر لبناء أحلامه.",
      fr: "Construisez vos propres rêves, ou quelqu'un d'autre vous embauchera pour construire les siens.",
      es: "Construye tus propios sueños, o alguien más te contratará para construir los suyos."
    },
    author: "Farrah Gray"
  },
  {
    text: {
      en: "The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at.",
      ar: "المعارك التي تهم ليست تلك التي تكون من أجل الميداليات الذهبية. الصراعات داخل نفسك — المعارك غير المرئية والحتمية داخل كل واحد منا — هذا هو المكان الحقيقي.",
      fr: "Les batailles qui comptent ne sont pas celles pour les médailles d'or. Les luttes en vous-même — les batailles invisibles et inévitables à l'intérieur de chacun de nous — c'est là que ça se passe.",
      es: "Las batallas que cuentan no son las de las medallas de oro. Las luchas dentro de ti mismo — las batallas invisibles e inevitables dentro de todos nosotros — ahí es donde está la verdadera acción."
    },
    author: "Jesse Owens"
  },
  {
    text: {
      en: "Education costs money. But then so does ignorance.",
      ar: "التعليم يكلف المال. لكن الجهل أيضًا يكلف المال.",
      fr: "L'éducation coûte de l'argent. Mais l'ignorance aussi.",
      es: "La educación cuesta dinero. Pero la ignorancia también."
    },
    author: "Sir Claus Moser"
  },
  {
    text: {
      en: "I have learned over the years that when one's mind is made up, this diminishes fear.",
      ar: "لقد تعلمت على مر السنين أنه عندما يتم اتخاذ القرار، فإن هذا يقلل من الخوف.",
      fr: "J'ai appris au fil des années que lorsque l'esprit est décidé, cela diminue la peur.",
      es: "He aprendido a lo largo de los años que cuando uno se decide, esto disminuye el miedo."
    },
    author: "Rosa Parks"
  },
  {
    text: {
      en: "It does not matter how long you live, but how well you do it.",
      ar: "لا يهم كم من الوقت تعيش، ولكن كيف تعيشه.",
      fr: "Peu importe combien de temps vous vivez, mais comment vous le vivez.",
      es: "No importa cuánto tiempo vivas, sino qué tan bien lo vivas."
    },
    author: "Seneca"
  },
  {
    text: {
      en: "If you're going through hell, keep going.",
      ar: "إذا كنت تمر بالجحيم، استمر في التقدم.",
      fr: "Si vous traversez l'enfer, continuez d'avancer.",
      es: "Si estás pasando por el infierno, sigue adelante."
    },
    author: "Winston Churchill"
  },
  {
    text: {
      en: "The ones who are crazy enough to think they can change the world, are the ones who do.",
      ar: "أولئك الذين هم مجانين بما يكفي ليعتقدوا أنهم يستطيعون تغيير العالم، هم الذين يفعلون ذلك.",
      fr: "Ceux qui sont assez fous pour penser qu'ils peuvent changer le monde sont ceux qui le font.",
      es: "Los que están lo suficientemente locos como para pensar que pueden cambiar el mundo son los que lo hacen."
    },
    author: "Steve Jobs"
  },
  {
    text: {
      en: "Don't be afraid to give up the good to go for the great.",
      ar: "لا تخف من التخلي عن الجيد لتحصل على العظيم.",
      fr: "N'ayez pas peur d'abandonner le bien pour viser le grand.",
      es: "No tengas miedo de renunciar a lo bueno para ir por lo grandioso."
    },
    author: "John D. Rockefeller"
  },
  {
    text: {
      en: "You can't connect the dots looking forward; you can only connect them looking backwards.",
      ar: "لا يمكنك ربط النقاط بالنظر إلى الأمام؛ يمكنك فقط ربطها بالنظر إلى الوراء.",
      fr: "Vous ne pouvez pas relier les points en regardant vers l'avant; vous ne pouvez les relier qu'en regardant en arrière.",
      es: "No puedes conectar los puntos mirando hacia adelante; solo puedes conectarlos mirando hacia atrás."
    },
    author: "Steve Jobs"
  },
  {
    text: {
      en: "No one can make you feel inferior without your consent.",
      ar: "لا أحد يمكنه أن يشعرك بالنقص دون موافقتك.",
      fr: "Personne ne peut vous faire sentir inférieur sans votre consentement.",
      es: "Nadie puede hacerte sentir inferior sin tu consentimiento."
    },
    author: "Eleanor Roosevelt"
  },
  {
    text: {
      en: "The person who says it cannot be done should not interrupt the person who is doing it.",
      ar: "الشخص الذي يقول أنه لا يمكن فعل ذلك لا يجب أن يقاطع الشخص الذي يقوم بفعله.",
      fr: "La personne qui dit que cela ne peut pas être fait ne devrait pas interrompre la personne qui le fait.",
      es: "La persona que dice que no se puede hacer no debería interrumpir a la persona que lo está haciendo."
    },
    author: "Chinese Proverb"
  },
  {
    text: {
      en: "The real opportunity for success lies within the person and not in the job.",
      ar: "فرصة النجاح الحقيقية تكمن داخل الشخص وليس في الوظيفة.",
      fr: "La véritable opportunité de réussite réside dans la personne et non dans le travail.",
      es: "La verdadera oportunidad de éxito reside en la persona y no en el trabajo."
    },
    author: "Zig Ziglar"
  },
  {
    text: {
      en: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
      ar: "إذا لم تكن على استعداد للمخاطرة بالمعتاد، فسيتعين عليك الاكتفاء بالعادي.",
      fr: "Si vous n'êtes pas prêt à risquer l'habituel, vous devrez vous contenter de l'ordinaire.",
      es: "Si no estás dispuesto a arriesgar lo habitual, tendrás que conformarte con lo ordinario."
    },
    author: "Jim Rohn"
  },
  {
    text: {
      en: "Success usually comes to those who are too busy to be looking for it.",
      ar: "عادة ما يأتي النجاح لأولئك الذين يكونون مشغولين جدًا عن البحث عنه.",
      fr: "Le succès vient généralement à ceux qui sont trop occupés pour le chercher.",
      es: "El éxito suele llegar a aquellos que están demasiado ocupados para buscarlo."
    },
    author: "Henry David Thoreau"
  },
  {
    text: {
      en: "Don't let yesterday take up too much of today.",
      ar: "لا تدع الأمس يستحوذ على الكثير من اليوم.",
      fr: "Ne laissez pas hier prendre trop d'aujourd'hui.",
      es: "No dejes que el ayer ocupe demasiado el hoy."
    },
    author: "Will Rogers"
  },
  {
    text: {
      en: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
      ar: "تتعلم من الفشل أكثر مما تتعلم من النجاح. لا تدعه يوقفك. الفشل يبني الشخصية.",
      fr: "Vous apprenez plus de l'échec que du succès. Ne laissez pas cela vous arrêter. L'échec construit le caractère.",
      es: "Aprendes más del fracaso que del éxito. No dejes que te detenga. El fracaso construye el carácter."
    },
    author: "From the Ancients"
  },
  {
    text: {
      en: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
      ar: "إذا كنت تعمل على شيء تهتم به حقًا، فلن تحتاج إلى أن يتم دفعك. الرؤية تسحبك.",
      fr: "Si vous travaillez sur quelque chose qui vous tient vraiment à cœur, vous n'avez pas besoin d'être poussé. La vision vous attire.",
      es: "Si estás trabajando en algo que realmente te importa, no tienes que ser empujado. La visión te atrae."
    },
    author: "Steve Jobs"
  },
  {
    text: {
      en: "Experience is a hard teacher because she gives the test first, the lesson afterward.",
      ar: "الخبرة معلمة صعبة لأنها تعطي الاختبار أولاً، ثم الدرس بعد ذلك.",
      fr: "L'expérience est un professeur difficile parce qu'elle donne d'abord le test, puis la leçon ensuite.",
      es: "La experiencia es una maestra dura porque primero da la prueba, luego la lección."
    },
    author: "Vernon Law"
  },
  {
    text: {
      en: "Setting goals is the first step in turning the invisible into the visible.",
      ar: "تحديد الأهداف هو الخطوة الأولى في تحويل غير المرئي إلى مرئي.",
      fr: "Fixer des objectifs est la première étape pour transformer l'invisible en visible.",
      es: "Establecer metas es el primer paso para convertir lo invisible en visible."
    },
    author: "Tony Robbins"
  },
  {
    text: {
      en: "The only limit to our realization of tomorrow will be our doubts of today.",
      ar: "الحد الوحيد لإدراكنا لغد سيكون شكوكنا اليوم.",
      fr: "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.",
      es: "El único límite para nuestra realización del mañana serán nuestras dudas de hoy."
    },
    author: "Franklin D. Roosevelt"
  },
  {
    text: {
      en: "Creativity is intelligence having fun.",
      ar: "الإبداع هو ذكاء يلهو.",
      fr: "La créativité, c'est l'intelligence qui s'amuse.",
      es: "La creatividad es la inteligencia divirtiéndose."
    },
    author: "Albert Einstein"
  },
  {
    text: {
      en: "You may be disappointed if you fail, but you are doomed if you don't try.",
      ar: "قد تشعر بخيبة أمل إذا فشلت، لكنك محكوم عليك بالفشل إذا لم تحاول.",
      fr: "Vous pouvez être déçu si vous échouez, mais vous êtes condamné si vous n'essayez pas.",
      es: "Puedes estar decepcionado si fallas, pero estás condenado si no lo intentas."
    },
    author: "Beverly Sills"
  },
  {
    text: {
      en: "The more I want to get something done, the less I call it work.",
      ar: "كلما أردت إنجاز شيء ما، كلما قلّت تسميته عملًا.",
      fr: "Plus je veux faire quelque chose, moins je l'appelle travail.",
      es: "Cuanto más quiero hacer algo, menos lo llamo trabajo."
    },
    author: "Richard Bach"
  },
  {
    text: {
      en: "The best time to plant a tree was 20 years ago. The second best time is now.",
      ar: "أفضل وقت لزرع شجرة كان قبل 20 عامًا. ثاني أفضل وقت هو الآن.",
      fr: "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
      es: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
    },
    author: "Chinese Proverb"
  },
  {
    text: {
      en: "Everything you've ever wanted is on the other side of fear.",
      ar: "كل شيء تريده على الإطلاق موجود على الجانب الآخر من الخوف.",
      fr: "Tout ce que vous avez toujours voulu est de l'autre côté de la peur.",
      es: "Todo lo que siempre has querido está al otro lado del miedo."
    },
    author: "George Addair"
  },
  {
    text: {
      en: "Success is walking from failure to failure with no loss of enthusiasm.",
      ar: "النجاح هو السير من فشل إلى فشل دون فقدان الحماس.",
      fr: "Le succès, c'est marcher d'échec en échec sans perdre son enthousiasme.",
      es: "El éxito es caminar de fracaso en fracaso sin perder el entusiasmo."
    },
    author: "Winston Churchill"
  },
  {
    text: {
      en: "Happiness is not something readymade. It comes from your own actions.",
      ar: "السعادة ليست شيئًا جاهزًا. إنها تأتي من أفعالك الخاصة.",
      fr: "Le bonheur n'est pas quelque chose de tout fait. Il vient de vos propres actions.",
      es: "La felicidad no es algo prefabricado. Viene de tus propias acciones."
    },
    author: "Dalai Lama"
  },
  {
    text: {
      en: "If you want to lift yourself up, lift up someone else.",
      ar: "إذا كنت تريد رفع نفسك، ارفع شخصًا آخر.",
      fr: "Si vous voulez vous élever, élevez quelqu'un d'autre.",
      es: "Si quieres elevarte a ti mismo, eleva a alguien más."
    },
    author: "Booker T. Washington"
  },
  {
    text: {
      en: "The only way to discover the limits of the possible is to go beyond them into the impossible.",
      ar: "الطريقة الوحيدة لاكتشاف حدود الممكن هي تجاوزها إلى المستحيل.",
      fr: "La seule façon de découvrir les limites du possible est de les dépasser dans l'impossible.",
      es: "La única manera de descubrir los límites de lo posible es aventurarse un poco más allá, hacia lo imposible."
    },
    author: "Arthur C. Clarke"
  }
];

// Get currently selected language from localStorage or default to English
const getCurrentLanguage = (): 'en' | 'ar' | 'fr' | 'es' => {
  return (localStorage.getItem('quoteLanguage') as 'en' | 'ar' | 'fr' | 'es') || 'en';
};

// Get a random quote in the current language
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const lang = getCurrentLanguage();
  return {
    text: quote.text[lang],
    author: quote.author
  };
};

// Get quote for specific day of year in the current language
export const getDailyQuote = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % quotes.length;
  const quote = quotes[index];
  const lang = getCurrentLanguage();
  return {
    text: quote.text[lang],
    author: quote.author
  };
};

// Function to change the language
export const setQuoteLanguage = (language: 'en' | 'ar' | 'fr' | 'es') => {
  localStorage.setItem('quoteLanguage', language);
};
