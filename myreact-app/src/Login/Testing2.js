import React, {Component} from 'react';
import Userlogin from './Userlogin'

import { Route, Redirect } from 'react-router'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Table, Button  } from 'reactstrap';

class Testing2 extends Component {

  constructor(props) {
    super(props);
      this.state = {
        islog: true,
        wateruse: [
           {
               "_id": "5beb35d2bc9b8b3818288a96",
               "amount": 29,
               "year": 2013,
               "month": 11,
               "date": "2013-11-05T08:00:00.000Z"
           },
           {
               "_id": "5beb35d2bc9b8b3818288a96",
               "amount": 29,
               "year": 2013,
               "month": 11,
               "date": "2013-11-05T08:00:00.000Z"
           },
           {
               "_id": "5beb35d2bc9b8b3818288a96",
               "amount": 29,
               "year": 2013,
               "month": 11,
               "date": "2013-11-05T08:00:00.000Z"
           },
           {
               "_id": "5beb35d2bc9b8b3818288a96",
               "amount": 29,
               "year": 2013,
               "month": 11,
               "date": "2013-11-05T08:00:00.000Z"
           }
         ]
      }
    }

  render() {

    const {
    islog
    } = this.state;


    return (

      <div>
          <h1> THIS IS TESTING2222!!!!!!!!!!!!!!!!!!! </h1>
          <SideNav
              onSelect={(selected) => {
                  // Add your code here
              }}
          >
          <SideNav.Toggle />
<SideNav.Nav defaultSelected="home">
  <NavItem eventKey="jan">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          Janaury
      </NavText>
  </NavItem>
  <NavItem eventKey="feb">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          Febrary
      </NavText>
  </NavItem>
  <NavItem eventKey="mar">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          March
      </NavText>
  </NavItem>
  <NavItem eventKey="apr">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          April
      </NavText>
  </NavItem>
  <NavItem eventKey="may">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          May
      </NavText>
  </NavItem>
  <NavItem eventKey="june">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          June
      </NavText>
  </NavItem>
  <NavItem eventKey="july">
      <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
      </NavIcon>
      <NavText>
          July
      </NavText>
  </NavItem>
  <NavItem eventKey="charts">
  <NavIcon>
             <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
         </NavIcon>
      <NavText>
          August
      </NavText>
      <NavItem eventKey="charts/linechart">
      <NavIcon>
                 <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
             </NavIcon>
          <NavText>
              Line Chart
          </NavText>
      </NavItem>
      <NavItem eventKey="charts/barchart">
          <NavText>
              Bar Chart
          </NavText>
      </NavItem>
  </NavItem>
</SideNav.Nav>
</SideNav>


<Table hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Customer id</th>
        <th>Water Usage</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>

      {this.state.wateruse.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>{idx}</td>
                    <td>
                      {this.state.wateruse[idx]._id}
                    </td>
                    <td>
                      {this.state.wateruse[idx].amount}

                    </td>
                    <td>
                      {this.state.wateruse[idx].date}


                    </td>
                  </tr>
                ))}

    </tbody>
  </Table>

        <center><Button color="primary">Pay My Bill</Button>{' '} </center>

      </div>

    );
  }

}

export default Testing2;
