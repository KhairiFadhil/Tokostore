import withAuth from "./app/middlewares/withAuth";
import { NextResponse } from "next/server";

/**
 * Main middleware function
 * 
 * @param {NextRequest} request - The incoming request
 * @param {NextResponse} response - The response object
 * @returns {NextResponse} - The response object
 */
export function mainMiddleware(request, response) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ['/dashboard', '/login', '/register', '/profile']);