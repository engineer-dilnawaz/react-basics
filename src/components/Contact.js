const Contact = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="bg-slate-300 p-4 w-8/12 flex flex-col gap-2">
        <input
          placeholder="Name"
          type="text"
          className="px-2 w-full outline-0 bg-white py-2 rounded-xs"
        />
        <input
          placeholder="Email"
          type="email"
          className="px-2 w-full outline-0 bg-white py-2 rounded-xs"
        />
        <input
          placeholder="Phone number"
          type="tel"
          className="px-2 w-full outline-0 bg-white py-2 rounded-xs"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-indigo-400 py-4 text-center rounded-sm text-white text-2xl font-bold cursor-pointer hover:bg-indigo-600 transition-colors duration-100 outline-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
