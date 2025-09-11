import mongoose from 'mongoose';
import shortid from 'shortid';

// Define o modelo do nosso link
const urlSchema = new mongoose.Schema({
    fullUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, default: () => shortid.generate().substring(0, 5) },
    createdAt: { type: Date, default: Date.now, expires: 7200 } // 7200 segundos = 2 horas
});
const Url = mongoose.models.Url || mongoose.model('Url', urlSchema);

// Conecta ao banco de dados (faça isso em um arquivo separado para não repetir)
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
};

export default async function handler(req, res) {
    // Configura os cabeçalhos de CORS para permitir requisições do seu servidor local
    res.setHeader('Access-Control-Allow-Origin', 'https://cixayah.github.io/');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Lida com a requisição preflight (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    await connectDB();

    if (req.method === 'POST') {
        const { fullUrl } = req.body;
        if (!fullUrl) {
            return res.status(400).json({ error: 'URL completa é necessária.' });
        }
        try {
            const newUrl = new Url({ fullUrl });
            await newUrl.save();
            res.status(200).json({ shortUrl: newUrl.shortUrl });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao encurtar o link.' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'OPTIONS']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}