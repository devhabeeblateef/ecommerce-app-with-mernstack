import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {

    const token = jwt.sign( {userId}, process.env.JWT_SECRET, {
        expiresIn: '20s'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 20000
    })
}

export default generateToken