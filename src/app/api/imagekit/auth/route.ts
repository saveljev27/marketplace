import { auth } from '@/auth';
import ImageKit from 'imagekit';

export async function GET() {
  const session = await auth();
  if (!session) {
    return Response.json(false);
  }
  const ik = new ImageKit({
    urlEndpoint: process.env.NEXT_PUBLIC_IK_ENDPOINT as string,
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY as string,
    privateKey: process.env.IK_PRIVATE_KEY as string,
  });
  return Response.json(ik.getAuthenticationParameters());
}
