const content = () => {
  var data = document.getElementById("test");
  const number = data.value;
  console.log(number);
  setTimeout(alert, 1000);
};
// const alert = () => {
//   <div>
//     <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
//       <div class="flex items-center justify-center w-12 bg-emerald-500">
//         <svg
//           class="w-6 h-6 text-white fill-current"
//           viewBox="0 0 40 40"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
//         </svg>
//       </div>
//       <div class="px-4 py-2 -mx-3">
//         <div class="mx-3">
//           <span class="font-semibold text-emerald-500 dark:text-emerald-400">
//             Success
//           </span>
//           <p class="text-sm text-gray-600 dark:text-gray-200">
//             Your account was registered!
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>;
// };
const Input = () => {
  return (
    <div>
      <div
        className="grid grid-rows-2 margin-container items-center justify-center"
        style={{
          height: "80vh",
        }}
      >
        <div className="box-border">
          <label
            className="w-5 text-lg rounded-md p-3 text-indigo-600"
            for="Representations"
          >
            Convert from
          </label>
          <select
            className=" rounded-md bg-zinc-200 text-indigo-600 text-lg mr-3 h-12 pt-3 pb-3 pr-3 pl-1"
            name="Representation"
            id="Representation"
          >
            <option value="Binary">Binary</option>
            <option value="Octal">Octal</option>
            <option value="Decimal">Decimal</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
          <input
            className="text-lg border-2 rounded-md h-12 w-auto"
            placeholder=" Binary Representation"
            id="test"
            type="number"
            autoComplete="off"
          ></input>
          <button
            className="text-lg ml-6 h-12 bg-indigo-500 text-white p-2 rounded-md"
            onClick={content}
          >
            SUBMIT
          </button>
        </div>
        <div className="align-top justify-start">
          <label
            className="w-5 text-lg rounded-md p-3 text-indigo-600"
            for="Representations"
          >
            Convert to{"   "}
          </label>
          <select
            className=" rounded-md bg-zinc-200 text-indigo-600 text-lg mr-3 h-12 pt-3 pb-3 pr-3 pl-1"
            name="Representation"
            id="Representation"
          >
            <option value="Binary">Binary</option>
            <option value="Octal">Octal</option>
            <option value="Decimal">Decimal</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
          <input
            className="cursor-not-allowed text-lg border-2 rounded-md h-12 w-auto"
            placeholder=" Binary Representation"
            id="test"
            type="number"
            autoComplete="off"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Input;
