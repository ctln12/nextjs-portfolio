import Layout from '../components/layout'
import DarkModeBtn from "../components/dark_mode_btn";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl font-bold">
        Welcome!
      </h1>
      <p>Toggle the theme</p>
      <DarkModeBtn />
    </Layout>
  )
}
