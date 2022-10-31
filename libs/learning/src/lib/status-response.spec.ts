import { Result } from './status-response';
describe('using the status response thing', () => {
  it('an example', () => {
    function doIt(x: number): Result<number> {
      if (x % 2 === 0) {
        return {
          status: 'OK',
          value: x * 2,
        };
      } else {
        return {
          status: 'FAIL',
          message: 'Could not do that work',
        };
      }
    }

    const response = doIt(2);

    if (response.status === 'OK') {
      expect(response.value).toBe(4);
    } else {
      fail();
    }

    const response2 = doIt(3);

    if (response2.status === 'OK') {
      fail();
    } else {
      expect(response2.message).toBe('Could not do that work');
    }
  });
});
