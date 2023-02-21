import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form'

export const MessageForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnqmh2h",
        "template_t8a0j5z",
        form.current,
        "75us1Zfs54B4TAEYL"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "Cesar will be in contact with you soon.",
            });
            e.target.reset();
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph: "Please contact Cesar by email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Please contact Cesar either by phone or email.",
          });
        }
      );
  };

  return (
    <>
      <div>
        <h3>{formSubmitted.title}</h3>
        <p>{formSubmitted.paragraph}</p>
      </div>
      <form
        className="flex flex-col border-2 border-yellow-500 shadow-xl rounded-xl w-11/12 place-content-center ml-4 bg-gradient-to-b from-purple-900 to-black"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="border-1 border-black">&nbsp; Name</label>
        <input 
          className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" 
          {...register("name", {required: true})} aria-invalid={errors.name ? "true" : "false"} 
          placeholder="Name" 
          type="text" 
          name="name" 
        />
        {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
        <label className="border-1 border-black">&nbsp; Email</label>
        <input 
          className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" 
          {...register("email", {required: "Email address is required"})} aria-invalid={errors.email ? "true" : "false"} placeholder="email@email.com" 
          type="email" 
          name="email" 
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
        <label className="border-1 border-black">&nbsp; Message</label>
        <textarea 
          className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" 
          {...register("message", {required: true})} aria-invalid={errors.message ? "true" : "false"} 
          placeholder="Type your message here" 
          name="message" 
        />
        {errors.message?.type === 'required' && <p role="alert">Message is required</p>}
        <input className="border-2 border-yellow-500 rounded-xl bg-purple-900 w-11/12 ml-3 mb-1" type="submit" value="Send" />
      </form>
    </>
  );
};
