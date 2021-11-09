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

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div className="Container">
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
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
