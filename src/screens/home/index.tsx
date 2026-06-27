import { Tabs } from "../../components/tabs"

const Home = () : React.ReactElement => {

  return(
    <div className="container">
      <div className="row">
        <p style={ { textAlign: "center", fontWeight: "bold", padding: "10px" } }>
          Integrantes: Joseph Segovia | Rojas Jefferson | Abraham Ccopa
        </p>
        <Tabs />
      </div>
    </div>
  )
}

export { Home }