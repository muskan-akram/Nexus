import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import type { EventInput } from '@fullcalendar/core';
interface Meeting {
  id: number;
  title: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Declined';
}

export function Meetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([
    { id: 1, title: 'Investor Intro Call', date: '2025-12-20', status: 'Confirmed' },
    { id: 2, title: 'Pitch Discussion', date: '2025-12-22', status: 'Pending' },
  ]);

  // Map meetings to FullCalendar events
  const events: EventInput[] = meetings.map((m) => ({
    id: m.id.toString(),
    title: m.title + (m.status === 'Pending' ? ' (Pending)' : ''),
    start: m.date,
    allDay: true,
    color: m.status === 'Confirmed' ? '#22c55e' : '#f59e0b', // green for confirmed, yellow for pending
  }));

  // Add new meeting / availability
  const handleDateClick = (arg: any) =>{
    const title = prompt('Enter meeting title or "Availability" for free slot:');
    if (title) {
      const newMeeting: Meeting = {
        id: meetings.length + 1,
        title,
        date: arg.dateStr,
        status: title.toLowerCase() === 'availability' ? 'Confirmed' : 'Pending',
      };
      setMeetings([...meetings, newMeeting]);
    }
  };

  // Accept / Decline meeting from calendar click
  const handleEventClick = (arg: any) => {
    const meetingId = parseInt(arg.event.id);
    const meeting = meetings.find((m) => m.id === meetingId);
    if (meeting?.status === 'Pending') {
      const action = window.confirm(`Accept meeting "${meeting.title}"? Click Cancel to Decline.`);
      setMeetings(
        meetings.map((m) =>
          m.id === meetingId ? { ...m, status: action ? 'Confirmed' : 'Declined' } : m
        )
      );
    }
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Meetings</h1>
      <p className="text-gray-600">Manage your availability and meeting requests.</p>

      {/* Upcoming Meetings List */}
      <div>
        <h3 className="text-xl font-medium mb-2">Upcoming Meetings</h3>
        {meetings
          .filter((m) => m.status !== 'Declined')
          .map((meeting) => (
            <div key={meeting.id} className="p-4 border rounded-md mb-2">
              <strong>{meeting.title}</strong>
              <div>Date: {meeting.date}</div>
              <div>Status: {meeting.status}</div>
              {meeting.status === 'Pending' && (
                <div className="mt-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded"
                    onClick={() =>
                      setMeetings(
                        meetings.map((m) =>
                          m.id === meeting.id ? { ...m, status: 'Confirmed' } : m
                        )
                      )
                    }
                  >
                    Accept
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() =>
                      setMeetings(meetings.filter((m) => m.id !== meeting.id))
                    }
                  >
                    Decline
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Calendar */}
      <div>
        <h3 className="text-xl font-medium mb-2">Calendar</h3>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          height="auto"
        />
      </div>
    </div>
  );
}
