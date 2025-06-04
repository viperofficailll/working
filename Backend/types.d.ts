// First, create a types file (e.g., types/express.d.ts)
declare global {
  namespace Express {
    interface Request {
      UserId?: string;
    }
  }
}

export {};
