const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places"> Places</a>
                        </li>
                        <li>
                            <a href="/places/new"> Add Place </a>
                        </li>
                    </ul>
                </nav>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
