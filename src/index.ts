import * as bodyParser from "body-parser";
import { Handler, useExpress } from "routex";

export function json(options?: bodyParser.OptionsJson): Handler {
  return useExpress(bodyParser.json(options));
}

export function raw(options?: bodyParser.Options): Handler {
  return useExpress(bodyParser.raw(options));
}

export function text(options?: bodyParser.OptionsText): Handler {
  return useExpress(bodyParser.text(options));
}

export function urlencoded(options?: bodyParser.OptionsUrlencoded): Handler {
  return useExpress(bodyParser.urlencoded(options));
}
