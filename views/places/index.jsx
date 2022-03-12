const React = require('react');
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
      return (
        <div className="col-sm-6">
          <h2>{places.name}</h2>
          <p className="text-center">{places.cuisine}</p>
          <img src={places.pic} alt={places.name}/>
          <p className="text-center">Located in {places.city}, {places.state}</p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to rant or rave about... I guess?</h1>
              <div>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }


module.exports = index