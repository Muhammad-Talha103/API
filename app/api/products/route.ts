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
      tag: "Latest Products",
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
      tag: "Latest Products",
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
      tag: "Latest Products",
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
      tag: "Latest Products",
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
      tag: "Latest Products",
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
      tag: "Latest Products",
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
      image: "blob:https://www.imagine.art/13e7acfd-1f28-4ab2-ba17-6c31d8438b27",
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
    }    
  ]);
};
