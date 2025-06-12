const { sequelize, User, Category, SubCategory, Prompt } = require('./models');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    // משתמשים
    const user1 = await User.create({ name: "ישראל כהן", phone: "050-1234567" });
    const user2 = await User.create({ name: "שרה לוי", phone: "052-9876543" });

    // קטגוריות
    const science = await Category.create({ name: "Science" });
    const math = await Category.create({ name: "Math" });
    const history = await Category.create({ name: "History" });

    // תתי-קטגוריות 
    const space = await SubCategory.create({ name: "Space", category_id: science.id });
    const biology = await SubCategory.create({ name: "Biology", category_id: science.id });
    const algebra = await SubCategory.create({ name: "Algebra", category_id: math.id });
    const geometry = await SubCategory.create({ name: "Geometry", category_id: math.id });
    const ancient = await SubCategory.create({ name: "Ancient", category_id: history.id });
    const modern = await SubCategory.create({ name: "Modern", category_id: history.id });

    // prompts (היסטוריית למידה)
    await Prompt.create({
      user_id: user1.id,
      category_id: science.id,
      sub_category_id: space.id,
      prompt: "Teach me about black holes.",
      response: "Black holes are regions in space where gravity is so strong that nothing can escape.",
      created_at: new Date()
    });

    await Prompt.create({
      user_id: user1.id,
      category_id: math.id,
      sub_category_id: algebra.id,
      prompt: "Explain quadratic equations.",
      response: "A quadratic equation is an equation of the form ax^2 + bx + c = 0.",
      created_at: new Date()
    });

    await Prompt.create({
      user_id: user2.id,
      category_id: science.id,
      sub_category_id: biology.id,
      prompt: "What is DNA?",
      response: "DNA is the molecule that carries genetic information in living organisms.",
      created_at: new Date()
    });

    await Prompt.create({
      user_id: user2.id,
      category_id: history.id,
      sub_category_id: ancient.id,
      prompt: "Tell me about Ancient Egypt.",
      response: "Ancient Egypt was a civilization of ancient North Africa, concentrated along the lower reaches of the Nile River.",
      created_at: new Date()
    });

    await Prompt.create({
      user_id: user2.id,
      category_id: math.id,
      sub_category_id: geometry.id,
      prompt: "What is the Pythagorean theorem?",
      response: "The Pythagorean theorem states that in a right triangle, a^2 + b^2 = c^2.",
      created_at: new Date()
    });

    await Prompt.create({
      user_id: user1.id,
      category_id: history.id,
      sub_category_id: modern.id,
      prompt: "What caused World War II?",
      response: "World War II was caused by a variety of factors including the Treaty of Versailles, economic instability, and the rise of totalitarian regimes.",
      created_at: new Date()
    });

    console.log("Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();