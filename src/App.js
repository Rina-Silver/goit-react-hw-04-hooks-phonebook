import React, { Component } from "react";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
// import Filter from "components/Filter";
import ContactList from "components/ContactList";

import "App.css";
import { number } from "prop-types";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };
  handleNumberChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className="Container">
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            handleNumberChange={this.handleNumberChange}
            handleNameChange={this.handleNameChange}
          />
        </Section>
        <Section title="Contacts">
          {/* <Filter /> */}
          <ContactList contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
