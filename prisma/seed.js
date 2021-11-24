const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const faker = require("faker");

async function main() {

  await prisma.articleCategory.create({
    data: {
      name: "whey protein",
      desc: "protein_powder",
      goalCategory: "build muscle",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "protein bars",
      desc: "food_snacks",
      goalCategory: "build muscle",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "multivitamins",
      desc: "vitamins_minerals",
      goalCategory: "lose weight",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "weight gainers",
      desc: "weight_management",
      goalCategory: "build muscle",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "pre-workout",
      desc: "performance",
      goalCategory: "improve performance",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "vegan protein",
      desc: "protein_powder",
      goalCategory: "build muscle, tone up",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "protein blend",
      desc: "protein_powder",
      goalCategory: "build muscle",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "nut butter",
      desc: "food_snacks",
      goalCategory: "build muscle",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "sweeteners",
      desc: "weight_management",
      goalCategory: "lose weight",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "protein drinks",
      desc: "food_snacks",
      goalCategory: "lose weight",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "omega 3",
      desc: "vitamins_minerals",
      goalCategory: "lose weight, improve performance",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "bcaa",
      desc: "performance",
      goalCategory: "improve performance, lose weight",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "glutamine",
      desc: "performance",
      goalCategory: "improve performance",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "post-workout",
      desc: "performance",
      goalCategory: "build muscle, improve performance",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "weight loss",
      desc: "weight_management",
      goalCategory: "lose weight",
    },
  });
  await prisma.articleCategory.create({
    data: {
      name: "creatine",
      desc: "performance",
      goalCategory: "build muscle, improve performance",
    },
  });

  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 1,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 2,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 3,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 4,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 5,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 6,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img:`${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 7,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 8,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 9,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img:`${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 10,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 11,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 12,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 13,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 14,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 15,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 16,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img: `${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 17,
          },
        },
      },
    });
  }
  for (let i = 0; i < 20; i++) {
    await prisma.articleInventory.create({
      data: {
        quantity: i,
        articles: {
          create: {
            name: `The ${faker.date.weekday()} ${faker.commerce.productName()} `,
            desc: faker.commerce.productDescription(),
            img:`${faker.image.food()}?random=${Date.now()}`,
            price: 50,
            category_id: 18,
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
