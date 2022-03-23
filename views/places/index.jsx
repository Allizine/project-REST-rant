const React = require('react');
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
          </h2>
          <p className="text-center">{place.cuisines}</p>
          <img className="text-center"src={place.pic} alt={place.name}/>
          <p className="text-center">Located in {place.city}, {place.state}</p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to rant or rave about... I guess?</h1>
              <div className="row">
              {placesFormatted}
              <a href="places/new">
        <button className="btn-primary">New Place</button>
    </a>
              </div>
          </main>
      </Def>
  )
  }


module.exports = index
