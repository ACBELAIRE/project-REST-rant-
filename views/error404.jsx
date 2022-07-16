const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/Images/404 photo .jpg" alt= "Baby Girl holding large lollipop looking up at the sky" />
                <div>
                   Photo by <a href="AUTHOR_LINK">Douglas J S Moreira</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404