/** @type {import('./[id]').RequestHandler} */
export function get({ params }) {
  const input = params.slug.toUpperCase();

  if (input === "UKRAINA" ||  input === "KNOWIT") {
    return {
      body: { 
        msg: "You're hired! Lookout för hatt!",
        email: "mailto:gavle@knowit.se" 
      },
    };
  }

  return {
    body: { value: "You're fired!" },
  };
}
