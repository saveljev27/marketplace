import { faHouse, faTv } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function NewAddPage() {
  return (
    <div className="mt-16 flex gap-10 justify-center">
      <Link
        href="/new/product"
        className="border border-blue-500  flex flex-col  gap-6 py-3 px-6  items-center text-center max-w-60 rounded-md"
      >
        <FontAwesomeIcon icon={faTv} className="h-10 text-blue-500" />
        <span className="font-bold">Tovar na prodazu</span>
        <span className="text-sm">
          Создайте объявление для одного или нескольких товаров.
        </span>
      </Link>
      <Link
        href="/new/vehicle"
        className="border border-blue-500 flex flex-col  gap-6 py-3 px-6  items-center text-center max-w-60 rounded-md"
      >
        <FontAwesomeIcon icon={faCar} className="h-10 text-blue-500" />
        <span className="font-bold">Masina na prodazu</span>
        <span className="text-sm">
          Продажа легкового, грузового автомобиля или другого типа транспортного
          средства.
        </span>
      </Link>
      <Link
        href="/new/rental"
        className="border border-blue-500 flex flex-col  gap-6 py-3 px-6  items-center text-center max-w-60 rounded-md"
      >
        <FontAwesomeIcon icon={faHouse} className="h-10 text-blue-500" />
        <span className="font-bold">Nedvizimostj na prodazu</span>
        <span className="text-sm">
          Создайте объявление о продаже или аренде жилья.
        </span>
      </Link>
    </div>
  );
}
