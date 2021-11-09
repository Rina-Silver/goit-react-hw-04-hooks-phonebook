import React, { Component } from "react";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
// import Filter from "components/Filter";
import ContactList from "components/ContactList";

import "App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div className="Container">
        <Section title="Phonebook">
          <ContactForm name={name} handleInputChange={this.handleInputChange} />
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
