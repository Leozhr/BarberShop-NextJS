import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import Search from './_components/search';
import BookingItem from '../_components/booking-item';
import BarbershopItem from './_components/barbershop-item';
import { database } from '../_lib/prisma';

export default async function Home() {
  const barbershop = await database.barbershop.findMany({});
  
  return (
    <div>
      <div className='px-5 pt-5'>
        <h1 className='text-xl'>Olá, Leonardo!</h1>
        <p className='text-sm'>        
          { format(new Date(), "EEEE, dd 'de' MMMM", {
          locale: ptBR,
          })}
        </p>

      </div>

      <div className='px-5 mt-6'>
        <Search />
      </div>

      <div className='px-5 mt-6'>
        <h2 className='text-xs uppercase text-gray-400 font-bold mb-3'>
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className='px-5 text-xs uppercase text-gray-400 font-bold mb-3'>
          Recomendados
        </h2>
        
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className='px-5 text-xs uppercase text-gray-400 font-bold mb-3'>
          Populares
        </h2>
        
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
