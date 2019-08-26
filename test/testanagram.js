const assert=require('chai').assert;
const ui=require('../utility/util.js');
const s=new ui();


describe('test for anagram',function(){
    it('lets test mukul and lukum',function(){
        assert.equal("The string should contain something",s.anagram("lukum",""));
    });
    it('lets test mukul and lukum',function(){
        assert.equal("The string should contain something",s.anagram("","lukum"));
    });
    it('lets test mukul and lukum',function(){
        assert.equal("The input must be a string",s.anagram("lukum",123));
    });
    it('lets test mukul and lukum',function(){
        assert.equal("The input must be a string",s.anagram(123,""));
    });
});