/** @type {import('./[id]').RequestHandler} */
export function get({ params }) {
  console.log(params.slug);
  const input = params.slug.toUpperCase();
  if (input === "UKRAINA" ||  input === "KNOWIT") {
    return {
      body: { value: "You're hired!" },
    };
  }

  return {
    body: { value: "You're fired!" },
  };
}
