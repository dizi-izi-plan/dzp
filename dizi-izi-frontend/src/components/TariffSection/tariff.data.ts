import { TariffInfo } from './TariffDataTypes';

export const tariffInfoList: TariffInfo[] = [
  {
    name: 'Бесплатный',
    description: 'Доступен всем зарегистрированным пользователям',
    actions: [
      'Возможность получить план для спальни',
      'Возможность 3 раза менять расстановку мебели в рамках проекта',
      'Возможность сохранить 3 проекта',
      'Возможность скачивать проекты и отправлять себе на почту в формате pdf',
      'Каждый проект включает в себя: план расстановки мебели и план расположения электроточек',
    ],
  },
  {
    name: 'Базовый',
  },
  {
    name: 'Профи',
  },
];
