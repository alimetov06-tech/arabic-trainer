const words = [
  { ar: "صِفْرٌ", ru: "Ноль", topic: "Числа" },
  { ar: "وَاحِدٌ", ru: "Один", topic: "Числа" },
  { ar: "اِثْنَانِ", ru: "Два", topic: "Числа" },
  { ar: "ثَلَاثٌ", ru: "Три", topic: "Числа" },
  { ar: "أَرْبَعٌ", ru: "Четыре", topic: "Числа" },
  { ar: "خَمْسٌ", ru: "Пять", topic: "Числа" },
  { ar: "سِتٌّ", ru: "Шесть", topic: "Числа" },
  { ar: "سَبْعٌ", ru: "Семь", topic: "Числа" },
  { ar: "ثَمَانٍ", ru: "Восемь", topic: "Числа" },
  { ar: "تِسْعٌ", ru: "Девять", topic: "Числа" },
  { ar: "عَشْرٌ", ru: "Десять", topic: "Числа" },
  { ar: "نَحْنُ", ru: "Мы", topic: "Местоимения" },
  { ar: "أَنْتُمَا", ru: "Вы двое", topic: "Местоимения" },
  { ar: "أَنْتُمْ", ru: "Вы, мужской род", topic: "Местоимения" },
  { ar: "أَنْتُنَّ", ru: "Вы, женский род", topic: "Местоимения" },
  { ar: "هُمَا", ru: "Они двое", topic: "Местоимения" },
  { ar: "هُنَّ", ru: "Они, женский род", topic: "Местоимения" },
  { ar: "كِتَابِي", ru: "Моя книга", topic: "Притяжательные формы" },
  { ar: "كِتَابُكَ", ru: "Твоя книга, м.р.", topic: "Притяжательные формы" },
  { ar: "كِتَابُكِ", ru: "Твоя книга, ж.р.", topic: "Притяжательные формы" },
  { ar: "كِتَابُهُ", ru: "Его книга", topic: "Притяжательные формы" },
  { ar: "كِتَابُهَا", ru: "Её книга", topic: "Притяжательные формы" },
  { ar: "كِتَابُنَا", ru: "Наша книга", topic: "Притяжательные формы" },
  { ar: "كَتَبَتْ", ru: "Она написала", topic: "Глаголы" },
  { ar: "كَتَبْتُ", ru: "Я написал", topic: "Глаголы" },
  { ar: "كَتَبْتَ", ru: "Ты написал, м.р.", topic: "Глаголы" },
  { ar: "كَتَبْتِ", ru: "Ты написала, ж.р.", topic: "Глаголы" },
  { ar: "كَتَبْنَا", ru: "Мы написали", topic: "Глаголы" },
  { ar: "كَتَبُوا", ru: "Они написали, м.р.", topic: "Глаголы" },
  { ar: "كَتَبْنَ", ru: "Они написали, ж.р.", topic: "Глаголы" },
  { ar: "وَحْدَةٌ", ru: "Глава", topic: "Учёба" },
  { ar: "أُولَى", ru: "Первая", topic: "Числа" },
  { ar: "تَحِيَّةٌ", ru: "Приветствие", topic: "Знакомство" },
  { ar: "تَعَارَفٌ", ru: "Знакомство", topic: "Знакомство" },
  { ar: "وَ", ru: "И", topic: "Служебные слова" },
  { ar: "حِوَارٌ", ru: "Диалог", topic: "Знакомство" },
  { ar: "أَوَّلُ", ru: "Первый", topic: "Числа" },
  { ar: "اِسْمٌ", ru: "Имя", topic: "Знакомство" },
  { ar: "ـي", ru: "Мой, моя, моё", topic: "Притяжательные формы" },
  { ar: "مَا", ru: "Что", topic: "Вопросы" },
  { ar: "ـكَ", ru: "Твой, твоя, твоё при обращении к мужчине", topic: "Притяжательные формы" },
  { ar: "كَيْفَ", ru: "Как", topic: "Вопросы" },
  { ar: "حَالٌ", ru: "Положение, состояние", topic: "Состояния" },
  { ar: "بِخَيْرٍ", ru: "Хорошо", topic: "Фразы" },
  { ar: "أَنْتَ", ru: "Ты при обращении к мужчине", topic: "Местоимения" },
  { ar: "الحَمْدُ لِلَّهِ", ru: "Хвала Аллаху", topic: "Фразы" },
  { ar: "ـكِ", ru: "Твой, твоя, твоё при обращении к женщине", topic: "Притяжательные формы" },
  { ar: "أَنْتِ", ru: "Ты при обращении к женщине", topic: "Местоимения" },
  { ar: "أَجِبْ", ru: "Ответь", topic: "Команды" },
  { ar: "صِلْ", ru: "Свяжи", topic: "Команды" },
  { ar: "أَنَا", ru: "Я", topic: "Местоимения" },
  { ar: "اُنْظُرْ", ru: "Смотри, посмотри", topic: "Команды" },
  { ar: "اِسْتَمِعْ", ru: "Слушай", topic: "Команды" },
  { ar: "أَعِدْ", ru: "Повтори, повторяй", topic: "Команды" },
  { ar: "مِنْ", ru: "Из", topic: "Служебные слова" },
  { ar: "مِنْ أَيْنَ", ru: "Откуда?", topic: "Вопросы" },
  { ar: "بَاكِسْتَانُ", ru: "Пакистан", topic: "Страны" },
  { ar: "هَلْ", ru: "Вопросительная частица", topic: "Вопросы" },
  { ar: "ـِيٌّ", ru: "Образует относительное прилагательное: -ский, -ец", topic: "Правила" },
  { ar: "نَعَمْ", ru: "Да", topic: "Фразы" },
  { ar: "جِنْسِيَّةٌ", ru: "Гражданство", topic: "Знакомство" },
  { ar: "تُرْكِيَا", ru: "Турция", topic: "Страны" },
  { ar: "أَهْلًا وَ سَهْلًا", ru: "Добро пожаловать", topic: "Фразы" },
  { ar: "مِصْرُ", ru: "Египет", topic: "Страны" },
  { ar: "ـة", ru: "Окончание женского рода", topic: "Правила" },
  { ar: "سُورِيَا", ru: "Сирия", topic: "Страны" },
  { ar: "الثَّانِي", ru: "Второй", topic: "Числа" },
  { ar: "كَلِمَةٌ", ru: "Слово", topic: "Учёба" },
  { ar: "بَيْنَ", ru: "Между", topic: "Место" },
  { ar: "هَذَا", ru: "Это", topic: "Местоимения" },
  { ar: "أَخٌ", ru: "Брат", topic: "Семья" },
  { ar: "هُوَ", ru: "Он", topic: "Местоимения" },
  { ar: "مُدَرِّسٌ", ru: "Учитель, преподаватель", topic: "Профессии" },
  { ar: "ثَالِثٌ", ru: "Третий", topic: "Числа" },
  { ar: "صَدِيقٌ", ru: "Друг", topic: "Люди" },
  { ar: "مُهَنْدِسٌ", ru: "Инженер", topic: "Профессии" },
  { ar: "مَعَ السَّلَامَةِ", ru: "До свидания", topic: "Фразы" },
  { ar: "أُخْتٌ", ru: "Сестра", topic: "Семья" },
  { ar: "هَذِهِ", ru: "Это, женский род", topic: "Местоимения" },
  { ar: "طَبِيبٌ", ru: "Врач", topic: "Профессии" },
  { ar: "طَالِبٌ", ru: "Студент", topic: "Учёба" },
  { ar: "هِيَ", ru: "Она", topic: "Местоимения" },
  { ar: "صُورَةٌ", ru: "Фото, картинка, фотография, картина", topic: "Основы" },
  { ar: "مُنَاسِبٌ", ru: "Подходящий", topic: "Основы" },
  { ar: "أُسْرَةٌ", ru: "Семья", topic: "Семья" },
  { ar: "مَنْ", ru: "Кто", topic: "Вопросы" },
  { ar: "وَالِدٌ", ru: "Отец", topic: "Семья" },
  { ar: "وَالِدَةٌ", ru: "Мать", topic: "Семья" },
  { ar: "مُعَلِّمٌ", ru: "Преподаватель", topic: "Профессии" },
  { ar: "جَدٌّ", ru: "Дедушка", topic: "Семья" },
  { ar: "جَدَّةٌ", ru: "Бабушка", topic: "Семья" },
  { ar: "اِقْرَأْ", ru: "Читай, прочитай", topic: "Команды" },
  { ar: "تَدْرِيبٌ", ru: "Упражнение", topic: "Учёба" },
  { ar: "شَجَرَةٌ", ru: "Дерево", topic: "Основы" },
  { ar: "رَسُولٌ", ru: "Посланник", topic: "Религия" },
  { ar: "ـهُ", ru: "Его", topic: "Притяжательные формы" },
  { ar: "عَمٌّ", ru: "Дядя", topic: "Семья" },
  { ar: "عَمَّةٌ", ru: "Тётя", topic: "Семья" },
  { ar: "اِبْنٌ", ru: "Сын", topic: "Семья" },
  { ar: "اِبْنَةٌ", ru: "Дочь", topic: "Семья" },
  { ar: "أَذَانٌ", ru: "Азан", topic: "Религия" },
  { ar: "فَجْرٌ", ru: "Рассвет", topic: "Время" },
  { ar: "أَيْنَ", ru: "Где", topic: "Вопросы" },
  { ar: "أَوْلَادٌ", ru: "Дети", topic: "Семья" },
  { ar: "فِي", ru: "В", topic: "Служебные слова" },
  { ar: "حَمَّامٌ", ru: "Ванная", topic: "Дом" },
  { ar: "يَتَوَضَّأُ", ru: "Он совершает омовение", topic: "Религия" },
  { ar: "غُرْفَةٌ", ru: "Комната", topic: "Дом" },
  { ar: "قُرْآنٌ", ru: "Коран", topic: "Религия" },
  { ar: "مُصَلَّى", ru: "Молельная комната", topic: "Религия" },
  { ar: "تُصَلِّي", ru: "Она делает намаз", topic: "Религия" },
  { ar: "مِعْطَفٌ", ru: "Плащ", topic: "Одежда" },
  { ar: "هَذَا هُوَ", ru: "Вот он", topic: "Фразы" },
  { ar: "يَا", ru: "Частица обращения", topic: "Служебные слова" },
  { ar: "نَظَّارَةٌ", ru: "Очки", topic: "Одежда" },
  { ar: "هَذِهِ هِيَ", ru: "Вот она", topic: "Фразы" },
  { ar: "هَيَّا بِنَا", ru: "Пошли, давай с нами", topic: "Фразы" },
  { ar: "إِلَى", ru: "К, в", topic: "Служебные слова" },
  { ar: "مَسْجِدٌ", ru: "Мечеть", topic: "Религия" },
  { ar: "تَسْكُنُ", ru: "Ты живёшь", topic: "Дом" },
  { ar: "أَسْكُنُ", ru: "Я живу", topic: "Дом" },
  { ar: "حَيٌّ", ru: "Район", topic: "Город" },
  { ar: "مَطَارٌ", ru: "Аэропорт", topic: "Путешествие" },
  { ar: "جَامِعَةٌ", ru: "Университет", topic: "Учёба" },
  { ar: "شَقَّةٌ", ru: "Квартира", topic: "Дом" },
  { ar: "رَقْمٌ", ru: "Номер", topic: "Основы" },
  { ar: "سَكَنٌ", ru: "Жильё", topic: "Дом" },
  { ar: "لَا", ru: "Нет", topic: "Фразы" },
  { ar: "مُسْتَأْجِرٌ", ru: "Арендатор", topic: "Дом" },
  { ar: "مُؤَجِّرٌ", ru: "Арендодатель", topic: "Дом" },
  { ar: "أُرِيدُ", ru: "Я хочу", topic: "Фразы" },
  { ar: "مِنْ فَضْلِكَ", ru: "Будьте добры, пожалуйста", topic: "Фразы" },
  { ar: "لَدَيْنَا", ru: "У нас есть", topic: "Фразы" },
  { ar: "جَمِيلٌ", ru: "Красивый", topic: "Основы" },
  { ar: "كَمْ", ru: "Сколько", topic: "Вопросы" },
  { ar: "غُرْفَةٌ (غُرَفٌ)", ru: "Комната", topic: "Дом" },
  { ar: "أَيٌّ", ru: "Какой", topic: "Вопросы" },
  { ar: "دَوْرٌ", ru: "Этаж", topic: "Дом" },
  { ar: "خَامِسٌ", ru: "Пятый", topic: "Числа" },
  { ar: "مُشَاهَدَةٌ", ru: "Осмотр", topic: "Дом" },
  { ar: "تَفَضَّلْ", ru: "Пожалуйста, проходи", topic: "Фразы" },
  { ar: "اُدْخُلْ", ru: "Входи", topic: "Команды" },
  { ar: "يَوْمُ الأَحَدِ", ru: "Воскресенье", topic: "Дни недели" },
  { ar: "يَوْمُ الاِثْنَيْنِ", ru: "Понедельник", topic: "Дни недели" },
  { ar: "يَوْمُ الثُّلاَثَاءِ", ru: "Вторник", topic: "Дни недели" },
  { ar: "يَوْمُ الأَرْبِعَاءِ", ru: "Среда", topic: "Дни недели" },
  { ar: "يَوْمُ الخَمِيسِ", ru: "Четверг", topic: "Дни недели" },
  { ar: "يَوْمُ الجُمُعَةِ", ru: "Пятница", topic: "Дни недели" },
  { ar: "يَوْمُ السَّبْتِ", ru: "Суббота", topic: "Дни недели" },
  { ar: "تَسْتَيْقِظُ", ru: "Ты просыпаешься", topic: "Повседневная жизнь" },
  { ar: "تَنَامُ", ru: "Ты спишь", topic: "Повседневная жизнь" },
  { ar: "بَعْدَ", ru: "После", topic: "Время" },
  { ar: "صَلَاةٌ", ru: "Молитва", topic: "Религия" },
  { ar: "تَفْعَلُ", ru: "Ты делаешь", topic: "Повседневная жизнь" },
  { ar: "تَذْهَبُ", ru: "Ты идешь", topic: "Повседневная жизнь" },
  { ar: "مَدْرَسَةٌ", ru: "Школа", topic: "Учёба" },
  { ar: "بِ", ru: "При помощи, с, на", topic: "Служебные слова" },
  { ar: "سَيَّارَةٌ", ru: "Машина", topic: "Путешествие" },
  { ar: "حَافِلَةٌ", ru: "Автобус", topic: "Путешествие" },
  { ar: "قَبْلَ", ru: "До", topic: "Время" },
  { ar: "الآنَ", ru: "Сейчас", topic: "Время" },
  { ar: "خِلَالَ", ru: "В течение", topic: "Время" },
  { ar: "سَاعَةٌ", ru: "Час", topic: "Время" },
  { ar: "أَسْئِلَةٌ", ru: "Вопросы", topic: "Учёба" },
  { ar: "بِاخْتِصَارٍ", ru: "Коротко", topic: "Фразы" },
  { ar: "حَيَاةٌ", ru: "Жизнь", topic: "Повседневная жизнь" },
  { ar: "يَوْمِيٌّ", ru: "Ежедневный, повседневный", topic: "Повседневная жизнь" },
  { ar: "عُطْلَةٌ", ru: "Выходной, отпуск", topic: "Повседневная жизнь" },
  { ar: "عَمَلٌ", ru: "Работа", topic: "Повседневная жизнь" },
  { ar: "أَكْنُسُ", ru: "Я подметаю, убираю", topic: "Повседневная жизнь" },
  { ar: "تَفْعَلِينَ", ru: "Ты делаешь, женский род", topic: "Повседневная жизнь" },
  { ar: "أَغْسِلُ", ru: "Я стираю, мою", topic: "Повседневная жизнь" },
  { ar: "مَلَابِسُ", ru: "Одежда", topic: "Одежда" },
  { ar: "أَكْوِي", ru: "Я глажу", topic: "Повседневная жизнь" },
  { ar: "طَبَقٌ (أَطْبَاقٌ)", ru: "Тарелка", topic: "Дом" },
  { ar: "سَـ", ru: "Частица будущего времени", topic: "Правила" },
  { ar: "فَرْدٌ (أَفْرَادٌ)", ru: "Человек, член семьи", topic: "Семья" },
  { ar: "هُمْ", ru: "Они", topic: "Местоимения" },
  { ar: "مُبَكِّراً", ru: "Рано", topic: "Время" },
  { ar: "مُتَأَخِّرًا", ru: "Поздно", topic: "Время" },
  { ar: "صَبَاحٌ", ru: "Утро", topic: "Время" },
  { ar: "أُشَاهِدُ", ru: "Я смотрю", topic: "Повседневная жизнь" },
  { ar: "تِلْفَازٌ", ru: "Телевизор", topic: "Дом" },
  { ar: "أَوْ", ru: "Или", topic: "Служебные слова" },
  { ar: "صَحِيفَةٌ", ru: "Газета", topic: "Повседневная жизнь" },
  { ar: "كِتَابٌ", ru: "Книга", topic: "Основы" },
  { ar: "كَبِيرٌ", ru: "Большой", topic: "Основы" },
  { ar: "أَيْضًا", ru: "Тоже, также", topic: "Основы" },
  { ar: "الذي", ru: "Который", topic: "Правила" },
  { ar: "التي", ru: "Которая", topic: "Правила" },
  { ar: "كَتَبَ", ru: "Писать", topic: "Глаголы" },
  { ar: "دَرَسَ", ru: "Учиться", topic: "Глаголы" },
  { ar: "سَكَنَ", ru: "Жить", topic: "Глаголы" },
  { ar: "خَرَجَ", ru: "Выходить", topic: "Глаголы" },
  { ar: "دَخَلَ", ru: "Входить", topic: "Глаголы" },
  { ar: "قَرَأَ", ru: "Читать", topic: "Глаголы" },
  { ar: "ذَهَبَ", ru: "Идти, ехать", topic: "Глаголы" },
  { ar: "أَكَلَ", ru: "Есть, кушать", topic: "Глаголы" },
  { ar: "جَلَسَ", ru: "Сидеть", topic: "Глаголы" },
  { ar: "غَسَلَ", ru: "Мыть, стирать", topic: "Глаголы" },
  { ar: "طَعَامٌ", ru: "Еда, пища", topic: "Еда" },
  { ar: "شَرَابٌ", ru: "Питье, напитки", topic: "Еда" },
  { ar: "مَطْعَمٌ", ru: "Кафе, ресторан", topic: "Еда" },
  { ar: "وَجْبَةٌ", ru: "Порция", topic: "Еда" },
  { ar: "تَأْكُلُ", ru: "Ты ешь", topic: "Еда" },
  { ar: "يَوْمٌ", ru: "День", topic: "Время" },
  { ar: "آكُلُ", ru: "Я ем", topic: "Еда" },
  { ar: "فَطُورٌ", ru: "Завтрак", topic: "Еда" },
  { ar: "غَدَاءٌ", ru: "Обед", topic: "Еда" },
  { ar: "عَشَاءٌ", ru: "Ужин", topic: "Еда" },
  { ar: "كَثِيرٌ", ru: "Много", topic: "Количество" },
  { ar: "جِدّاً", ru: "Очень", topic: "Количество" },
  { ar: "قَلِيلٌ", ru: "Мало", topic: "Количество" },
  { ar: "لَحْمٌ", ru: "Мясо", topic: "Еда" },
  { ar: "دَجَاجٌ", ru: "Курица, курятина", topic: "Еда" },
  { ar: "أَرُزٌّ", ru: "Рис, плов", topic: "Еда" },
  { ar: "خُبْزٌ", ru: "Хлеб", topic: "Еда" },
  { ar: "سَمَكٌ", ru: "Рыба", topic: "Еда" },
  { ar: "سَلَطَةٌ", ru: "Салат", topic: "Еда" },
  { ar: "فَاكِهَةٌ", ru: "Фрукты", topic: "Еда" },
  { ar: "وَزْنٌ", ru: "Вес", topic: "Тело" },
  { ar: "مَا وَزْنُكَ؟", ru: "Каков твой вес?", topic: "Фразы" },
  { ar: "سِتُّونَ (٦٠)", ru: "Шестьдесят", topic: "Числа" },
  { ar: "كِيلٌ", ru: "Килограмм", topic: "Числа" },
  { ar: "مِئَةٌ (١٠٠)", ru: "Сто", topic: "Числа" },
  { ar: "سَمِينٌ", ru: "Полный, жирный", topic: "Тело" },
  { ar: "نَحِيفٌ", ru: "Худой", topic: "Тело" },
  { ar: "مُضِيفَةٌ", ru: "Стюардесса", topic: "Путешествие" },
  { ar: "مُسَافِرٌ", ru: "Путник", topic: "Путешествие" },
  { ar: "تَطْلُبُ / تَطْلُبِينَ", ru: "Ты желаешь, просишь", topic: "Фразы" },
  { ar: "مَاءٌ", ru: "Вода", topic: "Еда" },
  { ar: "تُفَضِّلُ / تُفَضِّلِينَ", ru: "Ты предпочитаешь", topic: "Фразы" },
  { ar: "تَمْرٌ", ru: "Финики", topic: "Еда" },
  { ar: "عِنَبٌ", ru: "Виноград", topic: "Еда" },
  { ar: "تَشْرَبُ / تَشْرَبِينَ", ru: "Ты пьёшь", topic: "Еда" },
  { ar: "شَايٌ", ru: "Чай", topic: "Еда" },
  { ar: "أُفَضِّلُ", ru: "Я предпочитаю", topic: "Фразы" },
  { ar: "قَهْوَةٌ", ru: "Кофе", topic: "Еда" },
  { ar: "حَلِيبٌ", ru: "Молоко", topic: "Еда" },
  { ar: "عَفْوًا", ru: "Пожалуйста, ответ на спасибо", topic: "Фразы" },
  { ar: "زَوْجٌ", ru: "Муж", topic: "Семья" },
  { ar: "زَوْجَةٌ", ru: "Жена", topic: "Семья" },
  { ar: "جَوْعَانُ", ru: "Голодный", topic: "Еда" },
  { ar: "مَائِدَةٌ", ru: "Обеденный стол", topic: "Дом" },
  { ar: "لَا تَأْكُلْ", ru: "Не ешь!", topic: "Команды" },
  { ar: "اِجْلِسْ", ru: "Садись", topic: "Команды" },
  { ar: "لِمَاذَا", ru: "Почему?", topic: "Вопросы" },
  { ar: "ضَيْفٌ (ضُيُوفٌ)", ru: "Гость", topic: "Люди" },
  { ar: "أَمْ", ru: "Или", topic: "Вопросы" },
  { ar: "طَائِرَةٌ", ru: "Самолёт", topic: "Путешествие" },
  { ar: "مُشْتَرٍ", ru: "Покупатель", topic: "Покупки" },
  { ar: "بَائِعٌ", ru: "Продавец", topic: "Покупки" },
  { ar: "أَيَّ خِدْمَةٍ", ru: "Какую услугу могу оказать", topic: "Покупки" },
  { ar: "بَعْضٌ", ru: "Немного, некоторая часть", topic: "Количество" },
  { ar: "أَثَاثٌ", ru: "Мебель", topic: "Дом" },
  { ar: "نَوْمٌ", ru: "Сон", topic: "Дом" },
  { ar: "غُرْفَةُ النَّوْمِ", ru: "Спальня", topic: "Дом" },
  { ar: "سَرِيرٌ", ru: "Кровать", topic: "Дом" },
  { ar: "سِتَارَةٌ", ru: "Занавески", topic: "Дом" },
  { ar: "غُرْفَةٌ الجُلُوسِ", ru: "Гостиная", topic: "Дом" },
  { ar: "أَرِيكَةٌ", ru: "Диван", topic: "Дом" },
  { ar: "سَجَّادَةٌ", ru: "Коврик", topic: "Дом" },
  { ar: "مَطْبَخٌ", ru: "Кухня", topic: "Дом" },
  { ar: "فُرْنٌ", ru: "Печь", topic: "Дом" },
  { ar: "ثَلَّاجَةٌ", ru: "Холодильник", topic: "Дом" },
  { ar: "سَخَّانٌ", ru: "Водонагреватель", topic: "Дом" },
  { ar: "مِرْآةٌ", ru: "Зеркало", topic: "Дом" },
  { ar: "شَيْئٌ", ru: "Вещь", topic: "Дом" },
  { ar: "آخَرُ", ru: "Другой", topic: "Основы" },
  { ar: "شُكْرًا", ru: "Спасибо", topic: "Фразы" },
  { ar: "عَصِيرٌ", ru: "Сок", topic: "Еда" },
  { ar: "سَمِعَ - يَسْمَعُ", ru: "Слышать", topic: "Глаголы" },
  { ar: "اِسْتَيْقِظْ", ru: "Проснись, просыпайся", topic: "Команды" },
  { ar: "اِسْتَطَاعَ - يَسْتَطِيعُ", ru: "Мочь, уметь", topic: "Глаголы" },
  { ar: "عَمِلَ - يَعْمَلُ", ru: "Работать", topic: "Глаголы" },
  { ar: "لَيْلٌ", ru: "Ночь", topic: "Время" },
  { ar: "ضَعْ", ru: "Поставь", topic: "Команды" },
  { ar: "مُنَبِّهٌ", ru: "Будильник", topic: "Дом" },
  { ar: "بِجَانِبِكَ", ru: "Рядом с тобой", topic: "Фразы" },
  { ar: "فِكْرَةٌ", ru: "Мысль, идея", topic: "Основы" },
  { ar: "طَيِّبٌ", ru: "Хороший", topic: "Основы" },
  { ar: "جُمْلَةٌ (جُمَلٌ)", ru: "Предложение", topic: "Учёба" },
  { ar: "الوَاجِبُ المَنْزِلِيُّ", ru: "Домашнее задание", topic: "Учёба" },
  { ar: "اليَوْمَ", ru: "Сегодня", topic: "Время" },
  { ar: "غَدًا", ru: "Завтра", topic: "Время" },
  { ar: "أَمْسِ", ru: "Вчера", topic: "Время" },
  { ar: "فِقْرَةٌ", ru: "Абзац", topic: "Учёба" },
  { ar: "صَلَوَاتٌ", ru: "Молитвы", topic: "Религия" },
  { ar: "مَدِينَةٌ", ru: "Город", topic: "Город" },
  { ar: "المَدِينَةُ المُنَوَّرَةُ", ru: "Лучезарная Медина", topic: "Город" },
  { ar: "نَبَوِيٌّ", ru: "Пророческий", topic: "Религия" },
  { ar: "إِنْ شَاءَ", ru: "Если он пожелает", topic: "Фразы" },
  { ar: "سَافَرَ - يُسَافِرُ", ru: "Путешествовать, ехать на далёкие расстояния", topic: "Путешествие" },
  { ar: "رَكِبَ - يَرْكَبُ", ru: "Садиться на транспорт", topic: "Путешествие" },
  { ar: "صَلِّ", ru: "Помолись", topic: "Команды" },
  { ar: "بَعِيدٌ", ru: "Далёкий", topic: "Место" },
  { ar: "قَرِيبٌ", ru: "Близкий", topic: "Место" },
  { ar: "مَرِيضٌ", ru: "Больной", topic: "Состояния" },
  { ar: "كَسْلَانُ", ru: "Ленивый", topic: "Состояния" },
  { ar: "صَحِيحٌ", ru: "Правильный, достоверный", topic: "Основы" },
  { ar: "آسِفٌ", ru: "Сожалеющий", topic: "Состояния" },
  { ar: "ذَاهِبٌ", ru: "Идущий", topic: "Состояния" },
  { ar: "اِنْتَظِرْ", ru: "Подожди!", topic: "Команды" },
  { ar: "مَعَ", ru: "Вместе, с", topic: "Фразы" },
  { ar: "لَوْحَةٌ", ru: "Доска", topic: "Учёба" },
  { ar: "جَدْوَلٌ", ru: "Таблица, расписание", topic: "Учёба" },
  { ar: "دِرَاسَةٌ", ru: "Учёба", topic: "Учёба" },
  { ar: "دِرَاسِيٌّ", ru: "Учебный", topic: "Учёба" },
  { ar: "أَيَّامٌ", ru: "Дни", topic: "Время" },
  { ar: "أُسْبُوعٌ", ru: "Неделя", topic: "Время" },
  { ar: "اُكْتُبْ", ru: "Напиши", topic: "Команды" },
  { ar: "مَادَّةٌ (مَوَادٌّ)", ru: "Предмет", topic: "Учёба" },
  { ar: "ثَقَافَةٌ", ru: "Культура", topic: "Учёба" },
  { ar: "إِسْلَامِيٌّ", ru: "Исламский", topic: "Религия" },
  { ar: "لُغَةٌ", ru: "Язык", topic: "Учёба" },
  { ar: "عَرَبِيٌّ", ru: "Арабский, араб", topic: "Учёба" },
  { ar: "رِيَاضِيَّاتٌ", ru: "Математика", topic: "Учёба" },
  { ar: "عُلُومٌ", ru: "Естествознание", topic: "Учёба" },
  { ar: "حَاسُوبٌ", ru: "Информатика, компьютер", topic: "Учёба" },
  { ar: "مَتَى", ru: "Когда?", topic: "Вопросы" },
  { ar: "بَدَأَ - يَبْدَأُ", ru: "Начинаться", topic: "Глаголы" },
  { ar: "اِخْتِبَارَاتٌ", ru: "Экзамены", topic: "Учёба" },
  { ar: "شَهْرٌ", ru: "Месяц", topic: "Время" },
  { ar: "اِنْتَهَى - يَنْتَهِي", ru: "Заканчиваться", topic: "Глаголы" },
  { ar: "عَامٌ", ru: "Год", topic: "Время" },
  { ar: "طَوِيلٌ", ru: "Длинный", topic: "Основы" },
  { ar: "حِصَّةٌ (حِصَصٌ)", ru: "Урок, занятие", topic: "Учёба" },
  { ar: "جَاءَ - يَجِيئُ", ru: "Приходить", topic: "Глаголы" },
  { ar: "صَفٌّ", ru: "Класс", topic: "Учёба" },
  { ar: "دِمَشْقُ", ru: "Дамаск", topic: "Город" },
  { ar: "أُمُّ القُرَى", ru: "Эпитет города Мекка; название исламского университета", topic: "Город" },
  { ar: "كُلِّيَّةٌ", ru: "Факультет, колледж", topic: "Учёба" },
  { ar: "تَدْرُسِينَ", ru: "Ты учишься, женский род", topic: "Учёба" },
  { ar: "أَدْرُسُ", ru: "Я учусь", topic: "Учёба" },
  { ar: "تَرْبِيَةٌ", ru: "Педагогика, воспитание", topic: "Профессии" },
  { ar: "طِبٌّ", ru: "Медицина", topic: "Профессии" },
  { ar: "سَأَكُونُ", ru: "Я буду", topic: "Фразы" },
  { ar: "دَارَ - يَدُورُ", ru: "Происходить, кружиться", topic: "Глаголы" },
  { ar: "وَقْتٌ", ru: "Время", topic: "Время" },
  { ar: "اِسْتِرَاحَةٌ", ru: "Перемена, отдых", topic: "Учёба" },
  { ar: "مَكْتَبَةٌ", ru: "Библиотека", topic: "Учёба" },
  { ar: "مُخْتَبَرٌ", ru: "Лаборатория", topic: "Учёба" },
  { ar: "خَطَأٌ", ru: "Ошибка", topic: "Учёба" },
  { ar: "صَوَابٌ", ru: "Правильный вариант", topic: "Учёба" },
  { ar: "هَاتِ", ru: "Дай", topic: "Команды" },
  { ar: "شَرِكَةٌ", ru: "Фирма, компания", topic: "Профессии" },
  { ar: "مُسْتَشْفَى", ru: "Больница", topic: "Профессии" },
  { ar: "أَحَبَّ - يُحِبُّ", ru: "Любить", topic: "Глаголы" },
  { ar: "صَيْدَلَةٌ", ru: "Фармацевтика", topic: "Профессии" },
  { ar: "صَيْدَلِيٌّ", ru: "Фармацевт", topic: "Профессии" },
  { ar: "تَمْرِيضٌ", ru: "Фельшерство, уход за больными", topic: "Профессии" },
  { ar: "مُمَرِّضٌ", ru: "Фельдшер, медбрат", topic: "Профессии" },
  { ar: "هَنْدَسَةٌ", ru: "Инженерия", topic: "Профессии" },
  { ar: "طَيَرَانٌ", ru: "Авиация", topic: "Профессии" },
  { ar: "طَيَّارٌ", ru: "Лётчик, пилот", topic: "Профессии" },
  { ar: "مِهْنَةٌ", ru: "Профессия", topic: "Профессии" },
  { ar: "مَرْحَلَةٌ", ru: "Этап, стадия, уровень", topic: "Учёба" },
  { ar: "دَرَّسَ - يُدَرِّسُ", ru: "Преподавать, обучать", topic: "Глаголы" },
  { ar: "اِبْتِدَائِيٌّ", ru: "Начальный", topic: "Учёба" },
  { ar: "مُتَوَسِّطٌ", ru: "Средний", topic: "Учёба" },
  { ar: "طِفْلٌ (أَطْفَالٌ)", ru: "Ребёнок", topic: "Люди" },
  { ar: "لَكَ", ru: "У тебя, для тебя", topic: "Фразы" }
];

