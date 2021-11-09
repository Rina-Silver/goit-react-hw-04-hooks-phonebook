import React, { Component } from "react";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
// import Filter from "components/Filter";
import ContactList from "components/ContactList";

import "App.css";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="Container">
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
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
