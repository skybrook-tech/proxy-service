import dotenv from "dotenv";
import setupServerDefaults from "./core/utils/setup-server-defaults";
import vhost from "vhost";
import proxy from "http-proxy-middleware";
import { Request, Response, NextFunction } from "express";
import config from "../_config";

const { DOMAIN, PORT } = config;
const app = setupServerDefaults();

config.routes.forEach(({ address, subDomain }: { address: string; subDomain: string }) => {
  app.use(
    vhost(`${subDomain}.${DOMAIN}`, (req: Request, res: Response, next: NextFunction) => {
      const actualSubdomain = req.vhost.host.split(".")[0];

      // TODO: create a logging system for listening to all incoming requests.
      console.log(`${actualSubdomain}.${DOMAIN}` + " has been hit");

      next();
    })
  );

  app.use(vhost(`${subDomain}.${DOMAIN}`, proxy({ target: address })));
});

app.listen(PORT, () => {
  console.log(`Server ready at http://%%service%%.${DOMAIN}:${PORT}`);
});
