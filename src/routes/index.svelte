<script>
    import { goto } from "$app/navigation"
    export let code = ""
    function handleSubmit(){
        if(code == "")
            return;

        goto(`/landing/${code}`)
    }
</script>

<div class="grid place-items-center h-screen">
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-center"
          for="code"
        >
          Mata in kod
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="code"
          type="code"
          placeholder="******************"
          bind:value={code}
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
          on:click={handleSubmit}
        >
          Sign In
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
</div>
