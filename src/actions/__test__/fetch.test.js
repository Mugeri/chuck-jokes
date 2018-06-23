import config from '../../config';
import { fetchContentRequest } from '../fetch';

describe('Fetch actions', () => {
  it('should create a fetch request action', () => {
    expect(fetchContentRequest()).toEqual({
      type: 'FETCH_CONTENT_REQUEST',
    });
  });
})
