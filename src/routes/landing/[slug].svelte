<script context="module">
  export async function load({ params, fetch }) {
    const url = `/api/validate/${params.slug}`;
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        apiData: response.ok && (await response.json())
      }
    };
  }
</script>

<script>
  export let apiData;
</script>

<h1>{apiData.value}</h1>
<br />
<a href="/" type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">back</a>