const pronounRows = [
  ["1", "ед.", "أَنَا", "я"],
  ["1", "дв./мн.", "نَحْنُ", "мы"],
  ["2 м.р.", "ед.", "أَنْتَ", "ты"],
  ["2 ж.р.", "ед.", "أَنْتِ", "ты"],
  ["2", "дв.", "أَنْتُمَا", "вы двое"],
  ["2 м.р.", "мн.", "أَنْتُمْ", "вы"],
  ["2 ж.р.", "мн.", "أَنْتُنَّ", "вы"],
  ["3 м.р.", "ед.", "هُوَ", "он"],
  ["3 ж.р.", "ед.", "هِيَ", "она"],
  ["3", "дв.", "هُمَا", "они двое"],
  ["3 м.р.", "мн.", "هُمْ", "они"],
  ["3 ж.р.", "мн.", "هُنَّ", "они"]
];

const possessiveRows = [
  ["мой", "ـِي", "كِتَابِي"],
  ["твой, м.р.", "ـُكَ", "كِتَابُكَ"],
  ["твой, ж.р.", "ـُكِ", "كِتَابُكِ"],
  ["его", "ـُهُ", "كِتَابُهُ"],
  ["её", "ـُهَا", "كِتَابُهَا"],
  ["наш", "ـُنَا", "كِتَابُنَا"],
  ["ваш, м.р.", "ـُكُمْ", "كِتَابُكُمْ"],
  ["их, м.р.", "ـُهُمْ", "كِتَابُهُمْ"],
  ["их, ж.р.", "ـُهُنَّ", "كِتَابُهُنَّ"]
];

