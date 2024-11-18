async function starShips() {
  const url = "https://swapi.dev/api/starships/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
starShips().then((results) => console.log(results));
export { starShips };
