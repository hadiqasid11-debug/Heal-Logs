const API_KEY = "AIzaSyCp6p2SS5U81nyG8Wpu7_VT_C9VRj75Lns";

async function sendMessage() {
  const input = document.getElementById("userInput").value;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: input }] }],
      }),
    }
  );

  const data = await response.json();

  document.getElementById("reply").innerText =
    data.candidates[0].content.parts[0].text;
}
