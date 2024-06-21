const { userameMongo, passwordMongo, dbnameMongo } = process.env;
export const connectionStr = `mongodb+srv://${userameMongo}:${passwordMongo}@cluster0.u8catqt.mongodb.net/${dbnameMongo}?retryWrites=true&w=majority&appName=Cluster0`;
