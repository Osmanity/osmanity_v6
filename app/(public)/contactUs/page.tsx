import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading/Heading";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <Heading
        className="pt-52 pb-24"
        title="Contact"
        subTitle="Get in touch"
      />
      <ContactForm />
    </div>
  );
};

export default Page;
