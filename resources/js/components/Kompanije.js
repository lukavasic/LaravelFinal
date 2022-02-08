import React, { Component } from "react";
import ReactDOM from "react-dom";
import Kompanija from "./Kompanija";
export default class Kompanije extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kompanije: []
        };
        this.ucitavanje();
    }

    ucitavanje() {
        axios.get("http://127.0.0.1:8000/kompanije/get").then(res => {
            const kompanije = res.data.kompanije;

            kompanije.map(async kompanija => {
                kompanija.automobili = await this.ucitavanjeAutomobila(
                    kompanija.id
                );
                this.setState({ kompanije: kompanije });
            });
        });
    }

    async ucitavanjeAutomobila(kompanija_id) {
        const response = await axios.get(
            "http://127.0.0.1:8000/kompanije/get-automobili?kompanija_id=" +
                kompanija_id
        );
        return response.data.automobili;
    }

    prikazKompanija() {
        {
            if (this.state.kompanije.length != 0)
                return this.state.kompanije.map(k => {
                    if (k != null)
                        return <Kompanija kompanija={k} key={k.id} />;
                });
            else return "Nema kompanija!";
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#4ccf6f" }} className="container">
                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <h4>Kompanije:</h4>
                    </div>
                </div>
                {this.prikazKompanija()}
            </div>
        );
    }
}

if (document.getElementById("kompanije")) {
    ReactDOM.render(<Kompanije />, document.getElementById("kompanije"));
}
