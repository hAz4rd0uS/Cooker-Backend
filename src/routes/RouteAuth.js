import Route from "./Route";
import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import { Types } from "koa-smart";
import { hashPassword, generateSalt, compareHash } from "../utils/hash";

export default class RouteAuth extends Route {
  constructor(params) {
    super({ ...params });
  }

  @Route.Post({
    path: "/login",
    bodyType: Types.object().keys({
      username: Types.string().required(),
      password: Types.string().required()
    })
  })
  async authenticate(ctx) {
    let response = null;
    const error = "Bad Username or Password";
    try {
      const body = this.body(ctx);
      const user = await User.findOne({ username: body.username });
      if (user === null) throw error;
      const matched = compareHash(body.password + user.salt, user.password);
      if (!matched) throw error;
      const token = jwt.sign({ username: user.username }, config.secret, {
        expiresIn: "10d"
      });
      response = {
        user: {
          token,
          username: user.username,
          id: user._id
        }
      };
    } catch (err) {
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 401, err, null);
    }
    this.sendOk(ctx, response, "Successfully generated your token");
  }

  @Route.Post({
    path: "/register",
    bodyType: Types.object().keys({
      username: Types.string().required(),
      password: Types.string().required(),
      profileImageUrl: Types.string()
    })
  })
  async register(ctx) {
    try {
      const body = this.body(ctx);
      const user = await User.findOne({ username: body.username });
      console.log(user);
      if (user !== null) throw "Username is already taken!";
      const salt = generateSalt();
      const result = await User.create({
        username: body.username,
        password: await hashPassword(body.password + salt),
        salt: salt,
        profileImageUrl: body.profileImageUrl || ""
      });
      if (result === null)
        return this.send(ctx, 403, "Failed to create the user...");
    } catch (err) {
      console.log(err);
      if (typeof err !== "string")
        return this.send(ctx, 401, "Unknown error ...", null);
      return this.send(ctx, 403, err, null);
    }
    this.sendOk(ctx, null, "User created");
  }
}
