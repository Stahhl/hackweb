<script>
  import { goto } from "$app/navigation";
  export let code = "";
  const problemOne = `
    class Program
    {
        static void Main(string[] args)
        {
            // Vilket är landet?
            var code = "#";
            var result = new List<string>();


            for (int i = 0; i < 2; i++)
            {
                code = "#";
                for (int j = 0; j < 3; j++)
                {
                    code += i < 1 && j < 2 || i > 0 && j > 1 ? "00" : "ff";
                }
                result.Add(code);
            }
            result.ForEach(i => Console.WriteLine("{0}\t", i));
        }
    }`;
  const problemTwo = `
    a = "ligoskfnrwvtyö"
    b = -1
    d = 1
    iii = 5
    foreach (character c in a)
    begin
        i = index of c in a
        ii = (i++) * 2
        d *= b
        iiii = d * ii
        if ii>10 exit(0)
        iii = iii + iiii
        print char(a,iii)
    end
    `;

  function handleSubmit() {
    if (code == "") return;

    goto(`/landing/${code}`);
  }
  console.log("Kan du lösa pusslet nedan?");
  console.log(
    "U2tpY2thIGV0dCBtYWlsIHRpbGwgZ2F2bGVAa25vd2l0LnNlIGbDtnIgYXR0IGbDpSBkaW4gcHJlc2VudCE="
  );
</script>



    <div class="grid grid-cols-3 gap-2 place-items-center h-screen bg-slate-300">
        <div>
            <pre>
                  <code>
                      {problemOne}
                  </code>
              </pre>
          </div>
        <div class="w-full max-w-xs">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            on:submit|preventDefault={handleSubmit}
          >
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
                Enter
              </button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2022 Knowit Gävleborg. All rights reserved.
          </p>
        </div>
        <div>
            <pre>
                  <code>
                      {problemTwo}
                  </code>
              </pre>
          </div>
  </div>
