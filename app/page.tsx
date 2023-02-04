
import { useFetch } from '@/hooks/useFetch'


type Repository = {
  full_name: string;
  description: string;
}



export default function Home() {
  const {data} = useFetch<Repository[]>('https://api.github.com/users/joycemagalhaess/repos');
  return (
    <>
    <ul>
      {data?.map(Response =>{
        return(
          <li key={Response.full_name}>
            <p>{Response.full_name}</p>
            <p>{Response.description}</p>

          </li>

        )
      })}
    </ul>
    </>

  )
}
