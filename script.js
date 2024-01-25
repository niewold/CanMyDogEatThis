﻿function checkFoodSafety() {
    const foodInput = document.getElementById("foodInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (safeFoodsForDogs.includes(foodInput)) {
        result.textContent = `Safe for canine consumption.`;
    } else if (modFoodsForDogs.includes(foodInput)) {
        result.textContent = `Safe in moderation for canine consumption.`;
    } else if (toxicFoodsForDogs.includes(foodInput)) {
        result.textContent = `Toxic for canine consumption. If ingested, please contact your emergency vet.`;
    } else {
        result.textContent = `Item could not be found in food list. Please try again by searching for main ingredient or spice.`
    }
}

const safeFoodsForDogs = [
    "apple",
    "apples",
    "asparagus",
    "banana",
    "bananas",
    "beef",
    "bell pepper",
    "bison",
    "black beans",
    "blackberries",
    "blackberry",
    "blueberries",
    "blueberry",
    "bread",
    "brisket",
    "broccoli",
    "broccolini",
    "butternut squash",
    "cantaloupe",
    "carrot",
    "carrots",
    "celery",
    "chestnuts",
    "chicken",
    "chuck steak",
    "cod",
    "corn",
    "cranberries",
    "cranberry",
    "cucumber",
    "cucumbers",
    "duck",
    "egg",
    "eggs",
    "garbanzo beans",
    "grain",
    "grains",
    "green bean",
    "green beans",
    "ground beef",
    "lamb",
    "lima beans",
    "liver",
    "mango",
    "mangoes",
    "oatmeal",
    "oats",
    "pea",
    "peas",
    "peach",
    "peaches",
    "peanut butter",
    "pear",
    "pears",
    "pineapple",
    "pinto beans",
    "popcorn",
    "pork",
    "potato",
    "potatoes",
    "pumpkin",
    "pumpkins",
    "rabbit",
    "red pepper",
    "rice",
    "salmon",
    "sardines",
    "shrimp",
    "snap peas",
    "soybeans",
    "strawberries",
    "strawberry",
    "sweet potato",
    "sweet potatoes",
    "swiss chard",
    "tuna",
    "turkey",
    "watermelon",
    // ... add other safe foods here
];

const modFoodsForDogs = [
    "apple cider vinegar",
    "bacon",
    "basil",
    "brazil nuts",
    "brussel sprouts",
    "cabbage",
    "cashew",
    "cashews",
    "cauliflower",
    "caviar",
    "cheese",
    "cherries",
    "cherry",
    "chia",
    "cinnamon",
    "clove",
    "cloves",
    "coconut",
    "coriander",
    "cottage cheese",
    "dairy",
    "date",
    "dates",
    "dill",
    "fennel",
    "fenugreek",
    "fermented",
    "fig",
    "figs",
    "flaxseed",
    "ginger",
    "goat cheese",
    "ham",
    "honey",
    "hot dog",
    "hot dogs",
    "kale",
    "kefir",
    "kidney beans",
    "lettuce",
    "marshmallow",
    "marshmallows",
    "mayo",
    "mayonnaise",
    "milk",
    "millet",
    "mint",
    "olive",
    "olives",
    "orange",
    "oranges",
    "oregano",
    "paprika",
    "parsley",
    "peanut",
    "peanuts",
    "quinoa",
    "raspberries",
    "raspberry",
    "roast beef",
    "salt",
    "spinach",
    "spirulina",
    "tomato",
    "tomatoes",
    "turmeric",
    "yogurt",
    "zucchini",
    // ... add other mod safe foods here
];

const toxicFoodsForDogs = [
    "alcohol",
    "alliums",
    "almond",
    "almonds",
    "avocado",
    "avocados",
    "baked beans",
    "bay leaf",
    "bay leaves",
    "beer",
    "black walnut",
    "black walnuts",
    "bones",
    "bourbon",
    "caffeine",
    "chili beans",
    "chive",
    "chives",
    "chocolate",
    "cob",
    "cocoa",
    "coffee",
    "curry",
    "eggplant",
    "energy drink",
    "english walnut",
    "english walnuts",
    "ethanol",
    "fruit seeds",
    "fruit pits",
    "garlic",
    "gin",
    "grape",
    "grapes",
    "green pepper",
    "green peppers",
    "hickory nut",
    "hickory nuts",
    "hot pepper",
    "hot peppers",
    "ice cream",
    "japanese walnut",
    "japanese walnuts",
    "leek",
    "leeks",
    "macadamia nut",
    "macadamia nuts",
    "mushroom",
    "mushrooms",
    "mustard",
    "nutmeg",
    "onion",
    "onions",
    "pecan",
    "pecans",
    "pickle",
    "pickles",
    "pistachio",
    "pistachios",
    "pit",
    "pits",
    "pop",
    "pudding",
    "raisin",
    "raisins",
    "refried beans",
    "rhubarb",
    "rum",
    "scallion",
    "scallions",
    "seed",
    "seeds",
    "shallot",
    "shallots",
    "soda",
    "sports drink",
    "spring onion",
    "spring onions",
    "tea",
    "wild garlic",
    "lemons",
    "lemon",
    "lime",
    "limes",
    "wine",
    "xylitol",
    "yeast dough",
    "yellow pepper",
    "yellow peppers",
    // ... add other toxic foods here
];

