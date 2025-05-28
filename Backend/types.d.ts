// types/express/index.d.ts (or anywhere your types are defined)
import { Request } from "express";

declare module "express-serve-static-core" {
    interface Request {
        UserId?: string;
    }
}
