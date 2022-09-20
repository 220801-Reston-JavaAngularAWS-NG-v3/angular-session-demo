// this correlates to the book pojo of the back end application
// a model could be a class or an interface
export interface BookModel{
    bookId: number;
    bookTitle: string;
    bookAuthor: string;
    bookGenre: string;
    bookCost: number;
    bookImageUrl: string;
}