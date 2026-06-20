// Netlify Function: Proxy for football-data.org API
// This runs on Netlify's server, so CORS is not an issue.
// The API key is read from Netlify environment variable FOOTBALL_DATA_API_KEY.

const FOOTBALL_DATA_API = "https://api.football-data.org/v4";
const WORLD_CUP_2026_ID = 2000;

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight CORS requests
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow GET
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.FOOTBALL_DATA_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        error: "API key not configured",
        message: "Set FOOTBALL_DATA_API_KEY in Netlify environment variables",
        usingBaseFixtures: true
      }),
    };
  }

  try {
    const statusFilter = event.queryStringParameters?.status || "SCHEDULED,LIVE,FINISHED";
    const apiUrl = `${FOOTBALL_DATA_API}/competitions/${WORLD_CUP_2026_ID}/matches?status=${statusFilter}`;

    console.log(`[Matches Proxy] Fetching: ${apiUrl}`);

    const response = await fetch(apiUrl, {
      headers: {
        "X-Auth-Token": apiKey,
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Upstream API returned HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const matchCount = data.matches?.length || 0;

    console.log(`[Matches Proxy] ✓ Success: ${matchCount} matches returned`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        matches: data.matches,
        count: matchCount,
        cached: false,
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error(`[Matches Proxy] ✗ Error:`, error.message);

    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: error.message,
        usingBaseFixtures: true,
        timestamp: new Date().toISOString(),
      }),
    };
  }
};