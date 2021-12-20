const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getTop10Customers = async (req, res, next) => {
  try {
    const top10Users = await prisma.user.findMany({
      take: 10,
      include: {
        _count: {
          select: {
            order_details: true,
          },
        },
      },
      orderBy: {
        order_details: {
          _count: "desc",
        },
      },
    });

    res.status(200).json(top10Users);
  } catch (err) {
    next(err);
  }
};

const getTop10Articles = async (req, res, next) => {
  try {
    const bestArticles = await prisma.article.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        img: true,
        price: true,
        category:{
          select: {name:true}
        },
        rating: {
          select: {
            rating: true,
          },
        },
        order_items: true
      },
      orderBy: {
        order_items: {
          _count: "desc",
        },
      },
    });

    bestArticles.forEach(article=> {
      let sum = 0;
      article.order_items.forEach(order=> sum = sum + order.quantity);
      article.numOrdered = sum;
    })

    res.status(200).json(bestArticles);
  } catch (err) {
    next(err);
  }
};
const getTopRatedArticles = async (req, res, next) => {
  try {
    const bestArticles = await prisma.article.findMany({
        select: {
          id: true,
          name: true,
          img: true,
          price: true,
          category:{
            select: {name:true}
          },
          rating: {
            select: {
              rating: true,
            },
          },
        },
      });

      bestArticles.forEach(article => {
        let sum = 0;
        let length = article.rating.length;
        article.rating.forEach(rating => sum = sum + rating.rating);
        article.averageRating = sum / length;
    })

    res.status(200).json(bestArticles);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTop10Customers,
  getTop10Articles,
  getTopRatedArticles,
};
