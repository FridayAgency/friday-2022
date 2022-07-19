import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { path, token } = req.query;
  console.log(path);

  if ((token as string) !== process.env.NEXT_TOKEN) {
    return res.status(401).json({ message: 'Invalid Token' });
  } else if ((path as string).length === 0) {
    return res.status(401).json({ message: 'Path is required' });
  }

  try {
    await res.unstable_revalidate(path as string);
  } catch (err) {
    return res.status(500).send(err.message);
  }

  return res.status(200).json({
    revalidated: true,
    message: `Path ${path} revalidated successfully`,
  });
};

export default handler;
