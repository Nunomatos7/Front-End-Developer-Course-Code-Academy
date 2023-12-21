import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  return (
    <Router>
      <nav>
        <Link to="/contacts">Contacts</Link>
        <Link to="/appointments">Appointments</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsPage contacts={contacts} addContact={addContact} />} />
          <Route
            path="/contacts"
            element={<ContactsPage contacts={contacts} addContact={addContact} />}
          />
          <Route
            path="/appointments"
            element={
              <AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
                contacts={contacts}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
