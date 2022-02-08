import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Automobil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            automobil: this.props.automobil,
            izmenaSnage: false,
            novaSnaga: ""
        };
    }

    pozoviFormuZaIzmenu() {
        this.setState({ izmenaSnage: !this.state.izmenaSnage });
    }
    formaIzmena() {
        if (this.state.izmenaSnage) {
            return (
                <input
                    placeholder="Nova snaga"
                    onChange={this.izmenaSnage.bind(this)}
                ></input>
            );
        }
    }

    izmenaSnage(e) {
        this.setState({ novaSnaga: e.target.value });
    }

    handleIzmenaSnage() {
        axios
            .put("http://127.0.0.1:8000/automobil/izmena", {
                id: this.state.automobil.id,
                snaga: this.state.novaSnaga
            })
            .then(res => {
                if (res.data.message === true) {
                    let automobil = this.state.automobil;
                    automobil.snaga = this.state.novaSnaga;
                    this.setState({ automobil });
                }
            });
    }

    obrisiAutomobil() {
        axios
            .delete(
                "http://127.0.0.1:8000/automobil/brisanje?id=" +
                    this.state.automobil.id
            )
            .then(res => {
                if (res.data.message === true) {
                    this.props.onDelete(this.state.automobil.id);
                }
            });
    }

    render() {
        return (
            <tr>
                <td>{this.state.automobil.model}</td>
                <td>{this.state.automobil.potrosnja}</td>
                <td>{this.state.automobil.snaga}</td>
                <td>
                    <button
                        onDoubleClick={this.obrisiAutomobil.bind(this)}
                        className="btn btn-warning"
                    >
                        Brisanje
                    </button>
                    <button
                        onDoubleClick={this.handleIzmenaSnage.bind(this)}
                        onClick={this.pozoviFormuZaIzmenu.bind(this)}
                        className="btn btn-primary"
                    >
                        Izmeni snagu
                    </button>
                    {this.formaIzmena()}
                </td>
            </tr>
        );
    }
}

if (document.getElementById("automobil")) {
    ReactDOM.render(<Automobil />, document.getElementById("automobil"));
}
