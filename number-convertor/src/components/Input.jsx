const content = () => {
  var data = document.getElementById("test");
  const number = data.value;
};

const Input = () => {
  return (
    <div className="margin-container flex items-center justify-center"
      style={{
        height: '80vh'
      }}>
      <h3>A convertor</h3>
      <input
        className="border-2 p-3 rounded-md"
        placeholder="Decimal Representation"
        id="test"
        type="number"
        autoComplete="off"
      ></input>
      <button
        className="mx-6 my-8 bg-indigo-500 text-white p-2 rounded-md"
        onClick={content}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Input;
