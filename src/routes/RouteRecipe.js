import { Types } from "koa-smart";
import Route from "./Route";
import Recipe from "../models/Recipe";
import Suggestion from "../models/Suggestion";
import authMiddleware from "../middlewares/Auth";

@Route.Route({
  middlewares: [authMiddleware]
})
class RouteRecipe extends Route {
  constructor(params) {
    super({ ...params });
  }

  @Route.Get({
    path: ""
  })
  async list(ctx) {
    let response = null;
    try {
      const recipes = await Recipe.find({});
      response = {
        recipes: recipes
      };
    } catch (err) {
      return this.send(ctx, 404, err, null);
    }
    this.sendOk(ctx, response, "Successfully read recipes");
  }

  @Route.Get({
    path: "/:id/suggestions"
  })
  async listSuggestionsByRecipe(ctx) {
    try {
      const recipe = await Recipe.findOne({ _id: ctx.params.id });
      if (recipe === null) return this.send(ctx, 404, "Recipe not found", null);
      if (ctx.state.user._id == recipe.creator)
        throw "You cannot access this resource.";
      const suggestions =
        (await Suggestion.find({ recipe: ctx.params.id })) || [];
      let response = {
        suggestions: suggestions
      };
      return this.sendOk(
        ctx,
        response,
        "Successfully got suggestions from recipe " + recipe.name
      );
    } catch (err) {
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 401, err, null);
    }
  }

  @Route.Post({
    path: "",
    bodyType: Types.object().keys({
      creator: Types.number().required(),
      name: Types.string().required(),
      text: Types.string().required(),
      ingredients: Types.string().required(),
      imageUrl: Types.string()
    })
  })
  async create(ctx) {
    try {
      const body = this.body(ctx);
      const creator = ctx.state.user._id;
      const recipe = (await Recipe.create({
        creator: creator,
        name: body.name,
        text: body.text,
        ingredients: body.ingredients,
        imageUrl: body.imageUrl
      })).toObject();
      if (recipe === null) throw "Failed to create recipe ...";
      let response = {
        recipe: recipe
      };
      return this.sendOk(ctx, response, "Recipe created!");
    } catch (err) {
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 401, err, null);
    }
  }

  @Route.Post({
    path: "/:id/suggestion",
    bodyType: Types.object().keys({
      from: Types.number().required(),
      recipe: Types.number().required(),
      text: Types.string().required(),
      ingredients: Types.string().required()
    })
  })
  async suggest(ctx) {
    try {
      const body = this.body(ctx);
      const from = ctx.state.user._id;
      const result = (await Recipe.create({
        creator: body.creator,
        from: from,
        text: body.text,
        ingredients: body.ingredients,
        valid: false
      })).toObject();
      if (result === null) throw "Failed to create suggestion ...";
      return this.sendOk(ctx, result, "Recipe created!");
    } catch (err) {
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 403, err, null);
    }
  }

  @Route.Delete({
    path: "/:id"
  })
  async delete(ctx) {
    try {
      const recipe = await Recipe.findOne({ _id: ctx.params.id });
      if (recipe.creator != ctx.state.user._id)
        return this.send(ctx, 401, "Unauthorized");
      if (recipe === null) return this.send(ctx, 404, "Recipe not found");
      await recipe.remove();
    } catch (err) {
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 401, err, null);
    }
    this.sendOk(ctx, null, "Successfully deleted recipe");
  }
}

export default RouteRecipe;
