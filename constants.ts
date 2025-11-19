import { Section, BlockType } from './types';

export const GUIDE_CONTENT: Section[] = [
  {
    id: 'basics',
    title: 'Основы (Новичкам)',
    chapters: [
      {
        id: 'intro',
        title: 'Введение и База',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Как торговать фьючерсами на крипте',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Этот мануал объяснит, как зарегистрироваться, завести деньги и начать торговать («ебашить») на фьючерсах, не потеряв штаны в первую неделю.',
          },
          {
            type: BlockType.CALLOUT,
            variant: 'danger',
            content: 'ДИСКЛЕЙМЕР: Фьючерсы — это высокий риск. Здесь можно сделать 1000% прибыли, а можно потерять все деньги за 1 секунду. Не торгуй на кредитные, заемные или последние деньги.',
          },
          {
            type: BlockType.HEADING,
            content: 'Глава 1. Что такое фьючерс?',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Фьючерс — это спор с биржей о том, куда пойдет цена. Ты НЕ покупаешь сам биткоин или эфир. Ты делаешь ставку на движение цены.',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'LONG (Лонг / Купить) — ты ставишь на то, что цена пойдет ВВЕРХ.',
              'SHORT (Шорт / Продать) — ты ставишь на то, что цена пойдет ВНИЗ.'
            ]
          }
        ]
      },
      {
        id: 'registration',
        title: 'Регистрация',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 2. Регистрация и Подготовка',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Не лезь на ноунейм помойки. Регистрируйся на топах.',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'Bybit (Топ для РФ сейчас, нет санкций).',
              'BingX (Тоже лояльна, можно торговать без KYC до определенного лимита).',
              'OKX, Bitget.',
              'Binance (Для РФ сейчас сложно/закрыто, лучше выбрать Bybit).'
            ]
          },
          {
            type: BlockType.HEADING,
            content: 'Верификация (KYC)',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Почти везде сейчас нужен паспорт (KYC). Не бойся этого, это стандарт. Без этого не дадут пользоваться P2P (купить крипту с карты).',
          }
        ]
      },
      {
        id: 'deposit',
        title: 'Заводим бабки (P2P)',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 3. Как превратить рубли в USDT',
          },
          {
            type: BlockType.LIST,
            listType: 'ol',
            content: [
              'Иди в раздел P2P Trading (Купить крипту).',
              'Выбери валюту (RUB) и способ оплаты (Сбер/Тинькофф).',
              'Нажми Buy (Купить) напротив продавца с хорошим рейтингом.',
              'Вводи сумму и переводи рубли на карту продавца.',
              'ВАЖНО: Сначала переводишь деньги, потом жмешь кнопку "Оплачено".'
            ]
          },
          {
            type: BlockType.CALLOUT,
            variant: 'info',
            content: 'Перевод на фьючерсы: Деньги упадут на кошелек "Финансирование". Нажми Transfer и перекинь их на Derivatives / Futures.',
          }
        ]
      },
      {
        id: 'interface',
        title: 'Интерфейс и Кнопки',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 4. Куда жать?',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Заходишь в раздел Derivatives. Самое важное здесь — это Плечо и Маржа.',
          },
          {
            type: BlockType.HEADING,
            content: 'Плечо (Leverage)',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Множитель твоей ставки. x10 — значит движение цены на 1% дает тебе 10% прибыли или убытка.',
          },
          {
            type: BlockType.CALLOUT,
            variant: 'warning',
            content: 'Совет: Новичку СТРОГО не больше x5-x10. x100 — это казино, где ты проиграешь.',
          },
          {
            type: BlockType.HEADING,
            content: 'Режим маржи',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'Cross (Кросс): В залог идет ВЕСЬ баланс. Опасно.',
              'Isolated (Изолированная): В залог идет только сумма ставки. ✅ Выбор новичка.',
            ]
          }
        ]
      },
      {
        id: 'trading',
        title: 'Как Ебашить (Торговля)',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 5. Процесс сделки',
          },
          {
            type: BlockType.LIST,
            listType: 'ol',
            content: [
              'Выбрал пару BTC/USDT.',
              'Поставил Isolated маржу.',
              'Поставил плечо 10x.',
              'Выбрал Market (чтобы зайти сразу).',
              'Выбрал 5-10% от депозита.',
              'Нажал Open Long (Вверх) или Open Short (Вниз).',
            ]
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Внизу появится позиция. PNL — твоя прибыль. Liq. Price — цена, где ты потеряешь всё.',
          }
        ]
      },
      {
        id: 'risk',
        title: 'Риск-менеджмент',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 6. Как не слиться',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Это важнее, чем умение нажимать кнопки.',
          },
          {
            type: BlockType.HEADING,
            content: 'TP / SL',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'Stop Loss (Стоп-лосс): "Остановить убыток". Ставь всегда. Лучше потерять $10, чем $100.',
              'Take Profit (Тейк-профит): "Забрать прибыль". Жадность фраера губит.'
            ]
          },
          {
            type: BlockType.CALLOUT,
            variant: 'tip',
            content: 'Золотое правило: Не усредняйся на убытках и не торгуй на эмоциях.',
          }
        ]
      }
    ]
  },
  {
    id: 'pro',
    title: 'PRO Version',
    chapters: [
      {
        id: 'hidden',
        title: 'Скрытые механизмы',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 1. О чем молчат новички',
          },
          {
            type: BlockType.CALLOUT,
            variant: 'info',
            content: 'Рынок создан, чтобы переложить деньги из карманов нетерпеливых в карманы терпеливых.',
          },
          {
            type: BlockType.HEADING,
            content: 'Фандинг (Funding Rate)',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Плата за удержание позиции. Каждые 8 часов. Если фандинг положительный — лонгисты платят шортистам.',
          },
          {
            type: BlockType.HEADING,
            content: 'Maker vs Taker',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Taker (Рыночный ордер) — платишь дорого. Maker (Лимитный ордер) — платишь мало или получаешь рибейт. Используй лимитки.',
          }
        ]
      },
      {
        id: 'ta',
        title: 'Технический Анализ',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 2. База выживания',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Используй TradingView. Не торгуй "по чуйке".',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'Свечи: Смотри на тени (фитили). Длинный фитиль снизу — откуп (бычий знак).',
              'Уровни: Цена ходит от пола (поддержка) к потолку (сопротивление).',
              'Тренд: Trend is your friend. Не шорти растущий рынок.'
            ]
          }
        ]
      },
      {
        id: 'math',
        title: 'Математика (RR)',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 3. Risk to Reward',
          },
          {
            type: BlockType.PARAGRAPH,
            content: 'Единственный способ быть в плюсе при 50% ошибок — соблюдать RR 1:3.',
          },
          {
            type: BlockType.CALLOUT,
            variant: 'tip',
            content: 'Рискуешь $10, чтобы заработать $30. Можно ошибаться чаще, чем угадывать, и быть богатым.',
          }
        ]
      },
      {
        id: 'psycho',
        title: 'Психология',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 4. Враг в голове',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'FOMO: Страх упущенной выгоды. Не залетай в уходящий поезд.',
              'Тильт: Желание отыграться. Слил? Выключи комп.',
              'Синдром Бога: Повезло 3 раза? Не расслабляйся, рынок накажет.'
            ]
          }
        ]
      },
      {
        id: 'tools',
        title: 'Инструменты и Алгоритм',
        content: [
          {
            type: BlockType.HEADING,
            content: 'Глава 5. PRO Инструменты',
          },
          {
            type: BlockType.LIST,
            listType: 'ul',
            content: [
              'Trailing Stop: Бегающий стоп. Фиксирует прибыль на автомате.',
              'Калькулятор: Всегда считай риск в долларах ПЕРЕД входом.'
            ]
          },
          {
            type: BlockType.HEADING,
            content: 'Итоговый алгоритм',
          },
          {
            type: BlockType.LIST,
            listType: 'ol',
            content: [
              'Анализ на TradingView.',
              'Проверка уровня.',
              'Расчет RR (1:3).',
              'Лимитный ордер на вход.',
              'Сразу Стоп и Тейк.',
              'Закрыть терминал.'
            ]
          }
        ]
      }
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
Ты — опытный крипто-трейдер и наставник. Твоя задача — помогать пользователям понять гайд по фьючерсам.
Используй стиль общения из гайда: дерзкий, четкий, "на ты", без воды. Используй сленг (лонг, шорт, ликвид, профит), но объясняй сложные вещи просто.
Основывай свои ответы на предоставленном контексте гайда.
Если пользователь спрашивает совет по конкретной монете — скажи, что ты не даешь финансовых советов, а учишь риск-менеджменту.
Напоминай про стоп-лоссы.
`;