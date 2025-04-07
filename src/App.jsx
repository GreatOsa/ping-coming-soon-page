import React, { useState } from "react";
import Logo from "./assets/logo.svg";
import illustrationDashboard from "./assets/illustration-dashboard.png";

const App = () => {
  const [email, setEmail] = useState(""); // Track the email input
  const [isValid, setIsValid] = useState(true); // Track whether the email is valid

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission
    if (!emailRegex.test(email)) {
      setIsValid(false); // Set to invalid if email doesn't match the pattern
    } else {
      setIsValid(true); // Set to valid if email matches the pattern
      // Proceed with form submission (e.g., call an API or something)
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <div className="bg-[var(--Gray)]/10  w-[100%]  flex justify-center items-center   ">
      <div className="  w-[80%] md:w-[500px] h-full py-11  lg:w-[500px] flex flex-col justify-between  items-center  ">
        <div className="flex flex-col gap-2.5 items-center overflow-x-hidden">
          <img src={Logo} alt="Logo" className="w-[100px] pt-2 " />
          <div className="text-center flex flex-col  ">
            <h1 className="text-4xl text-[var(--Gray)]">
              We are launching{" "}
              <span className="font-bold text-[var(--Very-Dark-Blue)] ">
                soon!
              </span>
            </h1>
            <p className="text-[var(--Very-Dark-Blue)] text-xl">
              Subscribe and get notified
            </p>
          </div>
          <form className="w-full flex flex-col lg:flex-row md:flex-row gap-5 pt-[1.5rem]  ">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange} // Update email on change
              className={`rounded-full lg:w-5/6 md:w-5/6 w-full ring-[rgba(0,0,0,0.25)] p-3 placeholder-[var(--Gray)] focus:outline-none focus:text-[var(--Very-Dark-Blue)] focus:border-[var(--Gray)] focus:outline-noneocus:ring-2 ${
                !isValid
                  ? "border-2 border-[var(--Light-Red)]"
                  : "border-2 border-[var(--Gray)] "
              }`} // Conditional red border
              placeholder="Your Email address"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-full lg:w-3/6  md:w-3/6 w-full font-bold text-[var(--Pale-Blue)]  bg-[var(--Blue)] p-3"
            >
              Notify Me
            </button>
          </form>
          {!isValid && (
            <p className="text-[var(--Light-Red)] text-center mt-2">
              Please enter a valid email address.
            </p>
          )}

          <img
            className="pt-[4rem] "
            src={illustrationDashboard}
            alt="illustration-dashboard"
          />
        </div>
        <footer className="flex flex-col pt-[6rem] gap-4 ">
          <Social />
          <p className="text-sm font-bold text-[var(--Gray)] ">
            © Copyright Ping. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

function Social() {
  const socialHeight = "w-[1.5em] h-[1.5em] ";
  const socialStyle =
    " group text-xl flex justify-center p-2 rounded-full shadow-[1px_1px_5px_rgba(0,0,0,0.25)] from-gray-800 hover:bg-[#1da1f2] text-[var(--Blue)] hover:text-[var(--Pale-Blue)] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 cursor-pointer";
  return (
    <div>
      <section className="flex justify-center items-center gap-3 ">
        <button href="/" className={socialStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={socialHeight}
          >
            <path d="M15.117 2H8.883C7.847 2 7 2.847 7 3.883v16.234C7 19.153 7.847 20 8.883 20h6.234c1.035 0 1.883-.847 1.883-1.883V3.883C17 2.847 16.152 2 15.117 2zM15 17.117c0 .49-.398.883-.883.883H9.883A.883.883 0 0 1 9 17.117V6.883c0-.49.398-.883.883-.883h4.234c.49 0 .883.398.883.883v10.234z" />
          </svg>

          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Facebook
          </span>
        </button>
        <button href="/" className={socialStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={socialHeight}
          >
            <path d="M19.488 4.512c-1.248-1.248-3.312-1.248-4.56 0L12 8.944 9.072 5.992c-1.248-1.248-3.312-1.248-4.56 0-1.248 1.248-1.248 3.312 0 4.56L8.944 12l-4.432 4.432c-1.248 1.248-1.248 3.312 0 4.56 1.248 1.248 3.312 1.248 4.56 0L12 15.056l2.928 2.928c1.248 1.248 3.312 1.248 4.56 0 1.248-1.248 1.248-3.312 0-4.56L15.056 12l4.432-4.432c1.248-1.248 1.248-3.312 0-4.56z" />
          </svg>

          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Twitter
          </span>
        </button>
        <button href="/" className={socialStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1"
            fill="currentColor"
            stroke="currentColor"
            className={socialHeight}
          >
            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Instagram
          </span>
        </button>
      </section>
    </div>
  );
}
