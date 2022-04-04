let enLang = document.querySelector('.en'),
    ruLang = document.querySelector('.ru'),
    textTranslate = document.querySelectorAll('[data-i18]');

const i18Obj = {
    'en': {
      'about': 'ABOUT',
      'skills': 'SKILLS',
      'code': 'CODE',
      'projects': 'PROJECTS',
      'education': 'EDUCATION',
      'contacts': 'CONTACTS',
      'languages': 'LANGUAGES',
      'contact-info': 'Contact information',
      'skills-section': 'Skills',
      'education-section': 'Education',
      'edy-name': 'Belarus State Economical University',
      'edu-name-2': 'Higher school of management and Business, world economics (specialization in foreign economic activity management)',
      'edu-name-3': 'Belarusian State Pedagogical University named after Maxim',
      'edu-direction': 'History. Foreign language, teacher',
      'languages-section': 'Languages',
      'lang-1': 'Russian — Native',
      'lang-2': 'English — C2 — Proficiency',
      'lang-3': 'German — A1 — Basic',
      'lang-4': 'Polish — A1 — Basic',
      'title': 'Anton Asouski',
      'speciality': 'Junior Front-End developer',
      'about-my': 'About myself',
      'text-1': 'I have been studying front-end for 1 year. I have knowladge and can work with HTML, CSS, JavaScript, framework React, Webpack, Figma.',
      'text-2': 'I have been fond of development and everything related to programming for a long time. Earlier I tried to study and work in Android studio, develop android applications. I studied JAVA for a some period of time. I began to study everything related to the front – end, following advices and recommendations. I really enjoyed learning the JavaScript language, as it is universal and can be widely used in the development of various web applications, ranging from writing games, animating sites, to single web applications using the React framework. It is understandable and easy to learn.',
      'projects-section': 'Projects',
      'text-pr-1': 'I have following home projects.',
      'list-title': 'Among them:',
      'text-pr-2': 'on JS,HTML and CSS, in this slider you will find counter (which shows active slide and total amount of slides), also you can choose slides with the help of arrows and also with click on dots, also swipes are realized here (touch events), adapted for different devices slider;',
      'text-pr-3': 'the same slider on REACT(with the same functions)',
      'text-pr-4': 'exchage currency converter US dollars - BYN;',
      'text-pr-5': 'slider',
      'text-pr-6': 'JS game "Battel sea"(you can play and estimate it very soon).Also you can find my works on GitHub;',
      'text-pr-7': 'homeworks (React API SPA getting data from server, React+Redux SPA);',
      'text-pr-8': 'Memory card game. This game should improve memory and mental activity. You have to find matches and open all cards.;',
      'text-pr-9': 'AudioApp, you can play sounds of nature, songs of the birds.;',
      'text-pr-10': 'Generator of quotes. Getting the information with the help of fetch from API.;',
      'text-pr-11': 'I also have simple sites like practice work;',
      'code-examp': 'Code example',
      'examp':'Example:',
      'text-code': 'KATA from CODEWARS:',
      'kursiv': 'Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.',
      'kursiv-1': 'The binary representation of 1234 is 10011010010, so the function should return 5 in this case.',
      'course-title': 'Courses'      
    },
    'ru': {
      'about': 'ОБО МНЕ',
      'skills': 'УМЕНИЯ',
      'code': 'КОД',
      'projects': 'ПРОЕКТЫ',
      'education': 'ОБРАЗОВАНИЕ',
      'contacts': 'КОНТАКТЫ',
      'languages': 'ЯЗЫКИ',
      'contact-info': 'Контактная информация',
      'skills-section': 'Умения',
      'education-section': 'Образование',
      'edy-name': 'Белорусский государственный экономический университет',
      'edu-name-2': 'Высшая школа управления и бизнеса (специализация мировая экономическая деятелность)',
      'edu-name-3': 'Белорусский государственный педагогический университет имени М.Танка',
      'edu-direction': 'Преподаватель истрии.Иностранного языка',
      'languages-section': 'Языки',
      'lang-1': 'Русский — Native',
      'lang-2': 'Английский — C2 — Proficiency',
      'lang-3': 'Немецкий — A1 — Basic',
      'lang-4': 'Польский — A1 — Basic',
      'title': 'Антон Осовский',
      'speciality': 'Junior Front-End developer',
      'about-my': 'Обо мне',
      'text-1': 'На протяжении 1 года занимаюсь изучением web - разработки. Изучаю HTML, CSS, JavaScript, framework React.',
      'text-2': 'Я давно уже увлекаюсь разработкой и всем что связано с программированием. Ранее пробовал изучать и работать в Android studio, разрабатывать андроид приложения. Некоторый период времени изучал JAVA. Потом, по совету и рекомендациям стал изучать все что связано с фронт - эндом. Мне очень понравилось изучать язык JavaScript, так как он универсальный и его можно широко использовать в разработке различного роба web-прилжений, начиная от написание игр, оживления сайтов, до single web applications c использованием Фреймворка React. Он понятен и легко усваивается.',
      'projects-section': 'Проекты',
      'text-pr-1': 'У меня есть следующие домашние проекты',
      'list-title': 'Среди них:',
      'text-pr-2': 'слайдер на JS,HTML и CSS, в данном слайдере реализован счетчик слайдов(показывает активный слайд и общее количество слайдов), можно перелистывать слайды как при помощи стрелок так и с помощью дотс, так же можно управлять при помощи свайпов, адаптирован под разные устройства;',
      'text-pr-3': 'аналогичный слайдер написан на REACT(с теми же функциями);',
      'text-pr-4': 'конвертер валют US доллары - BYN;',
      'text-pr-5': 'слайдер',
      'text-pr-6': 'JS игра "Морской бой".Ознакомиться с работами можно на GitHub;',
      'text-pr-7': 'домашние задания (React API SPA получение данных с сервера, React+Redux SPA);',
      'text-pr-8': 'Игра на запоминание карточек.Развивает память и умственную деятельность.Надо открывать и находит совпадения пока не будут открыты все карточки;',
      'text-pr-9': 'AudioApp, можно выбирать и проигрывать звуки природы, пение птиц.;',
      'text-pr-10': 'Генератор высказываний. Получение информации с помощью Fetch c API;',
      'text-pr-11': 'Пару простых сайтов в качестве практики',
      'code-examp': 'Пример кода',
      'examp':'Пример:',
      'text-code': 'KATA на CODEWARS:',
      'kursiv': 'Напишите функцию, которая принимает целое число в качестве входных данных и возвращает количество битов, равных единице в двоичном представлении этого числа. Вы можете гарантировать, что входные данные неотрицательны.',
      'kursiv-1': 'Двоичное представление 1234 это 10011010010, функция должна вернуть в таком случае 5.',
      'course-title': 'Курсы'  
    }
  }
 

  enLang.addEventListener('click', () => {
    ruLang.classList.remove('active');
    enLang.classList.add('active');
      textTranslate.forEach(element => {
      const key = element.getAttribute('data-i18');
      element.innerHTML = i18Obj.en[key];

      if (element.placeholder) {
        element.placeholder = i18Obj.en[key];
        element.textContent = '';
      }
  })
})
enLang.classList.add('active');

  ruLang.addEventListener('click', () => {
    enLang.classList.remove('active');
    ruLang.classList.add('active');
      textTranslate.forEach(element => {
      const key = element.getAttribute('data-i18');
      element.innerHTML = i18Obj.ru[key];
      
      if (element.placeholder) {
        element.placeholder = i18Obj.ru[key];
        element.textContent = '';
      }
    })
  })