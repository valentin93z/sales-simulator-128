export const getRandomElement = (array) => {
    if (!array || array.length === 0) {
      return null;
    }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const dialogData = [
  {
    title: 'scene_1',
    seller: [
      {id: 'scene_1_seller_p1', talk: 'Добрый день! Что-то подсказать?', type: 'dialog', to: 'scene_2'},
      {id: 'scene_1_seller_p2', talk: 'Добрый день! Вы к нам на экскурсию или за покупкой?', type: 'dialog', to: getRandomElement(['scene_3', 'scene_8'])},
      {id: 'scene_1_seller_p3', talk: 'Добырй день! Нужна помощь?', type: 'dialog', to: 'scene_2'},
      {id: 'scene_1_seller_p4', talk: 'Здравствйте! Вы уже определились с выбором или Вам нужна консультация?', type: 'dialog', to: getRandomElement(['scene_3', 'scene_8'])},
      {id: 'scene_1_seller_p5', talk: 'Здравствуйте! Вас что-то конкретное интересует?', type: 'dialog', to: 'scene_2'},
    ],
    client: [
      {id: 'scene_1_client_p1', talk: 'Добрый день! Пока нет.', to: 'scene_2'},
      {id: 'scene_1_client_p2', talk: 'Нет.', to: 'scene_2'},
      {id: 'scene_1_client_p3', talk: 'Займите денег?', to: 'scene_2'},
      {id: 'scene_1_client_p4', talk: 'Добрый день! Да вот присматриваю, хочу поменять свой телефон.', to: 'scene_8'},
      {id: 'scene_1_client_p5', talk: 'Добрый день! Просто смотрю.', to: 'scene_3'},
    ],
  },

  { title: 'scene_2', seller: [], client: [], message: { type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_1' }, emotion: 'unhappy' },

  {
    title: 'scene_3',
    seller: [
      {id: 'scene_3_seller_p1', talk: 'Хорошо. У нас не все на витринах. Если что можно оформить заказ. Какую модель ищите?', type: 'dialog', to: getRandomElement(['scene_5', 'scene_8'])},
      {id: 'scene_3_seller_p2', talk: 'Хорошо. Что-то подсказать?', type: 'dialog', to: 'scene_4'},
    ],
    client: [
      {id: 'scene_3_client_p1', talk: 'Просто присматриваю телефон.', to: 'scene_8'},
      {id: 'scene_3_client_p2', talk: 'У Вас есть смартфон Redmi?', to: 'scene_5'},
    ],
  },

  { title: 'scene_4', seller: [], client: [], message: { type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_3' }, emotion: 'unhappy' },

  {
    title: 'scene_5',
    seller: [
      {id: 'scene_5_seller_p1', talk: 'Есть под заказ. Скажите, если я предложу Вам вариант, который будет по характеристикам лучше, а по цене приятней. Вы рассмотрите его?', type: 'dialog', to: getRandomElement(['scene_7', 'scene_8'])},
      {id: 'scene_5_seller_p2', talk: 'К сожалению нет. Но можно заказать', type: 'dialog', to: 'scene_6'},
    ],
    client: [
      {id: 'scene_5_client_p1', talk: 'Да можно посмотреть.', to: 'scene_8'},
      {id: 'scene_5_client_p2', talk: 'Нет, мне нужен именно этот', to: 'scene_7'},
      {id: 'scene_5_client_p3', talk: 'Я не хочу ждать.', to: 'scene_6'},
    ],
  },

  { title: 'scene_6', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел (Вы не предприняли попытку переориентировать клиента).', next: 'scene_5' }, emotion: 'unhappy' },

  { title: 'scene_7', seller: [], client: [], message: {type: 'success', text: 'Вы сделали все правильно. На витрине не представлен интересующий вариант клиента.', next: 'scene_8'}, emotion: 'unhappy' },

  {
    title: 'scene_8',
    seller: [
      {id: 'scene_8_seller_p1', talk: 'Вам подороже или подешевле?', type: 'dialog', to: 'scene_9'},
      {id: 'scene_8_seller_p2', talk: 'В рамках какого бюджета присматриваете покупку?', type: 'dialog', to: 'scene_9'},
      {id: 'scene_8_seller_p3', talk: 'Себе или в подарок присматриваете?', type: 'dialog', to: 'scene_10'},
    ],
    client: [
      {id: 'scene_8_client_p1', talk: 'Себе присматриваю.', to: 'scene_10'},
    ],
  },

  { title: 'scene_9', seller: [], client: [], message: { type: 'error', text: 'Неправильная отработка воронки вопросов.', next: 'scene_8' }, emotion: 'unhappy' },

  {
    title: 'scene_10',
    seller: [
      {id: 'scene_10_seller_p1', talk: 'Тогда берите вот этот TECNO Camon 30S.', type: 'dialog', to: 'scene_11'},
      {id: 'scene_10_seller_p2', talk: 'Вижу, что Вам нужен недорогой вариант - берите Infinix Smart 10, вам его хватит.', type: 'dialog', to: 'scene_12'},
      {id: 'scene_10_seller_p3', talk: 'Есть предпочтения по бренду/фирме производителю?', type: 'dialog', to: 'scene_13'},
    ],
    client: [
      {id: 'scene_10_client_p1', talk: 'Я раньше пользовался Redmi. Но в принципе рассмотрел бы и другие модели.', to: 'scene_13'},
    ],
  },

  { title: 'scene_11', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапов работы', next: 'scene_10' }, emotion: 'unhappy' },

  { title: 'scene_12', seller: [], client: [], message: { type: 'error', text: 'Запрещено принимать решения за клиента', next: 'scene_10' }, emotion: 'unhappy' },

  {
    title: 'scene_13',
    seller: [
      {id: 'scene_13_seller_p1', talk: 'Ой, мне Redmi не нравятся, возьмите лучше Iphone - это самые лучшие телефоны.', type: 'dialog', to: 'scene_14'},
      {id: 'scene_13_seller_p2', talk: 'Как чаще всего используете телефон, кроме звонков и мессенджеров?', type: 'dialog', to: 'scene_16'},
      {id: 'scene_13_seller_p3', talk: 'Вот есть отличный вариант - Redmi Note 14.', type: 'dialog', to: 'scene_15'},
    ],
    client: [
      {id: 'scene_13_client_p1', talk: 'Пользуюсь камерой, смотрю фильмы, ролики.', to: 'scene_16'},
    ],
  },

  { title: 'scene_14', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапов работы. Выявлены не все потребности. Запрещено критиковать бренды, представленные в нашей сети.', next: 'scene_13' }, emotion: 'unhappy' },
  { title: 'scene_15', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_13' }, emotion: 'unhappy' },

  {
    title: 'scene_16',
    seller: [
      {id: 'scene_16_seller_p1', talk: 'Тогда предлагаю рассмотреть Honor 600 Lite.', type: 'dialog', to: 'scene_17'},
      {id: 'scene_16_seller_p2', talk: 'Получается, Вам нужен телефон с хорошей камерой, хорошим экраном и звуком, верно?', type: 'dialog', to: 'scene_17'},
      {id: 'scene_16_seller_p3', talk: 'Сейчас в телефонах много различных фишек камеры и специальные дополнительные объективы для фото с близкого или дальнего расстояния - что, обычно, фотографируете?', type: 'dialog', to: 'scene_18'},
    ],
    client: [
      {id: 'scene_16_client_p1', talk: 'Селфи и обычные фото со среднего расстояния.', to: 'scene_18'},
    ],
  },

  { title: 'scene_17', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_13' }, emotion: 'unhappy' },

  {
    title: 'scene_18',
    seller: [
      {id: 'scene_18_seller_p1', talk: 'Для фото отлично подойдёт Samsung S26 Ultra.', type: 'dialog', to: 'scene_19'},
      {id: 'scene_18_seller_p2', talk: 'Тогда Вам любой подойдёт, можете выбирать на витрине.', type: 'dialog', to: 'scene_20'},
      {id: 'scene_18_seller_p3', talk: 'Какие характеристики желательны в новом телефоне?', type: 'dialog', to: 'scene_21'},
    ],
    client: [
      {id: 'scene_18_client_p1', talk: 'Хочу ярче экран, мощнее звук и больше памяти.', to: 'scene_21'},
    ],
  },

  { title: 'scene_19', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_18' }, emotion: 'unhappy' },

  { title: 'scene_20', seller: [], client: [], message: { type: 'error', text: 'Ошибочный вариант.', next: 'scene_18' }, emotion: 'unhappy' },

  {
    title: 'scene_21',
    seller: [
      {id: 'scene_21_seller_p1', talk: 'Возьмите Samsung S26 Ultra на 1 Тб.', type: 'dialog', to: 'scene_22'},
      {id: 'scene_21_seller_p2', talk: 'У телефонов характеристики плюс-минус одинаковые, выбирайте, какой нравится по дизайну.', type: 'dialog', to: 'scene_23'},
      {id: 'scene_21_seller_p3', talk: 'Покупку планируете за наличку или в рассрочку без переплаты?', type: 'dialog', to: 'scene_24'},
    ],
    client: [
      {id: 'scene_21_client_p1', talk: 'За наличные.', to: 'scene_24'},
    ],
  },

  { title: 'scene_22', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_21' }, emotion: 'unhappy' },

  { title: 'scene_23', seller: [], client: [], message: { type: 'error', text: 'Выявлены не все потребности, Критическая ошибка при общении с клиентом.', next: 'scene_21' }, emotion: 'unhappy' },

  {
    title: 'scene_24',
    seller: [
      {id: 'scene_24_seller_p1', talk: 'В рамках какого бюджета рассматриваете покупку?', type: 'dialog', to: 'scene_25'},
    ],
    client: [
      {id: 'scene_24_client_p1', talk: 'До 25 т.р.', to: 'scene_25'},
    ],
  },

  {
    title: 'scene_25',
    seller: [
      {id: 'scene_25_seller_p1', talk: 'Если я Вас правильно понял, выбирать будем что-то из Redmi, но можно и другие. Главное чтобы там была хорошя камера, чтобы был шустрый, с ярким экраном и мощным звуком, до 25 т.р. Все правильно?', type: 'dialog', to: 'scene_27'},
      {id: 'scene_25_seller_p2', talk: 'Я уверен, что Вам нужен Redmi, с хорошим процессором...', type: 'dialog', to: 'scene_26'},
      {id: 'scene_25_seller_p3', talk: 'Исходя из того что Вы мне сказали, могу вам предложить Redmi, с хорошим процессором...', type: 'dialog', to: 'scene_26'},
    ],
    client: [
      {id: 'scene_25_client_p1', talk: 'Да.', to: 'scene_27'},
    ],
  },

  { title: 'scene_26', seller: [], client: [], message: { type: 'error', text: 'Некорректное резюмирование потребности.', next: 'scene_25' }, emotion: 'unhappy' },

  {
    title: 'scene_27',
    seller: [
      {id: 'scene_27_seller_p1', talk: 'Тут будет проц Snapdragon 6s 4G Gen 2, 2.9 ГГц, 4 нм, 8/256, Amoled, 108 МП и 7000 мАч - цена как раз в вашем бюджете.', type: 'dialog', to: 'scene_28'},
      {id: 'scene_27_seller_p2', talk: 'Исходя из того, что вы мне сказали, я могу предложить вам несколько вариантов, можем посмотреть Redmi Note 15 и Honor X8d.', type: 'dialog', to: 'scene_29'},
    ],
    client: [
      {id: 'scene_27_client_p1', talk: '...', to: 'scene_29'},
    ],
  },

  { title: 'scene_28', seller: [], client: [], message: { type: 'error', text: 'Клиент ничего не понял и ушёл', next: 'scene_27' }, emotion: 'unhappy' },

  {
    title: 'scene_29',
    seller: [
      {id: 'scene_29_seller_p1', talk: 'В этих телефонах установлены камеры с разрешением 108 МП, что позволяет делать хорошие снимки.', type: 'dialog', to: 'scene_30'},
      {id: 'scene_29_seller_p2', talk: 'Вы говорили, что для Вас важна хорошая камера. В Honor X8d установлена камера с разрешением 108 МП, которая позволит делать детализированные фото. Например, при увеличении фото дерева, вы сможете разглядеть каждый листочек.', type: 'dialog', to: 'scene_32'},
      {id: 'scene_29_seller_p3', talk: 'В этом телефоне будет хорошая камера, мощный процессор и большая батарея.', type: 'dialog', to: 'scene_31'},
    ],
    client: [
      {id: 'scene_29_client_p1', talk: '...', to: 'scene_32'},
    ],
  },

  { title: 'scene_30', seller: [], client: [], message: { type: 'error', text: 'В данном примере нет ссылки на потребность клиента и выгоды устройства.', next: 'scene_29' }, emotion: 'unhappy' },

  { title: 'scene_31', seller: [], client: [], message: { type: 'error', text: 'В данном примере нет ссылки на потребность клиента, не раскрыты характеристики и выгода для клиента.', next: 'scene_29' }, emotion: 'unhappy' },

  {
    title: 'scene_32',
    seller: [
      {id: 'scene_32_seller_p1', talk: 'Тут установлен мощный процессор Snapdragon 6s 4G Gen 2.', type: 'dialog', to: 'scene_33'},
      {id: 'scene_32_seller_p2', talk: 'Для Вас важно чтобы телефон шустро работал - за это здесь отвечает процессор Snapdragon 6s 4G Gen 2, а также 8 Гб оперативной памяти с виртуальным расширением до 16ти, которые позволят устройство запускать параллельно хоть 10 приложений, а также он будет оставаться актуальным до 5 лет точно. при этом никаких подвисаний не будет.', type: 'dialog', to: 'scene_35'},
      {id: 'scene_32_seller_p3', talk: 'Также Вы еще говорили, для Вас важно чтобы телефон шустро работал, в Honor X8d установлен процессор Snapdragon 6s 4G Gen 2, а также 8 Гб оперативной памяти.', type: 'dialog', to: 'scene_34'},
    ],
    client: [
      {id: 'scene_32_client_p1', talk: '...', to: 'scene_35'},
    ],
  },

  { title: 'scene_33', seller: [], client: [], message: { type: 'error', text: 'В данном примере нет ссылки на потребность клиента и выгоды устройства.', next: 'scene_32' }, emotion: 'unhappy' },

  { title: 'scene_34', seller: [], client: [], message: { type: 'error', text: 'В данном примере не озвучены выгоды.', next: 'scene_32' }, emotion: 'unhappy' },

  {
    title: 'scene_35',
    seller: [
      {id: 'scene_35_seller_p1', talk: 'На этот телефон раньше была хорошая скидка, но пока акция закончилась.', type: 'dialog', to: 'scene_36'},
      {id: 'scene_35_seller_p2', talk: 'Кроме того, там стоит быстрая зарядка мощностью 45 Вт, благодаря чему от 0% до 100% устройство будет заряжаться примерно 1 час, что достаточно быстро, т.к. пока Вы пьете чай или кофе телефон зарядится на 50% и Вы сможете еще целый день им пользоваться.', type: 'dialog', to: 'scene_38'},
      {id: 'scene_35_seller_p3', talk: 'В общем, нормальный телефон за такие деньги, будете брать?', type: 'dialog', to: 'scene_37'},
    ],
    client: [
      {id: 'scene_35_client_p1', talk: '...', to: 'scene_38'},
    ],
  },

  { title: 'scene_36', seller: [], client: [], message: { type: 'error', text: 'Клиент ушёл ждать новую акцию.', next: 'scene_35' }, emotion: 'unhappy' },

  { title: 'scene_37', seller: [], client: [], message: { type: 'error', text: 'В данном примере используется набор слов не связанных с характеристиками и выгодами.', next: 'scene_35' }, emotion: 'unhappy' },

  {
    title: 'scene_38',
    seller: [
      {id: 'scene_38_seller_p1', talk: 'Я его сейчас достану, посмотрите, как в нём работают фишки, интерфейс системы и как вообще в руке лежит.', type: 'dialog', to: getRandomElement(['scene_40', 'scene_41'])},
      {id: 'scene_38_seller_p2', talk: 'Давайте достанем его и посмотрим поближе.', type: 'dialog', to: getRandomElement(['scene_40', 'scene_41'])},
      {id: 'scene_38_seller_p3', talk: 'Что скажете? Оформляем?', type: 'dialog', to: 'scene_39'},
    ],
    client: [
      {id: 'scene_38_client_p1', talk: 'По-моему у Вас немного дороже все стоит. Вроде, эту же модель я видел дешевле...', to: 'scene_41'},
      {id: 'scene_38_client_p2', talk: 'Не нужно. Я просто так, пока покупать не буду.', to: 'scene_40'},
    ],
  },

  { title: 'scene_39', seller: [], client: [], message: { type: 'error', text: 'Нарушение этапности работы.', next: 'scene_38' }, emotion: 'unhappy' },

  {
    title: 'scene_40',
    seller: [
      {id: 'scene_40_seller_p1', talk: 'Вообще это очень популярная модель, я такую брал своему брату в подарок. Для него тоже важна была камера. Давайте посмотрим камеру, чтобы у Вас было представление, как она снимает?', type: 'dialog', to: 'scene_51'},
      {id: 'scene_40_seller_p2', talk: 'Давайте достанем посмотрим фишки, подержите его в руках, чтобы у Вас уже было представление, что он из себя представляет?', type: 'dialog', to: 'scene_51'},
    ],
    client: [
      {id: 'scene_40_client_p1', talk: 'Давайте.', to: 'scene_51'},
    ],
  },

  {
    title: 'scene_41',
    seller: [
      {id: 'scene_41_seller_p1', talk: 'В других магазинах нет гарантии, а у нас есть.', type: 'dialog', to: 'scene_42'},
      {id: 'scene_41_seller_p2', talk: 'Вы ошибаетесь. Везде цены одинаковые.', type: 'dialog', to: 'scene_43'},
      {id: 'scene_41_seller_p3', talk: 'Понял. Если не секрет, в каком магазине видели дешевле? И какая там был цена?', type: 'dialog', to: getRandomElement(['scene_44', 'scene_48'])},
    ],
    client: [
      {id: 'scene_41_client_p1', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_42'},
      {id: 'scene_41_client_p2', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_43'},
      {id: 'scene_41_client_p3', talk: 'В соседнем магазине.', to: 'scene_44'},
      {id: 'scene_41_client_p4', talk: 'На Wildberries.', to: 'scene_48'},
    ],
  },

  { title: 'scene_42', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел (Клиент пошел узнавать, есть ли в других магазинах гарантия).', next: 'scene_41' }, emotion: 'unhappy' },

  { title: 'scene_43', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел (Некорректная отработка возражений).', next: 'scene_41' }, emotion: 'unhappy' },

  {
    title: 'scene_44',
    seller: [
      {id: 'scene_44_seller_p1', talk: 'Ну незнаю, везде цены одинаковые.', type: 'dialog', to: 'scene_45'},
      {id: 'scene_44_seller_p2', talk: 'Согласен, есть много похожих моделей в разной комплектации, сейчас легко запутаться. Это вариант в комплектации на 8/256 Гб с процессоромSnapdragon 6s 4G Gen 2. У Honor есть визуально похожие модели, но с более простым процессором, аккумулятором и памятью на 6/128. Вы видели именно эту комплектацию?', type: 'dialog', to: 'scene_46'},
    ],
    client: [
      {id: 'scene_44_client_p1', talk: 'Да, я видел именно эту комплектацию.', to: 'scene_46'},
    ],
  },

  { title: 'scene_45', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел. (Клиент пошел покупать более дешевое по стоимости устройство).', next: 'scene_44' }, emotion: 'unhappy' },

  {
    title: 'scene_46',
    seller: [
      {id: 'scene_46_seller_p1', talk: 'Кстати, да, еще встречаются в продаже несертифицированные устройства. Это значит - без официальной гарантии в России и без поддержки обновлений.', type: 'dialog', to: 'scene_47'},
    ],
    client: [
      {id: 'scene_46_client_p1', talk: '...', to: 'scene_47'},
    ],
  },

  {
    title: 'scene_47',
    seller: [
      {id: 'scene_47_seller_p1', talk: 'Давайте посмотрим ближе, я покажу, как отличить устройство с гарантией и без?', type: 'dialog', to: 'scene_51'},
    ],
    client: [
      {id: 'scene_47_client_p1', talk: 'Давайте.', to: 'scene_51'},
    ],
  },

  {
    title: 'scene_48',
    seller: [
      {id: 'scene_48_seller_p1', talk: 'Как правило, на маркетплейсе продают устройства без официальной гарантии, а если гарантия есть, то по гарантии Вам придется обращаться не в магазин, а сервисный центр самого производителя. Знаете, где находится авторизованный СЦ?', type: 'dialog', to: 'scene_49'},
    ],
    client: [
      {id: 'scene_48_client_p1', talk: '...', to: 'scene_49'},
    ],
  },

  {
    title: 'scene_49',
    seller: [
      {id: 'scene_49_seller_p1', talk: 'Поэтому, когда подумаете, приходите, посмотрим устройство поближе.', type: 'dialog', to: 'scene_50'},
      {id: 'scene_49_seller_p2', talk: 'Давайте посмотрим поближе, я покажу, как отличить устройство с гарантией и без?', type: 'dialog', to: 'scene_51'},
    ],
    client: [
      {id: 'scene_49_client_p1', talk: 'Давайте.', to: 'scene_51'},
    ],
  },

  { title: 'scene_50', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел (Вы не предприняли попытки убедить клиента посмотреть устройство поближе).', next: 'scene_49' }, emotion: 'unhappy' },

  {
    title: 'scene_51',
    seller: [
      {id: 'scene_51_seller_p1', talk: 'Сами сможете настроить устройство, чтобы данные не потерялись и активровалась стандартная гарантия от производителя?', type: 'dialog', to: 'scene_53'},
      {id: 'scene_51_seller_p2', talk: 'Кстати, благодаря последней версии ОС, в устройстве есть функция увеличения оперативной и встроенной памяти. Благодаря этому, устройство сможет работать быстрее и открывать больше приложений. Для этого нужно правильно активировать устройство.', type: 'dialog', to: 'scene_55'},
      {id: 'scene_51_seller_p3', talk: 'Мы сразу активируем вам аккаунт, перенесем данные.', type: 'dialog', to: 'scene_52'},
    ],
    client: [
      {id: 'scene_51_client_p1', talk: 'Да, сам сделаю.', to: 'scene_53'},
      {id: 'scene_51_client_p2', talk: '...', to: 'scene_55'},
    ],
  },

  { title: 'scene_52', seller: [], client: [], message: { type: 'error', text: 'Некорректное предложение настроек.', next: 'scene_51' }, emotion: 'unhappy' },

  {
    title: 'scene_53',
    seller: [
      {id: 'scene_53_seller_p1', talk: 'Если Вы что-то не так сделаете, устройство может превратиться в кирпич.', type: 'dialog', to: 'scene_54'},
      {id: 'scene_53_seller_p2', talk: 'Согласен, можно сделать самостоятельно. Обычно настройка занимает 2-3 часа: обновления, регистрация аккаунтов, отключение рекламы, настройка уведомлений, перенос контактов, персонализация интерфейса. Я делаю это за 15 минут. Потратить несколько часов жизни и свои нервы, если что-то пойдёт не так – или через 15 минут начать пользоваться готовым телефоном.', type: 'dialog', to: 'scene_55'},
    ],
    client: [
      {id: 'scene_53_client_p1', talk: '...', to: 'scene_55'},
    ],
  },

  { title: 'scene_54', seller: [], client: [], message: { type: 'error', text: 'Некорректная отработка возражений. Не правильная аргументация.', next: 'scene_53' }, emotion: 'unhappy' },

  {
    title: 'scene_55',
    seller: [
      {id: 'scene_55_seller_p1', talk: 'Что скажете? Оформляем?', type: 'dialog', to: getRandomElement(['scene_56', 'scene_58'])},
    ],
    client: [
      {id: 'scene_55_client_p1', talk: 'Да.', to: 'scene_56'},
      {id: 'scene_55_client_p2', talk: 'Мне нужно подумать.', to: 'scene_58'},
    ],
  },

  {
    title: 'scene_56',
    seller: [
      {id: 'scene_56_seller_p1', talk: 'Отличный выбор!', type: 'dialog', to: 'scene_62'},
      {id: 'scene_56_seller_p2', talk: 'Хорошо. Аксессуары будете брать?', type: 'dialog', to: 'scene_57'},
    ],
    client: [
      {id: 'scene_56_client_p1', talk: '...', to: 'scene_62'},
    ],
  },

  { title: 'scene_57', seller: [], client: [], message: { type: 'error', text: 'Некорректное и несвоевременное предложение аксессуаров.', next: 'scene_56' }, emotion: 'unhappy' },

  {
    title: 'scene_58',
    seller: [
      {id: 'scene_58_seller_p1', talk: 'Не устроила цена или качество?', type: 'dialog', to: 'scene_60'},
      {id: 'scene_58_seller_p2', talk: 'Подскажите, что смущает?', type: 'dialog', to: 'scene_60'},
      {id: 'scene_58_seller_p3', talk: 'Хорошо. Приходите к нам еще, будем рады видеть Вас в нашем магазине Цифромаркет!', type: 'dialog', to: 'scene_59'},
    ],
    client: [
      {id: 'scene_58_client_p1', talk: 'Как-то дороговато. Сомневаюсь, что нужен телефон за такую цену.', to: 'scene_60'},
    ],
  },

  { title: 'scene_59', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел, сотрудник не предпринял попытки выяснить в чем заключается сомнение клиента.', next: 'scene_58' }, emotion: 'unhappy' },

  {
    title: 'scene_60',
    seller: [
      {id: 'scene_60_seller_p1', talk: 'Я Вас понимаю - тоже сомневался перед покупкой своего телефона. Потом всё же решился и снова пришёл за ним - но цена уже подросла. В моём случае всего на 500р, но тоже ощутимо. Мы с Вами выбрали такую модель, которая с одной стороны точно подходит под Ваши пожелания, с другой стороны - надёжная и с запасом актуальности на несколько лет вперёд - из-за этого Вам не придётся его менять уже через пару лет, в отличие от более дешёвых моделей. Если телефон понравился - берите и не сомневайтесь.', type: 'dialog', to: 'scene_62'},
      {id: 'scene_60_seller_p2', talk: 'Как подумаете - приходите.', type: 'dialog', to: 'scene_61'},
    ],
    client: [
      {id: 'scene_60_client_p1', talk: 'Ну в принципе устройство меня устраивает. Давайте оформляем.', to: 'scene_62'},
      {id: 'scene_60_client_p2', talk: 'Хорошо, спасибо.', to: 'scene_61'},
    ],
  },

  { title: 'scene_61', seller: [], client: [], message: { type: 'error', text: 'Клиент ушел и не вернулся.', next: 'scene_60' }, emotion: 'unhappy' },

  {
    title: 'scene_62',
    seller: [
      {id: 'scene_62_seller_p1', talk: 'Пойдёмте на кассу оплачивать. Вам плёнка, чехол, зарядка нужны?', type: 'dialog', to: 'scene_63'},
      {id: 'scene_62_seller_p2', talk: 'Аксессуары будете брать? ', type: 'dialog', to: 'scene_64'},
      {id: 'scene_62_seller_p3', talk: 'Так, посмотрим, что у нас есть к этому устройству. Что Вы больше предпочитаете, чехол книгу или накладку?', type: 'dialog', to: getRandomElement(['scene_65', 'scene_68'])},
    ],
    client: [
      {id: 'scene_62_client_p1', talk: 'Нет.', to: 'scene_63'},
      {id: 'scene_62_client_p2', talk: 'Нет.', to: 'scene_64'},
      {id: 'scene_62_client_p3', talk: 'Сколько у Вас стоит накладка?', to: 'scene_65'},
      {id: 'scene_62_client_p4', talk: 'Накладку.', to: 'scene_68'},
    ],
  },

  { title: 'scene_63', seller: [], client: [], message: { type: 'error', text: 'Некорректное предложение аксессуаров. Клиент уже настроился оплатить только стоимость телефона, а на массовое предложение аксессуаров отказался одним ответом.', next: 'scene_62' }, emotion: 'unhappy' },

  { title: 'scene_64', seller: [], client: [], message: { type: 'error', text: 'Некорректное и несвоевременное предложение аксессуаров.', next: 'scene_62' }, emotion: 'unhappy' },

  {
    title: 'scene_65',
    seller: [
      {id: 'scene_65_seller_p1', talk: '1390 рублей.', type: 'dialog', to: getRandomElement(['scene_66', 'scene_68'])},
      {id: 'scene_65_seller_p2', talk: 'Цены на накладки, как и на телефоны, и на другие товары зависят от характеристик и материала, из которого они сделаны. Есть от 300 рублей и до 3500. Они отличаются долговечностью и степенью защиты. Давайте мы посмотрим, какая Вам подойдёт и тогда уже я смогу озвучить вам стоимость.', type: 'dialog', to: 'scene_68'},
    ],
    client: [
      {id: 'scene_65_client_p1', talk: 'У Вас дорого, я на ВБ закажу дешевле.', to: 'scene_66'},
      {id: 'scene_65_client_p2', talk: 'Ясно покажите, что есть?', to: 'scene_68'},
    ],
  },

    {
    title: 'scene_66',
    seller: [
      {id: 'scene_66_seller_p1', talk: 'У нас хорошие чехлы. Лучше чем у продавцов с ВБ. Они будут держаться дольше и лучше защищают от ударов.', type: 'dialog', to: 'scene_67'},
      {id: 'scene_66_seller_p2', talk: 'Согласен, важно знать за что мы платим. У нас тоже есть чехлы за 300 р. Но дешевое не может быть хорошим. Я рекомендую вам взять вариант в средней ценовый категории, у нас это чехлы из термопластичного полиуретана - это материал гарантирует 100% защиту при падениях, они не выгорают, не растягиваются и служат практически вечно. Перед оплатой вы точно видите, за что платите, в отличие от ВБ - там сначала нужно заказать, потом дождаться, пойти получить и в итоге окажется, что под видом качественной вещи вам пришлют обычную накладку, которая спасёт только от мелких потёртостей.', type: 'dialog', to: getRandomElement(['scene_69', 'scene_68'])},
    ],
    client: [
      {id: 'scene_66_client_p1', talk: 'Не надо.', to: 'scene_67'},
      {id: 'scene_66_client_p2', talk: 'Нет, я в другом месте куплю.', to: 'scene_69'},
      {id: 'scene_66_client_p3', talk: 'Ну хорошо, давайте.', to: 'scene_68'},
    ],
  },

  { title: 'scene_67', seller: [], client: [], message: { type: 'error', text: 'Вы не продали чехол, так как у Вас была некорректная аргументация.', next: 'scene_68' }, emotion: 'unhappy' },

  { title: 'scene_69', seller: [], client: [], message: {type: 'success', text: 'Вы грамотно отработали возражение, но не убедили клиента.', next: 'scene_68'}, emotion: 'unhappy' },

  {
    title: 'scene_68',
    seller: [
      {id: 'scene_68_seller_p1', talk: 'Вы же не будете с открытым экраном ходить? Давате подберем защиту для него. Как предпочитаете защищить, с помощью пленки или защитного стекла?', type: 'dialog', to: getRandomElement(['scene_70', 'scene_74', 'scene_78', 'scene_77'])},
    ],
    client: [
      {id: 'scene_68_client_p1', talk: 'Сколько у Вас стоят пленки/стекла?', to: 'scene_70'},
      {id: 'scene_68_client_p2', talk: 'Нет спасибо, я куплю в соседнем магазине.', to: 'scene_74'},
      {id: 'scene_68_client_p3', talk: 'Нет спасибо, я куплю на WB.', to: 'scene_78'},
      {id: 'scene_68_client_p4', talk: 'К: Да, дайте подберем.', to: 'scene_77'},
    ],
  },

  {
    title: 'scene_70',
    seller: [
      {id: 'scene_70_seller_p1', talk: 'С наклеиванием 1990 рублей.', type: 'dialog', to: 'scene_71'},
      {id: 'scene_70_seller_p2', talk: '1590 рублей.', type: 'dialog', to: 'scene_71'},
      {id: 'scene_70_seller_p3', talk: 'Цены начинаются от 500 до 3000 руб. Цена зависит от производителя, количества слоев и степенью защиты. Вам какой вариант подобрать побюджетней и который будет защищать от царапин или стекло/пленку, которое способно защищать от ударов?', type: 'dialog', to: 'scene_73'},
    ],
    client: [
      {id: 'scene_70_client_p1', talk: 'Дорого. Я в соседнем магазине куплю дешевшле.', to: 'scene_71'},
      {id: 'scene_70_client_p2', talk: 'Давайте, то которе от ударов буудет защищать.', to: 'scene_73'},
    ],
  },

  {
    title: 'scene_71',
    seller: [
      {id: 'scene_71_seller_p1', talk: 'Понимаю, важно знать за что мы платим. У нас в магазине, есть стекла/пленки стоимостью от 200 р., но такие стекла не способны защитить экран устройства в случае падения с 1,5 м высоты. Вы же хотите, чтобы ваше устройство было защищено в таких ситуациях?', type: 'dialog', to: 'scene_72'},
      {id: 'scene_71_seller_p2', talk: 'Там качество плохое, а у нас хорошее.', type: 'dialog', to: 'scene_72'},
    ],
    client: [
      {id: 'scene_71_client_p1', talk: 'Я подумаю. Если что, куплю чуть позже.', to: 'scene_72'},
    ],
  },

  { title: 'scene_72', seller: [], client: [], message: { type: 'error', text: 'Клиент не купил стекло/пленку, так как Вы озвучили прямую стоимость товар, в такой ситуации лучше озввучить "вилку" стоимости или цену всего чека.', next: 'scene_79' }, emotion: 'unhappy' },

  { title: 'scene_73', seller: [], client: [], message: {type: 'success', text: 'Вы грамотно отработали сомнения клиента и продадли стекло/пленку.', next: 'scene_79'}, emotion: 'unhappy' },

  {
    title: 'scene_74',
    seller: [
      {id: 'scene_74_seller_p1', talk: 'Понимаю. Если не секрет, сколько стекла стоят в соседнем магазине?', type: 'dialog', to: 'scene_76'},
      {id: 'scene_74_seller_p2', talk: 'Понимаю. Но у нас стекла противоударные.', type: 'dialog', to: 'scene_75'},
    ],
    client: [
      {id: 'scene_74_client_p1', talk: '500 рублей.', to: 'scene_76'},
      {id: 'scene_74_client_p2', talk: 'Не надо.', to: 'scene_75'},
    ],
  },

  { title: 'scene_75', seller: [], client: [], message: { type: 'error', text: 'Некорректная отработка возражения.', next: 'scene_79' }, emotion: 'unhappy' },

  {
    title: 'scene_76',
    seller: [
      {id: 'scene_76_seller_p1', talk: 'Понимаю, важно знать за что мы платим. У нас в магазине, также есть стекла/пленки стоимостью от 200 р., но такие стекла не способны защитить экран устройства в случае падения с 1,5 м высоты. Вы же хотите, чтобы ваше устройство было защищено в таких ситуациях?', type: 'dialog', to: 'scene_77'},
    ],
    client: [
      {id: 'scene_76_client_p1', talk: 'К: Давайте, то которе от ударов будет защищать.', to: 'scene_77'},
    ],
  },

  { title: 'scene_77', seller: [], client: [], message: {type: 'success', text: 'Вы грамотно отработали сомнения клиента и продадли стекло/пленку.', next: 'scene_79'}, emotion: 'unhappy' },

  {
    title: 'scene_78',
    seller: [
      {id: 'scene_78_seller_p1', talk: 'Понимаю. Если не секрет, сколько стекла стоят на маркетплейсе?', type: 'dialog', to: 'scene_76'},
    ],
    client: [
      {id: 'scene_78_client_p1', talk: '500 рублей.', to: 'scene_76'},
    ],
  },

  {
    title: 'scene_79',
    seller: [
      {id: 'scene_79_seller_p1', talk: 'Помните, я Вам рассказывал про возможность увеличить оперативную память до 16 Гб, благодаря этому, ваше устройство будет работать шустрее и запускать более тяжелые приложения. Давайе я настрою ОС на устройстве, чтобы эту функцию можно было активировать?', type: 'dialog', to: getRandomElement(['scene_80', 'scene_86'])},
      {id: 'scene_79_seller_p2', talk: 'Также можно перенести данные с вашего устройства на новое и увеличить оперативную память?', type: 'dialog', to: 'scene_87'},
      {id: 'scene_79_seller_p3', talk: 'Давайте сразу активируем устройство?', type: 'dialog', to: 'scene_87'},
    ],
    client: [
      {id: 'scene_79_client_p1', talk: 'Сколько это будет стоить?', to: 'scene_80'},
      {id: 'scene_79_client_p2', talk: 'Хорошо, сделайте пожалуйста.', to: 'scene_86'},
      {id: 'scene_79_client_p3', talk: 'Нет спасибо, я сам сделаю.', to: 'scene_87'},
    ],
  },

  {
    title: 'scene_80',
    seller: [
      {id: 'scene_80_seller_p1', talk: '2000 рублей.', type: 'dialog', to: getRandomElement(['scene_81', 'scene_83'])},
      {id: 'scene_80_seller_p2', talk: 'Давайте я все вместе посчитаю и скажу сколько это будет стоить. Хорошо?', type: 'dialog', to: 'scene_85'},
    ],
    client: [
      {id: 'scene_80_client_p1', talk: 'Дорого.', to: 'scene_81'},
      {id: 'scene_80_client_p2', talk: 'Нет спасибо, я сам сделаю.', to: 'scene_83'},
      {id: 'scene_80_client_p3', talk: 'Хорошо.', to: 'scene_85'},
    ],
  },

  {
    title: 'scene_81',
    seller: [
      {id: 'scene_81_seller_p1', talk: 'На первый взгляд так и правда может показаться. В тоже время если сравнивать с устройствами, где на борту стоят 16 Гб оперативной памяти - это очень низкая цена. Т.е. вы платите за 8 гБ, а фактически получаете 16 Гб, что позволит вам сэкономить, а устройству работать быстрее, что скажете?', type: 'dialog', to: 'scene_82'},
    ],
    client: [
      {id: 'scene_81_client_p1', talk: 'Нет.', to: 'scene_82'},
    ],
  },

  { title: 'scene_82', seller: [], client: [], message: { type: 'error', text: 'Вы грамотно отработали возражение, ваша ошибка в том, что вы допустили возражение: "Нет спасибо сделаю сам". В этой ситуации лучше озвучить "вилку" стоимости или предложить озвучить стоимость чека целиком.', next: 'scene_88' }, emotion: 'unhappy' },

  {
    title: 'scene_83',
    seller: [
      {id: 'scene_83_seller_p1', talk: 'Понимаю, кажется, что процесс можно выполнить без грамотного специалиста самому. В тоже время, чтобы увеличить оперативную память на смартфоне, необходимо доступ к правам разработчика, там вы можете например неправильно выставить скорость работы оперативной памяти и тогда устройство будет сильно греться, что приведет к быстрому выходу его из строя. Гораздо безопаснее, если воспользуетесь помощью специалиста. Что скажете, давайте сразу настроим, тем более что это займет не более 5 мнут?', type: 'dialog', to: 'scene_84'},
    ],
    client: [
      {id: 'scene_83_client_p1', talk: 'Нет.', to: 'scene_84'},
    ],
  },

  { title: 'scene_84', seller: [], client: [], message: { type: 'error', text: 'Вы грамотно отработали возражение, ваша ошибка в том, что вы допустили возражение: "Нет спасибо сделаю сам". В этой ситуации лучше озвучить "вилку" стоимости или предложить озвучить стоимость чека целиком.', next: 'scene_88' }, emotion: 'unhappy' },

  { title: 'scene_85', seller: [], client: [], message: {type: 'success', text: 'Вы грамотно обошли возражение клиента.', next: 'scene_88'}, emotion: 'unhappy' },

  { title: 'scene_86', seller: [], client: [], message: {type: 'success', text: 'Клиент согласился. Вы грамотно в привязке с потребности предложили настройки.', next: 'scene_88'}, emotion: 'unhappy' },

  { title: 'scene_87', seller: [], client: [], message: { type: 'error', text: 'Некорректная формулировка при предложении настроек. Предложение было сделано без привязки к потребности клиента.', next: 'scene_88' }, emotion: 'unhappy' },

  {
    title: 'scene_88',
    seller: [
      {id: 'scene_88_seller_p1', talk: 'Скажите, Вам грантию стандартную или расширенную?', type: 'dialog', to: getRandomElement(['scene_89', 'scene_90'])},
      {id: 'scene_88_seller_p2', talk: 'Скажите, Вам гарантию на 1 или 2 года?', type: 'dialog', to: 'scene_92'},
      {id: 'scene_88_seller_p3', talk: 'Вам гарантию расширить?', type: 'dialog', to: 'scene_94'},
      {id: 'scene_88_seller_p4', talk: 'Также могу предлоджить вам расширенную гарантию?', type: 'dialog', to: 'scene_94'},
    ],
    client: [
      {id: 'scene_88_client_p1', talk: 'В чем разница?', to: 'scene_89'},
      {id: 'scene_88_client_p2', talk: 'Она платная?', to: 'scene_90'},
      {id: 'scene_88_client_p3', talk: 'Что она дает?', to: 'scene_92'},
      {id: 'scene_88_client_p5', talk: 'Нет, спасибо.', to: 'scene_94'},
    ],
  },

  {
    title: 'scene_89',
    seller: [
      {id: 'scene_89_seller_p1', talk: 'Вы же телефоном планируете пользоваться года 3-4? Расширенная гарантия позволит защитить  ваш телефон на время всего или почти сего срока использования - если будет какая-то поломка, вы сможете просто обратиться к нам и мы всё решим.', type: 'dialog', to: 'scene_95'},
    ],
    client: [
      {id: 'scene_89_client_p1', talk: 'Хорошо, давайте.', to: 'scene_95'},
    ],
  },

  {
    title: 'scene_90',
    seller: [
      {id: 'scene_90_seller_p1', talk: 'Да, платная, цена будет от 500 до 3000, в зависимости от устройства, давайте я все вместе посчитаю и скажу сколько будет стоить. Так как у Вас в чеке несколько позиций - будет скидка.', type: 'dialog', to: 'scene_92'},
      {id: 'scene_90_seller_p2', talk: 'Да, разница между стандартной и расширенной 500р.', type: 'dialog', to: 'scene_92'},
      {id: 'scene_90_seller_p3', talk: 'Да, будет стоить 2000 р.', type: 'dialog', to: 'scene_91'},
    ],
    client: [
      {id: 'scene_90_client_p1', talk: 'Что она дает?', to: 'scene_92'},
      {id: 'scene_90_client_p2', talk: 'Нет, спасибо.', to: 'scene_91'},
    ],
  },

  { title: 'scene_91', seller: [], client: [], message: { type: 'error', text: 'Некорректная формулировка при отработке возражений. Рекомендуется озввучивать "вилку" стоимости или стоимость чека целиком.', next: 'scene_96' }, emotion: 'unhappy' },

  {
    title: 'scene_92',
    seller: [
      {id: 'scene_92_seller_p1', talk: 'Вы же телефоном планируете пользоваться года 3-4? Расширенная гарантия позволит защитить  ваш телефон на время всего или почти сего срока использования - если будет какая-то поломка, вы сможете просто обратиться к нам и мы всё решим.', type: 'dialog', to: 'scene_95'},
      {id: 'scene_92_seller_p2', talk: 'Благодаря гарантии, вы сможете поменять ваше устройство на новое с доплатой или без, починить поломку бесплатно, а если устройство неремонтопригодно - вернуть деньги.', type: 'dialog', to: 'scene_95'},
      {id: 'scene_92_seller_p3', talk: 'Тоже самое, что и гарантия от производителя.', type: 'dialog', to: 'scene_93'},
    ],
    client: [
      {id: 'scene_90_client_p1', talk: 'Хорошо, давайте.', to: 'scene_95'},
      {id: 'scene_90_client_p2', talk: 'Нет, спасибо.', to: 'scene_93'},
    ],
  },

  { title: 'scene_93', seller: [], client: [], message: { type: 'error', text: 'Некорректная формулировка при отработке возражений.', next: 'scene_96' }, emotion: 'unhappy' },

  { title: 'scene_94', seller: [], client: [], message: { type: 'error', text: 'Некорректное формулировка прри предложении ДСО.', next: 'scene_96' }, emotion: 'unhappy' },

  { title: 'scene_95', seller: [], client: [], message: {type: 'success', text: 'Вы грамотно обошли возражение клиента.', next: 'scene_96'}, emotion: 'unhappy' },

  {
    title: 'scene_96',
    seller: [
      {id: 'scene_96_seller_p1', talk: 'Пока я всё посчитаю, подскажите, вы за связь сколько платите?', type: 'dialog', to: 'scene_98'},
      {id: 'scene_96_seller_p2', talk: 'Вам сим карта не нужна?', type: 'dialog', to: 'scene_97'},
    ],
    client: [
      {id: 'scene_96_client_p1', talk: '800 рублей выходит.', to: 'scene_98'},
      {id: 'scene_96_client_p2', talk: 'Нет, спасибо.', to: 'scene_97'},
    ],
  },

  { title: 'scene_97', seller: [], client: [], message: { type: 'error', text: 'Клиент отказался из-за неккоректного предложения.', next: 'scene_103' }, emotion: 'unhappy' },

  {
    title: 'scene_98',
    seller: [
      {id: 'scene_98_seller_p1', talk: 'Не хотите другую симку?', type: 'dialog', to: 'scene_100'},
      {id: 'scene_98_seller_p2', talk: 'Ничего себе! Это какой у вас оператор?', type: 'dialog', to: 'scene_99'},
    ],
    client: [
      {id: 'scene_98_client_p1', talk: 'Да нет, у меня уже давно она, не хочу менять.', to: 'scene_100'},
      {id: 'scene_98_client_p2', talk: 'Мегафон.', to: 'scene_99'},
    ],
  },

  {
    title: 'scene_99',
    seller: [
      {id: 'scene_99_seller_p1', talk: 'Давайте попробуем другого оператора с большим наполнением и меньшей оплатой? За месяц посмотрите, как работает - если понравится, перенесёте номер. если не понравится - просто закроете и всё, согласны?', type: 'dialog', to: 'scene_103'},
      {id: 'scene_99_seller_p2', talk: 'Другую не хотите попробовать?', type: 'dialog', to: 'scene_97'},
    ],
    client: [
      {id: 'scene_99_client_p1', talk: 'Ну давайте попробуем.', to: 'scene_103'},
      {id: 'scene_99_client_p2', talk: 'Нет.', to: 'scene_97'},
    ],
  },

  {
    title: 'scene_100',
    seller: [
      {id: 'scene_100_seller_p1', talk: 'Хорошо, понял.', type: 'dialog', to: 'scene_101'},
      {id: 'scene_100_seller_p2', talk: 'Понимаю, у вас везде этот номер привязан и его все знакомые знают. Я предлагаю вам взять сим карту и протестировать один месяц: Если не понравится, просто закроете, а если будет ловить лучше и при этом она будет стоить дешевле - перенесёте свой номер на неё и всё. как вам?', type: 'dialog', to: getRandomElement(['scene_102', 'scene_103'])},
    ],
    client: [
      {id: 'scene_100_client_p1', talk: 'Нет, не надо.', to: 'scene_102'},
      {id: 'scene_100_client_p2', talk: 'Ну давайте попробуем.', to: 'scene_103'},
    ],
  },

  { title: 'scene_101', seller: [], client: [], message: { type: 'error', text: 'У клиента было возражение, его можно было попробовать отработать.', next: 'scene_103' }, emotion: 'unhappy' },

  { title: 'scene_102', seller: [], client: [], message: {type: 'success', text: 'Вы попробовали отработать возражение, но клиенту вторая сим карта не нужна, переходим дальше.', next: 'scene_103'}, emotion: 'unhappy' },

  {
    title: 'scene_103',
    seller: [
      {id: 'scene_103_seller_p1', talk: 'Что-нибудь ещё желаете?', type: 'dialog', to: 'scene_104'},
      {id: 'scene_103_seller_p2', talk: 'Скажите, Вы на улице много времени проводите?', type: 'dialog', to: 'scene_105'},
    ],
    client: [
      {id: 'scene_103_client_p1', talk: 'Нет.', to: 'scene_104'},
      {id: 'scene_103_client_p2', talk: 'Ну да, летом то огороды, то во дворе что-то делать надо.', to: 'scene_105'},
    ],
  },

  { title: 'scene_104', seller: [], client: [], message: { type: 'error', text: 'Некорректный вопрос.', next: 'scene_109' }, emotion: 'unhappy' },

  {
    title: 'scene_105',
    seller: [
      {id: 'scene_105_seller_p1', talk: 'Колонку не хотите купить?', type: 'dialog', to: 'scene_106'},
      {id: 'scene_105_seller_p2', talk: 'Понимаю, на это всегда много времени уходит, ещё и в тишине приходится всё делать. Я себе для таких случаев вот такую колонку взял, она как раз сейчас по акции идёт - включаю на ней музыку или радио и сразу работать веселее, и время быстрее проходит, давайте покажу?', type: 'dialog', to: getRandomElement(['scene_107', 'scene_108'])},
    ],
    client: [
      {id: 'scene_105_client_p1', talk: 'Нет, мне колонка не нужна.', to: 'scene_106'},
      {id: 'scene_105_client_p2', talk: 'Нет, спасибо.', to: 'scene_107'},
      {id: 'scene_105_client_p3', talk: 'Давайте посмотрим.', to: 'scene_108'},
    ],
  },

  { title: 'scene_106', seller: [], client: [], message: { type: 'error', text: 'Некорректное предложение', next: 'scene_109' }, emotion: 'unhappy' },

  { title: 'scene_107', seller: [], client: [], message: {type: 'success', text: 'Вы сделали всё правильно и предложили товар по акции. К сожалению, данного клиента это не заинтересовало, но следующий обязательно купит!', next: 'scene_109'}, emotion: 'normal' },

  {
    title: 'scene_108',
    seller: [
      {id: 'scene_108_seller_p1', talk: 'Давайте я посчитаю всё вместе с вашей скидкой?', type: 'dialog', to: 'scene_109'},
    ],
    client: [
      {id: 'scene_108_client_p1', talk: 'Давайте.', to: 'scene_109'},
    ],
  },

  {
    title: 'scene_109',
    seller: [
      {id: 'scene_109_seller_p1', talk: 'QR сможете оплатить?', type: 'dialog', to: 'scene_110'},
      {id: 'scene_109_seller_p2', talk: 'ПК: С вас 48538 рублей, можете оплачивать.', type: 'dialog', to: 'scene_111'},
      {id: 'scene_109_seller_p3', talk: 'Итак, у нас с вами: Honor X8d, чехол, плёнка, расширенная гарантия, сим карта и акционная музыкальная колонка. Общая сумма - 48538 руб. Ничего не забыл?', type: 'dialog', to: 'scene_112'},
    ],
    client: [
      {id: 'scene_109_client_p1', talk: '...', to: 'scene_110'},
      {id: 'scene_109_client_p2', talk: '...', to: 'scene_111'},
      {id: 'scene_109_client_p3', talk: 'Всё верно.', to: 'scene_112'},
    ],
  },

  { title: 'scene_110', seller: [], client: [], message: { type: 'error', text: 'Клиент ещё не знает, какая сумма его чека получилась.', next: 'scene_109' }, emotion: 'unhappy' },
  
  { title: 'scene_111', seller: [], client: [], message: { type: 'error', text: 'Некорректное завершение продажи.', next: 'scene_109' }, emotion: 'unhappy' },

  {
    title: 'scene_112',
    seller: [
      {id: 'scene_112_seller_p1', talk: 'Я вам сейчас оформлю нашу бесплатную бонусную карту, на которую уже с этой покупки вам будут начислены бонусы, она виртуальная и привязана к номеру телефона, хорошо?', type: 'dialog', to: 'scene_113'},
    ],
    client: [
      {id: 'scene_112_client_p1', talk: 'Хорошо.', to: 'scene_113'},
    ],
  },

  {
    title: 'scene_113',
    seller: [
      {id: 'scene_113_seller_p1', talk: 'С Вас 48538 руб.', type: 'dialog', to: 'scene_114'},
      {id: 'scene_113_seller_p2', talk: 'Сможете оплатить по QR?', type: 'dialog', to: 'scene_116'},
      {id: 'scene_113_seller_p3', talk: 'У Вас оплата будет картой или наличными?', type: 'dialog', to: getRandomElement(['scene_115', 'scene_118'])},
    ],
    client: [
      {id: 'scene_113_client_p1', talk: '...', to: 'scene_114'},
      {id: 'scene_113_client_p2', talk: 'Наличными.', to: 'scene_118'},
      {id: 'scene_113_client_p3', talk: 'Картой.', to: 'scene_115'},
      {id: 'scene_113_client_p4', talk: 'Я не умею.', to: 'scene_116'},
    ],
  },

  { title: 'scene_114', seller: [], client: [], message: { type: 'error', text: 'Предложите оплатить по QR.', next: 'scene_113' }, emotion: 'unhappy' },

  {
    title: 'scene_115',
    seller: [
      {id: 'scene_115_seller_p1', talk: 'Сможете оплатить по QR?', type: 'dialog', to: 'scene_116'},
    ],
    client: [
      {id: 'scene_115_client_p1', talk: 'Я не умею.', to: 'scene_116'},
    ],
  },

  {
    title: 'scene_116',
    seller: [
      {id: 'scene_116_seller_p1', talk: 'Хорошо, тогда картой можете оплачивать.', type: 'dialog', to: 'scene_117'},
      {id: 'scene_116_seller_p2', talk: 'Там очень быстро получается, давайте покажу - в будущем, если забудете карту, сможете оплатить любую покупку телефоном?', type: 'dialog', to: 'scene_118'},
    ],
    client: [
      {id: 'scene_116_client_p1', talk: '...', to: 'scene_117'},
      {id: 'scene_116_client_p2', talk: 'Хорошо, давайте.', to: 'scene_118'},
    ],
  },

  { title: 'scene_117', seller: [], client: [], message: { type: 'error', text: 'Попробуйте отработать возражение "Я не умею".', next: 'scene_116' }, emotion: 'unhappy' },

  {
    title: 'scene_118',
    seller: [
      {id: 'scene_118_seller_p1', talk: 'Вот ваш чек. Поздравляем с отличной покупкой и напоминаю, что вы теперь наш клиент и вам доступно полное гарантийное и постгарантийное обслуживание как в нашей компании и нашем сервисном центре. Если что-то случится, даже после окончания гарантии - можете приносить к нам устройство и не беспокоиться о качестве выполненных работ и оригинальности комплектующих.', type: 'dialog', to: 'scene_119'},
    ],
    client: [
      {id: 'scene_118_client_p1', talk: '...', to: 'scene_119'},
    ],
  },

  {
    title: 'scene_119',
    seller: [
      {id: 'scene_119_seller_p1', talk: 'Будем рады снова видеть вас в нашей компании Циформаркет!', type: 'dialog', to: 'scene_120'},
      {id: 'scene_119_seller_p2', talk: 'До свидания!', type: 'dialog', to: 'scene_120'},
    ],
    client: [
      {id: 'scene_119_client_p1', talk: 'До свидания!', to: 'scene_120'},
    ],
  },

  { title: 'scene_120', seller: [], client: [], message: {type: 'success', text: 'Поздравляем! Вы прошли весь путь. Вы продали дополнительные товары и услуги, при этом все сделали правильно! Мы думаем, что вы готовы делать хорошие продажи! Удачи!', next: 'scene_121'}, emotion: 'unhappy' },

];