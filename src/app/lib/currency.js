export async function convertCurrency(have, want, amount) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`,
    {
      headers: {
        "X-Api-Key": "y74kLG1bNDG0c8KBafHDtQ==6YuCLdfRUip3UDue", // Replace with your actual API key
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}
