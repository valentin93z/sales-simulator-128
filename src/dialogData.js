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
      {id: 'scene_1_seller_p1', talk: 'Добырй день! Нужна помощь?', type: 'dialog', to: 'scene_2'},
      {id: 'scene_1_seller_p2', talk: 'Добрый день! Что-то подсказать?', type: 'dialog', to: 'scene_3'},
      {id: 'scene_1_seller_p3', talk: 'Добрый день! Вы к нам на экскурсию или за покупкой?', type: 'dialog', to: getRandomElement(['scene_4', 'scene_5'])},
      {id: 'scene_1_seller_p4', talk: 'Добрый день! Вы уже определились с выбором или вам нужна консультация?', type: 'dialog', to: getRandomElement(['scene_4', 'scene_5'])},
      {id: 'scene_1_seller_p5', talk: 'Здравствуйте! Вас что-то конкретное интересует?', type: 'dialog', to: 'scene_6'},
      {id: 'scene_1_seller_p6', talk: 'Здравствуйте! Что вы ищите?', type: 'dialog', to: 'scene_7'},
    ],
    client: [
      {id: 'scene_1_client_p1', talk: 'Займите денег?', to: 'scene_2'},
      {id: 'scene_1_client_p2', talk: 'Нет.', to: 'scene_3'},
      {id: 'scene_1_client_p3', talk: 'Добрый день! Просто смотрю.', to: 'scene_4'},
      {id: 'scene_1_client_p4', talk: 'Добрый день! Да вот присматриваю, хочу поменять свой телефон.', to: 'scene_5'},
      {id: 'scene_1_client_p5', talk: 'Добрый день! Пока нет.', to: 'scene_6'},
      {id: 'scene_1_client_p6', talk: 'Здравствуйте. Ничего, я просто посмотреть!', to: 'scene_7'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_2', seller: [], client: [], message: {type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_1'}, emotion: 'unhappy' },
  { title: 'scene_3', seller: [], client: [], message: {type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_1'}, emotion: 'unhappy' },

  {
    title: 'scene_4',
    seller: [
      {id: 'scene_4_seller_p1', talk: 'Хорошо. Что-то подсказать?', type: 'dialog', to: 'scene_9'},
      {id: 'scene_4_seller_p2', talk: 'Хорошо. У нас не все на витринах. Если что можно оформить заказ. Какую модель ищите?', type: 'dialog', to: getRandomElement(['scene_10', 'scene_11'])},
      {id: 'scene_4_seller_p3', talk: 'Хорошо. Тогда не буду вам мешать. Вот на этой витрине у нас представлены новинки. Когда возникнут вопросы, обращайтесь.', type: 'dialog', to: 'scene_970'},
    ],
    client: [
      {id: 'scene_4_client_p1', talk: 'Да нет. просто присматриваю телефон.', to: 'scene_10'},
      {id: 'scene_4_client_p2', talk: 'У Вас есть смартфон Redmi?', to: 'scene_11'},
    ],
    emotion: 'normal',
  },
  {
    title: 'scene_5',
    seller: [
      {id: 'scene_5_seller_p1', talk: '>> Перейти на презентацию товара.', type: 'action', to: 'scene_8'},
      {id: 'scene_5_seller_p2', talk: '>> Дать время освоится. Отойти на комфортное расстояние.', type: 'action', to: 'scene_12'},
      {id: 'scene_5_seller_p3', talk: '>> Выявить потребности.', type: 'action', to: 'scene_10'},
    ],
    client: [],
    emotion: 'normal',
  },

  {
    title: 'scene_970',
    seller: [
      {id: 'scene_970_seller_p1', talk: '>> Отойти на комфортное для клиента и Вас расстояние (2-3 м) и наблюдать за ним.', type: 'action', to: 'scene_973'},
      {id: 'scene_970_seller_p2', talk: '>> Не отходить от клиента. Стараться находиться рядом, на расстоянии не более 1 метра от него.', type: 'action', to: 'scene_971'},
      {id: 'scene_970_seller_p3', talk: '>> Подождать пока клиент сам задаст вопрос.', type: 'action', to: 'scene_972'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_971', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Вы были слишком навязчивы. Нельзя преследовать клиента. Правильно, если вы будете находиться в 2-3 метрах от него.', next: 'scene_970'}, emotion: 'unhappy' },
  { title: 'scene_972', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Вы не проявили заинтерисованность.', next: 'scene_970'}, emotion: 'unhappy' },

  {
    title: 'scene_973',
    seller: [
      {id: 'scene_973_seller_p1', talk: '>> Подождать, пока клиент сам задаст вопрос.', type: 'action', to: 'scene_974'},
      {id: 'scene_973_seller_p2', talk: '>> Ищем три признака заинтересованности клиента в консультации.', type: 'action', to: 'scene_975'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_974', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Вы не проявили заинтерисованность.', next: 'scene_973'}, emotion: 'unhappy' },

  {
    title: 'scene_975',
    seller: [
      {id: 'scene_975_seller_p1', talk: '>> Подойти, чтобы выявить потребности.', type: 'action', to: 'scene_10'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_6', seller: [], client: [], message: {type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_1'}, emotion: 'unhappy' },
  { title: 'scene_7', seller: [], client: [], message: {type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_1'}, emotion: 'unhappy' },
  { title: 'scene_8', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы.', next: 'scene_5'}, emotion: 'unhappy' },
  { title: 'scene_9', seller: [], client: [], message: {type: 'error', text: 'Использование закрытых вопросов.', next: 'scene_4'}, emotion: 'unhappy' },
  
  {
    title: 'scene_10',
    seller: [
      {id: 'scene_10_seller_p1', talk: 'В рамках какого бюджета присматриваете покупку?', type: 'dialog', to: 'scene_13'},
      {id: 'scene_10_seller_p2', talk: 'Себе или в подарок присматриваете?', type: 'dialog', to: 'scene_14'},
    ],
    client: [
      {id: 'scene_10_client_p1', talk: 'Себе присматриваю.', to: 'scene_14'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_11',
    seller: [
      {id: 'scene_11_seller_p1', talk: 'Есть под заказ. Скажите, если я предложу Вам вариант, который будет по характеристикам лучше, а по цене приятней. Вы рассмотрите его?', type: 'dialog', to: getRandomElement(['scene_10', 'scene_15'])},
    ],
    client: [
      {id: 'scene_11_client_p1', talk: 'Нет, мне нужен именно этот.', to: 'scene_15'},
      {id: 'scene_11_client_p2', talk: 'Да можно посмотреть', to: 'scene_10'},
    ],
    emotion: 'normal',
  },
  
  { title: 'scene_12', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Клиент проявил заинтересованность, а Вы успустили шанс войти в контакт и выявить потребность.', next: 'scene_5'}, emotion: 'unhappy' },
  { title: 'scene_13', seller: [], client: [], message: {type: 'error', text: 'Не правильная отработка воронки вопросов.', next: 'scene_10'}, emotion: 'unhappy' },

  {
    title: 'scene_14',
    seller: [
      {id: 'scene_14_seller_p1', talk: 'Есть предпочтения по бренду/фирме/производителю?', type: 'dialog', to: 'scene_16'},
    ],
    client: [
      {id: 'scene_14_client_p1', talk: 'Я раньше пользовалась Redmi. Но в принципе рассмотрела бы Realmi, Honor.', to: 'scene_16'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_15', seller: [], client: [], message: {type: 'success', text: 'Вы сделали все правильно. На витрине не представлен интересующий вариант клиента.', next: 'scene_11'}, emotion: 'unhappy' },

  {
    title: 'scene_16',
    seller: [
      {id: 'scene_16_seller_p1', talk: 'Какими функциями будете пользоваться?', type: 'dialog', to: 'scene_17'},
    ],
    client: [
      {id: 'scene_16_client_p1', talk: 'Мне важно, чтобы была хорошя камера, шустрый, быстрая зарядка.', to: 'scene_17'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_17',
    seller: [
      {id: 'scene_17_seller_p1', talk: '>> Перейти на презентацию', type: 'action', to: 'scene_18'},
      {id: 'scene_17_seller_p2', talk: '>> Продолжить выявлять потребность', type: 'action', to: 'scene_19'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_18', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_17'}, emotion: 'unhappy' },

  {
    title: 'scene_19',
    seller: [
      {id: 'scene_19_seller_p1', talk: 'Какие еще ожидания по функционалу у Вас есть?', type: 'dialog', to: 'scene_20'},
    ],
    client: [
      {id: 'scene_19_client_p1', talk: 'А еще обязательно нужен NFC.', to: 'scene_20'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_20',
    seller: [
      {id: 'scene_20_seller_p1', talk: '>> Перейти на презентацию', type: 'action', to: 'scene_21'},
      {id: 'scene_20_seller_p2', talk: '>> Продолжить выявлять потребность', type: 'action', to: 'scene_22'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_21', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_20'}, emotion: 'unhappy' },

  {
    title: 'scene_22',
    seller: [
      {id: 'scene_22_seller_p1', talk: 'Покупку рассматриваете за наличные или в рассрочку/кредит?', type: 'dialog', to: 'scene_23'},
    ],
    client: [
      {id: 'scene_22_client_p1', talk: 'За наличные.', to: 'scene_23'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_23',
    seller: [
      {id: 'scene_23_seller_p1', talk: '>> Перейти на презентацию', type: 'action', to: 'scene_24'},
      {id: 'scene_23_seller_p2', talk: '>> Продолжить выявлять потребность', type: 'action', to: 'scene_25'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_24', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_23'}, emotion: 'unhappy' },

  {
    title: 'scene_25',
    seller: [
      {id: 'scene_25_seller_p1', talk: 'В рамках какого бюджета рассматриваете покупку?', type: 'dialog', to: 'scene_26'},
    ],
    client: [
      {id: 'scene_25_client_p1', talk: 'До 25 т.р.', to: 'scene_26'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_26',
    seller: [
      {id: 'scene_26_seller_p1', talk: '>> Перейти на презентацию', type: 'action', to: 'scene_27'},
      {id: 'scene_26_seller_p2', talk: '>> Резюмировать потребность', type: 'action', to: 'scene_28'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_27', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы. Не полностью выявленные потребности.', next: 'scene_26'}, emotion: 'unhappy' },

  {
    title: 'scene_28',
    seller: [
      {id: 'scene_28_seller_p1', talk: 'Если я Вас правильно понял, выбирать будем что-то из Redmi, главное чтобы там была хорошая камера, чтобы был шустрый, с быстрой зарядкой, и функцией NFC, до 25 т.р. Все правильно?', type: 'dialog', to: 'scene_30'},
      {id: 'scene_28_seller_p2', talk: 'Я уверен, что Вам нужен Redmi, с хорошим процессором...', type: 'dialog', to: 'scene_29'},
      {id: 'scene_28_seller_p3', talk: 'Исходя из того, что Вы мне сказали, могу Вам предложить Redmi, с хорошим процессором...', type: 'dialog', to: 'scene_29'},
    ],
    client: [
      {id: 'scene_28_client_p1', talk: 'Да.', to: 'scene_30'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_29', seller: [], client: [], message: {type: 'error', text: 'Некорректное резюмирование потребности.', next: 'scene_28'}, emotion: 'unhappy' },

  {
    title: 'scene_30',
    seller: [
      {id: 'scene_30_seller_p1', talk: '>> Перейти на этап Закрытие ОТГ', type: 'action', to: 'scene_31'},
      {id: 'scene_30_seller_p2', talk: '>> Перейти к презентации', type: 'action', to: 'scene_32'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_31', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы. Следующий этап - презентация товара.', next: 'scene_30'}, emotion: 'unhappy' },

  {
    title: 'scene_32',
    seller: [
      {id: 'scene_32_seller_p1', talk: '>> Предложить смартфон за 25т.р.', type: 'action', to: 'scene_33'},
      {id: 'scene_32_seller_p2', talk: '>> Предложить смартфон, чтобы в рамках бюджета клиента можно было предложить дополнительные товары и услуги.', type: 'action', to: 'scene_34'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_33', seller: [], client: [], message: {type: 'error', text: 'Некорреткно предлагать устройство стоимостью, как весь бюджет клиента.', next: 'scene_32'}, emotion: 'unhappy' },

  {
    title: 'scene_34',
    seller: [
      {id: 'scene_34_seller_p1', talk: 'Исходя из того, что вы мне сказали, я могу предложить вам несколько вариантов, можем посмотреть Redmi Note 13 и Redmi Note 12.', type: 'dialog', to: 'scene_35'},
    ],
    client: [],
    emotion: 'normal',
  },

  {
    title: 'scene_35',
    seller: [
      {id: 'scene_35_seller_p1', talk: 'В этом телефоне установлена камера с разрешением 108 МП, она позволит делать хорошие снимки.', type: 'dialog', to: 'scene_36'},
      {id: 'scene_35_seller_p2', talk: 'Вы говорили, что для вас важна хорошая камера. В Redmi Note 13 установлена камера с разрешением 108 МП, которая позволит делать детализированные фото. Например, при увеличении фото дерева, вы сможете разглядеть каждый листочек.', type: 'dialog', to: 'scene_38'},
      {id: 'scene_35_seller_p3', talk: 'В этом телефоне хорошая камера, благодаря ей вы сможете делать качесвенные фото.', type: 'dialog', to: 'scene_37'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_36', seller: [], client: [], message: {type: 'error', text: 'В данном примере нет ссылки на потребность клиента и выгоды устройства.', next: 'scene_35'}, emotion: 'unhappy' },
  { title: 'scene_37', seller: [], client: [], message: {type: 'error', text: 'В данном примере нет ссылки на потребность клиента, характеристики и выгоды устройства.', next: 'scene_35'}, emotion: 'unhappy' },

  {
    title: 'scene_38',
    seller: [
      {id: 'scene_38_seller_p1', talk: 'В Redmi Note 13 установлен мощный процессор MediaTek Demensity 6080.', type: 'dialog', to: 'scene_39'},
      {id: 'scene_38_seller_p2', talk: 'Также Вы еще говорили, для Вас важно чтобы телефон шустро работал, в Redmi Note 13 установлен процессор MediaTek Demensity 6080, а также 8 Гб оперативной памяти, которые позволят устройству запускать параллельно минимум 10 приложений, а также запускать тяжелые игры типа PUBG или Call of Duty не меньше чем на 40 fps. При этом никаких подвисаний не будет.', type: 'dialog', to: 'scene_41'},
      {id: 'scene_38_seller_p3', talk: 'Также вы еще говорили, для Вас важно чтобы телефон шустро работал, в Redmi Note 13 установлен процессор MediaTek Demensity 6080, а также 8 Гб оперативной памяти.', type: 'dialog', to: 'scene_40'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_39', seller: [], client: [], message: {type: 'error', text: 'В данном примере нет ссылки на потребность клиента и выгоды устройства.', next: 'scene_38'}, emotion: 'unhappy' },
  { title: 'scene_40', seller: [], client: [], message: {type: 'error', text: 'В данном примере не озвучены выгоды.', next: 'scene_38'}, emotion: 'unhappy' },

  {
    title: 'scene_41',
    seller: [
      {id: 'scene_41_seller_p1', talk: 'Кроме того, там стоит быстрая зарядка мощностью 33 Вт, благодаря чему от 0% до 100% устройство будет заряжаться примерно 1 час, что достаточно быстро, т.к. пока вы пьете чай или кофе телефон зарядится на 50% и вы сможете еще целый день им пользоваться.', type: 'dialog', to: 'scene_43'},
      {id: 'scene_41_seller_p2', talk: 'В этом телефоне установлен мощный процессор, есть быстрая зарядка, классная камера, а еще есть защита от пыли и влаги.', type: 'dialog', to: 'scene_42'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_42', seller: [], client: [], message: {type: 'error', text: 'В данном примере используется набор слов не связанных с характеристиками и выгодами.', next: 'scene_41'}, emotion: 'unhappy' },

  {
    title: 'scene_43',
    seller: [
      {id: 'scene_43_seller_p1', talk: 'Давайте достанем его и посмотрим поближе.', type: 'dialog', to: getRandomElement(['scene_45', 'scene_46'])},
      {id: 'scene_43_seller_p2', talk: 'Что скажете? Оформляем?', type: 'dialog', to: 'scene_44'},
    ],
    client: [
      {id: 'scene_23_client_p1', talk: 'По-моему у Вас немного дороже все стоит. Вроде, эту же модель я видела дешевле...', to: 'scene_45'},
      {id: 'scene_23_client_p2', talk: 'Не нужно. Я просто так, пока покупать не буду.', to: 'scene_46'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_44', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы', next: 'scene_43'}, emotion: 'unhappy' },

  {
    title: 'scene_45',
    seller: [
      {id: 'scene_45_seller_p1', talk: 'В других магазинах нет гарантии, а у нас есть.', type: 'dialog', to: 'scene_47'},
      {id: 'scene_45_seller_p2', talk: 'Вы ошибаетесь. Везде цены одинаковые.', type: 'dialog', to: 'scene_48'},
      {id: 'scene_45_seller_p3', talk: 'Понял. Если не секрет, в каком магазине видели дешевле? И какая там был цена?', type: 'dialog', to: getRandomElement(['scene_49', 'scene_50'])},
    ],
    client: [
      {id: 'scene_45_client_p1', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_47'},
      {id: 'scene_45_client_p2', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_48'},
      {id: 'scene_45_client_p3', talk: 'В соседнем магазине.', to: 'scene_49'},
      {id: 'scene_45_client_p4', talk: 'На маркетплейсе.', to: 'scene_50'},
    ],
    emotion: 'unhappy',
  },

  {
    title: 'scene_46',
    seller: [
      {id: 'scene_46_seller_p1', talk: 'Вообще это очень популярная модель, я такую брал своему брату в подарок. Для него тоже важна была камера. Давайте посмотрим камеру, чтобы у Вас было представление, как она снимает?', type: 'dialog', to: 'scene_58'},
      {id: 'scene_46_seller_p2', talk: 'Давайте достанем посмотрим, подержите его в руках, чтобы у вас уже было представление, что он из себя представляет?', type: 'dialog', to: 'scene_58'},
      {id: 'scene_46_seller_p3', talk: 'Хорошо, тогда не буду мешать. Когда возникнуть воросы, обращайтесь.', type: 'dialog', to: 'scene_61'},
      {id: 'scene_46_seller_p4', talk: 'Хорошо, приходите еще раз. Будем рады видеть вас в нашем магазине.', type: 'dialog', to: 'scene_61'},
    ],
    client: [
      {id: 'scene_46_client_p1', talk: 'Давайте.', to: 'scene_58'},
    ],
    emotion: 'normal',
  },


  { title: 'scene_47', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Клиент пошел узнавать, есть ли в других магазинах гарантия.', next: 'scene_45'}, emotion: 'puzzled' },
  { title: 'scene_48', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Некорректная отработка возражений.', next: 'scene_45'}, emotion: 'puzzled' },

  {
    title: 'scene_49',
    seller: [
      {id: 'scene_49_seller_p1', talk: 'Ну незнаю, везде цены одинаковые.', type: 'dialog', to: 'scene_51'},
      {id: 'scene_49_seller_p2', talk: 'Согласен, есть много похожих моделей в разной комплектации, сейчас легко запутаться. Это вариант в комплектации на 8/256 Гб с процессором Demensity 8020. Вы видели именно эту комплектацию?', type: 'dialog', to: getRandomElement(['scene_52', 'scene_53'])},
    ],
    client: [
      {id: 'scene_45_client_p1', talk: 'Не уверен. Нужно уточнить.', to: 'scene_52'},
      {id: 'scene_45_client_p2', talk: 'Да, я видел именно эту комплектацию.', to: 'scene_53'},
    ],
    emotion: 'unhappy',
  },

  {
    title: 'scene_50',
    seller: [
      {id: 'scene_50_seller_p1', talk: 'Как правило, на маркетплейсе продают устройства без официальной гарантии, а если гарантия есть, то по гарантии Вам придется обращаться не в магазин, а сервисный центр самого производителя. Знаете, где находится авторизованный СЦ компании?', type: 'dialog', to: 'scene_56'},
    ],
    client: [
      {id: 'scene_50_client_p1', talk: '...', to: 'scene_56'},
    ],
    emotion: 'unhappy',
  },

  { title: 'scene_51', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Клиент пошел покупать более дешевое по стоимости устройство.', next: 'scene_49'}, emotion: 'unhappy' },

  {
    title: 'scene_52',
    seller: [
      {id: 'scene_52_seller_p1', talk: 'Кстати, да, еще встречаются в продаже несертифицированные устройства. Это значит - без официальной гарантии в России и без поддержки обновлений.', type: 'dialog', to: 'scene_54'},
    ],
    client: [],
    emotion: 'unhappy',
  },

  {
    title: 'scene_53',
    seller: [
      {id: 'scene_53_seller_p1', talk: 'Кстати, да, еще встречаются в продаже несертифицированные устройства. Это значит - без официальной гарантии в России и без поддержки обновлений.', type: 'dialog', to: 'scene_54'},
    ],
    client: [],
    emotion: 'unhappy',
  },

  {
    title: 'scene_54',
    seller: [
      {id: 'scene_54_seller_p1', talk: 'Давайте посмотрим ближе, я покажу, как отличить устройство с гарантией и без?', type: 'dialog', to: 'scene_55'},
    ],
    client: [
      {id: 'scene_54_client_p1', talk: 'Давайте.', to: 'scene_55'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_55',
    seller: [
      {id: 'scene_55_seller_p1', talk: 'Продемонстрировать возможности устройства: камера, дисплей, звук, скорость работы.', type: 'action', to: 'scene_58'},
    ],
    client: [],
    emotion: 'normal',
  },

  {
    title: 'scene_56',
    seller: [
      {id: 'scene_56_seller_p1', talk: 'Поэтому, когда подумаете, приходите, посмотрим устройство поближе.', type: 'dialog', to: 'scene_57'},
      {id: 'scene_56_seller_p2', talk: 'Давайте посмотрим поближе, я покажу, как отличить устройство с гарантией и без?', type: 'dialog', to: 'scene_55'},
    ],
    client: [
      {id: 'scene_54_client_p1', talk: 'Давайте.', to: 'scene_55'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_57', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. ПК не предпринял попытки убедить клиента посмотреть устройство поближе.', next: 'scene_56'}, emotion: 'unhappy' },

  {
    title: 'scene_58',
    seller: [
      {id: 'scene_58_seller_p1', talk: 'После демонстрации возможностей устройства, перейти к предложению/выявлению потребностей в настройках.', type: 'action', to: 'scene_60'},
      {id: 'scene_58_seller_p2', talk: 'Перейти к Закрытию ОТГ.', type: 'action', to: 'scene_59'},
      {id: 'scene_58_seller_p3', talk: 'Перейти к Увеличению суммы сделки.', type: 'action', to: 'scene_59'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_59', seller: [], client: [], message: {type: 'error', text: 'Нарушение этапности работы.', next: 'scene_58'}, emotion: 'unhappy' },

  {
    title: 'scene_60',
    seller: [
      {id: 'scene_60_seller_p1', talk: 'Сами сможете настроить устройство, чтобы данные не потерялись и активровалась стандартная гарантия от производителя?', type: 'dialog', to: getRandomElement(['scene_65', 'scene_66', 'scene_67'])},
      {id: 'scene_60_seller_p2', talk: 'Кстати, благодаря последней версии ОС, в устройстве есть функция увеличения оперативной и встроенной памяти. Благодаря этому, устройство сможет работать быстрее и открывать больше приложений. Для этого нужно правильно активировать устройство.', type: 'dialog', to: getRandomElement(['scene_65', 'scene_66', 'scene_67'])},
      {id: 'scene_60_seller_p3', talk: 'Мы сразу активируем вам аккаунт, перенесем данные.', type: 'dialog', to: 'scene_62'},
    ],
    client: [
      {id: 'scene_60_client_p1', talk: 'Сын все сделает.', to: 'scene_65'},
      {id: 'scene_60_client_p2', talk: 'Друг поможет.', to: 'scene_66'},
      {id: 'scene_60_client_p3', talk: 'Сам сделаю.', to: 'scene_67'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_61', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел. Вы не предприняли попытки убедить клиента посмотреть устройство поближе.', next: 'scene_46'}, emotion: 'unhappy' },
  { title: 'scene_62', seller: [], client: [], message: {type: 'error', text: 'Некорректное предложение настроек.', next: 'scene_60'}, emotion: 'unhappy' },
  
  {
    title: 'scene_63',
    seller: [
      {id: 'scene_63_seller_p1', talk: 'Что скажете? Вам все нравится? Оформляем?', type: 'dialog', to: getRandomElement(['scene_71', 'scene_76'])},
      {id: 'scene_63_seller_p2', talk: '>> Подождать пока клиент сам определится или выразит свое мнение к предложенному устройству.', type: 'action', to: 'scene_64'},
    ],
    client: [
      {id: 'scene_63_client_p1', talk: 'Да', to: 'scene_76'},
      {id: 'scene_63_client_p2', talk: 'Мне нужно подумать.', to: 'scene_71'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_64', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел.', next: 'scene_63'}, emotion: 'unhappy' },

  {
    title: 'scene_65',
    seller: [
      {id: 'scene_65_seller_p1', talk: 'Понимаю, на первый взгляд кажется, что в этом нет ничего сложного, тем более, когда сын много раз выполнял эту процедуру. В этой версии ОС сложность заключается в том, что нужно все манипуляции выполнить в строгой последовательности, иначе электронная гарантия от производителя не активируется.', type: 'dialog', to: 'scene_63'},
      {id: 'scene_65_seller_p2', talk: 'Если вы что-то не так сделаете, устройство может превратиться в кирпич.', type: 'dialog', to: 'scene_68'},
    ],
    client: [],
    emotion: 'normal',
  },

  {
    title: 'scene_66',
    seller: [
      {id: 'scene_66_seller_p1', talk: 'Понимаю, на первый взгляд кажется, что в этом нет ничего сложного, тем более, когда друг много раз выполнял эту процедуру. В этой версии ОС сложность заключается в том, что нужно все манипуляции выполнить в строгой последовательности, иначе электронная гарантия от производителя не активируется.', type: 'dialog', to: 'scene_63'},
      {id: 'scene_66_seller_p2', talk: 'Если вы что-то не так сделаете, устройство может превратиться в кирпич.', type: 'dialog', to: 'scene_69'},
    ],
    client: [],
    emotion: 'normal',
  },

  {
    title: 'scene_67',
    seller: [
      {id: 'scene_67_seller_p1', talk: 'Понимаю, на первый взгляд кажется, что в этом нет ничего сложного, тем более, когда сам много раз выполнял эту процедуру. В этой версии ОС сложность заключается в том, что нужно все манипуляции выполнить в строгой последовательности, иначе электронная гарантия от производителя не активируется.', type: 'dialog', to: 'scene_63'},
      {id: 'scene_67_seller_p2', talk: 'Если вы что-то не так сделаете, устройство может превратиться в кирпич.', type: 'dialog', to: 'scene_70'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_68', seller: [], client: [], message: {type: 'error', text: 'Некорректная отработка возражений. Не правильная аргументация.', next: 'scene_65'}, emotion: 'unhappy' },
  { title: 'scene_69', seller: [], client: [], message: {type: 'error', text: 'Некорректная отработка возражений. Не правильная аргументация.', next: 'scene_66'}, emotion: 'unhappy' },
  { title: 'scene_70', seller: [], client: [], message: {type: 'error', text: 'Некорректная отработка возражений. Не правильная аргументация.', next: 'scene_67'}, emotion: 'unhappy' },

  {
    title: 'scene_71',
    seller: [
      {id: 'scene_71_seller_p1', talk: 'Не устроила цена или качество?', type: 'dialog', to: 'scene_73'},
      {id: 'scene_71_seller_p2', talk: 'Скажите, что именно не устроило Вас?', type: 'dialog', to: 'scene_73'},
      {id: 'scene_71_seller_p3', talk: 'Хорошо. Приходите к нам еще, будем рады видеть Вас в нашем магазине Цифромаркет!', type: 'dialog', to: 'scene_72'},
    ],
    client: [
      {id: 'scene_71_client_p1', talk: 'В другом магазине я видел дешевле.', to: 'scene_73'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_72', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел, сотрудник не предпринял попытки выяснить в чем заключается сомнение клиента.', next: 'scene_71'}, emotion: 'unhappy' },

  {
    title: 'scene_73',
    seller: [
      {id: 'scene_73_seller_p1', talk: 'Согласен, есть много похожих моделей в разной комплектации, сейчас легко запутаться. Это вариант в комплектации на 8/256 Гб с процессором Demensity 8020 - возможно вы видели другую комплектацию. Мы официально сотрудничаем с Компанией Xiaomi, и она устанавливает официальные цены, Если стоимость ниже, вероятнее всего это устройство не глобальной версии, без поддержки обновлений на терретории РФ.', type: 'dialog', to: 'scene_76'},
      {id: 'scene_73_seller_p2', talk: 'В других магазинах нет гарантии, а у нас есть.', type: 'dialog', to: 'scene_74'},
      {id: 'scene_73_seller_p3', talk: 'Вы ошибаетесь. Везде цены одинаковые.', type: 'dialog', to: 'scene_75'},
    ],
    client: [
      {id: 'scene_73_client_p1', talk: 'Ну в принципе устройство меня устраивает. Давайте оформляем.', to: 'scene_76'},
      {id: 'scene_73_client_p2', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_74'},
      {id: 'scene_73_client_p3', talk: 'Хорошо, спасибо, я подумаю.', to: 'scene_75'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_74', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел узнавать, есть ли в других магазинах гарантия.', next: 'scene_73'}, emotion: 'unhappy' },
  { title: 'scene_75', seller: [], client: [], message: {type: 'error', text: 'Клиент ушел узнавать цены в других магазинах.', next: 'scene_73'}, emotion: 'unhappy' },

  {
    title: 'scene_76',
    seller: [
      {id: 'scene_76_seller_p1', talk: 'Отличный выбор! Пройдемся со мной на кассу для оформления!', type: 'dialog', to: 'scene_78'},
      {id: 'scene_76_seller_p2', talk: 'Хорошо. Аксессуары будете брать?', type: 'dialog', to: 'scene_77'},
    ],
    client: [],
    emotion: 'normal',
  },

  { title: 'scene_77', seller: [], client: [], message: {type: 'error', text: 'Некорректное и не своевременное предложение аксессуаров.', next: 'scene_76'}, emotion: 'unhappy' },

  {
    title: 'scene_78',
    seller: [
      {id: 'scene_78_seller_p1', talk: 'Хорошо. Аксессуары будете брать? ', type: 'dialog', to: 'scene_79'},
      {id: 'scene_78_seller_p2', talk: 'Так, посмотрим, что у нас есть к этому устройству. Что вы предпочитаете, чехол-книжку или накладку?', type: 'dialog', to: getRandomElement(['scene_80', 'scene_81'])},
    ],
    client: [
      {id: 'scene_78_client_p1', talk: 'Сколько у Вас стоит накладка?', to: 'scene_80'},
      {id: 'scene_78_client_p2', talk: 'Чехол-книжку.', to: 'scene_81'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_79', seller: [], client: [], message: {type: 'error', text: 'Некорректное и не своевременное предложение аксессуаров.', next: 'scene_78'}, emotion: 'unhappy' },

  {
    title: 'scene_80',
    seller: [
      {id: 'scene_80_seller_p1', talk: '1390 рублей', type: 'dialog', to: getRandomElement(['scene_85', 'scene_86'])},
      {id: 'scene_80_seller_p2', talk: 'Цены на накладки у нас от 300р до 3500р. Рекомендую вам посмотреть, что-то в средней ценовой категории отличного качества. Они отличаются долговечностью и степенью защиты.', type: 'dialog', to: getRandomElement(['scene_86', 'scene_82'])},
    ],
    client: [
      {id: 'scene_80_client_p1', talk: 'У Вас дорого, я в соседнем магазине видел дешевле.', to: 'scene_85'},
      {id: 'scene_80_client_p2', talk: 'Ясно. Покажите, что есть?', to: 'scene_86'},
      {id: 'scene_80_client_p3', talk: 'Сколько будет стоить накладка на мое устройство?', to: 'scene_82'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_81',
    seller: [
      {id: 'scene_81_seller_p1', talk: 'Продемонстрировать чехол-книжку клиенту.', type: 'action', to: getRandomElement(['scene_82', 'scene_83'])},
    ],
    client: [
      {id: 'scene_81_client_p1', talk: 'Сколько стоит?', to: 'scene_82'},
      {id: 'scene_81_client_p2', talk: 'Хорошо, мне этот нравится.', to: 'scene_83'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_82',
    seller: [
      {id: 'scene_82_seller_p1', talk: '1390 рублей.', type: 'dialog', to: 'scene_85'},
      {id: 'scene_82_seller_p2', talk: 'Давайте я все вместе посчитаю и скажу сколько это будет стоить со всеми скидками?', type: 'dialog', to: 'scene_83'},
    ],
    client: [
      {id: 'scene_82_client_p1', talk: 'Дорого.', to: 'scene_85'},
      {id: 'scene_82_client_p2', talk: 'Давайте.', to: 'scene_83'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_83',
    seller: [
      {id: 'scene_83_seller_p1', talk: 'Хорошо, давайте подберем защиту для экрана. Как предпочитаете защищить - с помощью пленки или защитного стекла?', type: 'dialog', to: 'scene_'},
      {id: 'scene_83_seller_p2', talk: '>> Перейти к продаже ДСО/Страховки', type: 'action', to: 'scene_84'},
      {id: 'scene_83_seller_p3', talk: '>> Перейти к продаже настроек', type: 'action', to: 'scene_84'},
    ],
    client: [
      
    ],
    emotion: 'normal',
  },

  { title: 'scene_84', seller: [], client: [], message: {type: 'error', text: 'Вы предложили еще не все аксессуары.', next: 'scene_83'}, emotion: 'unhappy' },

  {
    title: 'scene_85',
    seller: [
      {id: 'scene_85_seller_p1', talk: 'У нас хорошие чехлы. Лучше чем у конкурентов. Они будут держаться дольше и лучше защищают от ударов.', type: 'dialog', to: 'scene_87'},
      {id: 'scene_85_seller_p2', talk: 'Согласен, важно знать за что мы платим. У нас тоже есть футляры за 300р. Дешевое не может быть хорошим. Я рекомендую вам взять вариант в средней ценовой категории, у нас это футляры из Термопластичного полиуретана - этот материал гарантирует 100% защиту при падениях, они не выгорают, не растягиваются и служат практически вечно!', type: 'dialog', to: 'scene_83'},
    ],
    client: [
      {id: 'scene_85_client_p1', talk: 'Нет, я в другом месте куплю.', to: 'scene_83'},
      {id: 'scene_85_client_p1', talk: 'Ну хорошо, давайте.', to: 'scene_83'},
    ],
    emotion: 'normal',
  },

  {
    title: 'scene_86',
    seller: [
      {id: 'scene_86_seller_p1', talk: '>> Продемонстрировать чехол клиенту.', type: 'dialog', to: 'scene_83'},
    ],
    client: [
      {id: 'scene_86_client_p1', talk: 'Отлично, беру вот этот.', to: 'scene_83'},
    ],
    emotion: 'normal',
  },

  { title: 'scene_87', seller: [], client: [], message: {type: 'error', text: 'Вы не продали футляр, так как у Вас была некорректная аргументация.', next: 'scene_83'}, emotion: 'unhappy' },



];