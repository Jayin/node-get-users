var getUser = require('./')
// var should = require

it('should have tow or more users', function(){
    var len = getUser().length
    len.should.be.above(1)
})

it('should contain Guest', function(){
    var users = getUser()
    users.should.containEql('Guest')
})
