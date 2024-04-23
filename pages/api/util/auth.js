import {sign, verify} from 'jsonwebtoken';
import {compare} from 'bcrypt';



export function createJSONToken(email) {
    return sign({email}, process.env.SECRET, {expiresIn: '1h'});
}

export function validateJSONToken(token) {
    return verify(token, process.env.SECRET);
}


export function comparePassword(password, hash) {
    return compare(password, hash)
}
