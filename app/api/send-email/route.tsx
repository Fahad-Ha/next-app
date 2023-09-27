import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
// for demo only, sending emails should'nt be in an endpoint

const resend = new Resend(process.env.RESND_API_KEY);

export async function POST() {
  await resend.emails.send({
    //need to use your domain to send not gmail, etc.
    //and need to setup in resend Domains dashboard
    from: "",
    to: "test@test.com",
    subject: "Hello",
    //our template component here
    react: <WelcomeTemplate name="fahad" />,
  });
  return NextResponse.json({});
}
