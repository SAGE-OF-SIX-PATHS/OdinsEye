import { RequestHandler } from "express";
import appAssert from "../utils/appAssert";
import AppErrorCode from "../constants/appErrorCode";
import { UNAUTHORIZED } from "../constants/http";
import { verifyToken } from "../utils/jwt";

// Define strict JWT payload type
interface JWTPayload {
  userId: string;
  sessionId: string;
  iat?: number;
  exp?: number;
}

const authenticate: RequestHandler = (req, res, next) => {
  const accessToken = req.cookies.accessToken as string | undefined;
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Not authorized",
    AppErrorCode.InvalidAccessToken
  );

  // Type the verifyToken return value
  const { error, payload } = verifyToken(accessToken) as {
    error?: string;
    payload?: JWTPayload;
  };

  appAssert(
    payload,
    UNAUTHORIZED,
    error === "jwt expired" ? "Token expired" : "Invalid token",
    AppErrorCode.InvalidAccessToken
  );

  // These are now properly typed
  req.userId = payload.userId;
  req.sessionId = payload.sessionId;
  
  next();
};

export default authenticate;