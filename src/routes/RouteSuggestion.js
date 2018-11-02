import Route from "./Route";
import Suggestion from "../models/Suggestion";
import authMiddleware from "../middlewares/Auth";

@Route.Route({
  middlewares: [authMiddleware]
})
class RouteSuggestion extends Route {
  constructor(params) {
    super({ ...params });
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
    this.sendOk(ctx, null, "Successfully deleted message");
  }
}

export default RouteSuggestion;
