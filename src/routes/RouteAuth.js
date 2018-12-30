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
      email: Types.string().required(),
      password: Types.string().required()
    })
  })
  async authenticate(ctx) {
    let response = null;
    const error = "Bad Email or Password";
    try {
      const body = this.body(ctx);
      const user = await User.findOne({ email: body.email });
      if (user === null) throw error;
      const matched = compareHash(body.password + user.salt, user.password);
      if (!matched) throw error;
      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: "10d"
      });
      response = {
        user: {
          token,
          email: user.email,
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
      email: Types.string().required(),
      password: Types.string().required(),
      profileImageUrl: Types.string().required(),
      firstName: Types.string().required(),
      lastName: Types.string().required()
    })
  })
  async register(ctx) {
    try {
      const body = this.body(ctx);
      const user = await User.findOne({ email: body.email });
      if (user !== null) throw "Username is already taken!";
      const salt = generateSalt();
      const result = await User.create({
        email: body.email,
        password: await hashPassword(body.password + salt),
        salt: salt,
        profileImageUrl: body.profileImageUrl,
        firstName: body.firstName,
        lastName: body.lastName
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
