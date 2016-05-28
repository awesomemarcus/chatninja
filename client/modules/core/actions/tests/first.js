const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';


describe('core.actions.first', () => {

  it("should tell always 'true'", function(){
    expect(true).to.be.equal(true);
  });

});
