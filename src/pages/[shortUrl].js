import mongoose from 'mongoose';

// Define o modelo do nosso link
const urlSchema = new mongoose.Schema({
    fullUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 7200 }
});
const Url = mongoose.models.Url || mongoose.model('Url', urlSchema);

// Conecta ao banco de dados
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
};

export default async function handler(req, res) {
    await connectDB();
    const { shortUrl } = req.query;

    try {
        const url = await Url.findOne({ shortUrl });

        if (url) {
            res.redirect(307, url.fullUrl);
        } else {
            res.status(404).send('Link não encontrado ou expirado.');
        }
    } catch (error) {
        res.status(500).send('Erro no servidor.');
    }
}