const React = require('react')
const Def = require('../default')

function show ({place, id}) {
    return (
        <Def>
          <main>
            <h1>{place.name}</h1>
            <a href={`/places/${id}/edit`} className="btn btn-warning">Edit ✏️</a>
            <form method="POST" action={`/places/${id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete 💩</button>
            </form>    
          </main>
        </Def>
    )
}

module.exports = show