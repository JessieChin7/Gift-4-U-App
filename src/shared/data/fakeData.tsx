export interface Product {
    id: number,
    src: any,
    name: string,
    price: number,
    description: string,
}

export const allProducts = [
    {
        id: 1,
        src: require('../../assets/products/custom-made-banners.png'),
        name: "Fan's Club系列手幅訂製",
        price: 215,
        description: "Fan's Club系列手幅訂製以客製化製作偶像手幅，讓你能享有最投入支持偶像的機會!",
    },
    {
        id: 2,
        src: require('../../assets/products/blackpink-jacket.png'),
        name: "Blackpink周邊外套",
        price: 300,
        description: "以時尚經典的粉色及黑色為主色調，搭配上偶像的團名和標誌，穿上Blackpink的自信和帥氣!",
    },
    {
        id: 3,
        src: require('../../assets/products/blackpink-collectible-card.png'),
        name: "Blackpink明信片周邊收藏卡",
        price: 215,
        description: "擁有精美的明信片造型，Lisa, Jennie, Rose, Jisso專屬獨家收藏卡，選擇您最喜愛的偶像應援!",
    },
    {
        id: 4,
        src: require('../../assets/products/joyce-chocolate.png'),
        name: "Joyce Chocolate 經典73%生巧克力禮盒",
        price: 280,
        description: "品嘗Joyce Chocolate經典73%生巧克力禮盒，純正的巧克力風味搭配上黑色禮盒的包裝",
    },
    {
        id: 5,
        src: require('../../assets/products/chocolate-bonbon.jpg'),
        name: "莊式巧克力禮盒Chocolate Bonbon",
        price: 270,
        description: "Chocolate Bonbon莊式巧克力禮盒是巧克力與設計的結合，品嘗香濃醇正的滋味。",
    },
    {
        id: 6,
        src: require('../../assets/products/darkchocolate-swiss-roll.jpg'),
        name: "85%醇黑真巧蛋捲",
        price: 260,
        description: "濃郁的巧克力味道與酥脆的蛋捲完美結合，是巧克力愛好者的最愛。",
    },
    {
        id: 7,
        src: require('../../assets/products/wooden-stamp-set.png'),
        name: "潮玩手辦玩具合作木質印章套裝",
        price: 220,
        description: "充滿童趣的手辦玩具與自然風格的木質印章融合在一起，讓人回到純真的童年時光。",
    },
    {
        id: 8,
        src: require('../../assets/products/hedgehog-wooden-hanging-clock.jpg'),
        name: "刺猬時鐘掛鐘木鐘",
        price: 240,
        description: "刺猬時鐘掛鐘木鐘不僅可以告訴您時間，還可以讓您回想起童年玩遊戲的歡樂。",
    },
    {
        id: 9,
        src: require('../../assets/products/rabbit-sleep-lamp.png'),
        name: "折耳兔伴眠燈 療癒柔光",
        price: 250,
        description: "折耳兔伴眠燈療癒柔光，可陪伴您入夢鄉，是讓人放鬆心情的好幫手。",
    }
]