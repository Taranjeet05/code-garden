import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { street, state, country, pin } = await req.json();

  const query = `${street}, ${state}, ${country}, ${pin}`;

  try {
    const res = await fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=1`,
    );
    const data = await res.json();

    if (!data.features || data.features.length === 0) {
      return NextResponse.json({ error: "Address not found" });
    }

    const [lng, lat] = data.features[0].geometry.coordinates;

    return NextResponse.json({ lat, lng });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" });
  }
}
