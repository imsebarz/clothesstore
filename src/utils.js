export const getProducts = async (query, limit) => {
  let token =
    localStorage.getItem("accessToken") ||
    localStorage.setItem("accessToken", await getNewToken());
  const response = await fetch(
    `${process.env.API_URL}/search?q=${encodeURIComponent(
      query
    )}&limit=${limit}&category=MCO1430`,
    {
      method: "get",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }
  );
  if (response.status >= 400) {
    localStorage.clear();
    getProducts(query, limit);
  } else {
    const resultados = await response.json();
    return resultados;
  }
};

const getNewToken = async () => {
  console.log("Actualizando Token ... ");
  const response = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: JSON.stringify({
      grant_type: "refresh_token",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      refresh_token: process.env.REFRESH_TOKEN,
    }),
  });
  const data = await response.json();
  console.log("Token Actualizado");
  return data.access_token;
};
