import { isEmpty } from 'lodash';
import { getHashParams } from '../scripts/helpers';

it('should return null for hash params', () => {
    expect(isEmpty(getHashParams())).toBe(true);
});

it('should return a value for hash params', () => {
    const output = {"access_token": "helloworld", "expires_in": "69", "token_type": "Bearer"};
    global.window = Object.create(window);
    const url = "#access_token=helloworld&token_type=Bearer&expires_in=69";
    Object.defineProperty(window, "location", {
        value: {
            hash: url
        },
        writable: true
    });
    expect(getHashParams()).toStrictEqual(output);
});
