class FoodRatings {
  dict: { [key: string]: { cuisines: string; rating: number } };

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.dict = {};
    foods.forEach((current, index) => {
      this.dict[current] = {
        cuisines: cuisines[index],
        rating: ratings[index],
      };
    });
  }

  changeRating(food: string, newRating: number): void {
    this.dict[food] = { cuisines: this.dict[food].cuisines, rating: newRating };
  }
  highestRated(cuisine: string): string {
    let highestRating = 0;
    let highestRatedFood = "";

    for (const [food, { cuisines, rating }] of Object.entries(this.dict)) {
      if (cuisines === cuisine) {
        if (rating > highestRating) {
          highestRating = rating;
          highestRatedFood = food;
        } else if (rating === highestRating && food < highestRatedFood) {
          highestRatedFood = food;
        }
      }
    }

    return highestRatedFood;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

const foodRatings = new FoodRatings(
  ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
  ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
  [9, 12, 8, 15, 14, 7]
);

foodRatings.changeRating("kimchi", 19);
console.log(foodRatings.dict);
console.log(foodRatings.highestRated("korean"));
