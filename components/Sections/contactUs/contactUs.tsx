const ContactUs = () => {
  return (
    <div className="md:py-20 p-4 container">
      <div className="border-[1px] md:w-2/3 mx-auto p-10 rounded-xl">
        <div className="text-4xl font-bold mb-5">
          Start building your busniess today.
        </div>
        <div>
          Curious about how we can help your business? Get in touch with our
          team to learn more about our platform and how we can help you grow
          your business.
        </div>

        <button
          className="bg-gradient-to-r
            from-[#c990ff]
            to-[#3e15f3] text-white px-6 py-3 md:w-1/4 mt-5 rounded-lg"
        >
          Get Free Consultation
        </button>
        <button
          className="ml-5 bg-gradient-to-r
            text-white px-6 py-3 md:w-1/4 mt-5 rounded-lg"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
