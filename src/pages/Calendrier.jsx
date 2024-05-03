import React, { useState } from 'react';
import Sidebar from '../components/molecules/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '@nextui-org/react';
import '../styles/Calendrier.css';

function Calendrier() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const handleAddEvent = () => {
      const newEvent = {
        date: date,
        title: "Contrôle technique"
    };
    setEvents([...events, newEvent]);
    };

    return (
        <div className='flex w-full h-full absolute'>
            <Sidebar />
            <div className='flex-grow p-16 flex flex-col'>
                <h1 className='text-2xl font-semibold font-playpen mb-4'>Calendrier</h1>
                <Button onClick={handleAddEvent} color='primary' className='m-4'>
                    Ajouter un rappel
                </Button>
                <div className="calendar-container">
                <Calendar
    onChange={onChange}
    value={date}
    className='calendar'
    tileContent={({ date, view }) => {
        if (view === 'month') {
            const dayEvents = events.filter(e => new Date(e.date).toDateString() === date.toDateString());
            return (
                <div>
                    {dayEvents.map((event, index) => (
                        <div key={index} className="bg-blue-400 rounded p-1 text-xs">
                            {event.title}
                        </div>
                    ))}
                </div>
            );
        }
    }}
/>
                </div>
            </div>
        </div>
    );
}

export default Calendrier;
