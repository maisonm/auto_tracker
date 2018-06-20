import React, { Component } from 'react';


//Assets 
import TempUserPhoto from '../views/assets/user.svg';
import AddIcon from '../views/assets/add.svg';
import Logo from '../views/assets/logo.svg';
import MoneyBag from '../views/assets/money-bag.svg';
import CarDash from '../views/assets/dashboard.svg'

//Views
import UserDashboardOverview from '../views/UserDashboardOverview';
import MileageLog from '../views/MileageLog';
import RecentExpenses from '../views/RecentExpenses';


class UserDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startingOdometer: [],
      endingOdometer: [],
      mileagePanelOpen: false,
      expensePanelOpen: false,
    }

    // this.startingOdoValue = this.startingOdoValue.bind(this);
    // this.endingOdoValue = this.endingOdoValue.bind(this);
    // this.odometerValuesSubmit = this.odometerValuesSubmit.bind(this);

  }

 componentDidMount() {

    let that = this;

    fetch('/mileage-data')
    .then(res => res.json())
      .then(data => {

        const state = this.state;
        const test = data.data.startingOdo;
        const test2 = data.data.endingOdo;

        if(!state.startingOdometer || !state.startingOdometer) {
          that.setState({ 
            startingOdometer: data.data.startingOdo,
            endingOdometer: data.data.endingOdo
          })
        }

        that.setState(prevState => ({
          startingOdometer: [...prevState.startingOdometer, test],
          endingOdometer: [...prevState.endingOdometer, test2]
        }))

        // console.log('returned data ', data.data)
        console.log(this.state.startingOdometer, this.state.endingOdometer);

      })
  }

  // startingOdoValue(event) {
  //   event.persist();

  //   this.state.startingOdometer === undefined ? this.setState({ startingOdometer: event.target.value })
  //   :
  //   this.setState(prevState => ({
  //       startingOdometer: [...prevState.startingOdometer, event.target.value]
  //   }))
  // }

  // endingOdoValue(event) {
  //   event.persist();
    
  //   this.setState(prevState => ({
  //       endingOdometer: [...prevState.endingOdometer, event.target.value]
  //   }))
  // }

  // odometerValuesSubmit(event) {
  //   alert('Sumbitted Value: ' +  this.state.startingOdometer + ' ' + this.state.endingOdometer);
  //   console.log(this.state.startingOdometer);
  //   event.preventDefault();
  // }

	render() {

  const mileagePanelClose = () => {
      this.setState({
        mileagePanelOpen: false
      })
    }

  const mileagePanelOpen = () => {
      this.setState({
        mileagePanelOpen: true
      })
  }

  const expensePanelClose = () => {
      this.setState({
        expensePanelOpen: false
      })
  }

  const expensePanelOpen = () => {
      this.setState({
        expensePanelOpen: true
      })
  }
    

    const addMileage = (
      <div>
        <div className='addMileageBtn' onClick={mileagePanelOpen}>
          <img src={CarDash} alt='add icon'/>
          <p>ADD MILEAGE</p>  
        </div>
          { this.state.mileagePanelOpen === true ? 
          <div className='addMileageInput visible'>
            <p onClick={mileagePanelClose}>&#10005; CLOSE</p>
            <form method='POST' action='/mileage-input'>
              <input name='startingOdo' placeholder='starting odometer'/>
              <input name='endingOdo' placeholder='ending odometer'/>
              <button type='submit'>ADD <img src={AddIcon} alt='add icon'/></button>
            </form>
          </div> : 
          <div className='addMileageInput slideUp visible'>
            <p className='fadeOut' onClick={mileagePanelClose}>&#10005; CLOSE</p> 
            <form method='POST' action='/mileage-input' className='leftSlide'>
              <input name='startingOdo' placeholder='starting odometer'/>
              <input name='endingOdo' placeholder='ending odometer'/>
              <button type='submit'>ADD <img src={AddIcon} alt='add icon'/></button>
            </form>
          </div>
          }    
      </div>

    )

    const addExpense = (
      <div>
        <div className='addExpenseBtn' onClick={expensePanelOpen}>
        <img src={MoneyBag} alt='add icon'/>
          <p>ADD EXPENSE</p>
        </div>
        { this.state.expensePanelOpen === true ? 
          <div className='addMileageInput visible'>
            <p onClick={expensePanelClose}>&#10005; CLOSE</p>
            <form>
               <input placeholder='total expense $'/>
                 <select name='category'>
                   <option value='Maintenance'>Maintenance</option>
                   <option value='Modification'>Modification</option>
                   <option value='Fuel'>Fuel</option>
                   <option value='Oil Changes'>Oil Changes</option>
                 </select>
                 <button type='submit'>ADD <img src={AddIcon} alt='add icon'/></button>
            </form>
          </div> : 
          <div className='addMileageInput slideUp visible'>
            <p className='fadeOut' onClick={expensePanelClose}>&#10005; CLOSE</p> 
            <form className='leftSlide'>
               <input placeholder='total expense $'/>
               <select name='category'>
                   <option value='Maintenance'>Maintenance</option>
                   <option value='Modification'>Modification</option>
                   <option value='Fuel'>Fuel</option>
                   <option value='Oil Changes'>Oil Changes</option>
                 </select>
                 <button type='submit'>ADD <img src={AddIcon} alt='add icon'/></button>
            </form>
          </div>
          }    
      </div>
    )

    const userSideBar = (
      <div className='userSideBar'>
        <div className='userPhoto'>
          <img src={TempUserPhoto} alt='user profile icon'/>
        </div>
        <div className='userName'>
          <p>mmoa_1</p>
        </div>
        <div className='addBtns'>
          {addMileage}
          {addExpense}
        </div>
        <div className='footerLogo'>
          <img src={Logo} alt='site logo'/>
          <p>Mileage &amp; Expense Tracker</p>
        </div>
      </div>
    )

    const userDashboardView = (
      <div className='userDashboard'>
        <UserDashboardOverview/>
        <RecentExpenses/>
        <MileageLog/>
      </div>
    )

		return (
      <div className='userView'>
        {userSideBar}
        {userDashboardView}
      </div>
		)
	}
}

export default UserDashboard;