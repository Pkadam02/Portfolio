import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolioData";

export async function GET() {
  try {
    // Return structured portfolio stats in JSON format
    const stats = portfolioData.stats;
    const personalInfo = {
      name: portfolioData.personalInfo.name,
      tagline: portfolioData.personalInfo.tagline,
      location: portfolioData.personalInfo.location,
    };

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      personalInfo,
      stats,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
