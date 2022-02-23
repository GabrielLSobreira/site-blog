import styles from './styles.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <a>
              <div>
                <Image
                  src={thumbImg}
                  alt="Post"
                  width={720}
                  height={410}
                  quality={100}
                />
                <strong>Criando meu primeiro aplicativo</strong>
                <time>14 JULHO 2021</time>
              </div>
              <p>
                Hoje vamos criar o controle de mostrar a senha no input, uma
                opção para os nossos formulários de cadastro e login.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
