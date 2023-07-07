export interface categorySection {
    title: string,
    link: string,
    isupdated: boolean
}
export const categories: categorySection[] = [
    { title: "Mens's Collection", link: "men", isupdated: true },
    { title: "Women's Collection", link: "women", isupdated: false },
    { title: "Kids Collection", link: "kids", isupdated: false },
    { title: "Perfumes", link: "perfumes", isupdated: false },
    { title: "Watches", link: "watches", isupdated: false },
    { title: "Shoes", link: "shoes", isupdated: false },
    { title: "Bags", link: "bags", isupdated: false },
    { title: "Caps", link: "caps", isupdated: false },
    { title: "Acessorries", link: "acessorries", isupdated: false },
];
export const MenCategories: categorySection[] = [
    { title: "Kurta", link: "Kurta", isupdated: false },
    { title: "Shalwar Kameez", link: "women", isupdated: false },
    { title: "Waistcoat", link: "women", isupdated: false },
    { title: "Formel Shirts", link: "kids", isupdated: false },
    { title: "2 peice", link: "perfumes", isupdated: false },
    { title: "3 peice", link: "watches", isupdated: false },
    { title: "T-Shirts", link: "bags", isupdated: false },
    { title: "Casual Shirts", link: "caps", isupdated: false },
    { title: "Jeans", link: "shoes", isupdated: false },
    { title: "Acessorries", link: "acessorries", isupdated: false },
];
