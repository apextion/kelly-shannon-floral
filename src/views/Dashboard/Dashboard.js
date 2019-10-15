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

import {CopyToClipboard} from 'react-copy-to-clipboard';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.setState({
      copied: false
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Event Link Creation tool
          </CardHeader>
          <CardBody>
            <CardText></CardText>
            <Form>
              <FormGroup>
                <Label for="eventTitle">Event Title</Label>
                <Input type="text" name="eventTitle" id="eventTitle" placeholder="Mr. Chapman's Wake" />
              </FormGroup>

              <FormGroup>
                <Label for="eventLocation">Event Location</Label>
                <Input type="text" name="eventLocation" id="eventLocation" placeholder="Newcomer Funeral Home - Orlando, Fl " />
              </FormGroup>

              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <CopyToClipboard 
              text="Some Static Text to Copy"
              onCopy={() => this.setState({copied: true})}>
              <Button {...(false) ? {color: 'success'} : {color: 'primary'}}>
                  Copy Link
              </Button>
            </CopyToClipboard>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
