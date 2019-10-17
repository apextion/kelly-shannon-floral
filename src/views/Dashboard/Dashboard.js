import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardText,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';

class Dashboard extends Component {
  
  render() {

    const handleChange = () => {
      const elemTitle = document.getElementById('eventTitle');
      const elemLocation = document.getElementById('eventLocation');
      const elemDate = document.getElementById('eventDate');
      const elemOutput = document.getElementById('output');
  
      const outputText = `<a href=targetURL.html?eventTitle=${elemTitle.value}&eventLocation=${elemLocation.value}&eventDate=${elemDate.value}>
          LINK TEXT
        </a>`;

      elemOutput.value = outputText;      
    }

    const handleCopy = () => {
      const elemOutput = document.getElementById('output');
      elemOutput.select();
      document.execCommand('copy');
    }

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Kelly Shannon Floral - Event Link Creation tool</strong>
          </CardHeader>
          <CardBody>
            <CardText></CardText>
            <Form>
              <FormGroup>
                <Label for="eventTitle">Event Title</Label>
                <Input 
                  onChange={handleChange} 
                  type="text" 
                  name="eventTitle" 
                  id="eventTitle" 
                  placeholder="Mr. Chapman's Wake" />
              </FormGroup>

              <FormGroup>
                <Label for="eventLocation">Event Location</Label>
                <Input 
                  onChange={handleChange} 
                  type="text" 
                  name="eventLocation" 
                  id="eventLocation" 
                  placeholder="Newcomer Funeral Home - Orlando, Fl " />
              </FormGroup>

              <FormGroup>
                <Label for="eventDate">Date</Label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="eventDate"
                  id="eventDate"
                />
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>

            <FormGroup>
              <Label for="output">Link Code</Label>
              <Input
                type="textarea"
                name="output"
                id="output"
                readOnly
              />
            </FormGroup>

            <Button onClick={handleCopy} {...(false) ? {color: 'success'} : {color: 'primary'}}>
                Copy Link Code
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