const pastRows = [
  ["он написал", "3 м.р. ед.", "كَتَبَ"],
  ["она написала", "3 ж.р. ед.", "كَتَبَتْ"],
  ["они двое написали", "3 дв.", "كَتَبَا"],
  ["они написали, м.р.", "3 м.р. мн.", "كَتَبُوا"],
  ["они написали, ж.р.", "3 ж.р. мн.", "كَتَبْنَ"],
  ["ты написал", "2 м.р. ед.", "كَتَبْتَ"],
  ["ты написала", "2 ж.р. ед.", "كَتَبْتِ"],
  ["вы двое написали", "2 дв.", "كَتَبْتُمَا"],
  ["вы написали, м.р.", "2 м.р. мн.", "كَتَبْتُمْ"],
  ["вы написали, ж.р.", "2 ж.р. мн.", "كَتَبْتُنَّ"],
  ["я написал", "1 ед.", "كَتَبْتُ"],
  ["мы написали", "1 мн.", "كَتَبْنَا"]
];

const exerciseSets = [
  {
    id: "prepositions",
    title: "Падеж после предлогов",
    prompt: "Выбери правильную форму после предлога.",
    items: [
      { question: "فِي ___", detail: "в доме", answer: "البَيْتِ", options: ["البَيْتُ", "البَيْتَ", "البَيْتِ", "بَيْتٌ"], note: "После فِي слово получает касру." },
      { question: "مِنَ ___", detail: "из мечети", answer: "المَسْجِدِ", options: ["المَسْجِدُ", "المَسْجِدَ", "المَسْجِدِ", "مَسْجِدٌ"], note: "После مِنْ нужен родительный падеж." },
      { question: "إِلَى ___", detail: "к школе", answer: "المَدْرَسَةِ", options: ["المَدْرَسَةُ", "المَدْرَسَةَ", "المَدْرَسَةِ", "مَدْرَسَةٌ"], note: "После إِلَى ставим касру." },
      { question: "عَلَى ___", detail: "на столе", answer: "المَائِدَةِ", options: ["المَائِدَةُ", "المَائِدَةَ", "المَائِدَةِ", "مَائِدَةٌ"], note: "После عَلَى слово в родительном падеже." }
    ]
  },
  {
    id: "article",
    title: "Артикль ال и танвин",
    prompt: "Выбери определённую форму слова.",
    items: [
      { question: "بَيْتٌ", detail: "дом, который уже известен", answer: "البَيْتُ", options: ["البَيْتُ", "بَيْتٌ", "البَيْتٌ", "بَيْتُ"], note: "С ال слово определённое и без танвина." },
      { question: "كِتَابٌ", detail: "известная книга", answer: "الكِتَابُ", options: ["الكِتَابُ", "كِتَابٌ", "الكِتَابٌ", "كِتَابُ"], note: "ال убирает танвин." },
      { question: "طَالِبٌ", detail: "известный студент", answer: "الطَّالِبُ", options: ["الطَّالِبُ", "طَالِبٌ", "الطَّالِبٌ", "طَالِبُ"], note: "ال делает слово определённым." }
    ]
  },
  {
    id: "idafa",
    title: "Идафа",
    prompt: "Выбери правильное сочетание.",
    items: [
      { question: "книга студента", detail: "неизвестного студента", answer: "كِتَابُ طَالِبٍ", options: ["كِتَابٌ طَالِبٌ", "الكِتَابُ طَالِبٍ", "كِتَابُ طَالِبٍ", "كِتَابَ طَالِبٍ"], note: "Первое слово без ال и без танвина, второе с касрой." },
      { question: "книга известного студента", detail: "студента, которого знаем", answer: "كِتَابُ الطَّالِبِ", options: ["كِتَابُ الطَّالِبِ", "الكِتَابُ الطَّالِبِ", "كِتَابٌ الطَّالِبُ", "كِتَابَ الطَّالِبِ"], note: "Определённость даёт второе слово с ال." },
      { question: "фото Мухаммада", detail: "идафа с именем", answer: "صُورَةُ مُحَمَّدٍ", options: ["صُورَةٌ مُحَمَّدٌ", "الصُّورَةُ مُحَمَّدٍ", "صُورَةُ مُحَمَّدٍ", "صُورَةَ مُحَمَّدٍ"], note: "Второе слово в родительном падеже." }
    ]
  },
  {
    id: "pronouns",
    title: "Местоимения",
    prompt: "Выбери арабское местоимение.",
    items: pronounRows.map(([person, number, arabic, russian]) => ({
      question: russian,
      detail: `${person}, ${number}`,
      answer: arabic,
      options: shuffle([arabic, ...shuffle(pronounRows.filter((row) => row[2] !== arabic).map((row) => row[2])).slice(0, 3)]),
      note: `${arabic} — ${russian}, ${person}, ${number}.`
    }))
  },
  {
    id: "possessive",
    title: "Притяжательные окончания",
    prompt: "Выбери форму “книга + владелец”.",
    items: possessiveRows.map(([russian, ending, example]) => ({
      question: `книга: ${russian}`,
      detail: `окончание ${ending}`,
      answer: example,
      options: shuffle([example, ...shuffle(possessiveRows.filter((row) => row[2] !== example).map((row) => row[2])).slice(0, 3)]),
      note: `Окончание ${ending} присоединяется к слову: ${example}.`
    }))
  },
  {
    id: "past",
    title: "Прошедшее время كَتَبَ",
    prompt: "Выбери правильную форму глагола.",
    items: pastRows.map(([russian, form, arabic]) => ({
      question: russian,
      detail: form,
      answer: arabic,
      options: shuffle([arabic, ...shuffle(pastRows.filter((row) => row[2] !== arabic).map((row) => row[2])).slice(0, 3)]),
      note: `${arabic} — ${russian}.`
    }))
  },
  {
    id: "purpose-lam",
    title: "لِـ: для или чтобы",
    prompt: "Выбери значение частицы لِـ.",
    items: [
      { question: "لِمُحَمَّدٍ", detail: "لِـ + существительное", answer: "для Мухаммада", options: ["для Мухаммада", "чтобы Мухаммад", "не Мухаммад", "с Мухаммадом"], note: "Перед существительным لِـ обычно значит “для”." },
      { question: "لِيَذْهَبَ", detail: "لِـ + глагол", answer: "чтобы он пошёл", options: ["для похода", "чтобы он пошёл", "не иди", "он пошёл вчера"], note: "Перед глаголом لِـ даёт значение цели: “чтобы”." }
    ]
  },
  {
    id: "prohibition",
    title: "Запрет",
    prompt: "Выбери форму запрета.",
    items: [
      { question: "ты идёшь", detail: "сделай “не иди”", answer: "لَا تَذْهَبْ", options: ["لَا تَذْهَبْ", "تَذْهَبُ", "لِتَذْهَبَ", "ذَهَبَ"], note: "Запрет: لَا + форма с сукуном в конце." },
      { question: "ты ешь", detail: "сделай “не ешь”", answer: "لَا تَأْكُلْ", options: ["لَا تَأْكُلْ", "تَأْكُلُ", "أَكَلَ", "لِتَأْكُلَ"], note: "لَا تَأْكُلْ — не ешь." }
    ]
  }
];

