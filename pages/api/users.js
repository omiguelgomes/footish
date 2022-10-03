import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getUsers(req, res);
        }

        // case 'POST': {
        //     return addPost(req, res);
        // }

        // case 'PUT': {
        //     return updatePost(req, res);
        // }

        // case 'DELETE': {
        //     return deletePost(req, res);
        // }
    }
}

async function getUsers(req,res){
    try {
        const client = await clientPromise;
        const db = client.db("test");
    
        const users = await db
            .collection("user")
            .find({})
            .limit(10)
            .toArray();

        return res.json({
            message: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}