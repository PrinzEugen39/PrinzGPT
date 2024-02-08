export default function tourQuery(city, province) {
  return `Find a exact ${city} in this exact ${province}.
If ${city} and ${province} exist, create a list of things families can do in this ${city},${province}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "province": "${province}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${province},   return { "tour": null }, with no additional characters.`;
}
