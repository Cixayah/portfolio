import mongoose from 'mongoose';

// Conecta ao banco de dados (reutilize sua lógica de conexão)
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
};

// Define o modelo do nosso link
const urlSchema = new mongoose.Schema({
    fullUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 7200 }
});
const Url = mongoose.models.Url || mongoose.model('Url', urlSchema);

export async function getServerSideProps({ params, res }) {
    await connectDB();
    const { shortUrl } = params;

    try {
        const url = await Url.findOne({ shortUrl });

        if (url) {
            res.writeHead(307, { Location: url.fullUrl });
            res.end();
            return { props: {} };
        } else {
            return {
                notFound: true,
            };
        }
    } catch (error) {
        return {
            notFound: true,
        };
    }
}

// Retorne um componente nulo, pois não precisamos renderizar nada
export default function ShortUrlRedirect() {
    return null;
}