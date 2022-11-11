import React from 'react';

export default class EditDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: null,
      Id: null,
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: null,
      date: null,
      venueName: '',
      notesDetails: ''
    };
  }

  // componentDidMount(){
  //   fetch ()
  // }
}
