import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid request data.",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    console.log("[CONTACT_REQUEST]", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        message:
          "Thanks! We received your request and will confirm your appointment shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again or call the studio.",
      },
      { status: 500 }
    );
  }
}
