import Route from "./Route";
import Recipe from "../models/Recipe";
import Suggestion from "../models/Suggestion";
import authMiddleware from "../middlewares/Auth";

@Route.Route({
  middlewares: [authMiddleware]
})
class RouteSuggestion extends Route {
  constructor(params) {
    super({ ...params });
  }

  @Route.Get({
    path: "/:id/accept"
  })
  async accept(ctx) {
    const error = "Recipe not found";
    try {
      const suggestion = await Suggestion.findOne({ _id: ctx.params.id });
      if (suggestion == null) throw "Suggestion not found";
      let recipe = await Recipe.findOne({ _id: suggestion.recipe });
      if (recipe == null) throw error;
      if (recipe.creator !== ctx.state.user._id.toString())
        return this.send(ctx, 401, "Unauthorized");
      let result = await Recipe.updateOne(
        { _id: suggestion.recipe },
        {
          $set: {
            ingredients: recipe.ingredients + ":" + suggestion.ingredients,
            text: suggestion.text
          }
        }
      );
      console.log(result);
    } catch (err) {
      return this.send(ctx, 404, err, null);
    }
    this.sendOk(ctx, null, "Successfully accepted suggestion");
  }

  @Route.Delete({
    path: "/:id"
  })
  async read(ctx) {
    const error = "Suggestion not found";
    try {
      const suggestion = await Suggestion.findOne({ _id: ctx.params.id });
      if (suggestion.from != ctx.state.user._id)
        return this.send(ctx, 401, "Unauthorized");
      if (suggestion === null) throw error;
      await suggestion.remove();
    } catch (err) {
      return this.send(ctx, 404, err, null);
    }
    this.sendOk(ctx, null, "Successfully deleted suggestion");
  }
}

export default RouteSuggestion;
