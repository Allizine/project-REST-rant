const React = require('react');
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
      return (
        <div className="col-sm-6">
          <h2>
          <a href={`/places/${index}`}>{places.name}</a>
          </h2>
          <p className="text-center">{places.cuisines}</p>
          <img className="text-center"src={places.pic} alt={places.name}/>
          <p className="text-center">Located in {places.city}, {places.state}</p>
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