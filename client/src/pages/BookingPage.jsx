import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment('2023-11-27T10:00:00').toDate(),
    end: moment('2023-11-27T12:00:00').toDate(),
    title: 'Badminton Court',
    category: 'badminton',
  },
  {
    start: moment('2023-11-27T13:00:00').toDate(),
    end: moment('2023-11-27T15:00:00').toDate(),
    title: 'Squash Court',
    category: 'squash',
  },
  {
    start: moment('2023-11-27T16:00:00').toDate(),
    end: moment('2023-11-27T18:00:00').toDate(),
    title: 'Tennis Court',
    category: 'tennis',
  },
];

const BookingCalendar = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    category: '',
  });

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Implement your booking submission logic here
    const bookingDetails = {
      start: selectedSlot.start,
      end: selectedSlot.end,
      name: bookingInfo.name,
      email: bookingInfo.email,
      category: bookingInfo.category,
    };

    console.log('Booking submitted:', bookingDetails);
    setBookingInfo({ name: '', email: '', category: '' });
    setSelectedSlot(null);
  };

  return (
    <div className="mx-auto my-40 max-w-7xl">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="day"
        className="h-96 w-full rounded bg-pink-200 p-4"
        selectable
        onSelectSlot={handleSelectSlot}
      />

      {selectedSlot && (
        <div className="booking-form">
          <h2>Booking Form</h2>
          <form onSubmit={handleBookingSubmit}>
            <p>
              Selected Slot: {selectedSlot.start.toLocaleString()} to{' '}
              {selectedSlot.end.toLocaleString()}
            </p>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={bookingInfo.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={bookingInfo.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={bookingInfo.category}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="badminton">Badminton</option>
                <option value="squash">Squash</option>
                <option value="tennis">Tennis</option>
              </select>
            </label>
            <button type="submit">Submit Booking</button>
          </form>
          <button onClick={() => setSelectedSlot(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
