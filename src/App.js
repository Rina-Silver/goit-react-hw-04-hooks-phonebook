import React, { Component } from "react";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

import "App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    const { name } = this.state;
    return (
      <div className="Container">
        <Section title="Phonebook">
          <ContactForm name={name} />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default App;
