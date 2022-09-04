export const createData = (
    id: string,
    title: string,
    price: number,
    image: string,
    quantity: number
) => {
    return {
        id,
        title,
        price,
        image,
        quantity
    };
}
