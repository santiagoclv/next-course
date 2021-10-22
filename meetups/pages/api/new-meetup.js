function handler(req, res) {
    if (req.method === 'POST') {
        const { title, image, address, description } = req.body;

        console.log({ title, image, address, description });

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;