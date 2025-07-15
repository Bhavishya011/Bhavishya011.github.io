import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import Fade from "react-reveal/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const empty = () =>
  toast.error("Please fill the required fields", {
    id: "error",
  });

const error = () =>
  toast.error("Error sending your message", {
    id: "error",
  });

const success = () =>
  toast.success("Message sent successfully", {
    id: "success",
  });

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);
  const buttonElementRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSent(false);
    try {
      const response = await fetch("https://formspree.io/f/manbyoyo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSent(true);
        setFormData(initialState);
      } else {
        setSent(false);
        // Optionally show error feedback
      }
    } catch (err) {
      setSent(false);
      // Optionally show error feedback
    }
    setIsSending(false);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    return () => tl.kill();
  }, [sectionRef]);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  useEffect(() => {
    if (!buttonElementRef.current) return;
    if (!isSending) return;
    // Plane animation logic (restored)
    buttonElementRef.current.classList.add("active");
    gsap.to(buttonElementRef.current, {
      keyframes: [
        {
          "--left-wing-first-x": 50,
          "--left-wing-first-y": 100,
          "--right-wing-second-x": 50,
          "--right-wing-second-y": 100,
          duration: 0.2,
          onComplete() {
            gsap.set(buttonElementRef.current, {
              "--left-wing-first-y": 0,
              "--left-wing-second-x": 40,
              "--left-wing-second-y": 100,
              "--left-wing-third-x": 0,
              "--left-wing-third-y": 100,
              "--left-body-third-x": 40,
              "--right-wing-first-x": 50,
              "--right-wing-first-y": 0,
              "--right-wing-second-x": 60,
              "--right-wing-second-y": 100,
              "--right-wing-third-x": 100,
              "--right-wing-third-y": 100,
              "--right-body-third-x": 60,
            });
          },
        },
        {
          "--left-wing-third-x": 20,
          "--left-wing-third-y": 90,
          "--left-wing-second-y": 90,
          "--left-body-third-y": 90,
          "--right-wing-third-x": 80,
          "--right-wing-third-y": 90,
          "--right-body-third-y": 90,
          "--right-wing-second-y": 90,
          duration: 0.2,
        },
        {
          "--rotate": 50,
          "--left-wing-third-y": 95,
          "--left-wing-third-x": 27,
          "--right-body-third-x": 45,
          "--right-wing-second-x": 45,
          "--right-wing-third-x": 60,
          "--right-wing-third-y": 83,
          duration: 0.25,
        },
        {
          "--rotate": 60,
          "--plane-x": -8,
          "--plane-y": 40,
          duration: 0.2,
        },
        {
          "--rotate": 40,
          "--plane-x": 45,
          "--plane-y": -300,
          "--plane-opacity": 0,
          duration: 0.375,
          onComplete() {
            setTimeout(() => {
              if (!buttonElementRef.current) return;
              buttonElementRef.current.removeAttribute("style");
              gsap.fromTo(
                buttonElementRef.current,
                {
                  opacity: 0,
                  y: -8,
                },
                {
                  opacity: 1,
                  y: 0,
                  clearProps: true,
                  duration: 0.3,
                  onComplete() {
                    if (buttonElementRef.current) {
                      buttonElementRef.current.classList.remove("active");
                    }
                  },
                }
              );
            }, 1800);
          },
        },
      ],
    });
    gsap.to(buttonElementRef.current, {
      keyframes: [
        {
          "--text-opacity": 0,
          "--border-radius": 0,
          "--left-wing-background": "#9f55ff",
          "--right-wing-background": "#9f55ff",
          duration: 0.11,
        },
        {
          "--left-wing-background": "#8b31ff",
          "--right-wing-background": "#8b31ff",
          duration: 0.14,
        },
        {
          "--left-body-background": "#9f55ff",
          "--right-body-background": "#9f55ff",
          duration: 0.25,
          delay: 0.1,
        },
        {
          "--trails-stroke": 171,
          duration: 0.22,
          delay: 0.22,
        },
        {
          "--success-opacity": 1,
          "--success-x": 0,
          duration: 0.2,
          delay: 0.15,
        },
        {
          "--success-stroke": 0,
          duration: 0.15,
        },
      ],
    });
  }, [isSending]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              CONTACT
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Contact
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            Get In Touch.{" "}
          </h2>
        </div>

        <form 
          className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal"
          onSubmit={handleSubmit}
        >
          <Fade bottom distance={"4rem"}>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Name
              </label>
            </div>

            <div className="relative mt-14">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Email
              </label>
            </div>

            <div className="relative mt-14">
              <textarea
                name="message"
                id="message"
                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
              >
                Message
              </label>
            </div>
          </Fade>
          <div className="mt-9 mx-auto link">
            <button
              ref={buttonElementRef}
              className={styles.button}
              type="submit"
              disabled={isSending}
            >
              <span>{isSending ? "Sending..." : "Send ->"}</span>
              {sent && (
                <span className={styles.success}>
                  <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5"></polyline>
                  </svg>
                  Sent
                </span>
              )}
              <svg className={styles.trails} viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
              </svg>
              <div className={styles.plane}>
                <div className={styles.left} />
                <div className={styles.right} />
              </div>
            </button>
          </div>
        </form>
        {sent && (
          <div className="text-green-400 text-center mt-4 text-lg font-semibold animate-pulse">
            Message sent successfully!
          </div>
        )}
      </div>
      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: none;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #7000ff;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #000000;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;
