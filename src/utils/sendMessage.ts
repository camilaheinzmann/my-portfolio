type SendMessageProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
  accessKey: string | undefined;
};

export async function sendMessage(contact: SendMessageProps) {
  const response = await fetch("https://api.staticforms.xyz/submit", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();
  return json.success;
}
