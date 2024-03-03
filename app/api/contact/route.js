import { connect } from "@/lib/connectDB";
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const { name, email, message } = data;
  let client;
  try {
    client = await connect();
  } catch (error) {
    return new Response(JSON.stringify(error));
  }

  try {
    const db = client.db("portfolio");
    db.collection("messages").insertOne({
      name,
      email,
      message,
    });
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
  return new Response(JSON.stringify(data));
}
