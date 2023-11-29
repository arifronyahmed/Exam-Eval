import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DialogModal from '../components/bookingPageComponents/DialogModal';

const localizer = momentLocalizer(moment);

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Badminton' },
  { resourceId: 2, resourceTitle: 'Tennis' },
  { resourceId: 3, resourceTitle: 'Squash' },
];

const currentDateTime = new Date();

const BookingCalendar = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const selectedEvent = myEvents.find(
        (event) =>
          moment(event.start).isSame(start) && moment(event.end).isSame(end),
      );
      setSelectedSlot(selectedEvent);
      setModalOpen(true);
    },
    [myEvents],
  );
  const handleSelectEvent = useCallback((event) => {
    console.log('Selected Event:', event);
    setSelectedSlot(event);
    setModalOpen(true);
  }, []);

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedSlot(null);
  };

  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: currentDateTime,
      views: ['day', 'week'],
    }),
    [],
  );

  return (
    <div className="mx-auto my-40 h-screen max-w-7xl">
      <Calendar
        className="w-full rounded bg-gray-200 p-4 text-gray-700"
        localizer={localizer}
        events={myEvents}
        defaultDate={defaultDate}
        defaultView={Views.DAY}
        views={views}
        selectable
        step={60}
        resourceIdAccessor="resourceId"
        resources={resourceMap}
        resourceTitleAccessor="resourceTitle"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />

      <DialogModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedSlot={selectedSlot}
      />
    </div>
  );
};

export default BookingCalendar;
