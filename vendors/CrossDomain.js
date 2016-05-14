    var Vendor = {};

/*Public methods declarations*/

    Vendor.init = init;
    Vendor.get = get;

module.exports = Vendor;

/*Public methods definitions*/

    function init() {return Vendor;}

    function get() {
        return allowMiddleware;
    }

    function allowMiddleware(request, response, next) {

        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Length, Accept, x-access-token');

        if(request.method === 'OPTIONS')
            response.sendStatus(200);
        else
            next();
    }