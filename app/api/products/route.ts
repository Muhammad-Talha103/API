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
        "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zi0ZzMa0peKOXHEJM6yEA0upO8XjqbPuu~jxqQUrk5F-4VTbC2g3BkT80xHYD40a2i0fvZuu2qkvgQsthiuqMAR~DbR05HGiyiZTuH6e9~nv~zDP8WiRNRzlNGjC7BSEW8T3f7UkAWCouQCO5as8hcZafQu20R-N-gcSg79oJ5e5bIQeHJa0p3qD0HjAPdSoW6QCX9J~VeoSZ76lvfYFU~tuG9nqa66N-mew80MXcApjAsa~nEhfcXIsTJPYxxy2uDTaU2G3~4d~UdAQ30kQJShLxNhe-uBrQH90OIOhm9HU0kV2yBpc2zLHlD7MurvBiVs0UBAgOTKI2zlX3G8e3A__",
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
        "https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cg0JKGNpWTXMrm7AruAmiBpnFVUp1t4KwYM2-T9-Fe97j3vjmy0DBCLB8egR5gHE0g2Zwo4~jw4YhArVPQ65pxswRftoJTAubwgovelaQOZk8ZCbwvhyg-T6KFi5oreVMkTroQQDb9jI9JkJnTh-Jheia9TbdAFxVd7q-CzSUKw~nnIeyOokYa0N~9nCUUCIJnC~TCIaLXR5CHN2a7lF54cC3uuHX9whdVJyP6VvUUF47Cc2ZTFj3cgnywtlLKMzFg6wwNvN7k5-6iV-d2BmC4ZO~b7chT3G1mWrMR14QDT5UmEz20ioQUOzVuQOZLjEEHaFDIddl3WTUcxN-ZFqxA__",
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
        "https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YCGFJVZIoGGr-gyQ3qiIbOv-XAVZOTANGvfhr1i-X2V~GPik7SRiachd49dyGjr~6BW2f1MPZgAxPDH3zOLuyetNie6xEJqpt-sioB537apBbivHrgABjUCYxBzrKM9BZHhzI0F0uOSXBFZiZU4He9dDTPEc9YlTy656gEouBLgThNtPb-Bc2vHqK0gyUVm1jE3JclVMOKNk4IMaot2ovKAX7YrMPVg2mAQF5iicnhJG8hYG3~YeZoGfPH7ts2NwkrzjoNoJVToQksJRFj1SWC5azZTEeK8s3Kq-T~3BTr1Jh7sZVzKjLY29P9VFQuORRQelMMVfN3ywiKzdi04O4A__",
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
        "https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMTr0lICdzQgY3I51hijDD7norhhN82X-TgfFLzPyuJ0ebhPkk~fqcuxQaL6HleQeTKeGlDSkMj8i0y~0byfRfDkknrTslYFDFK7tI8QkbSZFmEKDcNXIrTo8B0phxs3Oca~cJftyYE7R2drnP1at0db094pQAI5r2ptkvQe2JoYhqTmo6k6CoLL1nU1rkHChed1ALvaF32Ygk93ed3CmFR7eoC8HRKYIdEAUH32o5mhLrUuXzlpchi6Wyc74VjJF6j42c0g~Eao5Y46ZB898nvJQFWOrYvYiUZW-IF7QhcUrDXeSbwLR2JjVBXOSv7IIol3C-tHilQBaqO5OaX7dQ__",
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
        "https://s3-alpha-sig.figma.com/img/4e1b/8c82/f15b5765f466da190975101e10dfdab2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dVjTX5Fn1W-TSTuB-2iVsuzzWdaLdrJ6ygUt1xkfCkmlvpwR6AZXRR4yALTFCEAAV85unxazF3gDGkPa32iyxAKBiYfUCHdHn6O4qsC6RrZAzYhygNU-5eyMa9ebRN4BvuF9YSF28zFMCwznJCiJ42CG7sS7bmyM-uT-7m0B11L85uk0uH2UJJ-zPbt5WMM77jRxydRJZ9kZaKxdMh9o0T4NyFfQPqT79PRJ1tQinbBcTtV0tW0eo-tbLTtATEcbbqgMM3uLEptv19wqUHjXPO3qep7YH24~PnipaDtDMdZq1nARaKtXrJ9MIlpQU8d7kO9pbjgzOK3sbNgpsMzuxg__",
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
        "https://s3-alpha-sig.figma.com/img/b0ac/220b/08d5f05fcb65d0cce1b3bbe9ef93003b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RLmrX5UJpx8XAsvtNh~SOM1Z6Xxzdu1WiyUOBd3hxn5YxzAHJRlEg4LDSBHu~CuT2MRdfMk2ZXqudxJb-JYMBEDceoYytoChoylYhsSHAeXIQG7h3t-y-IHz62Y78uEHzwwXdSH1fXK7gYJXparoFBuQO0HGkx5yMAIzrrJo2fugopo3hrPv5Kb24J2yPvvwuToQFu-S1-8jPtmVU98x3oGvu0Z-wjSYoVYYYMrF1c-zX1rQ4mrIktV-h3FESwvGzB1VcyWqdEVxEpo0C5MLtdU3c~8g2ONKz-y6Dg-13Bc82aX-OtfRmbSGhEEUSoL0UxQKVjau5B9mft4041czvA__",
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
        "https://s3-alpha-sig.figma.com/img/e8d0/7d05/5f94bd8eef92ee5845fcca1420c3e6fa?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzKyAslPAekxlNo3~osfJte6JYww9mSHJ14hJkNA9EZje9TQE00TeBvS-MElAW4lPaDVu3tcsiCKL-6RPjlf29WSjMhAzOU9PoQEFI4yuUwy1T9NmRdnIEIZOQNOfmG3rIOai0CpvFRoYziCxsDvZecIX9Xt0CwrbfSZrkt3op8zJMssH6jKvuTCgF4PtpdzhZ5W9c3sx47CHIJNwhPNN4r6H3d31RvPOrN8wx1KfSO4LlJjSyO-lFKWQ1n2v0SZLYb6uMHoQ0EksvBpL4ZefMSPz0yWjAvZsoXMO6M7O7lBSyyVFLF2tEMUXKqdE9ZpWmfwU0ogKo39OmJKBgVMFw__",
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
        "https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cb7eGSGb12t9wcD8SQd4iOC1IAOl6gHW4ix8WGATXBSjc0mnXaypG5HhpJtMB71jgo9mycjyLeKUeE8IBdUtqtFS8KubDkmiFLuSj4WcN4ZmGcbzHdINrMnz7Bn4CUVBgO~jJ7OE6iV3q~twgAYShVjPlMYS9ABnvHMNfoNi8YBPeNcYV11AaJyt19E6nZBGVXohvYq-0SLh9Y~hCArs2VALGnTfB9d0sEnF54-jH8XP4Dr5tm6RTXCC~l088tLXdCvw~gaSIrEpEv2UZ8zTeCm~OQTycGs7G~Un3w3rfe8Fl9-HLNZd5cyeVMKEZzO9RXXy6-8-BWue5V-IBXzCtg__",
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
