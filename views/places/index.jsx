const React = require('react')
const Def = require('../default')

// GET places
//pass in mock data
//each child in a list should have a uniqie "key" prop <-- come back and do this
let places = [{
    name: 'H-Thai-ML',
    city: 'San Francisco',
    state: 'CA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/Images/Thai.jpg'
  }, {
    name: 'Back-End Dev-Etties',
    city: 'Chicago',
    state: 'IL',
    cuisines: 'Italian, Bakery',
    pic: '/Images/Italian.jpg'
  }]

function index (data) {
    let placesFormatted = places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}></img>
          <p className="text-center">
            Located in {place.city},{place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

module.exports = index