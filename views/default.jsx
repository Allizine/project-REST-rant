const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Rest-rant | 🍽️ Leave comments on your favorite restaurants!</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                     <li> <a href="/places">Places</a></li>
                     <li><a href="/places/new">Add New Place</a></li></ul>
            </nav> 
                {html.children}
            </body>
            <footer className="footer">Copyright © Rest-Rant 2022</footer>
        </html>
    )
}

module.exports = Def;