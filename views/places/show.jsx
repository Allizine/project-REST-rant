const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    return (
        <Def>
  <main>
            <h1>{place.name}</h1
   <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        ...
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
 </div>
            <a href={`/places/${id}/edit`} className="btn btn-warning">Edit ✏️</a>
            <form method="POST" action={`/places/${id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete 💩</button>
            </form>    
          </main>
        </Def>
    );
}

module.exports = show;


