export interface Category {
    id: string;
    name: string;
}

export interface Note {
    id: string;
    title: string;
    content: string;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}