const React = require('react');
const Def = require('./default')

function home () {
    return (
      <Def>
       <main>
    <h1>REST-RANT</h1>
    <a href="/places">Come take a look at our places</a>
    <div>
      <img src="https://placem.at/people?w=500" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
      </Def>
    )
  }
  
module.exports = home