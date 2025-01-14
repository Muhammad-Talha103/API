import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    {
      id: 1,
      tag: "Featured Products",
      title: "Royal Throne",
      description:
        "A regal seat designed for comfort and elegance. The Royal Throne brings a majestic touch to any room with its plush cushions and timeless style.",
      category: "Chair",
      rating: 4.5,
      stock: 100,
      image:
        "https://ln.run/W44Ki",
      price: 110,
      oldPrice: 150,
    },
    {
      id: 2,
      tag: "Featured Products",
      title: "Eclipse Swivel",
      description:
        "An ergonomic chair with 360-degree swivel functionality, the Eclipse Swivel provides maximum comfort and flexibility, perfect for work or home offices.",
      category: "Chair",
      rating: 4,
      stock: 100,
      image:
        "https://ln.run/M-QD-",
      price: 200,
      oldPrice: 230,
    },
    {
      id: 3,
      tag: "Featured Products",
      title: "Odyssey Accent",
      description:
        "A stylish and contemporary chair designed to enhance any space, the Odyssey Accent provides an elegant touch with its sleek lines and comfort.",
      category: "Chair",
      rating: 3.8,
      stock: 100,
      image:
        "https://ln.run/MM2kU",
      price: 320,
      oldPrice: 400,
    },
    {
      id: 4,
      tag: "Featured Products",
      title: "Luxe Recliner",
      description:
        "The perfect chair for ultimate relaxation. Featuring a reclining mechanism and ultra-soft cushions, the Luxe Recliner offers unparalleled comfort.",
      category: "Chair",
      rating: 4.6,
      stock: 100,
      image:
        "https://ln.run/n900l",
      price: 250,
      oldPrice: 340,
    },
    {
      id: 5,
      tag: "Leatest Products",
      title: "Serenity Armchair",
      description:
        "A harmonious blend of luxury and comfort, the Serenity Armchair is the perfect addition to any modern living space, designed for ultimate relaxation.",
      category: "Chair",
      rating: 3.9,
      stock: 100,
      image:
        "https://ln.run/sRjxC",
      price: 400,
      oldPrice: 480,
    },
    {
      id: 6,
      tag: "Leatest Products",
      title: "Driftwood Chair",
      description:
        "Crafted from natural wood, the Driftwood Chair brings an organic feel to your home. Its rustic design and comfort make it perfect for any living room.",
      category: "Chair",
      rating: 4.1,
      stock: 100,
      image:
        "https://ln.run/lyW8o",
      price: 260,
      oldPrice: 320,
    },
    {
      id: 7,
      tag: "Leatest Products",
      title: "Cosmos Swivel",
      description:
        "A chair that moves with you. The Cosmos Swivel features 360-degree rotation for flexibility and convenience, perfect for workspaces and home offices.",
      category: "Chair",
      rating: 4.7,
      stock: 100,
      image:
        "https://ln.run/Ryr9F",
      price: 370,
      oldPrice: 440,
    },
    {
      id: 8,
      tag: "Leatest Products",
      title: "Savanna Armchair",
      description:
        "A cozy armchair that brings comfort and style to any room. The Savanna Armchair offers a perfect blend of plush cushioning and contemporary design.",
      category: "Chair",
      rating: 2.9,
      stock: 100,
      image:
        "https://ln.run/46l3d",
      price: 210,
      oldPrice: 270,
    },
    {
      id: 9,
      tag: "Leatest Products",
      title: "Polaris Armchair",
      description:
        "An elegant armchair with a modern twist. The Polaris Armchair is perfect for contemporary spaces, combining comfort with sleek design.",
      category: "Chair",
      rating: 3.2,
      stock: 100,
      image:
        "https://www.pngall.com/wp-content/uploads/11/Office-Chair-Background-PNG.png",
      price: 375,
      oldPrice: 440,
    },
    {
      id: 10,
      tag: "Leatest Products",
      title: "Cosmos Swivel",
      description:
        "Featuring advanced swivel technology, the Cosmos Swivel chair provides ultimate flexibility and comfort, making it perfect for home offices and gaming rooms.",
      category: "Chair",
      rating: 3.9,
      stock: 100,
      image:
        "https://th.bing.com/th/id/R.14e63566d4460e8eca1cdd8e606a2411?rik=KcEhGDBfhkOLWw&pid=ImgRaw&r=0",
      price: 290,
      oldPrice: 325,
    },
    {
      id: 11,
      tag: "Trending Products",
      title: "Marquis Lounge Chair",
      description: "The Marquis Lounge Chair offers unmatched comfort and sophisticated design, making it perfect for any modern living room or office space.",
      category: "Chair",
      rating: 4.8,
      stock: 100,
      image: "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-square-front-chair-illustration-image_1418869.jpg",
      price: 600,
      oldPrice: 810
    },
    {
      id: 12,
      tag: "Trending Products",
      title: "Aspen Recliner",
      description: "The Aspen Recliner is designed for ultimate relaxation, featuring smooth reclining capabilities and a comfortable cushion to help you unwind.",
      category: "Chair",
      rating: 4.1,
      stock: 100,
      image: "https://i.pinimg.com/originals/be/6d/cc/be6dcc2acfa4c585d59609b60e8907d4.png",
      price: 500,
      oldPrice: 645
    },
    {
      id: 13,
      tag: "Trending Products",
      title: "Polaris chair",
      description: "The Polaris Chair offers an ergonomic design with excellent back support, making it perfect for long hours of sitting, whether at work or home.",
      category: "Chair",
      rating: 4.1,
      stock: 100,
      image: "https://toppng.com/uploads/preview/modern-chair-11530974705y7wprbkgxz.png",
      price: 500,
      oldPrice: 645
    },
    {
      id: 14,
      tag: "Trending Products",
      title: "Noble Executive Chair",
      description: "The Noble Executive Chair combines luxury with comfort, offering premium materials and a stylish design suitable for office or home use.",
      category: "Chair",
      rating: 4.1,
      stock: 100,
      image: "https://w7.pngwing.com/pngs/611/345/png-transparent-chair-chair-png-transparent-image-isolated-image-transparent-background-remove-the-background-product-image-free-image-clipping-path-clipping-paths-thumbnail.png",
      price: 390,
      oldPrice: 500
    },
    {
      id: 15,
      tag: "Top Categories",
      title: "Modern LCW Chair",
      description: "The Modern LCW Chair features sleek design with a comfortable seating experience, perfect for contemporary workspaces and stylish home offices.",
      category: "Chair",
      rating: 3.7,
      stock: 100,
      image: "https://icon2.cleanpng.com/20240330/rgc/transparent-metal-frame-comfortable-green-fabric-office-chair-with-wheels6608cf202cbe02.30819262.webp",
      price: 570,
      oldPrice: 660
    },
    {
      id: 16,
      tag: "Top Categories",
      title: "Vintage LCW Chair",
      description: "The Vintage LCW Chair blends classic design with comfort, offering a retro look that's ideal for any space needing an elegant touch.",
      category: "Chair",
      rating: 4.3,
      stock: 100,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyPbX9Uaf1RPVscuVHDwD6jlmUtF6a0OhLw&s',
      price: 630,
      oldPrice: 700
    },
    {
      id: 17,
      tag: "Top Categories",
      title: "Eco LCW Chair",
      description: "The Eco LCW Chair offers sustainable design without compromising on comfort, perfect for eco-conscious individuals seeking a modern look.",
      category: "Chair",
      rating: 4.9,
      stock: 100,
      image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00NjctcG9tLTAzMjUucG5n.png',
      price: 700,
      oldPrice: 820
    },
    {
      id: 18,
      tag: "Top Categories",
      title: "Premium LCW Chair",
      description: "The Premium LCW Chair combines luxurious materials with excellent ergonomics, providing unmatched comfort and style for both work and relaxation.",
      category: "Chair",
      rating: 4.8,
      stock: 100,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qpFXehFlI0vJYkppLgxv6Uaiy7jyrdjh_A&s',
      price: 620,
      oldPrice: 760
    },
    [
      {
        id: 19,
        tag: "Shop",
        title: "The Cozy Cove",
        description: "The Cozy Cove chair offers a perfect blend of comfort and style, ideal for creating a relaxed and inviting atmosphere in your home or office.",
        category: "Chair",
        rating: 4.4,
        stock: 100,
        image: "https://ln.run/fnZJ4",
        price: 780,
        oldPrice: 960
      },
      {
        id: 20,
        tag: "Shop",
        title: "The Velvet Embrace",
        description: "Indulge in luxurious comfort with The Velvet Embrace chair, designed to provide exceptional support and elegance for your relaxation and work moments.",
        category: "Chair",
        rating: 4.9,
        stock: 100,
        image: "https://ln.run/kgBrc",
        price: 800,
        oldPrice: 880
      },
      {
        id: 21,
        tag: "Shop",
        title: "Urban Minimalist",
        description: "The Urban Minimalist chair brings sleek, contemporary design and comfort together for those who appreciate modern aesthetics and functional furniture.",
        category: "Chair",
        rating: 3.7,
        stock: 100,
        image: "https://ln.run/Eg8kw",
        price: 645,
        oldPrice: 760
      },
      {
        id: 22,
        tag: "Shop",
        title: "Campus Companion",
        description: "The Campus Companion bag is your ideal travel companion, combining style and practicality to carry all your essentials with ease and comfort.",
        category: "Bag",
        rating: 4.6,
        stock: 100,
        image: "https://ln.run/ytfgA",
        price: 295,
        oldPrice: 365
      },
      {
        id: 23,
        tag: "Shop",
        title: "Lush Landing",
        description: "Relax in style with the Lush Landing chair, providing plush support and a sophisticated design to enhance both your office and living space.",
        category: "Chair",
        rating: 4.6,
        stock: 100,
        image: "https://ln.run/HRixH",
        price: 505,
        oldPrice: 550
      },
      {
        id: 24,
        tag: "Shop",
        title: "The Swift Voyager",
        description: "The Swift Voyager watch is a perfect fusion of precision and design, offering both durability and elegance for those who value timekeeping excellence.",
        category: "Watches",
        rating: 4.2,
        stock: 100,
        image: "https://ln.run/qkmvI",
        price: 610,
        oldPrice: 690
      },
      {
        id: 25,
        tag: "Shop",
        title: "The Legacy Timepiece",
        description: "A timeless accessory, The Legacy Timepiece watch combines sophisticated design with unmatched functionality, making it the perfect choice for any occasion.",
        category: "Watches",
        rating: 4.6,
        stock: 100,
        image: "https://ln.run/7Szsn",
        price: 580,
        oldPrice: 705
      },
      {
        id: 26,
        tag: "Shop",
        title: "Sound Sphere",
        description: "The Sound Sphere headphones deliver immersive sound quality and supreme comfort, making them ideal for music lovers and audiophiles alike.",
        category: "HeadPhones",
        rating: 4.8,
        stock: 100,
        image: "https://ln.run/15LRH",
        price: 600,
        oldPrice: 735
      },
      {
        id: 27,
        tag: "Shop",
        title: "Cloud Drift",
        description: "The Cloud Drift chair offers a cloud-like experience with its plush cushioning and ergonomic design, making it the perfect spot for relaxation or focus.",
        category: "Chair",
        rating: 4.5,
        stock: 100,
        image: "https://ln.run/B9l3u",
        price: 490,
        oldPrice: 600
      },
      {
        id: 28,
        tag: "Shop",
        title: "Echo Wave",
        description: "The Echo Wave headphones provide a rich, crisp sound profile that enhances your listening experience, whether you're working or enjoying your favorite tunes.",
        category: "HeadPhones",
        rating: 4.1,
        stock: 100,
        image: "https://ln.run/XPQNp",
        price: 610,
        oldPrice: 740
      },
      {
        id: 29,
        tag: "Shop",
        title: "Vanguard Series",
        description: "The Vanguard Series watch is designed for the bold, with a unique aesthetic and precise craftsmanship that elevates your style and keeps you on time.",
        category: "Watches",
        rating: 4.5,
        stock: 100,
        image: "https://ln.run/yRE9S",
        price: 565,
        oldPrice: 630
      },
      {
        id: 30,
        tag: "Shop",
        title: "Celestial Tide",
        description: "The Celestial Tide headphones offer stellar sound clarity and a luxurious fit, designed to provide a superior audio experience for music and entertainment lovers.",
        category: "HeadPhones",
        rating: 4.9,
        stock: 100,
        image: "https://ln.run/zkZqI",
        price: 900,
        oldPrice: 1005
      }
    ]
    
  ]);
};
