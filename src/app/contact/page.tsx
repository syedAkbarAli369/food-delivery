"use client"

const Contact = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col md:flex-row gap-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      
      {/* LEFT: Contact Info */}
      <div className="flex-1 flex flex-col  space-y-6">
        <h1 className="text-3xl font-bold lg:text-4xl">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Reach us using the information below.</p>

        <div className="flex flex-col gap-3">
          <p><strong>📍 Address:</strong> 123 Food Street, Karachi</p>
          <p><strong>📞 Phone:</strong> (021) 123-4567</p>
          <p><strong>📧 Email:</strong> contact@pizzapoint.com</p>
          <p><strong>🕒 Hours:</strong> Mon to Sun: 12pm to 11pm </p>
        </div>

      </div>

      {/* RIGHT: Contact Form */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
          <textarea  placeholder="Your Message" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
          <button className="bg-yellow-300 text-black font-bold py-3 px-6 rounded hover:bg-yellow-400 transition">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
