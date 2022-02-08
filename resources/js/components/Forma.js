import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Forma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            snaga: "",
            model: "",
            potrosnja: "",
            kompanija_id: this.props.kompanijaID
        };
    }

    handleDodavanjeAutomobila() {
        axios
            .post("http://127.0.0.1:8000/automobil/dodavanje", {
                model: this.state.model,
                potrosnja: this.state.potrosnja,
                snaga: this.state.snaga,
                kompanija_id: this.state.kompanija_id
            })
            .then(res => {});
    }

    noviAutomobilModel(e) {
        this.setState({ model: e.target.value });
    }
    noviAutomobilPotrosnja(e) {
        this.setState({ potrosnja: e.target.value });
    }
    noviAutomobilSnaga(e) {
        this.setState({ snaga: e.target.value });
    }

    render() {
        return (
            <tr>
                <td>
                    <input
                        onChange={this.noviAutomobilModel.bind(this)}
                        placeholder="Model"
                    ></input>
                </td>
                <td>
                    <input
                        onChange={this.noviAutomobilPotrosnja.bind(this)}
                        placeholder="Potrosnja (10l)"
                    ></input>
                </td>
                <td>
                    <input
                        onChange={this.noviAutomobilSnaga.bind(this)}
                        placeholder="Snaga (150kW)"
                    ></input>
                </td>
                <td>
                    <button
                        onClick={this.handleDodavanjeAutomobila.bind(this)}
                        className="btn btn-success"
                    >
                        Dodaj automobil
                    </button>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("forma")) {
    ReactDOM.render(<Forma />, document.getElementById("forma"));
}
