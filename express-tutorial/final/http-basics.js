const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url
    //home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>homePage</h1>')
        res.end()
    }
    //about page
    else if (url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end
    }
    // 404
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h2>Page not found</h2>')
        res.end
    }
})