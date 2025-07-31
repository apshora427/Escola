import React from "react";

const NewsletterForm = () => {
  return (
    <div className="bg-blue-600 rounded-2xl text-white px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left Side - Title + Description */}
      <div>
        <h2 className="text-3xl font-bold mb-2">Newsletters</h2>
        <p className="text-white/90">Lorem Ipsum is simply dummy text of the printing</p>
      </div>

      {/* Right Side - Input + Button */}
      <form className="flex bg-white rounded-full overflow-hidden w-full md:w-[450px]">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="flex-grow px-5 py-3 outline-none text-gray-700 text-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 md:px-8 py-3 text-sm whitespace-nowrap hover:bg-blue-700 transition-all"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
