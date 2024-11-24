export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const count = searchParams.get('count') || 3;
  
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=${count}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: `Failed to fetch data: ${response.status}` }),
          { status: 500 }
        );
      }
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching NASA APOD data:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch data' }),
        { status: 500 }
      );
    }
  }
  
export const runtime = "edge";

  