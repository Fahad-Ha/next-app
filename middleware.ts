export { default } from "next-auth/middleware";

export const config = {
  // *: Zero or more
  // +: One or more
  // ?: Zero or one
  matcher: ["/dashboard/:path*"],
};
