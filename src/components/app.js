import React, { Component } from 'react';
import Items from './item.js';

const itemData = [
  { title: 'Lyric Panel', productfamily: 'Panel', partNumber: '3123Z', id: '1' },
  { title: 'DBCam Trim', partNumber: '1122', id: '2' },
  { title: 'DBCam Round', partNumber: 'M135', id: '3' },
  { title: 'Lyric Glassbreak', partNumber: '0092', id: '4' },
  { title: 'Lyric Cell', partNumber: '420JK', id: '5' },
  { title: 'Lyric Smoke', partNumber: 'L0L', id: '6' },
  { title: 'Lyric Door', partNumber: 'L212120L', id: '7' }

]

const Header = (props) => {
  return (
    <header>
      <h1>{props.officeName}</h1>
      <h2>{props.numberOfItems}</h2>
    </header>
  )
}



const App = (props) => {
  return (
    <div>
      <Header
        officeName="Houston Office"
        numberOfItems={props.items.length} />

      {/* this is where the items will be */}

      {props.items.map(itemData =>
        <Items
          title={itemData.title}
          partNumber={itemData.partNumber}
          key={itemData.id} />
      )}
      <form>
        <button className="final_submit">Submit</button>
      </form>
    </div>
  )
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          <h1>NORTHSTAR <b>INVENTORY</b></h1>
        </div>

        <div className='home'>
          <App items={itemData} />
        </div>
      </div>
    );
  }
}