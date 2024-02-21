import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import Search from './_components/search';

export default function Home() {
  return (
    <div>
      <div className='px-5 pt-5'>
        <h1 className='text-xl'>Olá, Leonardo!</h1>
        { format(new Date(), "EEEE, dd 'de' MMMM", {
          locale: ptBR,
        })}
      </div>

      <div className='px-5 mt-6'>
        <Search />
      </div>
      
    </div>
  );
}
