const PRODUCTS = [
    {
        id: 1,
        name: "Apple Iphone 13",
        price: 1000,
        image: 'https://imgs.ponto.com.br/55033587/1xg.jpg?imwidth=500',
        description: 'Celular novo'
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        price: 1100,
        image: 'https://picsum.photos/201',
        description: 'O mais recente da Samsung'
    },
    {
        id: 3,
        name: "Google Pixel 6",
        price: 900,
        image: 'https://picsum.photos/202',
        description: 'Excelente qualidade de câmera'
    },
    {
        id: 4,
        name: "Sony Xperia 5",
        price: 950,
        image: 'https://picsum.photos/203',
        description: 'Design elegante'
    },
    {
        id: 5,
        name: "OnePlus 9 Pro",
        price: 950,
        image: 'https://picsum.photos/204',
        description: 'Alta performance'
    },
    {
        id: 6,
        name: "Xiaomi Mi 11",
        price: 800,
        image: 'https://picsum.photos/205',
        description: 'Ótimo custo-benefício'
    },
    {
        id: 7,
        name: "Huawei P50",
        price: 850,
        image: 'https://picsum.photos/206',
        description: 'Tecnologia avançada'
    },
    {
        id: 8,
        name: "LG Velvet 2",
        price: 750,
        image: 'https://picsum.photos/207',
        description: 'Tela OLED incrível'
    },
    {
        id: 9,
        name: "Nokia 9.3",
        price: 700,
        image: 'https://picsum.photos/208',
        description: 'Marca confiável'
    },
    {
        id: 10,
        name: "Motorola Edge 2",
        price: 850,
        image: 'https://picsum.photos/209',
        description: 'Bateria de longa duração'
    }
];

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id: number){
    return PRODUCTS.find((product) => product.id == id)
}
