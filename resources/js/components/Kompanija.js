import React, { Component } from "react";
import ReactDOM from "react-dom";
import Automobil from "./Automobil";
import Forma from "./Forma";

export default class Kompanija extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kompanija: this.props.kompanija,
            prikazaniAutomobili: false,
            prikazForme: false
        };
        this.onDeleteAutomobil = this.onDeleteAutomobil.bind(this);
        this.prikazAutomobila = this.prikazAutomobila.bind(this);
        this.prikazForme = this.prikazForme.bind(this);
        this.displayAutomobiliKompanije = this.displayAutomobiliKompanije.bind(
            this
        );
    }

    prikazAutomobila() {
        this.setState({ prikazaniAutomobili: !this.state.prikazaniAutomobili });
    }
    prikazForme() {
        this.setState({ prikazForme: !this.state.prikazForme });
    }

    displayAutomobiliKompanije() {
        if (this.state.prikazaniAutomobili)
            return (
                <table className="table table-border table-dark">
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }} scope="col-2">
                                Model
                            </th>
                            <th style={{ width: "20%" }} scope="col-3">
                                Potrosnja
                            </th>
                            <th style={{ width: "20%" }} scope="col-2">
                                Snaga
                            </th>
                            <th scope="col-5">Akcije</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.state.prikazForme ? (
                            this.state.kompanija.automobili.map(a => {
                                return (
                                    <Automobil
                                        onDelete={this.onDeleteAutomobil}
                                        key={a.id}
                                        automobil={a}
                                    />
                                );
                            })
                        ) : (
                            <Forma
                                key={this.state.kompanija.id}
                                kompanijaID={this.state.kompanija.id}
                            />
                        )}
                    </tbody>
                </table>
            );
    }
    onDeleteAutomobil(id) {
        this.setState(stariState => {
            let automobili = stariState.kompanija.automobili.filter(
                a => a.id != id
            );
            let kompanija = stariState.kompanija;
            kompanija.broj_automobila--;
            kompanija.automobili = automobili;
            return { kompanija: kompanija };
        });
    }
    render() {
        return (
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <h5
                        style={{ cursor: "pointer" }}
                        onClick={this.prikazAutomobila}
                        onDoubleClick={this.prikazForme}
                    >
                        {" "}
                        {this.state.kompanija.naziv_kompanija +
                            " (" +
                            this.state.kompanija.broj_automobila +
                            ")"}
                    </h5>
                </div>

                <div className="row ">{this.displayAutomobiliKompanije()}</div>
            </div>
        );
    }
}

if (document.getElementById("kompanija")) {
    ReactDOM.render(<Kompanija />, document.getElementById("kompanija"));
}
