import React, { useEffect } from 'react'
import './App.css';
import Header from './components/design/nav-bar/Header';
// import Card from './components/Card/Card';
import DashBoard from './components/design/dashBoard/DashBoard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
// import Loading from './components/Loading/Loading';
import Loader from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : <Loader />
}

export default App