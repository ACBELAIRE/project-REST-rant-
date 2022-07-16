const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="/Images/Waffles Photo .jpg" alt= "Waffles Photo" />
                <div>
                   Photo by <a href="AUTHOR_LINK">Taylor Kiser</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <div>
                <img src="/Images/Pasta on Fork.jpg" alt= "Pasta wrapped into a upstanding fork Photo" />
                <div>
                   Photo by <a href="AUTHOR_LINK">Mae Mu</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <div>
                <img src="/Images/dessert-cake.jpg" alt= "Chocolate and Almond Nute cake on a plate " />
                <div>
                   Photo by <a href="AUTHOR_LINK">Binyoussif</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              

              <a href="/places">
                <button className="btn-primary">Places </button>
              </a>
              
        </main> 
      </Def>
    )
  }
 


module.exports = home