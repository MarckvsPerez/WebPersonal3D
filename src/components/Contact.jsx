import React, { useContext } from "react";

import { motion } from "framer-motion";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import LanguageContext from "../constants/languageContext";
import texts from "../constants/texts";

/** Esquema de validación  */
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  message: Yup.string().required("El mensaje es requerido"),
});

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { contact } = texts[language];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_0ogh5v9",
          "template_xjzmnnp",
          {
            from_name: values.name,
            to_name: "Marc",
            from_email: values.email,
            to_email: "marcantoniperez@gmail.com",
            message: values.message,
          },
          "YmMqkoIl9QvRX_KIj"
        )
        .then(
          () => {
            alert(contact.alert);

            formik.resetForm();
          },
          (error) => {
            console.error(error);

            alert("Algo ha ido mal");
          }
        );
    },
  });

  const { handleChange, handleBlur, values, touched, errors, isSubmitting } =
    formik;

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{contact.title}</p>
        <h3 className={styles.sectionHeadText}>{contact.subtitle}</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {contact.nameTag}
            </span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={contact.nameText}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {touched.name && errors.name && (
              <div className="text-red-500">{errors.name}</div>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {contact.emailTag}
            </span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={contact.emailText}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {contact.messageTag}
            </span>
            <textarea
              rows={7}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={contact.messageText}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {touched.message && errors.message && (
              <div className="text-red-500">{errors.message}</div>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? contact.loading : contact.button}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
