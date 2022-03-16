const reviewsList = [
  {
    vote: "4",
    description: "Muy buen producto, cumplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 1,
    userId: 2,
  },
  {
    vote: "2",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 1,
    userId: 3,
  },
  {
    vote: "3",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 2,
    userId: 4,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 2,
    userId: 5,
  },
  {
    vote: "4",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 3,
    userId: 6,
  },
  {
    vote: "2",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 3,
    userId: 7,
  },
  {
    vote: "4",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 4,
    userId: 8,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 4,
    userId: 2,
  },
  {
    vote: "4",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 5,
    userId: 3,
  },
  {
    vote: "1",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 5,
    userId: 4,
  },
  {
    vote: "5",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 6,
    userId: 5,
  },
  {
    vote: "4",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 6,
    userId: 6,
  },
  {
    vote: "4",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 7,
    userId: 7,
  },
  {
    vote: "2",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 7,
    userId: 8,
  },
  {
    vote: "3",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 8,
    userId: 2,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 8,
    userId: 3,
  },
  {
    vote: "4",
    description: "Muy buen producto, cumplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 9,
    userId: 4,
  },
  {
    vote: "2",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 9,
    userId: 5,
  },
  {
    vote: "3",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 10,
    userId: 6,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 10,
    userId: 7,
  },
  {
    vote: "4",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 11,
    userId: 8,
  },
  {
    vote: "2",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 11,
    userId: 2,
  },
  {
    vote: "4",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 12,
    userId: 3,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 12,
    userId: 4,
  },
  {
    vote: "4",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 13,
    userId: 5,
  },
  {
    vote: "1",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 13,
    userId: 6,
  },
  {
    vote: "5",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 14,
    userId: 7,
  },
  {
    vote: "4",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 14,
    userId: 8,
  },
  {
    vote: "3",
    description: "Muy buen producto, cuplió con mis expectativas. La calidad es buena y el precio también. Recomiendo.",
    productId: 15,
    userId: 2,
  },
  {
    vote: "1",
    description: "No cumple con las expectativas que tenía y que decían en la propaganda. No lo recomiendo.",
    productId: 15,
    userId: 3,
  },
  {
    vote: "4",
    description: "Estoy muy conforme, era lo que esperaba. Lo uso todos los días y no he tenido ningún problema. La relación precio calidad en muy buena!",
    productId: 16,
    userId: 4,
  },
  {
    vote: "5",
    description: "Excelente producto, muy buena compra. Buena calidad y tamaño muy cómodo. Realmente estoy muy comforme.",
    productId: 16,
    userId: 5,
  },
];


module.exports = reviewsList;
