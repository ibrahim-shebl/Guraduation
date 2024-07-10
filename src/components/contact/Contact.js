import React,{useState} from 'react'
import Layout from "./Layout";
import ContactLeft from './ContactLeft';
import './contact.css'
import CommonSection from './common-section/CommonSection'
const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    }else if (massage === '') {
      setErrMsg('Message is required!');
    } else {
      const formData = new FormData();
      formData.append('name', username);
      formData.append('email', email);
      formData.append('phone', phoneNumber);
      formData.append('massage', massage);

      fetch('https://mohmed.testworks.top/public/api/add-contact', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
          setErrMsg('');
          setUsername('');
          setPhoneNumber('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          setErrMsg('Failed to send message. Please try again later.');
          console.error('Error sending message:', error);
        });
    }
  };
  return (
    <div className='contact_us'>
    <CommonSection title="Welcome To Auction" />
    <div className="w-full h-auto body_ text-lightText px-4">
        <div className='className="max-w-screen-xl mx-auto"'>
          <section
          id="contact"
          className="w-full py-20 border-b-[1px] border-b-black"
        >
          <div className="contact flex justify-center items-center text-center">
            {/* <Layout title="Welcome To Auction" des="Contact Us"/> */}
            <h2 className="main-title">Contact Us</h2>
          </div>
          <div className="container-fluid">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <ContactLeft />
              <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                  
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                  <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Your name
                      </p>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className={`${
                          errMsg === "Username is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                      </p>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        className={`${
                          errMsg === "Phone number is required!" &&
                          "outline-designColor"
                        } contactInput`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                      } contactInput `}
                      type="email"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={massage}
                      className={`${
                        errMsg === "Message is required!" && "outline-designColor"
                      } contactTextArea`}
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSend}
                      className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                    >
                      Send Message
                    </button>
                  </div>
                  {errMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                      {successMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          </section>
        </div>
      </div>
      <section className='location'>
          <h2 className='main-title locat'>Location</h2>
          <div id="contact-details" className="container-fluid">
            <div className="details">
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i className="fa-solid fa-map"></i>
                        <p>Paris Street Shbeen El Koom</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-envelope"></i>
                        <p>Auction@gmil.com</p>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>01025946540</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-clock"></i>
                        <p>Saturday To Thursday: 8:00Am To 4:00Pm </p>
                    </li>
                </div>
            </div>
            <div class="map">
                <iframe className='frame_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27484.125276364062!2d31.02617456854541!3d30.562985432045664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d68b68933ea3%3A0x77434af2db2fa06f!2z2LTYqNmK2YYg2KfZhNmD2YjZhdiMINmC2LPZhSDYtNio2YrZhiDYp9mE2YPZiNmF2Iwg2KfZhNmF2YbZiNmB2YrYqQ!5e0!3m2!1sar!2seg!4v1680818199588!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Contact