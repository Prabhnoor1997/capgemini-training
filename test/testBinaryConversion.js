const assert=require('chai').assert;
const ui=require('../utility/util.js');
const s=new ui();
describe('BinaryConversion',function(){
    it('Function when called should return binary conversion of 15',function(){
        assert.equal('1111',s.binary(15));
    })
    it('Function when called should return binary conversion of 10',function(){
            
            assert.equal('1010',s.binary(10));
          
        });
        it('Function when called should return binary conversion of 9',function(){
           
            assert.equal('1001',s.binary(9));
        });
        it('Function when called should return binary conversion of 14',function(){
            
            assert.equal('1110',s.binary(14));
        });
    });
