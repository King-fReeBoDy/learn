import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleForm = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_9vq5qm5",
      "template_9r3mu7s",
      form,
      "hwjLIxlq6Jol59P5r"
    );
    setForm({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };
  return (
    <section className="my-10">
      <div className="w-[90%] lg:w-[800px] mx-auto">
        <h1 className="text-2xl font-semibold mt-10">CONTACT US</h1>

        <div>
          <p className="my-3">
            For speaking or other related enquiries, please send emails to:
            <br />
            <p className="font-semibold">info@misterwootube.com</p>
          </p>
          <p>Alternatively, you can fill out the form below.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[90%] md:w-[400px] my-5 font-semibold"
        >
          <div className="flex flex-col mb-2">
            <label htmlFor="">Name</label>
            <input
              value={form.name}
              type="text"
              name="name"
              id=""
              className="p-2 mt-3 border"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Email</label>
            <input
              value={form.email}
              type="email"
              name="email"
              id=""
              className="p-2  mt-3 border"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Phone Number</label>
            <input
              value={form.number}
              type="number"
              name="number"
              id=""
              className="p-2  mt-3 border"
              onChange={handleForm}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              value={form.message}
              id=""
              cols="30"
              rows="5"
              className="p-2  mt-3 border"
              onChange={handleForm}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 px-5 py-2 font-semibold mt-2"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
