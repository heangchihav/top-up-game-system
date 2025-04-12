// types.ts
export interface CardItem {
    id: string;
    title: string;
    image: string;
    screen: string;
}

export interface CategoryData {
    title: string;
}

export interface SectionData {
    [key: string]: [CategoryData, { items: CardItem[] }];
}