const reminders = [
  { text: "Скажи: “Господи, прибавь мне знания”", source: "Та-Ха, 20:114" },
  { text: "Воистину, боятся Аллаха из Его рабов только обладающие знанием", source: "Фатыр, 35:28" },
  { text: "Скажи: “Разве равны те, которые знают, и те, которые не знают?”", source: "Зумар, 39:9" },
  { text: "И над каждым обладающим знанием есть более знающий", source: "Юсуф, 12:76" },
  { text: "Кому Аллах желает блага, того Он наделяет пониманием в религии", source: "Бухари, Муслим" },
  { text: "Тот, кто идёт по пути в поисках знания, Аллах облегчит ему путь в Рай", source: "Муслим" },
  { text: "Лучший из вас тот, кто изучил Коран и обучил ему других", source: "Бухари" },
  { text: "Поистине, Аллах не забирает знание, вырывая его из сердец людей, но забирает знание, забирая учёных", source: "Бухари, Муслим" },
  { text: "Кто указал на благое, тому — награда подобная награде совершившего его", source: "Муслим" },
  { text: "Знание — не то, что ты запомнил, а то, что принесло тебе пользу", source: "Имам аш-Шафии" },
  { text: "Кто не вкусил унижения учёбы хотя бы час — тот проведёт всю жизнь в унижении невежества", source: "Имам аш-Шафии" },
  { text: "Одна задача учёного умнее тысячи задач невежды", source: "Ибн аль-Каййим" },
  { text: "Знание — самое благородное из того, чем может заниматься человек", source: "Ибн аль-Каййим" },
  { text: "Кто желает мира этого — пусть берёт знание, кто желает мира вечного — пусть берёт знание", source: "Имам аш-Шафии" },
  { text: "Знание не приобретается расслаблением тела", source: "Яхья ибн Аби Касир" }
];

