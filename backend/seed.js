const { sequelize, User, Category, SubCategory, Prompt } = require('./models');

async function seed() {
  await sequelize.sync({ force: true }); // מוחק הכל ובונה מחדש

  // יצירת משתמשים
  const user1 = await User.create({ name: "Israel", phone: "050-1234567" });
  const user2 = await User.create({ name: "Sara", phone: "052-9876543" });

  // יצירת קטגוריות
  const cat1 = await Category.create({ name: "Science" });
  const cat2 = await Category.create({ name: "Math" });

  // יצירת תתי-קטגוריות
  const sub1 = await SubCategory.create({ name: "Space", category_id: cat1.id });
  const sub2 = await SubCategory.create({ name: "Algebra", category_id: cat2.id });

  // יצירת prompts
  await Prompt.create({
    user_id: user1.id,
    category_id: cat1.id,
    sub_category_id: sub1.id,
    prompt: "Teach me about black holes.",
    response: "Black holes are regions in space...",
    created_at: new Date()
  });

  console.log("Database seeded!");
  process.exit();
}

seed();