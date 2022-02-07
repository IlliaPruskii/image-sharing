import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const imagesUrl = [
  'https://avto.tatar/attachments/bcaab36f6631808ae3922a754ace642983fb7397/store/fill/1280/800/35e007d3641dff7cc578a831492246ef30368f1690a1d7ac3c8af2475579/Audi+A4+%D1%81%D0%B5%D0%B4%D0%B0%D0%BD.jpg',
  'https://a.d-cd.net/ZyBR8bvVXRgsfvz_9jy0qIUugX4-960.jpg',
  'https://i.infocar.ua/i/2/5872/115749/1024x.jpg'
]

const Images = ({ imgPath }: any) => {
  console.log(imgPath)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app 32" />
        <meta property="og:url" content="/images" />
        <meta property="og:image" content={imgPath} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Image
        </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.query
  return {
    props: {
      imgPath: imagesUrl[Number(id)]
    }
  }
}

export default  Images