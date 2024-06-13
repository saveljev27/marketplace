'use server';

import { auth } from '@/auth';
import AdForm from '@/components/AdForm';
import { connect } from '@/libs/helpers';
import { ProductAdModel } from '@/models/ProductAd';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string };
};

export default async function EditPage(props: Props) {
  const id = props.params.id;
  const session = await auth();
  await connect();
  const findAd = await ProductAdModel.findById(id);
  const adDoc = JSON.parse(JSON.stringify(findAd));

  if (!adDoc) {
    return 'Page not found';
  }
  if (session?.user?.email !== adDoc.userEmail) {
    return 'Not your ad';
  }

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="page__title">Edit Ad</h1>
      <AdForm defaultFiles={adDoc.files} defaultText={adDoc} id={id} />
    </div>
  );
}
