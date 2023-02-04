/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';


type ResponseGH = {
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: string;
  company: string
};
export default function Home() {
  
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Pesquise por um perfil");
  const [bio, setBio] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [public_repos, setRepor] = useState("")
  const [company, setCompany] = useState("")
  const urlApi = "https://api.github.com/users/"

  const handleSearch = () => {
    axios.get<ResponseGH>(`${urlApi}${userName}`)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setAvatarURL(res.data.avatar_url);
        setRepor(res.data.public_repos)
        setCompany(res.data.company)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.containerApp}>
      <div className={styles.container}>
        <main>
          <div className={styles.form}>
            <h1>Pesquise um perfil no GitHub</h1>
            <input
              type="text"
              placeholder="Digite um username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className={styles.content}>
            <div>
              <img src={avatarURL} alt="Perfil" />
              <h1>{name}</h1>
              <p>{bio}</p>
              <p>Repositories: {public_repos}</p>
              <p>Empresa: {company}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