const els = {
  topicSelect: document.querySelector("#topicSelect"),
  searchInput: document.querySelector("#searchInput"),
  reminderText: document.querySelector("#reminderText"),
  reminderSource: document.querySelector("#reminderSource"),
  nextReminder: document.querySelector("#nextReminder"),
  knownCount: document.querySelector("#knownCount"),
  repeatCount: document.querySelector("#repeatCount"),
  cardTopic: document.querySelector("#cardTopic"),
  cardCounter: document.querySelector("#cardCounter"),
  cardArabic: document.querySelector("#cardArabic"),
  cardRussian: document.querySelector("#cardRussian"),
  shuffleCards: document.querySelector("#shuffleCards"),
  showAnswer: document.querySelector("#showAnswer"),
  againButton: document.querySelector("#againButton"),
  knowButton: document.querySelector("#knowButton"),
  nextButton: document.querySelector("#nextButton"),
  quizArabic: document.querySelector("#quizArabic"),
  quizOptions: document.querySelector("#quizOptions"),
  quizFeedback: document.querySelector("#quizFeedback"),
  nextQuiz: document.querySelector("#nextQuiz"),
  writeRussian: document.querySelector("#writeRussian"),
  writeInput: document.querySelector("#writeInput"),
  checkWrite: document.querySelector("#checkWrite"),
  revealWrite: document.querySelector("#revealWrite"),
  nextWrite: document.querySelector("#nextWrite"),
  writeFeedback: document.querySelector("#writeFeedback"),
  dictionaryList: document.querySelector("#dictionaryList"),
  pronounTable: document.querySelector("#pronounTable"),
  possessiveTable: document.querySelector("#possessiveTable"),
  pastTable: document.querySelector("#pastTable"),
  exerciseSelect: document.querySelector("#exerciseSelect"),
  exercisePrompt: document.querySelector("#exercisePrompt"),
  exerciseQuestion: document.querySelector("#exerciseQuestion"),
  exerciseOptions: document.querySelector("#exerciseOptions"),
  exerciseFeedback: document.querySelector("#exerciseFeedback"),
  nextExercise: document.querySelector("#nextExercise"),
  resetProgress: document.querySelector("#resetProgress")
};

