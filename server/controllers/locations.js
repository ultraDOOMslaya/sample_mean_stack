/* Get 'home page' */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find a place to work with wifi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1ps',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1ps',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }]
    });
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {title: 'Add review' });
};





