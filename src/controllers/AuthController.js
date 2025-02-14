import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";

export default class AuthController {
    async login(request,response){
        try {
            let { documento, password } = request.body;
           

            let user = (await User.findOne({ where: { documento: documento } })).toJSON();
            
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: '' });
            }

            // const token = jwt.sign({ documento: user.documento }, process.env.JWT_SECRET, {
            //     expiresIn: process.env.JWT_EXPIRES_IN || '1h',
            // });

            // console.log(token)
        
            // response.json({ token });
        }  catch (error) {
            response.status(500).json({ message: 'Error trying to login!' });
        }
    }

    async register(request,response){
        try {
            let { username, password, id_profiles, active } = request.body;
            
            let user = (await User.findOne({ where: { username: username } })).toJSON();

            if(!user){ return res.status(401).json({ message: '' }); }
            
            // await User.create({ username: username, password: password, id_profiles: id_profiles, active: active })

        }  catch (error) {
            response.status(500).json({ message: 'Error trying to register!' });
        }
    }
}