const state = {
  activeView: "cards",
  cardIndex: 0,
  cardOrder: [],
  cardOrderKey: "",
  quizWord: null,
  writeWord: null,
  exerciseItem: null,
  reminderIndex: Number(localStorage.getItem("arabicTrainerReminderIndex") || "0"),
  progress: JSON.parse(localStorage.getItem("arabicTrainerProgress") || "{}")
};

function saveProgress() {
  localStorage.setItem("arabicTrainerProgress", JSON.stringify(state.progress));
}

function topics() {
  return ["Все темы", ...Array.from(new Set(words.map((word) => word.topic))).sort((a, b) => a.localeCompare(b, "ru"))];
}

function filteredWords() {
  const selectedTopic = els.topicSelect.value;
  const query = els.searchInput.value.trim().toLowerCase();
  return words.filter((word) => {
    const topicMatches = selectedTopic === "Все темы" || word.topic === selectedTopic;
    const queryMatches = !query || `${word.ar} ${word.ru}`.toLowerCase().includes(query);
    return topicMatches && queryMatches;
  });
}

function filterKey() {
  return `${els.topicSelect.value}::${els.searchInput.value.trim().toLowerCase()}`;
}

function orderedCardWords() {
  const list = filteredWords();
  const key = filterKey();
  if (state.cardOrderKey !== key) {
    state.cardOrderKey = key;
    state.cardOrder = [];
    state.cardIndex = 0;
  }

  if (!state.cardOrder.length) return list;

  const byArabic = new Map(list.map((word) => [word.ar, word]));
  const ordered = state.cardOrder.map((arabic) => byArabic.get(arabic)).filter(Boolean);
  const missing = list.filter((word) => !state.cardOrder.includes(word.ar));
  return [...ordered, ...missing];
}

