
// Simple data structures used by pages
const recipes = [
  {
    title: "Quinoa Salad",
    category: "Salad",
    img: "https://slimmingviolet.com/wp-content/uploads/2024/11/avocado-quinoa-salad.png",
    desc: "Fresh quinoa salad with veggies.",
    ingredients: ["1 cup cooked quinoa","Tomato","Cucumber","Olive oil","Lemon"],
    steps: ["Cook quinoa","Chop vegetables","Mix with oil and lemon","Serve chilled"],
    nutrition: {Calories: "320 kcal", Protein: "8 g", Carbs: "40 g", Fat: "12 g"}
  },
  {
    title: "Oats Porridge",
    category: "Breakfast",
    img: "https://www.throughthefibrofog.com/oat-milk-porridge/",
    desc: "Warm oats with milk and fruit.",
    ingredients: ["1/2 cup oats","Milk or water","Banana","Honey"],
    steps: ["Boil milk","Add oats and simmer","Top with banana and honey"],
    nutrition: {Calories: "250 kcal", Protein: "6 g", Carbs: "45 g", Fat: "5 g"}
  },
  {
    title: "Grilled Veg Wrap",
    category: "Lunch",
    img: "https://www.foodnetwork.com/recipes/ellie-krieger/hummus-and-grilled-vegetable-wrap-recipe-1910036",
    desc: "Quick grilled vegetable wrap.",
    ingredients: ["Tortilla","Grilled veggies","Hummus"],
    steps: ["Grill veggies","Spread hummus","Assemble and roll"],
    nutrition: {Calories: "400 kcal", Protein: "10 g", Carbs: "50 g", Fat: "15 g"}
  }
];

const workouts = [
  {name:"Jumping Jacks", body:"full", equipment:"none", duration:30},
  {name:"Push-ups", body:"arms", equipment:"none", duration:40},
  {name:"Squats", body:"legs", equipment:"none", duration:45},
  {name:"Plank", body:"core", equipment:"none", duration:30},
  {name:"Dumbbell Curls", body:"arms", equipment:"dumbbells", duration:40},
  {name:"Lunges", body:"legs", equipment:"any", duration:45},
  {name:"Burpees", body:"full", equipment:"none", duration:30},
];
