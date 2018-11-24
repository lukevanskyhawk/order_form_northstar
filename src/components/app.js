import React, { Component } from 'react';
import Items from './Items.js';
import ItemFamily from './ItemFamily.js';

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
      <h1>{props.officeName} <b>Part Request</b></h1>
      {/* <h2>{props.numberOfItems}</h2> */}
    </header>
  )
}

function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) ||
      x.partNumber.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: itemData,
      term: "",
    }

    this.searchItem = this.searchItem.bind(this)


  }

  searchItem(event) {
    this.setState({ term: event.target.value })
  }


  render() {
    const { term } = this.state;
    return (
      <div>
        <form>
          <input type="text"
            placeholder="Search an Item"
            onChange={this.searchItem}
            value={term} />
        </form>
        {itemData.filter(searchingFor(term)).map((itemData) =>
          <Items
            title={itemData.title}
            partNumber={itemData.partNumber}
            key={itemData.id} />
        )}
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div>
      <Header
        officeName="Houston Office"
        numberOfItems={props.items.length} />

      <Filter />
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

        {/* <div>
          <ItemFamily />
        </div> */}
      </div>
    );
  }
}