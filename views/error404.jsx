const React = require('react');
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main className="text center">
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>

	    <div>
	    <img src="https://placekitten.com/g/200/300" alt="Cat Picture :)"/>
	    </div>
          </main>
      </Def>
    )
  }

module.exports = error404
