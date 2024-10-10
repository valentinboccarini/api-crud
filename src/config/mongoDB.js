import { connect }from "mongoose"
async function main() {
    await connect(process.env.MONGO_URI)
}
main()
.then(()=> console.log("MongoDB connected on local environmet"))
.catch(err=> console.log(`Database connection error: ${err.message}`))