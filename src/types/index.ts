type NewsType = {value: 'Новости', xmlId: 'news'}
    | {value: 'Пресс-релизы', xmlId: 'press-releases'};

export interface News {
    code: string,
    date: number,
    image: string,
    link: string,
    name: string,
    previewText: string,
    type: NewsType,
};