function currentWord() {
  const list = orderedCardWords();
  if (!list.length) return null;
  state.cardIndex = ((state.cardIndex % list.length) + list.length) % list.length;
  return list[state.cardIndex];
}

function normalizeArabic(value) {
  return value
    .replace(/[ًٌٍَُِّْٰـ]/g, "")
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[؟?،,؛;!.\s()٠-٩0-9/-]/g, "")
    .trim();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function shuffleCards() {
  const list = filteredWords();
  state.cardOrderKey = filterKey();
  state.cardOrder = shuffle(list).map((word) => word.ar);
  state.cardIndex = 0;
  renderCard();
}

function updateStats() {
  const values = Object.values(state.progress);
  els.knownCount.textContent = values.filter((value) => value === "known").length;
  els.repeatCount.textContent = values.filter((value) => value === "again").length;
}

function renderCard() {
  const list = orderedCardWords();
  const word = currentWord();
  if (!word) {
    els.cardTopic.textContent = "Нет слов";
    els.cardCounter.textContent = "0 / 0";
    els.cardArabic.textContent = "—";
    els.cardRussian.textContent = "Попробуй изменить поиск или тему";
    els.cardRussian.classList.remove("hidden");
    return;
  }

  els.cardTopic.textContent = word.topic;
  els.cardCounter.textContent = `${state.cardIndex + 1} / ${list.length}${state.cardOrder.length ? " · перемешано" : ""}`;
  els.cardArabic.textContent = word.ar;
  els.cardRussian.textContent = word.ru;
  els.cardRussian.classList.add("hidden");
}

function renderDictionary() {
  const list = filteredWords();
  els.dictionaryList.innerHTML = "";

  if (!list.length) {
    els.dictionaryList.innerHTML = '<p class="feedback">Ничего не найдено.</p>';
    return;
  }

  list.forEach((word) => {
    const row = document.createElement("article");
    row.className = `word-row ${state.progress[word.ar] === "known" ? "known" : ""}`;
    row.innerHTML = `<strong dir="rtl">${word.ar}</strong><span>${word.ru}</span><small>${word.topic}</small>`;
    els.dictionaryList.append(row);
  });
}

