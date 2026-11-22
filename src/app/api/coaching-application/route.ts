import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { coachingApplicationSchema } from "@/lib/validations/application";

export async function POST(request: Request) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "INVALID_JSON",
        error: "Invalid request payload. Please try submitting the form again.",
      },
      { status: 400 }
    );
  }

  const parsed = coachingApplicationSchema.safeParse(rawBody);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        error: "Please review the highlighted fields before submitting.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json(
      {
        ok: false,
        code: "BACKEND_NOT_CONFIGURED",
        error:
          "Application database is not connected yet. Please reach out directly via WhatsApp (+234 915 120 8241).",
      },
      { status: 503 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const data = parsed.data;

  const { data: inserted, error: insertError } = await supabase
    .from("coaching_applications")
    .insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      preferred_format: data.preferredFormat,
      primary_goal: data.primaryGoal,
      current_challenges: data.currentChallenges,
      privacy_consent: data.privacyConsent,
    })
    .select("id, created_at")
    .single();

  if (insertError) {
    console.error("Supabase coaching_applications insert failed:", insertError);
    return NextResponse.json(
      {
        ok: false,
        code: "DATABASE_ERROR",
        error:
          "We could not save your application right now. Please try again shortly or message Patrick on WhatsApp.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      id: inserted?.id ?? null,
      createdAt: inserted?.created_at ?? null,
      message: "Your coaching application has been received.",
    },
    { status: 201 }
  );
}
