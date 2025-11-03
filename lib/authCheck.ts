import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthCheckResult {
  error: boolean;
  response?: NextResponse;
  tokenData?: JwtPayload | string;
}

export async function authCheck(
  request: NextRequest
): Promise<AuthCheckResult> {
  try {
    const jwtToken = request.headers.get("Authorization");

    if (!jwtToken) {
      return {
        error: true,
        response: NextResponse.json(
          { message: "Authorization token is required" },
          {
            status: 401,
          }
        ),
      };
    }

    const freshToken = jwtToken.replace("Bearer ", "");

    let verifyToken: JwtPayload | string;
    try {
      verifyToken = jwt.verify(freshToken, process.env.JWT_SECRET ?? "");
    } catch (err) {
      return {
        error: true,
        response: NextResponse.json(
          { message: "Invalid token" },
          {
            status: 401,
          }
        ),
      };
    }

    const decodedToken = jwt.decode(freshToken);
    return {
      error: false,
      tokenData: decodedToken ?? {},
    };
  } catch (error) {
    return {
      error: true,
      response: NextResponse.json(
        { message: "Internal Server Error" },
        {
          status: 500,
        }
      ),
    };
  }
}
