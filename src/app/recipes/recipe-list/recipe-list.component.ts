import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "This is Test Recipe",
      "This is Description ",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/2/1/FNK_Healthy-Cauliflower-Rice_s4x3.jpg.rend.hgtvcom.966.725.suffix/1430157224979.jpeg"
    ),
    new Recipe(
      "This is Test Recipe",
      "This is Description ",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/2/1/FNK_Healthy-Cauliflower-Rice_s4x3.jpg.rend.hgtvcom.966.725.suffix/1430157224979.jpeg"
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
