"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { toPersianDigits } from "../utils/persian";

const WHATSAPP_NUMBER = "989123456789";

const primary = [
  { label: "شماره تماس", value: toPersianDigits("0912 345 6789"), href: "tel:+989123456789", icon: FaPhone },
  { label: "ایمیل", value: "info@raya.dev", href: "mailto:info@raya.dev", icon: FaEnvelope },
];

const socials = [
  { label: "واتس‌اپ", href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: FaWhatsapp, hover: "hover:bg-emerald-500 hover:shadow-emerald-500/30" },
  { label: "اینستاگرام", href: "https://instagram.com/raya.team", icon: FaInstagram, hover: "hover:bg-pink-500 hover:shadow-pink-500/30" },
  { label: "لینکدین", href: "https://linkedin.com/company/raya", icon: FaLinkedinIn, hover: "hover:bg-sky-600 hover:shadow-sky-600/30" },
  { label: "گیت‌هاب", href: "https://github.com/raya-team", icon: FaGithub, hover: "hover:bg-slate-800 hover:shadow-slate-800/30 dark:hover:bg-white dark:hover:text-black" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Field({ label, as: Tag = "input", ...props }) {
  return (
    <div className="relative">
      <Tag
        {...props}
        placeholder=" "
        className="peer w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 pb-2 pt-6 text-right text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:focus:bg-white/10"
      />
      <label className="pointer-events-none absolute right-4 top-4 text-sm text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-blue-500 peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[11px]">
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `سلام، من ${form.name} هستم.\nایمیل: ${form.email}\n\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 px-5 py-5 text-slate-800 dark:from-black dark:to-black dark:text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#3b82f614_1px,transparent_1px),linear-gradient(to_bottom,#3b82f614_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-[-5rem] h-96 w-96 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-600/30"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-96 w-96 rounded-full bg-sky-400/25 blur-3xl dark:bg-blue-500/20"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={item} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            ارتباط با ما
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
            بیایید یک چیز{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="bg-linear-to-r from-blue-600 via-sky-400 to-blue-600 bg-size-[200%_auto] bg-clip-text text-transparent"
            >
              فوق‌العاده
            </motion.span>{" "}
            بسازیم
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
            ایده‌ای برای پروژه دارید؟ تیم رایا آماده شنیدن و ساختنش است. معمولاً ظرف {toPersianDigits(24)} ساعت پاسخ می‌دهیم.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-blue-800 p-7 text-white shadow-2xl shadow-blue-600/30 dark:from-blue-600 dark:to-blue-950 dark:ring-1 dark:ring-white/10"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-white/10" />
              <h3 className="relative text-lg font-bold">راه‌های ارتباطی مستقیم</h3>
              <div className="relative mt-6 space-y-4">
                {primary.map(({ label, value, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: -6 }}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-xs text-blue-100">{label}</span>
                      <span dir="ltr" className="block text-sm font-semibold">{value}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-4 gap-3">
              {socials.map(({ label, href, icon: Icon, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.94 }}
                  className={`flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 py-4 text-slate-600 shadow-lg shadow-transparent backdrop-blur transition hover:border-transparent hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 ${hover}`}
                >
                  <Icon className="text-xl" />
                  <span className="text-[11px] font-medium">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={item} className="lg:col-span-3">
            <div className="rounded-3xl bg-linear-to-br from-blue-500/60 via-transparent to-sky-400/60 p-px">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-[calc(1.5rem-1px)] bg-white/90 p-6 backdrop-blur-xl dark:bg-neutral-950/90 md:p-9"
              >
                <h3 className="text-xl font-bold">پیام خود را بنویسید</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">فرم را پر کنید تا مستقیم در واتس‌اپ به دستمان برسد.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="name" label="نام و نام خانوادگی" value={form.name} onChange={handleChange} required />
                  <Field name="email" type="email" dir="ltr" label="ایمیل" value={form.email} onChange={handleChange} required />
                </div>
                <Field as="textarea" name="message" rows={6} label="درباره پروژه‌تان بگویید" value={form.message} onChange={handleChange} required />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-sky-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
                >
                  <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />
                  <span className="relative flex items-center gap-2">
                    {sent ? <FaCheck /> : <FaPaperPlane className="-scale-x-100" />}
                    {sent ? "ارسال شد" : "ارسال پیام"}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;