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

// Google Analytics
import ReactGA from 'react-ga';

class Dashboard extends Component {
  componentDidMount(){
    ReactGA.initialize('UA-150279426-1');
    ReactGA.pageview('/dashboard');
  }

  render() {

    const clean = str => {
      return encodeURIComponent(str);
    }

    const handleChange = () => {
      const domainName = 'https://kellyshannonfloral.myshopify.com';
      const elemTitle = document.getElementById('funeralTitle');
      const elemLocation = document.getElementById('funeralLocation');
      const elemDate = document.getElementById('funeralDate');
      const elemOutput = document.getElementById('output');

      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      
      // Hard fix time to get off of midnight and trigger wrong date
      const dateStr = new Date(`${elemDate.value}T10:00:00`).toLocaleDateString("en-US", dateOptions);

      const query = `funeralTitle=${clean(elemTitle.value)}&funeralLocation=${clean(elemLocation.value)}&funeralDate=${dateStr}`;
      const outputText = `<a href='${domainName}/?${query}'>
          Send Flowers Now
        </a>`;

      elemOutput.value = outputText;      
    }

    const handleCopy = (e) => {
      const elemOutput = document.getElementById('output');
      elemOutput.select();
      document.execCommand('copy');

      ReactGA.event({
        category: 'User Triggered',
        label: 'Tool',
        action: 'Copied Link Code'
      });
      
      e.target.classList.remove('btn-primary');
      e.target.classList.add('btn-success');
      setTimeout(fadeToPrimary,3000);
    }

    const fadeToPrimary = () => {
      const targetElem = document.getElementById('copyBtn');
      targetElem.classList.remove('btn-success');
      targetElem.classList.add('btn-primary');
    }

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Kelly Shannon Floral - Funeral Link Creation tool</strong>
          </CardHeader>
          <CardBody>
            <CardText></CardText>
            <Form>
              <FormGroup>
                <Label for="funeralTitle">Funeral Title</Label>
                <Input 
                  onChange={handleChange} 
                  type="text" 
                  name="funeralTitle" 
                  id="funeralTitle" 
                  placeholder="Mr. Chapman's Wake" />
              </FormGroup>

              <FormGroup>
                <Label for="funeralLocation">Funeral Location</Label>
                <Input 
                  onChange={handleChange} 
                  type="text" 
                  name="funeralLocation" 
                  id="funeralLocation" 
                  placeholder="Newcomer Funeral Home - Orlando, Fl " />
              </FormGroup>

              <FormGroup>
                <Label for="funeralDate">Date</Label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="funeralDate"
                  id="funeralDate"
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

            <Button id='copyBtn' name='copyBtn' onClick={handleCopy} {...(false) ? {color: 'success'} : {color: 'primary'}}>
                Copy to Clipboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
