import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tour: '',
    guests: 1,
    date: '',
    notes: ''
  });

  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extra validation: prevent booking for past dates
    if (form.date < today) {
      alert("You cannot book for past dates.");
      return;
    }

    alert(`Thank you ${form.name}! Your booking for ${form.tour} is received.`);
    console.log(form);
    setForm({ name: '', email: '', tour: '', guests: 1, date: '', notes: '' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-16">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Tour</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="tour"
          value={form.tour}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Tour</option>
          <option value="Bali">Bali</option>
          <option value="Disneyland">Disneyland</option>
          <option value="Greece">Greece</option>
          <option value="India">India</option>
          <option value="Paris">Paris</option>
          <option value="Spain">Spain</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Tomorrowland">Tomorrowland</option>
          <option value="Venice">Venice</option>
        </select>
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          min="1"
          value={form.guests}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          min={today}  // Disable past dates
          className="border p-2 rounded"
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={form.notes}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