function pickWord() {
  const list = filteredWords();
  return list[Math.floor(Math.random() * list.length)] || words[Math.floor(Math.random() * words.length)];
}

function renderQuiz() {
  const list = filteredWords().length >= 4 ? filteredWords() : words;
  state.quizWord = pickWord();
  const distractors = shuffle(list.filter((word) => word.ar !== state.quizWord.ar)).slice(0, 3);
  const options = shuffle([state.quizWord, ...distractors]);

  els.quizArabic.textContent = state.quizWord.ar;
  els.quizFeedback.textContent = "";
  els.quizOptions.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option.ru;
    button.addEventListener("click", () => {
      const correct = option.ar === state.quizWord.ar;
      button.classList.add(correct ? "correct" : "wrong");
      els.quizFeedback.textContent = correct ? "Верно." : `Правильный ответ: ${state.quizWord.ru}`;
      state.progress[state.quizWord.ar] = correct ? "known" : "again";
      saveProgress();
      updateStats();
      renderDictionary();
    });
    els.quizOptions.append(button);
  });
}

function renderWrite() {
  state.writeWord = pickWord();
  els.writeRussian.textContent = state.writeWord.ru;
  els.writeInput.value = "";
  els.writeFeedback.textContent = "";
  els.writeInput.focus();
}

function renderReminder(next = false) {
  if (!els.reminderText || !els.reminderSource) return;
  if (next) state.reminderIndex += 1;
  const reminder = reminders[((state.reminderIndex % reminders.length) + reminders.length) % reminders.length];
  els.reminderText.textContent = reminder.text;
  els.reminderSource.textContent = reminder.source;
  localStorage.setItem("arabicTrainerReminderIndex", String(state.reminderIndex));
}

function renderTable(container, headers, rows) {
  if (!container) return;
  container.innerHTML = "";
  const header = document.createElement("div");
  header.className = "mini-row header";
  header.innerHTML = headers.map((item) => `<span>${item}</span>`).join("");
  container.append(header);

  rows.forEach((row) => {
    const line = document.createElement("div");
    line.className = "mini-row";
    line.innerHTML = row.map((item, index) => {
      const dir = /[\u0600-\u06FF]/.test(item) ? ' dir="rtl"' : "";
      const cls = /[\u0600-\u06FF]/.test(item) ? ' class="arabic-small"' : "";
      return `<span${cls}${dir}>${item}</span>`;
    }).join("");
    container.append(line);
  });
}

function renderGrammarTables() {
  if (!els.pronounTable || !els.possessiveTable || !els.pastTable) return;
  renderTable(els.pronounTable, ["Лицо", "Число", "Форма"], pronounRows.map(([person, number, arabic, russian]) => [person, number, `${arabic} — ${russian}`]));
  renderTable(els.possessiveTable, ["Значение", "Окончание", "Пример"], possessiveRows);
  renderTable(els.pastTable, ["Значение", "Форма", "Глагол"], pastRows);
}

function activeExerciseSet() {
  return exerciseSets.find((set) => set.id === els.exerciseSelect?.value) || exerciseSets[0];
}

function renderExercise() {
  if (!els.exercisePrompt || !els.exerciseQuestion || !els.exerciseOptions || !els.exerciseFeedback) return;
  const set = activeExerciseSet();
  const item = set.items[Math.floor(Math.random() * set.items.length)];
  state.exerciseItem = item;
  els.exercisePrompt.textContent = set.prompt;
  els.exerciseQuestion.innerHTML = `<span class="arabic-small" dir="rtl">${item.question}</span><small>${item.detail}</small>`;
  els.exerciseFeedback.textContent = "";
  els.exerciseOptions.innerHTML = "";

  shuffle(item.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    if (/[\u0600-\u06FF]/.test(option)) button.dir = "rtl";
    button.addEventListener("click", () => {
      const correct = option === item.answer;
      button.classList.add(correct ? "correct" : "wrong");
      els.exerciseFeedback.textContent = correct ? `Верно. ${item.note}` : `Правильный ответ: ${item.answer}. ${item.note}`;
      [...els.exerciseOptions.querySelectorAll("button")].forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === item.answer) btn.classList.add("correct");
      });
    });
    els.exerciseOptions.append(button);
  });
}

function renderAll() {
  updateStats();
  renderReminder();
  renderCard();
  renderDictionary();
  if (!state.quizWord) renderQuiz();
  if (!state.writeWord) renderWrite();
  if (!state.exerciseItem) renderExercise();
}

topics().forEach((topic) => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  els.topicSelect.append(option);
});

if (els.exerciseSelect) {
  exerciseSets.forEach((set) => {
    const option = document.createElement("option");
    option.value = set.id;
    option.textContent = set.title;
    els.exerciseSelect.append(option);
  });
}

renderGrammarTables();

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}View`).classList.add("active");
    state.activeView = button.dataset.view;
    if (state.activeView === "quiz") renderQuiz();
    if (state.activeView === "write") renderWrite();
    if (state.activeView === "exercises") renderExercise();
  });
});

els.topicSelect.addEventListener("change", () => {
  state.cardIndex = 0;
  state.cardOrder = [];
  state.cardOrderKey = "";
  state.quizWord = null;
  state.writeWord = null;
  renderAll();
});

els.searchInput.addEventListener("input", () => {
  state.cardIndex = 0;
  state.cardOrder = [];
  state.cardOrderKey = "";
  state.quizWord = null;
  state.writeWord = null;
  renderAll();
});

els.nextReminder?.addEventListener("click", () => renderReminder(true));

els.showAnswer.addEventListener("click", () => els.cardRussian.classList.remove("hidden"));

els.shuffleCards?.addEventListener("click", shuffleCards);

els.nextButton.addEventListener("click", () => {
  state.cardIndex += 1;
  renderCard();
});

els.againButton.addEventListener("click", () => {
  const word = currentWord();
  if (!word) return;
  state.progress[word.ar] = "again";
  saveProgress();
  updateStats();
  renderDictionary();
  state.cardIndex += 1;
  renderCard();
});

els.knowButton.addEventListener("click", () => {
  const word = currentWord();
  if (!word) return;
  state.progress[word.ar] = "known";
  saveProgress();
  updateStats();
  renderDictionary();
  state.cardIndex += 1;
  renderCard();
});

els.nextQuiz.addEventListener("click", renderQuiz);

els.exerciseSelect?.addEventListener("change", renderExercise);

els.nextExercise?.addEventListener("click", renderExercise);

els.nextWrite?.addEventListener("click", renderWrite);

els.checkWrite.addEventListener("click", () => {
  const answer = normalizeArabic(els.writeInput.value);
  const correct = normalizeArabic(state.writeWord.ar.split("-")[0].split("/")[0]);
  const isCorrect = answer === correct;
  els.writeFeedback.textContent = isCorrect ? "Верно." : `Ответ: ${state.writeWord.ar}`;
  state.progress[state.writeWord.ar] = isCorrect ? "known" : "again";
  saveProgress();
  updateStats();
  renderDictionary();
});

els.revealWrite.addEventListener("click", () => {
  els.writeFeedback.textContent = `Ответ: ${state.writeWord.ar}`;
});

els.writeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.checkWrite.click();
});

els.resetProgress.addEventListener("click", () => {
  state.progress = {};
  saveProgress();
  updateStats();
  renderDictionary();
});

renderAll();
